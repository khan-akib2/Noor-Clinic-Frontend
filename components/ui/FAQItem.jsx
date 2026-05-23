"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ faq, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-secondary/30 bg-secondary/5 shadow-md shadow-secondary/5"
          : "border-gray-100 bg-white hover:border-secondary/20 hover:shadow-sm"
      }`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left p-5 lg:p-6 cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className={`font-semibold text-sm lg:text-base pr-4 transition-colors duration-300 ${
            isOpen ? "text-secondary-dark" : "text-primary"
          }`}>
            {faq.question}
          </span>
          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-secondary text-white rotate-180"
              : "bg-surface text-text-muted group-hover:bg-secondary/10 group-hover:text-secondary"
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                <p className="text-text-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
