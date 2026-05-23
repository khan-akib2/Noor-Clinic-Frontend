"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: "#fff",
          color: "#0F172A",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)",
          fontSize: "14px",
          fontFamily: "'Inter', sans-serif",
          border: "1px solid rgba(0,0,0,0.05)",
        },
        success: {
          iconTheme: {
            primary: "#14B8A6",
            secondary: "#FFFFFF",
          },
        },
        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
}
