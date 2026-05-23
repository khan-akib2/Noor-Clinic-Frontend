"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WORKING_HOURS } from "@/lib/constants";

export default function WorkingHours() {
  // Check if currently open (simplified check)
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const isOpen =
    day === 0
      ? hour >= 10 && hour < 13
      : hour >= 9 && hour < 13 || hour >= 17 && hour < 21;

  return (
    <section className="py-20 lg:py-28 section-gradient" id="working-hours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Working Hours"
          title="When We're Available"
          description="Plan your visit during our working hours. Walk-ins are welcome, but appointments are recommended."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Status badge */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm ${
              isOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full ${
                isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
              }`} />
              {isOpen ? "Currently Open" : "Currently Closed"}
            </div>
          </div>

          {/* Hours table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {WORKING_HOURS.map((item, index) => {
              const isToday = index === (now.getDay() === 0 ? 6 : now.getDay() - 1);
              return (
                <div
                  key={item.day}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-2 sm:gap-0 transition-colors ${
                    isToday
                      ? "bg-secondary/5 border-l-4 border-secondary"
                      : "border-l-4 border-transparent"
                  } ${index < WORKING_HOURS.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    )}
                    <span className={`font-medium text-sm ${
                      isToday ? "text-secondary-dark font-semibold" : "text-primary"
                    }`}>
                      {item.day}
                      {isToday && (
                        <span className="ml-2 text-xs text-secondary font-normal">(Today)</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted sm:text-right">
                    <Clock className="w-4 h-4 hidden sm:block" />
                    <span>{item.hours}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
