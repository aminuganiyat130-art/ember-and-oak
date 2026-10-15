import { BrandMark } from "./brand-mark";
import { Instagram, Facebook, Twitter } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "The Room",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Tonight", href: "#specials" },
      { label: "The Menu", href: "#menu" },
      { label: "The Kitchen", href: "#team" },
    ],
  },
  {
    heading: "Visit",
    links: [
      { label: "Book a Table", href: "#reservation" },
      { label: "Find Us", href: "#contact" },
      { label: "Gallery", href: "#gallery" },
      { label: "Private Hire", href: "#contact" },
    ],
  },
];

/**
 * SiteFooter
 *
 * Brand mark, short brand line, navigation columns, opening hours,
 * and a thin copyright row. Sticks to the bottom of the viewport on
 * short pages thanks to the page-level flex column.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandMark onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
              A small wood-fired kitchen on a side street in the Northern
              Quarter, Manchester. Open Tuesday to Saturday.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-ember hover:text-ember"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-ember"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
              Hours
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
              <li>Tue to Sat · 5pm late</li>
              <li>Wed to Sat · 12 to 2.30</li>
              <li className="text-cream/55">Sun, Mon · Closed</li>
            </ul>
            <p className="mt-4 text-sm text-cream/80">
              14 Holt Lane, Northern Quarter
              <br />
              Manchester M4 1AB
            </p>
            <p className="mt-3 text-sm text-ember">
              +44 161 555 0142
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Ember &amp; Oak Kitchen Ltd. Registered in England, no. 10987654.
          </p>
          <p>
            Made in Manchester. Cooked over oak.
          </p>
        </div>
      </div>
    </footer>
  );
}
