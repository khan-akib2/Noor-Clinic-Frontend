import { NextResponse } from "next/server";

// In-memory rate limiter (simple)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowData = rateLimitMap.get(ip) || { count: 0, start: now };
  if (now - windowData.start > RATE_LIMIT_WINDOW) {
    windowData.count = 0;
    windowData.start = now;
  }
  windowData.count++;
  rateLimitMap.set(ip, windowData);
  return windowData.count <= MAX_REQUESTS;
}

export async function POST(req) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { fullName, phone, email, age, gender, date, timeSlot, symptoms } = body;

    // Server-side validation
    if (!fullName || !phone || !email || !age || !gender || !date || !timeSlot) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Build email HTML
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0A2540, #1A3A5C); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🏥 New Appointment Booking</h1>
          <p style="color: #5EEAD4; margin: 8px 0 0; font-size: 14px;">Noor Clinic — Dr. Fazal</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 140px;">Patient Name</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${fullName}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${phone}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${email}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Age</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${age}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Gender</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px; text-transform: capitalize;">${gender}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Date</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${date}</td></tr>
            <tr><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Time</td><td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0F172A; font-size: 14px;">${timeSlot}</td></tr>
            <tr><td style="padding: 12px 16px; color: #64748b; font-size: 14px; vertical-align: top;">Symptoms</td><td style="padding: 12px 16px; font-weight: 600; color: #0F172A; font-size: 14px;">${symptoms || "Not specified"}</td></tr>
          </table>
        </div>
        <div style="background: #f1f5f9; padding: 20px 32px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was sent from the Noor Clinic website appointment form.</p>
        </div>
      </div>
    `;

    // Send email via Brevo API
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "noreply@noorclinic.com";
    const receiverEmail = process.env.BREVO_RECEIVER_EMAIL || "f.rahmanazmi@gmail.com";

    if (!apiKey) {
      // If no API key, log the appointment and return success (dev mode)
      console.log("=== NEW APPOINTMENT (No Brevo API key configured) ===");
      console.log({ fullName, phone, email, age, gender, date, timeSlot, symptoms });
      console.log("=====================================================");
      return NextResponse.json({
        message: "Appointment booked successfully! (Email not sent - API key not configured)",
        success: true,
      });
    }

    // Use Brevo HTTP API directly (avoids SDK compatibility issues)
    // 1. Send notification email to the Doctor
    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Noor Clinic", email: senderEmail },
        to: [{ email: receiverEmail, name: "Dr. Fazal" }],
        subject: "New Appointment Booking - Noor Clinic",
        htmlContent,
      }),
    });

    if (!brevoRes.ok) {
      const errData = await brevoRes.json();
      console.error("Brevo API error (Doctor alert):", errData);
      return NextResponse.json(
        { error: "Failed to process appointment. Please call us directly." },
        { status: 500 }
      );
    }

    // 2. Send automatic confirmation receipt email to the Patient
    const patientHtmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #0A2540, #1A3A5C); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🏥 Booking Request Received</h1>
          <p style="color: #5EEAD4; margin: 8px 0 0; font-size: 14px;">Noor Clinic — Dr. Fazal</p>
        </div>
        <div style="padding: 32px; color: #334155; line-height: 1.6;">
          <h2 style="color: #0F172A; margin-top: 0; font-size: 20px;">Dear ${fullName},</h2>
          <p>Thank you for choosing Noor Clinic. We have successfully received your appointment request for the following slot:</p>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #0d9488;">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #475569;"><strong>📅 Date:</strong> ${date}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #475569;"><strong>⏰ Preferred Time:</strong> ${timeSlot}</p>
            <p style="margin: 0; font-size: 14px; color: #475569;"><strong>🩺 Physician:</strong> Dr. Fazal</p>
          </div>
          
          <p style="font-weight: 600; color: #0F172A; margin-top: 24px;">What happens next?</p>
          <p style="margin-top: 8px;">Our clinic coordination team will review your request and contact you at your phone number <strong>${phone}</strong> within 2 hours during clinic hours to confirm your reservation and provide any pre-consultation instructions.</p>
          
          <p style="margin-top: 32px; border-t: 1px solid #e2e8f0; padding-top: 24px; font-size: 13px; color: #64748b;">
            Need to reschedule or have questions? Call us directly at <a href="tel:+917709498002" style="color: #0d9488; text-decoration: none; font-weight: 600;">+91 7709 498 002</a>.
          </p>
        </div>
        <div style="background: #f1f5f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">Shop No. 05, Khan Compound, near Hira Residency, Mumbra, Thane, Maharashtra 400612</p>
        </div>
      </div>
    `;

    try {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Noor Clinic", email: senderEmail },
          to: [{ email: email, name: fullName }],
          subject: "We've received your appointment request - Noor Clinic",
          htmlContent: patientHtmlContent,
        }),
      });
    } catch (patientEmailErr) {
      // Log error but don't fail the entire response, as the doctor alert was already sent successfully!
      console.error("Failed to send patient confirmation email:", patientEmailErr);
    }

    return NextResponse.json({
      message: "Appointment booked successfully! We'll contact you soon.",
      success: true,
    });
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
