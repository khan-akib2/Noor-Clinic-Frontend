/**
 * Form validation utilities for Noor Clinic
 */

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
  // Allow formats: +91XXXXXXXXXX, 91XXXXXXXXXX, XXXXXXXXXX, XXX-XXX-XXXX, etc.
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return /^\+?\d{10,13}$/.test(cleaned);
}

export function validateAppointmentForm(data) {
  const errors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters)";
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.age || isNaN(data.age) || data.age < 1 || data.age > 120) {
    errors.age = "Please enter a valid age (1-120)";
  }

  if (!data.gender) {
    errors.gender = "Please select your gender";
  }

  if (!data.date) {
    errors.date = "Please select an appointment date";
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = "Appointment date cannot be in the past";
    }
  }

  if (!data.timeSlot) {
    errors.timeSlot = "Please select a time slot";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name";
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters)";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
