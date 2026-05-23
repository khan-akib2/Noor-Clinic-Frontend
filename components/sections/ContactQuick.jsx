"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    detail: CLINIC_INFO.phone,
    href: `tel:${CLINIC_INFO.phone}`,
    color: "from-secondary to-teal-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: CLINIC_INFO.email,
    href: `mailto:${CLINIC_INFO.email}`,
    color: "from-accent to-blue-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: CLINIC_INFO.address,
    href: "#map",
    color: "from-violet-500 to-purple-600",
  },
];

export default function ContactQuick() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="contact-quick">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={index}
                href={card.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold font-heading text-primary text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-muted text-sm">{card.detail}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
