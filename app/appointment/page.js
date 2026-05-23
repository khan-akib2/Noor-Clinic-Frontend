"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, Calendar, Clock, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import PageHero from "@/components/sections/PageHero";
import { TIME_SLOTS, CLINIC_INFO } from "@/lib/constants";
import { validateAppointmentForm } from "@/lib/validators";

const initialForm = { fullName: "", phone: "", email: "", age: "", gender: "", date: "", timeSlot: "", symptoms: "" };

function FormField({ icon: Icon, label, name, error, required, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-primary mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />}
        <input id={name} name={name} {...props}
          className={`w-full ${Icon ? "pl-11" : "pl-4"} pr-4 py-3 rounded-xl border bg-white text-text-dark text-sm transition-all duration-300 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${error ? "border-red-400" : "border-gray-200 hover:border-gray-300"}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
    </div>
  );
}

export default function AppointmentPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: ve } = validateAppointmentForm(form);
    if (!isValid) { setErrors(ve); toast.error("Please fix the errors."); return; }
    if (cooldown) { toast.error("Please wait before submitting again."); return; }

    setLoading(true);
    setErrors({});
    try {
      const res = await fetch("/api/appointment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
        toast.success("Appointment booked successfully!", { duration: 6000 });
        setCooldown(true);
        setTimeout(() => setCooldown(false), 30000);
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch { toast.error("Network error. Please try again."); }
    finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <>
        <PageHero subtitle="Appointment" title="Book an Appointment" description="Schedule your visit with Dr. Fazal." />
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-primary mb-3">Appointment Booked!</h2>
              <p className="text-text-muted mb-6">We have received your request and will contact you shortly to confirm.</p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300">
                Book Another
              </button>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero subtitle="Appointment" title="Book an Appointment" description="Schedule your visit with Dr. Fazal at Noor Clinic." />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 lg:p-8 text-white sticky top-28">
                <h3 className="text-xl font-bold font-heading mb-6">Appointment Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary-light flex-shrink-0 mt-0.5" />
                    <div><p className="font-semibold text-sm">Working Hours</p><p className="text-white/60 text-sm">Mon-Sat: 9AM-1PM, 5PM-9PM</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary-light flex-shrink-0 mt-0.5" />
                    <div><p className="font-semibold text-sm">Phone</p><a href={`tel:${CLINIC_INFO.phone}`} className="text-secondary-light text-sm hover:underline">{CLINIC_INFO.phone}</a></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary-light flex-shrink-0 mt-0.5" />
                    <div><p className="font-semibold text-sm">Email</p><p className="text-white/60 text-sm">{CLINIC_INFO.email}</p></div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15">
                  <p className="text-white/60 text-xs leading-relaxed">We will confirm your appointment within 2 hours during working hours.</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField icon={User} label="Full Name" name="fullName" type="text" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} error={errors.fullName} required />
                  <FormField icon={Phone} label="Phone Number" name="phone" type="tel" placeholder="+91 XXXX XXX XXX" value={form.phone} onChange={handleChange} error={errors.phone} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField icon={Mail} label="Email Address" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} error={errors.email} required />
                  <FormField icon={User} label="Age" name="age" type="number" placeholder="Your age" min="1" max="120" value={form.age} onChange={handleChange} error={errors.age} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Gender <span className="text-red-500">*</span></label>
                    <select name="gender" value={form.gender} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border bg-white text-text-dark text-sm transition-all duration-300 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${errors.gender ? "border-red-400" : "border-gray-200 hover:border-gray-300"}`}>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.gender}</p>}
                  </div>
                  <FormField icon={Calendar} label="Appointment Date" name="date" type="date" min={today} value={form.date} onChange={handleChange} error={errors.date} required />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Preferred Time <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button key={slot} type="button" onClick={() => { setForm((p) => ({ ...p, timeSlot: slot })); if (errors.timeSlot) setErrors((p) => ({ ...p, timeSlot: "" })); }}
                        className={`px-2 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${form.timeSlot === slot ? "bg-secondary text-white shadow-md shadow-secondary/25" : "bg-surface text-text-muted hover:bg-secondary/10 hover:text-secondary border border-gray-100"}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.timeSlot && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.timeSlot}</p>}
                </div>

                {/* Symptoms */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Symptoms / Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-text-muted" />
                    <textarea name="symptoms" value={form.symptoms} onChange={handleChange} rows={4} placeholder="Describe your symptoms or reason for visit..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white text-text-dark text-sm transition-all duration-300 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none resize-none" />
                  </div>
                </div>

                <button type="submit" disabled={loading || cooldown}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-bold rounded-xl shadow-xl shadow-secondary/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base">
                  {loading ? <><Loader2 className="w-5 h-5 animate-spin" />Booking...</> : cooldown ? "Please wait..." : <><Calendar className="w-5 h-5" />Book Appointment</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
