"use client";

import Link from "next/link";
import {
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Heart,
} from "lucide-react";
import { NAV_LINKS, CLINIC_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Clinic Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading tracking-tight">NOOR</span>
                <span className="text-lg font-light font-heading tracking-tight text-secondary-light ml-1">CLINIC</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {CLINIC_INFO.description}
            </p>
            <div className="flex items-center gap-2 text-secondary-light text-sm font-medium">
              <Heart className="w-4 h-4 text-red-400" />
              Caring for you since 2009
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-secondary rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-secondary-light text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-secondary rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-secondary-light text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <div className="w-1.5 h-5 bg-secondary rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-secondary-light transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CLINIC_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-secondary-light transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CLINIC_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{CLINIC_INFO.address}, {CLINIC_INFO.city}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Mon - Sat: 9 AM - 9 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © {currentYear} {CLINIC_INFO.name}. All rights reserved.
            </p>
            <button
              onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-white/40 hover:text-secondary-light text-sm transition-colors group cursor-pointer"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
