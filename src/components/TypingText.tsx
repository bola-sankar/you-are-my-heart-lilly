import { useEffect, useState } from "react";

interface TypingTextProps {
  lines: string[];
  onComplete?: () => void;
}

const TypingText = ({ lines, onComplete }: TypingTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, onComplete]);

  return (
    <div className="space-y-6 text-center">
      {displayedLines.map((line, index) => (
        <p
          key={index}
          className="font-romantic text-2xl leading-relaxed text-blush animate-fade-in"
        >
          {line}
          {index === currentLineIndex && !isComplete && (
            <span className="animate-typing-cursor ml-1 text-primary">|</span>
          )}
        </p>
      ))}
      {currentLineIndex < lines.length && displayedLines.length <= currentLineIndex && (
        <p className="font-romantic text-2xl leading-relaxed text-blush">
          <span className="animate-typing-cursor text-primary">|</span>
        </p>
      )}
    </div>
  );
};

export default TypingText;
