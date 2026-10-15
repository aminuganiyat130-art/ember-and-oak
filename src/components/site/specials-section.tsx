import Image from "next/image";

type Special = {
  name: string;
  price: string;
  course: string;
  blurb: string;
  image: string;
  alt: string;
};

const SPECIALS: Special[] = [
  {
    name: "Oak-Grilled Dry-Age Sirloin",
    price: "£26",
    course: "Dinners",
    blurb:
      "A 45-day aged sirloin from a single farm in North Yorkshire, seared over oak embers until the fat caps. Served with a knob of bone marrow butter and charred spring onion.",
    image: "/images/plato/sp1.jpg",
    alt: "A grilled dry-age sirloin steak resting on a wooden board with charred spring onions",
  },
  {
    name: "Roast Squash & Borlotti Broth",
    price: "£9",
    course: "Starters",
    blurb:
      "Crown Prince squash roasted in the embers until the skin blisters, blended with borlotti beans and a splash of cider vinegar. Topped with toasted pumpkin seed oil.",
    image: "/images/plato/sp2.jpg",
    alt: "A bowl of roasted squash and bean broth with a swirl of seed oil on top",
  },
  {
    name: "Whole Roasted Sea Bream",
    price: "£24",
    course: "Dinners",
    blurb:
      "A line-caught bream from the Cornish day boats, roasted whole on the cool side of the grill. Lemon, samphire, burnt butter, and a green herb oil pulled from the garden.",
    image: "/images/plato/sp3.jpg",
    alt: "A whole roasted sea bream on a long plate with lemon and samphire",
  },
  {
    name: "Burnt Honey & Bay Tart",
    price: "£9",
    course: "Desserts",
    blurb:
      "A loose-set custard tart with honey burnt on the stove until it smells of toffee, infused with bay leaf. Served with crème fraîche and a few toasted hazelnuts.",
    image: "/images/plato/sp4.jpg",
    alt: "A slice of burnt honey tart dusted with toasted hazelnuts on a small plate",
  },
];

/**
 * SpecialsSection
 *
 * "From the Fire" — four dishes that represent what the kitchen is
 * cooking tonight. Each card pairs a real photo with a price, the
 * course it sits in, and a short, plain description of how the dish
 * is built and where the produce comes from.
 */
export function SpecialsSection() {
  return (
    <section
      id="specials"
      className="relative bg-espresso py-20 text-cream sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(232,165,96,0.18) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgba(107,66,38,0.35) 0, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-[#e8a560] text-[0.7rem] sm:text-[0.78rem]">
            From the Fire
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            What we are cooking tonight
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            A small slice of the menu. The dishes move with what the markets
            send us in the morning, so call it a guide rather than a promise.
          </p>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SPECIALS.map((dish) => (
            <article
              key={dish.name}
              className="group flex flex-col overflow-hidden rounded-sm bg-charcoal/40 ring-1 ring-cream/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-espresso">
                  {dish.course}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif-display text-xl font-semibold leading-tight text-cream">
                    {dish.name}
                  </h3>
                  <span className="font-serif-display text-lg font-semibold text-[#e8a560]">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-cream/70">
                  {dish.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-cream/55">
          Allergies? Tell the floor team. Every dish on this list contains at
          least one of the fourteen declared allergens.
        </p>
      </div>
    </section>
  );
}
