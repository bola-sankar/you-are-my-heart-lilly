import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  type: "confetti" | "heart" | "sparkle";
}

const ConfettiCelebration = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--gold))",
      "hsl(var(--primary))",
      "hsl(var(--blush-pink))",
      "hsl(45 85% 70%)",
      "hsl(350 80% 75%)",
    ];

    const newParticles: Particle[] = [];
    
    // Create confetti pieces
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        size: 8 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        rotation: Math.random() * 360,
        type: Math.random() > 0.7 ? "heart" : Math.random() > 0.5 ? "sparkle" : "confetti",
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === "heart" ? (
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 24 24"
              fill={particle.color}
              style={{ transform: `rotate(${particle.rotation}deg)` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : particle.type === "sparkle" ? (
            <div
              className="rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: particle.color,
                boxShadow: `0 0 ${particle.size}px ${particle.color}`,
              }}
            />
          ) : (
            <div
              style={{
                width: particle.size,
                height: particle.size * 0.6,
                background: particle.color,
                transform: `rotate(${particle.rotation}deg)`,
                borderRadius: "2px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConfettiCelebration;
