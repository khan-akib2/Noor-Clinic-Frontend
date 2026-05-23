"use client";

import { useCountUp } from "@/hooks/useCountUp";

export default function StatCounter({ value, suffix = "", label, icon: Icon }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center group">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-secondary-light" />
        </div>
      )}
      <div className="text-4xl lg:text-5xl font-bold font-heading text-white mb-1">
        {count}
        <span className="text-secondary-light">{suffix}</span>
      </div>
      <p className="text-white/60 text-sm font-medium">{label}</p>
    </div>
  );
}
