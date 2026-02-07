import { useState, useEffect } from "react";
import FloatingHearts from "./FloatingHearts";
import ConfettiCelebration from "./ConfettiCelebration";

const ProposalReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => setShowFinalText(true), 1500);

      // Create sparkles
      const sparkleInterval = setInterval(() => {
        setSparkles((prev) => [
          ...prev.slice(-20),
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
          },
        ]);
      }, 200);

      return () => {
        clearTimeout(timer);
        clearInterval(sparkleInterval);
      };
    }
  }, [isRevealed]);

  return (
    <section className="section-full bg-romantic-night relative overflow-hidden">
      <FloatingHearts />

      {/* Golden Glow Background when revealed */}
      {isRevealed && (
        <div className="absolute inset-0 animate-fade-in">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, hsl(45 85% 55% / 0.2) 0%, transparent 60%)",
            }}
          />
        </div>
      )}

      {/* Sparkles */}
      {isRevealed &&
        sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 rounded-full bg-gold animate-sparkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
          />
        ))}

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {!isRevealed ? (
          <div className="flex flex-col items-center gap-8">
            <p className="font-romantic text-2xl text-blush animate-fade-in">
              Tap the ring to reveal...
            </p>

            <button
              onClick={() => setIsRevealed(true)}
              className="relative animate-float-gentle"
            >
              {/* Ring Icon */}
              <div className="ring-glow animate-gold-shimmer p-8 rounded-full border-2 border-gold/30">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold"
                >
                  {/* Ring band */}
                  <ellipse cx="12" cy="14" rx="8" ry="6" />
                  {/* Diamond */}
                  <path
                    d="M12 3 L15 8 L12 6 L9 8 Z"
                    fill="currentColor"
                    className="animate-sparkle"
                  />
                  {/* Diamond glow */}
                  <circle cx="12" cy="5" r="3" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
            </button>

            <p className="tap-hint">Tap to reveal your answer</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            {/* Revealed Ring with Golden Glow */}
            <div className="animate-scale-in">
              <div className="ring-glow animate-gold-shimmer p-8 rounded-full">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold"
                >
                  <ellipse cx="12" cy="14" rx="8" ry="6" />
                  <path d="M12 3 L15 8 L12 6 L9 8 Z" fill="currentColor" />
                  <circle cx="12" cy="5" r="3" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </div>

            {showFinalText && (
              <div className="space-y-6 animate-fade-up">
                <h1 className="font-romantic text-4xl text-gold leading-relaxed">
                  Lilly, will you be mine forever?
                </h1>
                <p className="font-romantic text-2xl text-blush">
                  Naa life lo nee place eppatiki special. 💕
                </p>

                <div className="divider-romantic my-8" />

                <div className="flex justify-center gap-4 pt-4">
                  <button 
                    className="proposal-button text-xl px-8 py-3"
                    onClick={() => setShowCelebration(true)}
                  >
                    Yes! 💍
                  </button>
                </div>

                {showCelebration && (
                  <div className="mt-8 animate-scale-in">
                    <p className="font-romantic text-3xl text-gold animate-fade-up">
                      She said Yes! 🎉💍
                    </p>
                    <p className="font-romantic text-xl text-blush mt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                      Forever begins with you, Lilly ❤️
                    </p>
                  </div>
                )}

                {!showCelebration && (
                  <p className="font-romantic text-xl text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
                    Forever starts now... ❤️
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Extra floating hearts when revealed */}
      {isRevealed && <FloatingHearts />}
      
      {/* Celebration confetti */}
      {showCelebration && <ConfettiCelebration />}
    </section>
  );
};

export default ProposalReveal;
