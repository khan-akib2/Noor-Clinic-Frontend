# 🏥 NOOR CLINIC — Premium Medical Website

A modern, high-end healthcare website for **Noor Clinic** (Dr. Fazal), built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion. Featuring an elegant dark blue, white, and teal medical color palette, responsive layout, smooth animations, and a secure serverless contact/appointment booking system powered by Brevo (Sendinblue).

---

## ✨ Features

- **🚀 Page Speed & Performance:** Optimised with Next.js 16 and Turbopack/Webpack compilation.
- **🎨 Premium UI/UX:** Clean medical aesthetics, subtle glowing effects, glassmorphic cards, custom animations, and responsive grids.
- **📱 Fully Responsive:** Seamless transitions from mobile to tablet and desktop.
- **📅 Appointment Scheduler:** Validated client-side form with age, gender, date limits (no past dates), interactive time slot picker, spam protection cooldown, and custom alerts.
- **📬 Brevo API Email Delivery:** Server-side secure Next.js API route to deliver structured emails for appointments straight to `f.rahmanazmi@gmail.com`.
- **💬 Float CTA Integrations:** Floating WhatsApp contact button with pulse-glow ring and tooltip, and direct click-to-call links.
- **⚡ Interactive Counters:** Counters that animate from 0 to targets when scrolled into view.
- **🗺️ Interactive Map:** Smooth, embedded Google Maps matching the clean design.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Mailing:** [Brevo Transactional Emails API](https://www.brevo.com/)

---

## 📂 Project Structure

```
clinic-website/
├── app/
│   ├── layout.js              # Custom fonts, SEO metadata, toast provider
│   ├── page.js                # Home page (assembler of sections)
│   ├── about/
│   │   ├── layout.js          # About Page SEO metadata
│   │   └── page.js            # About Doctor & Clinic
│   ├── services/
│   │   ├── layout.js          # Services Page SEO metadata
│   │   └── page.js            # Grid of 8 Services
│   ├── appointment/
│   │   ├── layout.js          # Appointment Page SEO metadata
│   │   └── page.js            # Booking Form UI & submission
│   ├── contact/
│   │   ├── layout.js          # Contact Page SEO metadata
│   │   └── page.js            # Contact form, opening hours, WhatsApp CTA
│   ├── globals.css            # Tailwind CSS v4 variables & custom animations
│   └── api/
│       └── appointment/
│           └── route.js       # Secure email API endpoint with rate limiting
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Navigation bar with mobile menu
│   │   ├── Footer.jsx         # 4-column footer
│   │   └── WhatsAppButton.jsx # Floating WhatsApp CTA with glow
│   ├── sections/
│   │   ├── Hero.jsx           # Premium hero banner
│   │   ├── Services.jsx       # Grid display of services
│   │   ├── WhyChooseUs.jsx    # Bullet card list
│   │   ├── Testimonials.jsx   # Patient reviews
│   │   ├── Stats.jsx          # Statistics counter section
│   │   ├── FAQ.jsx            # Accordion answers
│   │   ├── WorkingHours.jsx   # Opening hours chart
│   │   ├── Emergency.jsx      # Urgent help banner
│   │   ├── ContactQuick.jsx   # Location, phone, mail quick links
│   │   └── PageHero.jsx       # Header banner for inner pages
│   └── ui/
│       ├── Button.jsx         # Reusable button classes
│       ├── SectionHeading.jsx # Unified section headings
│       ├── ServiceCard.jsx    # Service cards
│       ├── TestimonialCard.jsx# Star review cards
│       ├── StatCounter.jsx    # Counting anim container
│       ├── FAQItem.jsx        # FAQ single row
│       └── Toast.jsx          # Toaster styles
├── hooks/
│   └── useCountUp.js          # Intersection observer-based counter
├── lib/
│   ├── constants.js           # Navigation links, contact info, working hours, FAQs
│   └── validators.js          # Regex phone/email validation
└── .env.example               # Configuration keys template
```

---

## 🚀 Setup & Local Running Instructions

### 1. Pre-requisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation
Navigate to the directory and install npm packages:
```bash
npm install
```

### 3. Environment Variables
Create a file named `.env.local` in the root of the `clinic-website` directory and populate it with your credentials:
```env
BREVO_API_KEY=your_brevo_api_key_here
BREVO_SENDER_EMAIL=noreply@noorclinic.com
BREVO_RECEIVER_EMAIL=f.rahmanazmi@gmail.com
```

> 💡 **Note on Local Dev Mode:** If `BREVO_API_KEY` is not present or blank, the API route will log the appointment details straight to the console (stdin/stdout) and return a mock success response so you can test form flows without configuring email keys!

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📧 Brevo Email Setup Guide

1. **Sign Up / Log In:** Go to [Brevo](https://www.brevo.com/) and log in to your account.
2. **Retrieve API Key:**
   - Go to your account name on the top right → Click **SMTP & API**.
   - Navigate to **API Keys** and click **Generate a new API key**.
   - Copy this key and save it as `BREVO_API_KEY` in your `.env.local` or hosting provider dashboard.
3. **Verify Sender Domain/Email:**
   - Go to **Senders & IP** in Brevo settings.
   - Click **Senders** → **Add a sender**.
   - Add your chosen sender email (e.g., `noreply@yourdomain.com` or your personal email) and verify it by clicking the link sent to your inbox.
   - Add this email as `BREVO_SENDER_EMAIL` in your environment config.

---

## 🌐 Deployment to Vercel

The easiest way to deploy this Next.js app is to link it to **Vercel**:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com/) and click **Add New** → **Project**.
3. Import your repository.
4. Under **Environment Variables**, add:
   - `BREVO_API_KEY`
   - `BREVO_SENDER_EMAIL`
   - `BREVO_RECEIVER_EMAIL`
5. Click **Deploy**. Vercel will automatically detect Next.js, compile all paths statically, and provision SSL certificates for your custom domain.
