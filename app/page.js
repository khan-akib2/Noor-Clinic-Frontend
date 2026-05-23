import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import WorkingHours from "@/components/sections/WorkingHours";
import FAQ from "@/components/sections/FAQ";
import Emergency from "@/components/sections/Emergency";
import ContactQuick from "@/components/sections/ContactQuick";
import MapEmbed from "@/components/sections/MapEmbed";

export const metadata = {
  title: "Noor Clinic — Your Health, Our Priority",
  description:
    "Welcome to Noor Clinic. Compassionate, comprehensive healthcare led by Dr. Fazal. Book your appointment for general checkups, diabetes care, and more.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <WorkingHours />
      <FAQ />
      <Emergency />
      <ContactQuick />
      <MapEmbed />
    </>
  );
}
