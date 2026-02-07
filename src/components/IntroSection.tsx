import FloatingHearts from "./FloatingHearts";

interface IntroSectionProps {
  onStart: () => void;
}

const IntroSection = ({ onStart }: IntroSectionProps) => {
  return (
    <section className="section-full bg-romantic-night relative overflow-hidden">
      <FloatingHearts />
      
      {/* Central Glow */}
      <div className="absolute inset-0 bg-glow-center" />
      
      {/* Pulsing Heart */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-heartbeat animate-glow-pulse rounded-full p-8">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary drop-shadow-2xl"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="text-center space-y-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <h1 className="font-romantic text-5xl text-gold leading-tight">
            Happy Proposal Day
          </h1>
          <p className="font-romantic text-4xl text-blush">
            Lilly ❤️
          </p>
        </div>

        <div className="divider-romantic animate-fade-in" style={{ animationDelay: "1s" }} />

        <button
          onClick={onStart}
          className="proposal-button animate-scale-in"
          style={{ animationDelay: "1.2s" }}
        >
          Tap to Begin 💍
        </button>

        <p className="tap-hint mt-4" style={{ animationDelay: "2s" }}>
          A special moment awaits
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default IntroSection;
