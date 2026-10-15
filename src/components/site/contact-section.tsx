"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "5pm until late" },
  { day: "Wednesday", time: "12 to 2.30, 5pm until late" },
  { day: "Thursday", time: "12 to 2.30, 5pm until late" },
  { day: "Friday", time: "12 to 2.30, 5pm until late" },
  { day: "Saturday", time: "12 to 2.30, 5pm until late" },
  { day: "Sunday", time: "Closed" },
];

/**
 * ContactSection
 *
 * Contact information, opening hours, and a short "send us a note"
 * form. The map is a stylised SVG block rather than a live embed,
 * which keeps the page self-contained.
 */
export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    toast.success("Got it. We will get back to you within a day.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-ember text-[0.7rem] sm:text-[0.78rem]">
            Find Us
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
            Come say hello
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/75">
            We are tucked onto a side street in the Northern Quarter, three
            minutes from Market Street tram stop. If the door is closed, knock.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left: info + hours + map */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                icon={<MapPin className="h-5 w-5" />}
                title="Address"
                lines={["14 Holt Lane", "Northern Quarter", "Manchester M4 1AB"]}
              />
              <InfoCard
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                lines={["+44 161 555 0142", "Reservations and walk-ins"]}
              />
              <InfoCard
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                lines={["hello@emberandoak.co.uk", "For private hire and events"]}
              />
              <InfoCard
                icon={<Clock className="h-5 w-5" />}
                title="Service"
                lines={["Tue to Sat, 5pm until late", "Wed to Sat, 12 to 2.30pm"]}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-oak/15 bg-cream">
              <div className="border-b border-oak/15 px-5 py-3">
                <h3 className="font-serif-display text-lg font-semibold text-espresso">
                  Opening hours
                </h3>
              </div>
              <ul>
                {HOURS.map((row, i) => (
                  <li
                    key={row.day}
                    className={`flex items-center justify-between px-5 py-2.5 text-sm ${
                      i !== HOURS.length - 1 ? "border-b border-oak/10" : ""
                    }`}
                  >
                    <span className="font-medium text-espresso/85">
                      {row.day}
                    </span>
                    <span className="text-espresso/65">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stylised map */}
            <div
              aria-label="Map showing Ember and Oak on Holt Lane in the Northern Quarter"
              role="img"
              className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm border border-oak/15"
            >
              <svg
                viewBox="0 0 800 450"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <rect width="800" height="450" fill="#f1e8d8" />
                {/* streets */}
                {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                  <line
                    key={`v${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="450"
                    stroke="#d9c9a8"
                    strokeWidth="2"
                  />
                ))}
                {[60, 160, 260, 360, 460].map((y) => (
                  <line
                    key={`h${y}`}
                    x1="0"
                    y1={y}
                    x2="800"
                    y2={y}
                    stroke="#d9c9a8"
                    strokeWidth="2"
                  />
                ))}
                {/* park block */}
                <rect x="540" y="280" width="200" height="140" fill="#cdd4b1" />
                <rect x="40" y="80" width="120" height="120" fill="#e5d8be" />
                {/* main road */}
                <line
                  x1="0"
                  y1="230"
                  x2="800"
                  y2="230"
                  stroke="#b59a6a"
                  strokeWidth="8"
                />
                {/* pin */}
                <g transform="translate(360 215)">
                  <circle r="20" fill="#C8651A" opacity="0.18" />
                  <circle r="9" fill="#C8651A" />
                  <circle r="3.5" fill="#2A1F18" />
                </g>
                <text
                  x="390"
                  y="200"
                  fontFamily="Georgia, serif"
                  fontSize="14"
                  fill="#2A1F18"
                  fontWeight="600"
                >
                  Ember &amp; Oak
                </text>
                <text
                  x="390"
                  y="218"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill="#6B4226"
                >
                  Holt Lane
                </text>
              </svg>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-sm bg-cream p-6 shadow-sm sm:p-8">
            <h3 className="font-serif-display text-2xl font-semibold text-espresso">
              Send us a note
            </h3>
            <p className="mt-2 text-sm text-espresso/70">
              For bookings of more than six, private hire, press, or just to
              say something kind, drop us a line here.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Your name" htmlFor="c-name">
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Aisha Rahman"
                    className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                  />
                </FormField>
                <FormField label="Email" htmlFor="c-email">
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                  />
                </FormField>
              </div>
              <FormField label="Message" htmlFor="c-message">
                <textarea
                  id="c-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you need"
                  className="w-full resize-none border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                />
              </FormField>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-ember px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-espresso sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-sm bg-cream p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 text-ember">
          {icon}
        </span>
        <h3 className="font-serif-display text-lg font-semibold text-espresso">
          {title}
        </h3>
      </div>
      <div className="mt-3 space-y-0.5 text-sm text-espresso/75">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={htmlFor}
        className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-espresso/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
