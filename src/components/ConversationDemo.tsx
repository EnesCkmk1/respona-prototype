import { useEffect, useRef, useState } from "react";
import { Bot, Pause, Play, RotateCcw, Volume2 } from "lucide-react";

const lines = [
  {
    speaker: "AI-agent",
    text: "Hej, du har ringet til Bella Napoli. Hvad kan jeg hjælpe med?",
  },
  {
    speaker: "Restaurantgæst",
    text: "Hej, jeg vil gerne bestille to margherita og et hvidløgsbrød.",
  },
  {
    speaker: "AI-agent",
    text: "Det klarer jeg. Skal der også være noget at drikke til ordren?",
  },
  {
    speaker: "Restaurantgæst",
    text: "Ja tak, to colaer. Det var det hele.",
  },
  {
    speaker: "AI-agent",
    text: "Perfekt. Jeg har registreret ordren til afhentning om cirka tyve minutter.",
  },
] as const;

type PlaybackState = "idle" | "playing" | "paused" | "done";
const audioFiles = [
  "01-ai.mp3",
  "02-guest.mp3",
  "03-ai.mp3",
  "04-guest.mp3",
  "05-ai.mp3",
];

export function ConversationDemo() {
  const [state, setState] = useState<PlaybackState>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
      audio.current?.pause();
      audio.current = null;
    };
  }, []);

  function playFrom(startIndex: number) {
    audio.current?.pause();
    if (timer.current) clearTimeout(timer.current);
    let index = startIndex;
    setState("playing");

    const speakNext = () => {
      if (index >= lines.length) {
        setState("done");
        setActiveIndex(lines.length - 1);
        return;
      }
      setActiveIndex(index);
      const player = new Audio(`./audio/${audioFiles[index]}`);
      audio.current = player;
      player.onended = () => {
        index += 1;
        timer.current = setTimeout(speakNext, 280);
      };
      player.onerror = () => setState("idle");
      void player.play().catch(() => setState("idle"));
    };

    speakNext();
  }

  function togglePlayback() {
    if (state === "playing") {
      audio.current?.pause();
      setState("paused");
      return;
    }
    if (state === "paused") {
      void audio.current?.play();
      setState("playing");
      return;
    }
    playFrom(state === "done" ? 0 : Math.max(activeIndex, 0));
  }

  function reset() {
    audio.current?.pause();
    if (timer.current) clearTimeout(timer.current);
    setActiveIndex(-1);
    setState("idle");
  }

  const buttonLabel =
    state === "playing"
      ? "Pause"
      : state === "paused"
        ? "Fortsæt"
        : state === "done"
          ? "Afspil igen"
          : "Afspil samtale";

  return (
    <section
      aria-labelledby="conversation-demo-title"
      className="border-y border-site-border bg-site-surface py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="site-label mb-3">Voice-demo</p>
          <h2
            id="conversation-demo-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Hør hvordan samtalen føles.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-site-muted">
            En indtalt dansk samtale mellem agent og restaurantgæst. Tryk afspil
            for at høre hele flowet og se dialogen blive fremhævet.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={togglePlayback}
              className="btn-primary"
            >
              {state === "playing" ? <Pause size={17} /> : <Play size={17} />}
              {buttonLabel}
            </button>
            <button
              type="button"
              onClick={reset}
              className="btn-ghost"
              aria-label="Nulstil samtalen"
            >
              <RotateCcw size={16} />
              Nulstil
            </button>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-site-muted">
            <Volume2 size={14} /> To separate danske stemmer · Ingen API-nøgle
          </p>
        </div>

        <div className="rounded-3xl border border-site-border bg-site-bg p-3 shadow-[0_14px_45px_rgba(28,25,23,0.06)] sm:p-5">
          <div className="flex items-center justify-between border-b border-site-border px-2 pb-4 sm:px-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-site-accent text-white">
                <Bot size={17} />
              </span>
              <div>
                <p className="text-sm font-bold text-site-text">Bella Napoli</p>
                <p className="text-xs text-site-muted">
                  Samtale-preview · 00:42
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Demo
            </span>
          </div>
          <div className="space-y-2.5 px-2 py-5 sm:px-3">
            {lines.map((line, index) => {
              const isAgent = line.speaker === "AI-agent";
              const isActive = activeIndex === index;
              return (
                <div
                  key={line.text}
                  className={`flex gap-3 rounded-2xl p-3 transition ${
                    isActive
                      ? "bg-site-accent/10 ring-1 ring-site-accent/20"
                      : ""
                  } ${isAgent ? "" : "justify-end"}`}
                >
                  {isAgent && (
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-site-accent text-white">
                      <Bot size={13} />
                    </span>
                  )}
                  <div className={isAgent ? "" : "text-right"}>
                    <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-site-muted">
                      {line.speaker}
                    </p>
                    <p className="max-w-md text-sm leading-relaxed text-site-text">
                      {line.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 border-t border-site-border px-2 pt-4 sm:px-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-site-muted">
              {state === "playing"
                ? "Afspiller samtale…"
                : state === "paused"
                  ? "Samtalen er sat på pause"
                  : "Klar til afspilning"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
