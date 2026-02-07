import LoveCard from "./LoveCard";
import LightParticles from "./LightParticles";

interface InteractiveSectionProps {
  onComplete: () => void;
}

const InteractiveSection = ({ onComplete }: InteractiveSectionProps) => {
  const loveCards = [
    {
      message: "Lilly, naa heart already nee daggara undi. 💖",
      icon: "heart" as const,
    },
    {
      message: "With you, every tomorrow feels safe and beautiful. 🌸",
      icon: "ring" as const,
    },
    {
      message: "Nuvvu unte chaalu, life perfect la untundi. ✨",
      icon: "star" as const,
    },
    {
      message: "You make my ordinary days extraordinary. 💫",
      icon: "heart" as const,
    },
  ];

  return (
    <section className="section-full bg-romantic-night relative overflow-hidden py-16">
      <LightParticles />

      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-romantic text-3xl text-gold mb-2">
            Our Love Story
          </h2>
          <p className="font-clean text-muted-foreground text-sm">
            Tap each card to reveal
          </p>
        </div>

        <div className="space-y-4">
          {loveCards.map((card, index) => (
            <LoveCard
              key={index}
              message={card.message}
              icon={card.icon}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <button
            onClick={onComplete}
            className="font-romantic text-2xl text-gold animate-float-gentle"
          >
            Something special awaits... 💍
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
