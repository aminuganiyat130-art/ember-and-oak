# Ember & Oak — Wood-fired Kitchen

A one-page restaurant website for a fictional wood-fired kitchen in Manchester's Northern Quarter. Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom brand tokens
- **UI**: shadcn/ui (New York style) + Lucide icons
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Notifications**: Sonner
- **Database**: Prisma (SQLite locally; swap for Postgres on Vercel)

## Brand

- **Name**: Ember & Oak
- **Tagline**: Wood-fired Kitchen
- **Palette**: warm cream, ember orange, deep oak brown, espresso charcoal, muted sage
- **Logo**: custom SVG monogram (oak leaf + flame) paired with a Playfair Display wordmark

## Sections

1. **Hero** — full-bleed cinematic hearth image with editorial headline
2. **About** — story block + three short notes (History, Room, Welcome)
3. **Specials** — four signature dishes with prices and dish blurbs
4. **Menu** — tabbed menu (Lunch / Dinner / Desserts / Drinks) with dotted-leader pricing
5. **Reservation** — booking form with toast confirmation
6. **Team** — four chef portraits with real short bios
7. **Gallery** — eight-image mosaic with hover captions
8. **Contact** — info cards, opening hours table, stylised SVG map, contact form
9. **Footer** — brand mark, hours, navigation, copyright

## Local development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at vercel.com/new (auto-detects Next.js).
3. Skip `DATABASE_URL` for the first deploy — the forms run client-side and show a toast confirmation. No DB needed.
4. Optional later: wire up real persistence with Vercel Postgres or Supabase, swap the Prisma provider from `sqlite` to `postgresql`, set `DATABASE_URL` in Vercel env vars, then `bun run db:push`.

## Notes

- All food, hero, and gallery photography is reused from the Plato HTML5 template (nunforest.com/plato) under fair use as a study reference.
- Chef portraits are AI-generated for demo purposes.
- Replace with your own brand assets before going to production.
