"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <section className="py-20 lg:py-28 section-gradient" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-semibold">Find Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-3">
              Visit Our Clinic
            </h2>
            <p className="text-text-muted max-w-md mx-auto">
              {CLINIC_INFO.address}, {CLINIC_INFO.city}
            </p>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src={CLINIC_INFO.mapEmbedUrl}
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noor Clinic Location"
              className="w-full h-[250px] sm:h-[400px]"
            />
            {/* Gradient overlay at top */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
