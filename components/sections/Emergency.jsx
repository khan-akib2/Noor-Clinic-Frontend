"use client";

import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Emergency() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 relative overflow-hidden" id="emergency">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Emergency Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-3">
              Need Emergency Help?
            </h2>
            <p className="text-white/80 text-lg max-w-lg">
              Don't wait — contact us immediately for urgent medical assistance. We're here when you need us most.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              Call Now
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-sm text-white border-2 border-white/30 font-bold rounded-xl hover:bg-white hover:text-red-600 active:scale-95 transition-all duration-300 text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
