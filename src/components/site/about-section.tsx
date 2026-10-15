import Image from "next/image";

/**
 * AboutSection
 *
 * Two parts. First, the story: who we are, what the kitchen stands
 * for, why we cook over fire. Second, a strip of three short notes
 * that frame the kitchen (history, the room, the welcome). Anchored
 * on a pair of warm photographs lifted from the reference template.
 */
export function AboutSection() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Story row */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/plato/about-main.png"
                alt="A chef plating a wood-grilled dish on a dark stoneware plate, warm amber pendant light, hearth embers blurred behind"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="eager"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-inset ring-charcoal/15"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-sm border-4 border-cream shadow-2xl sm:block lg:w-56">
              <Image
                src="/images/plato/about-inset.png"
                alt="Close-up of a thick dry-age steak searing on glowing oak embers in a black iron hearth"
                fill
                sizes="14rem"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div>
            <p className="section-eyebrow text-ember text-[0.7rem] sm:text-[0.78rem]">
              Our Story
            </p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
              A kitchen built around one fire
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-espresso/80 sm:text-[1.05rem]">
              <p>
                Ember &amp; Oak started in 2017 with a single wood-burning
                hearth, six tables, and a stubborn idea. We wanted a room in
                Manchester where the cooking happened in front of you, not
                behind a wall of stainless steel. The fire was the kitchen, and
                the kitchen was the room.
              </p>
              <p>
                Seven years on, not much has changed. We still burn oak from
                the sawmill in Marple and applewood from an orchard in
                Cheshire. The menu still shifts with what the growers and
                fishermen bring through the back door each morning. We have a
                few more seats now, and a small bar where you can wait with a
                glass of something interesting.
              </p>
              <p>
                Everything that leaves the pass has spent at least a moment
                over live fire. The steaks, the roots, the whole birds, even
                the bread. It is not theatre. It is just how we cook.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center rounded-full bg-ember px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-oak"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-espresso underline-offset-8 hover:underline"
              >
                Read the Menu
              </a>
            </div>
          </div>
        </div>

        {/* Three short notes */}
        <div className="mt-20 grid gap-10 sm:grid-cols-3 lg:mt-28">
          {[
            {
              title: "Our History",
              body: "What began as a four-person kitchen on a back street in the Northern Quarter is now a thirty-seat room with a small bar. The fire has not moved.",
              image: "/images/plato/ab3.jpg",
              alt: "An old photograph of the original Ember and Oak room at the start of service",
            },
            {
              title: "The Room",
              body: "Oak floors, raw plaster walls, a long brass-trimmed bar, and one open hearth at the centre. Soft light, low music, no screens at the table.",
              image: "/images/plato/ab4.jpg",
              alt: "A wide shot of the dining room at dusk with candles on every table",
            },
            {
              title: "The Welcome",
              body: "Walk-ins are welcome at the bar. For the dining room we ask for a booking, especially on weekends. Bring who you like. Bring your dog too, before seven.",
              image: "/images/plato/slide3.jpg",
              alt: "A guest settling in at the bar with a glass of red wine and a small plate",
            },
          ].map((note) => (
            <article key={note.title} className="group">
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
                <Image
                  src={note.image}
                  alt={note.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/15" />
              </div>
              <h3 className="mt-5 font-serif-display text-2xl font-semibold text-espresso">
                {note.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-espresso/75">
                {note.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
