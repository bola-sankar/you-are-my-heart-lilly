import { useState } from "react";
import TypingText from "./TypingText";
import LightParticles from "./LightParticles";

interface MessageSectionProps {
  onComplete: () => void;
}

const MessageSection = ({ onComplete }: MessageSectionProps) => {
  const [showContinue, setShowContinue] = useState(false);

  const loveMessages = [
    "Lilly, you are not just my love…",
    "nuvvu naa life lo oka beautiful miracle. ✨",
    "Every moment with you feels special,",
    "endukante you are my home. 🏡",
    "Nee smile chaalu,",
    "naa whole day bright avutundi. 🌅",
  ];

  return (
    <section className="section-full bg-romantic-night relative overflow-hidden py-16">
      <LightParticles />

      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary mx-auto animate-float-gentle"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <TypingText
          lines={loveMessages}
          onComplete={() => setShowContinue(true)}
        />

        {showContinue && (
          <div className="mt-12 text-center animate-fade-up">
            <div className="divider-romantic mb-8" />
            <button
              onClick={onComplete}
              className="font-romantic text-2xl text-gold animate-float-gentle"
            >
              Continue our story... 💕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessageSection;
