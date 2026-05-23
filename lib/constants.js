import {
  Stethoscope,
  HeartPulse,
  Thermometer,
  Activity,
  ShieldCheck,
  Pill,
  ClipboardList,
  UserCheck,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── Clinic Info ───────────────────────────────────────────
export const CLINIC_INFO = {
  name: "NOOR CLINIC",
  doctor: "Dr. Fazal",
  tagline: "Your Health, Our Priority",
  description:
    "Providing compassionate, comprehensive healthcare with a personal touch. At Noor Clinic, every patient is treated like family.",
  phone: "+91 7709 498 002",
  phoneClean: "917709498002",
  email: "f.rahmanazmi@gmail.com",
  address: "Noor Clinic, Khan Compound, Shilphata",
  city: "Thane, Maharashtra 400612",
  whatsappUrl: "https://wa.me/917709498002",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Noor%20Clinic,%20Khan%20Compound,%20Shilphata&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

// ─── Navigation Links ──────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

// ─── Services ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    title: "Family Physician Consultation",
    description:
      "Comprehensive care for patients of all ages. From routine wellness visits to managing chronic conditions, we provide personalized treatment plans for your entire family.",
    icon: Stethoscope,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 2,
    title: "General Checkup",
    description:
      "Complete health assessments including vital signs, blood work, and physical examination to ensure you stay ahead of potential health issues.",
    icon: ClipboardList,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Diabetes Care",
    description:
      "Expert diabetes management with regular monitoring, lifestyle guidance, medication management, and comprehensive care to keep blood sugar levels in control.",
    icon: Activity,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Blood Pressure Monitoring",
    description:
      "Regular blood pressure tracking with professional guidance on diet, exercise, and medications to maintain optimal cardiovascular health.",
    icon: HeartPulse,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 5,
    title: "Fever & Infection Treatment",
    description:
      "Quick diagnosis and effective treatment for fevers, viral infections, bacterial conditions, and seasonal illnesses with proper follow-up care.",
    icon: Thermometer,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "Health Consultation",
    description:
      "One-on-one health consultations for any medical concerns. Get expert advice, second opinions, and personalized health recommendations.",
    icon: UserCheck,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 7,
    title: "Preventive Care",
    description:
      "Proactive health programs including vaccinations, screening tests, and lifestyle counseling designed to prevent diseases before they occur.",
    icon: ShieldCheck,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 8,
    title: "Routine Medical Advice",
    description:
      "Ongoing medical guidance for everyday health questions, diet planning, exercise routines, and maintaining a balanced, healthy lifestyle.",
    icon: Pill,
    color: "from-teal-500 to-emerald-500",
  },
];

// ─── Testimonials ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Patient",
    rating: 5,
    text: "Dr. Fazal is incredibly compassionate and thorough. He takes the time to listen and explain everything clearly. The clinic is clean, modern, and the staff is wonderful. Highly recommended!",
    avatar: "AK",
  },
  {
    id: 2,
    name: "Mohammed Irfan",
    role: "Patient",
    rating: 5,
    text: "I've been visiting Noor Clinic for years. The quality of care is exceptional. Dr. Fazal always goes above and beyond to ensure proper treatment and follow-up. Best clinic in the area!",
    avatar: "MI",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Patient",
    rating: 5,
    text: "Amazing experience every time! The appointment process is smooth, wait times are minimal, and the treatment is always effective. Dr. Fazal truly cares about his patients' well-being.",
    avatar: "PS",
  },
  {
    id: 4,
    name: "Rahul Patel",
    role: "Patient",
    rating: 5,
    text: "Noor Clinic feels like visiting family. Dr. Fazal's expertise combined with genuine warmth makes this clinic stand out. My whole family trusts him with our healthcare needs.",
    avatar: "RP",
  },
  {
    id: 5,
    name: "Fatima Begum",
    role: "Patient",
    rating: 5,
    text: "The best medical care I've received. Dr. Fazal diagnosed my condition accurately when others couldn't. Professional, knowledgeable, and truly dedicated to patient health.",
    avatar: "FB",
  },
  {
    id: 6,
    name: "Sanjay Deshmukh",
    role: "Patient",
    rating: 5,
    text: "From the moment you walk in, you feel welcomed. The clinic maintains high standards of hygiene and professionalism. Dr. Fazal is a gem — highly skilled and very patient.",
    avatar: "SD",
  },
];

// ─── Stats ─────────────────────────────────────────────────
export const STATS = [
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Medical Services", value: 8, suffix: "" },
  { label: "Patient Satisfaction", value: 98, suffix: "%" },
];

// ─── Working Hours ─────────────────────────────────────────
export const WORKING_HOURS = [
  { day: "Monday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Friday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 1:00 PM (Emergency Only)" },
];

// ─── Time Slots ────────────────────────────────────────────
export const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
];

// ─── FAQs ──────────────────────────────────────────────────
export const FAQS = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to minimize wait times and ensure you receive dedicated attention from Dr. Fazal.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major health insurance plans. Please contact our clinic directly or call us at +91 7709 498 002 to verify your specific insurance coverage.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid ID, your insurance card (if applicable), any previous medical records, a list of current medications, and details of your medical history.",
  },
  {
    question: "How long does a typical consultation take?",
    answer:
      "A standard consultation typically lasts 15-30 minutes depending on the complexity of your condition. We believe in thorough examinations and never rush our patients.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "We provide basic emergency care during clinic hours. For serious emergencies, please call emergency services immediately and then contact us for follow-up care.",
  },
  {
    question: "Can I get my prescriptions refilled at the clinic?",
    answer:
      "Yes, we can refill prescriptions for our existing patients. Please call ahead or book an appointment for prescription renewals to ensure seamless processing.",
  },
];

// ─── Qualifications ────────────────────────────────────────
export const QUALIFICATIONS = [
  "MBBS - Bachelor of Medicine, Bachelor of Surgery",
  "MD - General Medicine",
  "Certified Family Physician",
  "Member - Indian Medical Association (IMA)",
  "15+ Years of Clinical Practice",
  "Specialization in Diabetes & Preventive Care",
];

// ─── Why Choose Us ─────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    title: "Experienced Doctor",
    description:
      "Over 15 years of medical expertise providing accurate diagnoses and effective treatment plans.",
    icon: Stethoscope,
  },
  {
    title: "Affordable Care",
    description:
      "Quality healthcare accessible to everyone with transparent pricing and flexible payment options.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Facility",
    description:
      "Clean, well-equipped clinic with the latest medical instruments for precise diagnostics.",
    icon: Activity,
  },
  {
    title: "Patient-Centric",
    description:
      "Every patient receives personalized attention and care tailored to their unique health needs.",
    icon: HeartPulse,
  },
];
