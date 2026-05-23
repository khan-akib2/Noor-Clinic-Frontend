"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Stethoscope } from "lucide-react";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/5 py-2"
            : "bg-transparent py-4"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Noor Clinic Home">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isScrolled
                  ? "bg-gradient-to-br from-secondary to-accent shadow-md"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}>
                <Stethoscope className={`w-5 h-5 ${isScrolled ? "text-white" : "text-white"}`} />
              </div>
              <div>
                <span className={`text-lg font-bold font-heading tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}>
                  NOOR
                </span>
                <span className={`text-lg font-light font-heading tracking-tight transition-colors duration-300 ml-1 ${
                  isScrolled ? "text-secondary" : "text-secondary-light"
                }`}>
                  CLINIC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? "text-secondary bg-secondary/10"
                          : "text-white bg-white/15"
                        : isScrolled
                          ? "text-text-muted hover:text-primary hover:bg-surface"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-primary hover:bg-surface"
                    : "text-white/90 hover:bg-white/10"
                }`}
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{CLINIC_INFO.phone}</span>
              </a>
              <Link
                href="/appointment"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary to-secondary-dark text-white text-sm font-semibold rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-primary hover:bg-surface"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary font-heading">NOOR</span>
                      <span className="text-lg font-light text-secondary font-heading ml-1">CLINIC</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-xl text-text-muted hover:bg-surface transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                            isActive
                              ? "text-secondary bg-secondary/10"
                              : "text-text-dark hover:text-primary hover:bg-surface"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <Link
                    href="/appointment"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-text-muted mb-2">Need help?</p>
                  <p className="text-sm font-medium text-primary">{CLINIC_INFO.phone}</p>
                  <p className="text-sm text-text-muted mt-1">{CLINIC_INFO.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
