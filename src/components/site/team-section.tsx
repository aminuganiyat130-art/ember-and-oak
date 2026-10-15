import Image from "next/image";

type Person = {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
};

const TEAM: Person[] = [
  {
    name: "Marco Reyes",
    role: "Chef Patron",
    bio: "Trained in Madrid and Copenhagen. Ran the kitchen at St. John Bread & Wine before opening Ember & Oak. Believes the fire is the only piece of equipment a kitchen really needs.",
    image: "/images/plato/chef1.png",
    alt: "Portrait of Marco Reyes, chef patron, in the Ember and Oak kitchen",
  },
  {
    name: "Imani Okafor",
    role: "Head of Pastry",
    bio: "Came up through Petti & Pao in London. Looks after the bread, the tarts, and the soft serve. Burns the honey on purpose and never measures it.",
    image: "/images/plato/chef2.png",
    alt: "Portrait of Imani Okafor, head of pastry, holding a small dessert plate",
  },
  {
    name: "Lew Hardy",
    role: "Sous Chef",
    bio: "Manchester born and bred. Runs the pass on Friday and Saturday nights. Started at Ember & Oak as a porter in 2019 and never quite left.",
    image: "/images/plato/chef3.png",
    alt: "Portrait of Lew Hardy, sous chef, in the kitchen with embers glowing behind",
  },
  {
    name: "Sofia Brent",
    role: "Head Sommelier",
    bio: "Looks after the wine list. Will tell you to drink the cheaper bottle. Spends her Mondays at the small importers in Chorlton hunting for the next thing.",
    image: "/images/plato/chef4.png",
    alt: "Portrait of Sofia Brent, head sommelier, holding a glass of red wine",
  },
];

/**
 * TeamSection
 *
 * Four short portraits of the people who run the kitchen and the
 * floor. Each card is a photograph, a name, a role, and a real,
 * short bio rather than a list of credentials.
 */
export function TeamSection() {
  return (
    <section id="team" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-ember text-[0.7rem] sm:text-[0.78rem]">
            The Kitchen
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
            The people behind the fire
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/75">
            A small team. Most of us have been here for years. We are happier
            with a tight room of regulars than a long menu of new faces.
          </p>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <article key={person.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/85">
                    {person.role}
                  </p>
                </div>
              </div>
              <h3 className="mt-4 font-serif-display text-xl font-semibold text-espresso">
                {person.name}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-espresso/70">
                {person.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
