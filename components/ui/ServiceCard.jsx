"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index = 0, showLink = true }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-1">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold font-heading text-primary mb-3 group-hover:text-secondary-dark transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Link */}
          {showLink && (
            <Link
              href="/appointment"
              className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
