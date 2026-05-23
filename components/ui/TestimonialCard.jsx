"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-1">
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-secondary/20 mb-4 group-hover:text-secondary/40 transition-colors" />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-amber-400 fill-amber-400"
            />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
            <p className="text-text-muted text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
