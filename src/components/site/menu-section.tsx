"use client";

import { useState } from "react";
import Image from "next/image";

type Dish = {
  name: string;
  price: string;
  blurb: string;
  tag?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  lead: string;
  dishes: Dish[];
};

const MENU: MenuCategory[] = [
  {
    id: "lunch",
    label: "Lunch",
    lead: "Served Wednesday to Saturday, twelve until half past two.",
    dishes: [
      {
        name: "Wood-Grilled Mackerel Toast",
        price: "£9",
        blurb: "Line-caught mackerel, horseradish cream, pickled cucumber, on sourdough.",
      },
      {
        name: "Smoked Potato & Onion Tart",
        price: "£11",
        blurb: "Hot-smoked potato, soft onion, goat curd, dill oil.",
        tag: "Veg",
      },
      {
        name: "Salt Beef & Pickle Sandwich",
        price: "£13",
        blurb: "Eight-hour salt beef, mustard, pickled cucumber, on a soft milk roll.",
      },
      {
        name: "Charred Cauliflower & Lentils",
        price: "£12",
        blurb: "Whole baby cauliflower, puy lentils, brown butter, capers.",
        tag: "Veg",
      },
      {
        name: "Cider-Braised Mussels",
        price: "£14",
        blurb: "Cornish mussels, cider, garlic, soft herbs, with grilled sourdough.",
      },
      {
        name: "Ploughman's Plate",
        price: "£10",
        blurb: "Crabtree cheese, pickled onion, apple, oat biscuits, chutney.",
        tag: "Veg",
      },
    ],
  },
  {
    id: "dinner",
    label: "Dinner",
    lead: "Served Tuesday to Saturday, five in the afternoon until close.",
    dishes: [
      {
        name: "Ember-Roast Beetroot & Whey",
        price: "£11",
        blurb: "Whole beet roasted in embers, cultured whey, crème fraîche, dill.",
        tag: "Veg",
      },
      {
        name: "Smoked Cod Roe & Brown Shrimp",
        price: "£13",
        blurb: "Cured cod roe on toast, brown shrimp in brown butter, lemon.",
      },
      {
        name: "Whole Wood-Grilled Sea Bream",
        price: "£24",
        blurb: "Line-caught bream, samphire, burnt butter, green herb oil.",
      },
      {
        name: "Oak-Grilled Dry-Age Sirloin",
        price: "£26",
        blurb: "45-day sirloin, bone marrow butter, charred spring onion.",
      },
      {
        name: "Cider-Braised Pork Belly",
        price: "£19",
        blurb: "Slow braised belly, charred hispi, cider syrup, apple.",
      },
      {
        name: "Barley & Wild Mushroom Pot",
        price: "£16",
        blurb: "Pearl barley, girolles, chestnut mushrooms, parmesan stock.",
        tag: "Veg",
      },
      {
        name: "Sourdough Bread & Cultured Butter",
        price: "£5",
        blurb: "Two slices, cultured cream butter, smoked sea salt.",
        tag: "Veg",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    lead: "Three choices. Two are made over fire. One is not.",
    dishes: [
      {
        name: "Burnt Honey & Bay Tart",
        price: "£9",
        blurb: "Loose-set custard tart, burnt honey, bay leaf, toasted hazelnuts.",
        tag: "Veg",
      },
      {
        name: "Ember-Roast Stone Fruit",
        price: "£8",
        blurb: "Roasted apricot and plum, mascarpone, rosemary sugar, almond.",
        tag: "Veg",
      },
      {
        name: "Dark Chocolate & Olive Oil Ganache",
        price: "£9",
        blurb: "70% ganache, frantoio olive oil, sea salt, burnt sugar.",
        tag: "Veg",
      },
      {
        name: "Vanilla Soft Serve",
        price: "£6",
        blurb: "Soft serve, charred apricot jam, salted oat crumb.",
        tag: "Veg",
      },
      {
        name: "Selection of Northern Cheeses",
        price: "£11",
        blurb: "Three cheeses, oat biscuit, fig paste, celery.",
        tag: "Veg",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    lead: "Low intervention wines, small breweries, and a tight cocktail list.",
    dishes: [
      {
        name: "Lammidia 'Vino Bianco'",
        price: "£8 / £38",
        blurb: "Abruzzo, Italy. Citrus, herbs, a slight prickle. Wild yeast, no sulphur.",
      },
      {
        name: "Domaine des Cavarodes 'Rouge à Léa'",
        price: "£9 / £42",
        blurb: "Burgundy, France. Light, bright, just a touch of grip. Chill it.",
      },
      {
        name: "Sill Keynevör 'Hop River' IPA",
        price: "£6",
        blurb: "Manchester. Citrus peel, soft bitterness. Brewed three streets away.",
      },
      {
        name: "Ember Old Fashioned",
        price: "£12",
        blurb: "Rye, oak-smoked sugar, orange bitters, served over one big cube.",
      },
      {
        name: "Smoked Apple Spritz",
        price: "£10",
        blurb: "Cider brandy, smoked apple soda, lemon thyme. No alcohol on request.",
        tag: "Low",
      },
      {
        name: "Selection of Digestifs",
        price: "£7",
        blurb: "Calvados, marc de bourgogne, amaro, ask the bar.",
      },
    ],
  },
];

/**
 * MenuSection
 *
 * Tabbed menu that mirrors the four-course structure of the
 * reference template. Each row uses a dotted leader between dish
 * name and price, a small touch borrowed from old paper menus.
 */
export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const current = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <section id="menu" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: heading + image + tabs */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-eyebrow text-ember text-[0.7rem] sm:text-[0.78rem]">
              The Menu
            </p>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
              Cooked over fire,
              <span className="block italic text-oak">written by the season</span>
            </h2>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/plato/slide2.jpg"
                alt="A long wooden chef's table set for service with candles and glasses"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/15" />
            </div>

            <p className="mt-6 text-[0.95rem] leading-relaxed text-espresso/75">
              The list moves with what is good this week. If you do not see
              something you came for, ask the kitchen. There is usually a plate
              that did not make it onto the page.
            </p>
          </div>

          {/* Right: tabs + dishes */}
          <div>
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex flex-wrap gap-2 border-b border-oak/20 pb-4"
            >
              {MENU.map((cat) => {
                const isActive = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.id}`}
                    id={`tab-${cat.id}`}
                    onClick={() => setActive(cat.id)}
                    className={`rounded-full px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? "bg-ember text-cream"
                        : "bg-transparent text-espresso/70 hover:text-ember"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="mt-8"
            >
              <p className="mb-6 text-sm italic text-oak/80">
                {current.lead}
              </p>

              <ul className="space-y-5">
                {current.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-end">
                      <h3 className="font-serif-display text-lg font-semibold text-espresso">
                        {dish.name}
                      </h3>
                      <span className="leader" aria-hidden="true" />
                      <span className="font-serif-display text-lg font-semibold text-ember">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-espresso/70">
                      {dish.blurb}
                      {dish.tag && (
                        <span className="ml-2 inline-block rounded-full bg-sage/30 px-2 py-0.5 align-middle text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-oak">
                          {dish.tag}
                        </span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-10 border-t border-oak/15 pt-6 text-sm text-espresso/60">
                A 12.5% service charge goes to the kitchen and floor team. You
                are welcome to leave more, or not, on top.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
