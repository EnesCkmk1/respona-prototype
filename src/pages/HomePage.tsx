import {
  ArrowRight,
  Phone,
  UtensilsCrossed,
  LayoutDashboard,
} from "lucide-react";
import { HeroVisual } from "../components/landing/HeroVisual";
const features = [
  {
    icon: Phone,
    title: "Fra samtale til bestilling",
    text: "Udforsk idéen bag en dansk voice agent til restauranter. Telefon-flowet er illustreret med demodata.",
  },
  {
    icon: LayoutDashboard,
    title: "Overblik i køkkenet",
    text: "Filtrér bestillinger, se ordredetaljer, og flyt en ordre fra ny til klar og afhentet.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menuen under kontrol",
    text: "Se retter og priser, og slå tilgængelighed til eller fra direkte i dashboardet.",
  },
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-site-bg text-site-text">
      <header className="border-b border-site-border bg-site-bg/90 backdrop-blur">
        <nav
          aria-label="Hovednavigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <a href="#/" className="text-xl font-extrabold tracking-tight">
            Respona<span className="text-site-accent">.</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              className="hidden text-sm font-medium text-site-muted transition hover:text-site-text sm:inline"
              href="#idea"
            >
              Idéen
            </a>
            <a
              className="btn-ghost !px-4 !py-2"
              href="https://github.com/EnesCkmk1/respona-prototype"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero-mesh relative overflow-hidden border-b border-site-border">
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:py-28">
            <div className="max-w-xl">
              <p className="site-label mb-6">
                VOICE AGENT · INTERAKTIV PROTOTYPE
              </p>
              <h1 className="mb-7 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Telefonen ringer.
                <br />
                <span className="text-site-accent">Køkkenet fortsætter.</span>
              </h1>
              <p className="mb-9 max-w-lg text-lg leading-relaxed text-site-muted">
                Et koncept for AI-assisterede telefonbestillinger. Fra den
                første samtale til en overskuelig ordreliste — designet til
                restauranter.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#/dashboard" className="btn-primary">
                  Prøv dashboardet
                  <ArrowRight size={18} />
                </a>
                <span className="text-xs font-medium text-site-muted">
                  Ingen login · Kun fiktive data
                </span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>
        <section
          id="idea"
          aria-label="Funktioner"
          className="mx-auto max-w-6xl px-6 py-20 md:py-24"
        >
          <div className="mb-10 max-w-xl">
            <p className="site-label mb-3">I prototypen</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fra opkald til overblik.
            </h2>
            <p className="mt-4 text-site-muted">
              En lille, konkret produktoplevelse, der viser hvordan en
              restaurant kan arbejde med voice-first bestillinger.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-site-border bg-site-surface p-7 shadow-[0_8px_30px_rgba(28,25,23,0.04)]"
              >
                <Icon className="mb-5 text-site-accent" size={25} />
                <h2 className="mb-3 text-lg font-bold">{title}</h2>
                <p className="text-sm leading-relaxed text-site-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
          <div className="rounded-3xl border border-site-border bg-site-soft p-8 md:p-10">
            <p className="site-label mb-3">Prototype scope</p>
            <h2 className="mb-3 text-2xl font-bold">
              Bygget til at udforske en idé
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-site-muted">
              Denne version viser produktdesign og frontend-interaktioner.
              Ordrer, restaurant og agent er demonstrationer. Talegenkendelse,
              AI-samtaler, telefoni og database er ikke tilsluttet. Dine
              ændringer bliver kun i hukommelsen; temaet gemmes lokalt i
              browseren.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-site-border px-6 py-6 text-center text-xs text-site-muted">
        Respona · React / TypeScript / Tailwind CSS · Bygget af Enes Çakmak
      </footer>
    </div>
  );
}
