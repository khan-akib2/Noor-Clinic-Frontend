import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ToastProvider from "@/components/ui/Toast";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

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

const getSiteUrl = () => {
  let url = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();
  
  // Handle accidental comma-separated URL lists gracefully
  if (url.includes(",")) {
    url = url.split(",")[0].trim();
  }
  
  if (!url) {
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      url = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`;
    } else if (process.env.VERCEL_URL) {
      url = `https://${process.env.VERCEL_URL.trim()}`;
    } else {
      url = "http://localhost:3000";
    }
  }
  
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  
  return url;
};

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Noor Clinic — Your Health, Our Priority",
    template: "%s | Noor Clinic",
  },
  description:
    "Noor Clinic provides compassionate, comprehensive healthcare led by Dr. Fazal, a General Physician and Unani Consultant with 15+ years of experience. Book your appointment today for general checkups, consultations, and holistic care.",
  keywords: [
    "Noor Clinic",
    "Dr. Fazal",
    "doctor",
    "clinic",
    "healthcare",
    "general physician",
    "unani consultant",
    "BUMS",
    "MUHS Nashik",
    "general checkup",
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
        <SmoothScrolling>
          <ToastProvider />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrolling>
      </body>
    </html>
  );
}
