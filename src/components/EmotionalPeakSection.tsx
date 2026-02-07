import { useEffect, useState } from "react";
import FloatingHearts from "./FloatingHearts";
import LightParticles from "./LightParticles";

interface EmotionalPeakSectionProps {
  onComplete: () => void;
}

const EmotionalPeakSection = ({ onComplete }: EmotionalPeakSectionProps) => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 500);
    const buttonTimer = setTimeout(() => setShowButton(true), 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="section-full bg-romantic-night relative overflow-hidden">
      <FloatingHearts />
      <LightParticles />

      {/* Intensified Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-glow-center opacity-50" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(0 70% 50% / 0.15) 0%, transparent 70%)",
            animation: "glow-pulse 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {showText && (
          <>
            <div className="animate-scale-in mb-8">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary mx-auto animate-heartbeat"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <h2 className="font-romantic text-3xl text-blush leading-relaxed animate-fade-up mb-4">
              Lilly, you are the reason
            </h2>
            <h2
              className="font-romantic text-3xl text-blush leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              I believe in forever…
            </h2>
            <p
              className="font-romantic text-2xl text-gold mt-6 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              nijamga. ✨
            </p>
          </>
        )}

        {showButton && (
          <div className="mt-16 animate-scale-in">
            <button
              onClick={onComplete}
              className="proposal-button animate-gold-shimmer"
            >
              The Moment 💍
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmotionalPeakSection;
