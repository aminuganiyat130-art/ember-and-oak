import Image from "next/image";

type Shot = {
  src: string;
  alt: string;
  caption: string;
};

const SHOTS: Shot[] = [
  {
    src: "/images/plato/g1.jpg",
    alt: "A wide shot of the dining room with warm light and full tables",
    caption: "The room at full tilt",
  },
  {
    src: "/images/plato/g2.jpg",
    alt: "A plate of grilled food on a dark slate",
    caption: "Off the pass",
  },
  {
    src: "/images/plato/g3.jpg",
    alt: "A close shot of flames licking over oak logs in the hearth",
    caption: "First fire of the night",
  },
  {
    src: "/images/plato/g4.jpg",
    alt: "A row of wine glasses raised in a toast",
    caption: "Saturday, half past eight",
  },
  {
    src: "/images/plato/g5.jpg",
    alt: "A chef plating a dish on a long wooden pass",
    caption: "Lew plating up",
  },
  {
    src: "/images/plato/g6.jpg",
    alt: "A loaf of sourdough bread on a wooden board with a knife",
    caption: "Today's bread",
  },
  {
    src: "/images/plato/g7.jpg",
    alt: "A small plate of charcuterie and pickles on a marble table",
    caption: "Bar snacks, no menu",
  },
  {
    src: "/images/plato/g8.jpg",
    alt: "Two empty wine glasses resting on a worn oak table at the end of service",
    caption: "Last call",
  },
];

/**
 * GallerySection
 *
 * Eight photographs of the room and the kitchen, arranged as an
 * editorial mosaic. Hover lifts a small caption onto the image.
 */
export function GallerySection() {
  return (
    <section id="gallery" className="bg-espresso py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-[#e8a560] text-[0.7rem] sm:text-[0.78rem]">
            Inside the Kitchen
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Moments from the room
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            A handful of photographs from a typical week. None are styled.
            None are edited. The fire is exactly that orange.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {SHOTS.map((shot, i) => (
            <figure
              key={shot.src}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/35 transition-opacity duration-300 group-hover:bg-charcoal/15" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {shot.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
