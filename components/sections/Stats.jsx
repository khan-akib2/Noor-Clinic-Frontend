"use client";

import { Users, Award, Stethoscope, ThumbsUp } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import { STATS } from "@/lib/constants";

const STAT_ICONS = [Users, Award, Stethoscope, ThumbsUp];

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-24 hero-gradient overflow-hidden" id="stats">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={STAT_ICONS[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
