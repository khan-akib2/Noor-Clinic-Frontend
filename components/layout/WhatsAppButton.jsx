"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white text-text-dark text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 mr-2 max-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
            <p>Chat with us on WhatsApp! 💬</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full animate-pulse-glow" style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }} />

        {/* Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 group-hover:shadow-2xl group-hover:shadow-green-500/40 group-hover:scale-110 active:scale-95 transition-all duration-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
