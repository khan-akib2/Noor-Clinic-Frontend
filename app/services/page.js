"use client";

import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        subtitle="What We Offer"
        title="Our Medical Services"
        description="Comprehensive healthcare solutions tailored to your needs. From preventive care to specialized treatment, we've got you covered."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
