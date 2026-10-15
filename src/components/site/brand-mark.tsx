import Link from "next/link";

/**
 * BrandMark — the Ember & Oak wordmark.
 *
 * A small flame-and-leaf monogram sits next to the name set in
 * Playfair Display. The ampersand is tinted with the ember orange
 * so the mark reads as a single unit rather than three words.
 */
export function BrandMark({
  className = "",
  textClassName = "",
  onDark = false,
}: {
  className?: string;
  textClassName?: string;
  onDark?: boolean;
}) {
  const nameColor = onDark ? "text-cream" : "text-espresso";
  const subColor = onDark ? "text-cream/70" : "text-oak/80";

  return (
    <Link
      href="#home"
      aria-label="Ember and Oak, return to top"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative inline-flex h-11 w-11 items-center justify-center"
      >
        <svg
          viewBox="0 0 48 48"
          className="h-11 w-11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* outer oak leaf ring */}
          <path
            d="M24 2.5c4.7 3.2 7.6 8.3 7.6 14.1 0 5.3-2.5 9.7-7.6 12.6-5.1-2.9-7.6-7.3-7.6-12.6 0-5.8 2.9-10.9 7.6-14.1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-oak"
            fill="currentColor"
            fillOpacity="0.08"
          />
          {/* flame */}
          <path
            d="M24 13.5c2.4 2.7 4 5.6 4 9 0 2.6-1.4 4.6-4 5.8-2.6-1.2-4-3.2-4-5.8 0-3.4 1.6-6.3 4-9Z"
            fill="currentColor"
            className="text-ember"
          />
          <path
            d="M24 18.5c1.1 1.4 1.9 2.9 1.9 4.6 0 1.3-.7 2.3-1.9 3-1.2-.7-1.9-1.7-1.9-3 0-1.7.8-3.2 1.9-4.6Z"
            fill="currentColor"
            className="text-cream"
          />
          {/* base plate line */}
          <path
            d="M14 38.5h20"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-oak"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={`flex flex-col leading-none ${textClassName}`}>
        <span
          className={`font-serif-display text-[1.35rem] font-semibold tracking-tight ${nameColor}`}
        >
          Ember <span className="text-ember">&amp;</span> Oak
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-medium uppercase tracking-[0.32em] ${subColor}`}
        >
          Wood-fired Kitchen
        </span>
      </span>
    </Link>
  );
}
