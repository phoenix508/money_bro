'use client';

import { useState, useEffect, useRef } from 'react';

interface StatItem {
  label: string;
  value: number;
}

interface CounterSectionProps {
  stats: StatItem[];
}

const CounterSection = ({ stats }: CounterSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds for the animation
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counters = stats.map(stat => ({
      start: 0,
      end: stat.value,
      current: 0,
    }));

    const counter = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const easeOutQuad = (t: number) => t * (2 - t); // Easing function for smoother animation
      const animationProgress = easeOutQuad(progress);

      const newCounts = counters.map(counter => {
        const value = Math.round(counter.start + (counter.end - counter.start) * animationProgress);
        counter.current = value;
        return value;
      });

      setCounts(newCounts);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, stats]);

  return (
    <section className="py-16 bg-dark text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-800/50 p-6 rounded-lg">
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                  {counts[index].toLocaleString()}+
                </span>
              </div>
              <div className="text-xl font-medium text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection; 