"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
  light = false,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 lg:mb-16 ${className}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
          light ? "text-secondary-light" : "text-secondary"
        }`}>
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {/* Decorative underline */}
      <div className={`flex items-center gap-1.5 ${center ? "justify-center" : ""} mb-5`}>
        <div className="w-8 h-1 bg-secondary rounded-full" />
        <div className="w-3 h-1 bg-secondary/50 rounded-full" />
        <div className="w-1.5 h-1 bg-secondary/30 rounded-full" />
      </div>
      {description && (
        <p className={`text-base lg:text-lg leading-relaxed ${
          light ? "text-white/70" : "text-text-muted"
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
