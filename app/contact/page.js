"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLINIC_INFO, WORKING_HOURS } from "@/lib/constants";
import { validateContactForm } from "@/lib/validators";

const contactInfo = [
  { icon: Phone, title: "Phone", detail: CLINIC_INFO.phone, href: `tel:${CLINIC_INFO.phone}`, action: "Call Now", color: "from-secondary to-teal-600" },
  { icon: Mail, title: "Email", detail: CLINIC_INFO.email, href: `mailto:${CLINIC_INFO.email}`, action: "Send Email", color: "from-accent to-blue-600" },
  { icon: MapPin, title: "Address", detail: `${CLINIC_INFO.address}, ${CLINIC_INFO.city}`, href: "#clinic-map", action: "Get Directions", color: "from-violet-500 to-purple-600" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: ve } = validateContactForm(form);
    if (!isValid) { setErrors(ve); return; }
    setLoading(true);
    // Simulate sending (contact form could also use Brevo)
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <>
      <PageHero subtitle="Get in Touch" title="Contact Us" description="We'd love to hear from you. Reach out to us through any of the channels below." />

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a key={i} href={item.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
                  <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold font-heading text-primary text-lg mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm mb-4">{item.detail}</p>
                    <span className="text-secondary font-semibold text-sm">{item.action} →</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-xl shadow-green-500/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg">
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form + Hours */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading subtitle="Send a Message" title="Contact Form" center={false} className="mb-8" />
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Your Name <span className="text-red-500">*</span></label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Full name"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-text-dark text-sm transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${errors.name ? "border-red-400" : "border-gray-200 hover:border-gray-300"}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-semibold text-primary mb-2">Email <span className="text-red-500">*</span></label>
                    <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-text-dark text-sm transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${errors.email ? "border-red-400" : "border-gray-200 hover:border-gray-300"}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-sm font-semibold text-primary mb-2">Phone (Optional)</label>
                  <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-white text-text-dark text-sm transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-text-dark text-sm transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none resize-none ${errors.message ? "border-red-400" : "border-gray-200 hover:border-gray-300"}`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                </div>
                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-bold rounded-xl shadow-xl shadow-secondary/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? <><Loader2 className="w-5 h-5 animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send Message</>}
                </button>
              </form>
            </motion.div>

            {/* Opening Hours */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading subtitle="Visit Hours" title="Opening Hours" center={false} className="mb-8" />
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {WORKING_HOURS.map((item, i) => (
                  <div key={item.day} className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-2 sm:gap-0 ${i < WORKING_HOURS.length - 1 ? "border-b border-gray-50" : ""}`}>
                    <span className="font-medium text-sm text-primary">{item.day}</span>
                    <div className="flex items-center gap-2 text-sm text-text-muted sm:text-right">
                      <Clock className="w-4 h-4 hidden sm:block" />
                      <span>{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Click to call */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${CLINIC_INFO.phone}`} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-28 bg-white" id="clinic-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <iframe src={CLINIC_INFO.mapEmbedUrl} width="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Noor Clinic Location" className="w-full h-[250px] sm:h-[450px]" />
          </div>
        </div>
      </section>
    </>
  );
}
