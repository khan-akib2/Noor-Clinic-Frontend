import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ToastProvider from "@/components/ui/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Noor Clinic — Your Health, Our Priority",
    template: "%s | Noor Clinic",
  },
  description:
    "Noor Clinic provides compassionate, comprehensive healthcare led by Dr. Fazal with 15+ years of experience. Book your appointment today for family physician consultation, general checkups, diabetes care, and more.",
  keywords: [
    "Noor Clinic",
    "Dr. Fazal",
    "doctor",
    "clinic",
    "healthcare",
    "family physician",
    "general checkup",
    "diabetes care",
    "blood pressure",
    "medical consultation",
    "appointment booking",
  ],
  authors: [{ name: "Noor Clinic" }],
  openGraph: {
    title: "Noor Clinic — Your Health, Our Priority",
    description:
      "Compassionate healthcare with a personal touch. Book your appointment today.",
    type: "website",
    locale: "en_IN",
    siteName: "Noor Clinic",
    images: [
      {
        url: "/logo-clinic.png",
        width: 512,
        height: 512,
        alt: "Noor Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Noor Clinic — Your Health, Our Priority",
    description:
      "Compassionate healthcare with a personal touch. Book your appointment today.",
    images: ["/logo-clinic.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <ToastProvider />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
