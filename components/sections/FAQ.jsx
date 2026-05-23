"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our clinic, services, and policies."
        />

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
