import Image from "next/image";

/**
 * HeroSection
 *
 * Full-bleed cinematic image with a layered scrim: darker at the
 * bottom for legibility of the wordmark and tagline, lighter in the
 * upper third so the smoke and ceiling still read. Text is anchored
 * to the lower third and the image is positioned so the bright
 * flames sit on the right third, leaving negative space for the
 * headline on the left.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="/images/plato/hero-cinematic.png"
        alt="Open wood-fired hearth with leaping amber flames against a dark charcoal kitchen wall"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      {/* Layered scrim: subtle top vignette + strong bottom gradient for text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent"
      />

      {/* Side accent — thin ember line that reads as a "hearth" mark */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-ember to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
        <div className="max-w-3xl">
          <p className="section-eyebrow flex items-center gap-3 text-[0.7rem] text-cream/80 sm:text-[0.78rem]">
            <span className="h-px w-8 bg-ember" aria-hidden="true" />
            Wood-fired Kitchen · Northern Quarter, Manchester
          </p>

          <h1 className="mt-6 font-serif-display text-5xl font-semibold leading-[0.95] text-cream text-balance sm:text-7xl lg:text-[5.5rem]">
            Where fire meets
            <span className="block italic text-[#e8a560]">the table</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            A small kitchen in the Northern Quarter built around one hearth and
            the seasons of the year. We cook over oak and applewood, pour
            natural wines, and change the menu when the markets do.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center rounded-full bg-ember px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-cream hover:text-espresso"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:text-[#e8a560]"
            >
              See the Menu
              <span aria-hidden="true" className="text-[#e8a560]">→</span>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Read our story"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-12 w-px bg-cream/40" />
      </a>
    </section>
  );
}
