import { useEffect, useState } from "react";

export function TypewriterText({
  phrases,
  className,
}: { phrases: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0] ?? "");
      return;
    }
    const current = phrases[i % phrases.length];
    const speed = deleting ? 40 : 70;
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => (v + 1) % phrases.length);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return (
    <span className={className}>
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden>
        {text}
        <span
          className="inline-block w-[2px] h-[0.9em] translate-y-[2px] ml-1 bg-gradient-aurora align-middle"
          style={{ animation: "caret-blink 1s steps(1) infinite" }}
        />
      </span>
    </span>
  );
}
