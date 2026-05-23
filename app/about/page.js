"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Users,
  Award,
  Clock,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLINIC_INFO, QUALIFICATIONS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <PageHero
        subtitle="About Us"
        title="About Noor Clinic"
        description="Learn about our commitment to providing exceptional healthcare with compassion and expertise."
      />

      {/* Doctor Profile Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Doctor Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-10" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-secondary/40 to-accent/40 flex items-center justify-center mb-6 border-4 border-white/20 shadow-2xl">
                    <span className="text-6xl font-bold text-white font-heading">DF</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-1">
                    {CLINIC_INFO.doctor}
                  </h3>
                  <p className="text-secondary-light font-medium mb-2">MBBS, MD — General Medicine</p>
                  <p className="text-white/60 text-sm mb-6">Family Physician & Healthcare Expert</p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[
                      { value: "15+", label: "Years Exp." },
                      { value: "5000+", label: "Patients" },
                      { value: "98%", label: "Satisfaction" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-3">
                        <p className="text-white font-bold text-lg font-heading">{stat.value}</p>
                        <p className="text-white/60 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-3xl -z-10" />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Meet Our Doctor
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-6">
                Dedicated to Your <span className="gradient-text">Well-Being</span>
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Dr. Fazal is a highly experienced family physician with over 15 years of
                  dedicated practice in comprehensive healthcare. He holds an MBBS and MD in General
                  Medicine, with specialized expertise in diabetes management and preventive care.
                </p>
                <p>
                  At Noor Clinic, Dr. Fazal believes that every patient deserves personalized
                  attention and compassionate care. His approach combines modern medical practices
                  with a deep understanding of each patient&apos;s unique health needs.
                </p>
                <p>
                  Known for his thorough consultations and patient-first approach, Dr. Fazal has
                  built a reputation as a trusted healthcare provider in the community, earning the
                  trust and loyalty of over 5,000 patients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="Mission & Vision"
            description="Guided by our commitment to excellence in healthcare delivery."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide accessible, affordable, and high-quality healthcare to every individual and family in our community. We strive to be a beacon of trust and healing, ensuring that every patient receives the care and attention they deserve.",
                color: "from-secondary to-teal-600",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the most trusted and preferred healthcare destination in our region, recognized for clinical excellence, patient satisfaction, and community well-being. We envision a healthier community where preventive care is prioritized.",
                color: "from-accent to-blue-600",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Qualifications"
            title="Education & Expertise"
            description="Dr. Fazal's extensive training and qualifications ensure the highest standard of medical care."
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {QUALIFICATIONS.map((qual, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-gray-100"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-primary font-medium text-sm">{qual}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Environment */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Facility"
            title="Clinic Environment"
            description="A clean, modern, and welcoming facility designed for your comfort."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Reception Area",
                desc: "Warm, welcoming front desk with comfortable seating",
                icon: Users,
              },
              {
                title: "Consultation Room",
                desc: "Private, well-equipped rooms for thorough examinations",
                icon: Heart,
              },
              {
                title: "Modern Equipment",
                desc: "Latest diagnostic instruments for accurate assessments",
                icon: Award,
              },
              {
                title: "Clean Environment",
                desc: "Strict hygiene protocols for patient safety",
                icon: CheckCircle,
              },
              {
                title: "Pharmacy Access",
                desc: "Convenient access to prescribed medications nearby",
                icon: GraduationCap,
              },
              {
                title: "Flexible Timings",
                desc: "Extended hours to accommodate your busy schedule",
                icon: Clock,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="font-bold font-heading text-primary mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
