"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Clock, Award, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden" id="hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

        {/* Dot pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30" />

        {/* Floating medical icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <HeartPulse className="w-8 h-8 text-secondary-light/60" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[25%] hidden lg:block"
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <Shield className="w-6 h-6 text-accent/60" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-48 left-[8%] hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <Award className="w-7 h-7 text-secondary-light/50" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Trusted Healthcare Since 2009
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white leading-tight mb-6"
            >
              Your Health,{" "}
              <span className="gradient-text">Our Priority</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg lg:text-xl leading-relaxed mb-4 max-w-lg"
            >
              {CLINIC_INFO.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-secondary-light font-semibold text-base lg:text-lg mb-8"
            >
              — {CLINIC_INFO.doctor}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-xl shadow-secondary/25 hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105 active:scale-95 transition-all duration-300 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-primary active:scale-95 transition-all duration-300 text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { icon: Clock, text: "Same Day Appointments" },
                { icon: Shield, text: "Trusted by 5000+ Patients" },
                { icon: Award, text: "15+ Years Experience" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                  <badge.icon className="w-4 h-4 text-secondary-light" />
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Doctor Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main doctor card */}
              <div className="relative w-80 h-[420px] rounded-3xl bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Doctor illustration area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-44 h-56 rounded-2xl bg-white flex items-center justify-center mb-6 border-4 border-white/20 overflow-hidden relative shadow-lg">
                    <Image
                      src="/doctor.png"
                      alt={CLINIC_INFO.doctor}
                      width={176}
                      height={224}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold font-heading mb-1">{CLINIC_INFO.doctor}</h3>
                  <p className="text-secondary-light text-sm font-medium mb-1">BUMS (MUHS Nashik)</p>
                  <p className="text-white/50 text-sm">General Physician & Unani Consultant</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/10 border border-white/10">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">4.9</span>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Available</p>
                    <p className="text-sm font-bold text-primary">Today</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Patients</p>
                    <p className="text-sm font-bold text-primary">5,000+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
