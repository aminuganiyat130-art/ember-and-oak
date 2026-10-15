"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./brand-mark";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our Story" },
  { href: "#specials", label: "Tonight" },
  { href: "#menu", label: "Menu" },
  { href: "#team", label: "Kitchen" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Find Us" },
] as const;

/**
 * SiteHeader
 *
 * Sticky top bar that fades from transparent over the hero into a
 * solid cream bar once the page is scrolled. On small screens the
 * nav collapses into a sheet that slides in from the right.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,31,24,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark onDark={!scrolled} />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.82rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-ember ${
                scrolled ? "text-espresso/80" : "text-cream/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservation"
          className={`hidden rounded-full px-6 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all sm:inline-flex lg:ml-4 ${
            scrolled
              ? "bg-ember text-cream hover:bg-oak"
              : "bg-cream/95 text-espresso hover:bg-ember hover:text-cream"
          }`}
        >
          Book a Table
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled || open
              ? "text-espresso hover:bg-oak/10"
              : "text-cream hover:bg-cream/15"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top bg-cream lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-200`}
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-oak/10 py-4 font-serif-display text-2xl text-espresso"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream"
          >
            Book a Table
          </a>
          <p className="mt-8 text-sm text-oak/80">
            14 Holt Lane, Northern Quarter
            <br />
            Manchester M4 1AB
          </p>
        </nav>
      </div>
    </header>
  );
}
