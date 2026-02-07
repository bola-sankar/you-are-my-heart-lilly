import { useState } from "react";

interface LoveCardProps {
  message: string;
  icon: "heart" | "ring" | "star";
  delay?: number;
}

const LoveCard = ({ message, icon, delay = 0 }: LoveCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const icons = {
    heart: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-primary"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    ring: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gold"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="6" r="2" fill="currentColor" />
      </svg>
    ),
    star: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gold"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  };

  return (
    <div
      className={`love-card cursor-pointer transition-all duration-500 animate-fade-up ${
        isRevealed ? "active" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsRevealed(true)}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex-shrink-0 ${
            isRevealed ? "animate-heartbeat" : "animate-float-gentle"
          }`}
        >
          {icons[icon]}
        </div>
        <div className="flex-1">
          {isRevealed ? (
            <p className="font-romantic text-xl text-blush animate-fade-in">
              {message}
            </p>
          ) : (
            <p className="font-clean text-muted-foreground text-sm">
              Tap to reveal 💕
            </p>
          )}
        </div>
      </div>

      {isRevealed && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gold animate-sparkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoveCard;
