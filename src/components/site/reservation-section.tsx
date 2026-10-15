"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

/**
 * ReservationSection
 *
 * A form for booking a table. Front-end only; on submit we show a
 * confirmation toast and reset the fields. The form mirrors the
 * reservation block of the reference template.
 */
export function ReservationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error("Please add your name, email, date and time.");
      return;
    }
    setSubmitting(true);
    // Simulate async confirmation. In a real build this would post to /api/reservation.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks, we have your request. We will confirm by email within an hour.");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        notes: "",
      });
    }, 700);
  };

  return (
    <section id="reservation" className="relative bg-oak py-20 text-cream sm:py-28">
      <Image
        src="/images/plato/slide3.jpg"
        alt="A warm candlelit table set with wine glasses and bread"
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-charcoal/75"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="section-eyebrow text-[#e8a560] text-[0.7rem] sm:text-[0.78rem]">
              Book a Table
            </p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Come sit by the fire
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/80">
              Dinner service runs Tuesday to Saturday from five. Lunch is
              Wednesday to Saturday at noon. We hold a small section of the
              dining room back for walk-ins at the bar.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-cream/55">
                  Open
                </dt>
                <dd className="text-cream/90">
                  Tue to Sat, 5pm until late
                  <br />
                  Wed to Sat, 12 to 2.30pm
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-cream/55">
                  Closed
                </dt>
                <dd className="text-cream/90">
                  Sunday and Monday, and the first Tuesday of each month
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-cream/55">
                  Parties
                </dt>
                <dd className="text-cream/90">
                  Six or more: please call us on +44 161 555 0142 so we can plan the table.
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-sm bg-cream p-6 text-espresso shadow-2xl sm:p-8"
          >
            <h3 className="font-serif-display text-2xl font-semibold text-espresso">
              Reserve a table
            </h3>
            <p className="mt-2 text-sm text-espresso/70">
              We confirm every booking by email, usually within the hour.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="res-name">
                <input
                  id="res-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Aisha Rahman"
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                />
              </Field>
              <Field label="Email" htmlFor="res-email">
                <input
                  id="res-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                />
              </Field>
              <Field label="Phone" htmlFor="res-phone">
                <input
                  id="res-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Optional"
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                />
              </Field>
              <Field label="Guests" htmlFor="res-guests">
                <select
                  id="res-guests"
                  value={form.guests}
                  onChange={update("guests")}
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso focus:border-ember focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Date" htmlFor="res-date">
                <input
                  id="res-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={update("date")}
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso focus:border-ember focus:outline-none"
                />
              </Field>
              <Field label="Time" htmlFor="res-time">
                <select
                  id="res-time"
                  required
                  value={form.time}
                  onChange={update("time")}
                  className="w-full border-b border-oak/30 bg-transparent py-2 text-espresso focus:border-ember focus:outline-none"
                >
                  <option value="">Choose a time</option>
                  {[
                    "12:00", "12:30", "13:00", "13:30", "14:00",
                    "17:00", "17:30", "18:00", "18:30", "19:00",
                    "19:30", "20:00", "20:30", "21:00",
                  ].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Notes for the kitchen" htmlFor="res-notes">
                <textarea
                  id="res-notes"
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Allergies, celebrations, accessibility, anything we should know"
                  className="w-full resize-none border-b border-oak/30 bg-transparent py-2 text-espresso placeholder:text-espresso/40 focus:border-ember focus:outline-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ember px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-espresso disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Request a Table"}
            </button>
            <p className="mt-3 text-center text-xs text-espresso/55">
              No deposit needed for parties under six.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
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
