import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { QuoteForm } from "@/components/site/QuoteForm";
import photoChimney from "@/assets/IMG-20210603-WA0052.jpg.asset.json";
import photoSolarNet from "@/assets/IMG-20221022-WA0004.jpg.asset.json";
import photoSolarPanels from "@/assets/IMG-20220912-WA0001.jpg.asset.json";
import photoGardenFence from "@/assets/IMG-20220327-WA0017.jpg.asset.json";

export const Route = createFileRoute("/bird-proofing")({
  head: () => ({
    meta: [
      {
        title: "Bird Proofing Services | GPS Contracting | Essex, Suffolk & Norfolk",
      },
      {
        name: "description",
        content:
          "Professional bird proofing for solar panels, chimneys, barns and industrial rooflines across Essex, Suffolk and Norfolk. Netting, spikes, guards and post-and-wire systems installed.",
      },
      {
        property: "og:title",
        content: "Bird Proofing Services | GPS Contracting | Essex, Suffolk & Norfolk",
      },
      {
        property: "og:description",
        content:
          "Solar panel, chimney and barn bird proofing across Essex, Suffolk and Norfolk. Netting, spikes and guards installed by GPS Contracting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirdProofing,
});

const solutions = [
  {
    title: "Solar panel netting",
    body: "Strong mesh fitted around solar arrays to stop birds nesting underneath without blocking airflow or affecting your panels.",
  },
  {
    title: "Chimney guards",
    body: "Stainless-steel cowls and guards fitted from a cherry picker to keep birds out of chimney pots while letting smoke escape safely.",
  },
  {
    title: "Post-and-wire systems",
    body: "Discreet tensioned wire for ledges, signs and commercial rooflines — humane, low-profile and effective.",
  },
  {
    title: "Spikes & deterrents",
    body: "Targeted spikes and bird-repellent systems for barns, warehouses and industrial units where roosting is causing problems.",
  },
];

const gallery = [
  { src: photoChimney.url, alt: "Chimney pot bird guard being fitted from a cherry picker" },
  { src: photoSolarNet.url, alt: "Solar panel bird proofing mesh being installed on a roof" },
  { src: photoSolarPanels.url, alt: "Solar panels protected with bird proofing mesh along the roof edge" },
  { src: photoGardenFence.url, alt: "New close board fence and round-top picket fence around a garden at sunset" },
];

function BirdProofing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-grad-steel" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="eyebrow">Bird proofing</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
            Stop birds nesting where they <span className="text-primary">shouldn't</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            GPS Contracting installs professional bird proofing across Essex, Suffolk and Norfolk.
            From solar panels and chimneys to barns and industrial rooflines, we keep your property
            clear without harming the birds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-sm bg-grad-green px-6 py-3 font-display tracking-[0.14em] text-primary-foreground shadow-hard transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
            </a>
            <Link
              to="/"
              className="rounded-sm border border-border bg-card/70 px-6 py-3 font-display tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Solutions</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">What we fit</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="surface-panel group rounded-sm p-6 transition-transform hover:-translate-y-1"
            >
              <div className="h-0.5 w-10 bg-grad-green" />
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Recent work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Bird proofing on site</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {gallery.map((g) => (
              <figure
                key={g.alt}
                className="overflow-hidden rounded-sm border border-border shadow-hard"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why GPS Contracting</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Done safely, done properly</h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Access equipment including cherry picker available</li>
              <li>Humane, legal deterrents — no harm to birds</li>
              <li>Solar panel work that protects your warranty</li>
              <li>Free site visits across Essex, Suffolk and Norfolk</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-xs text-muted-foreground">
          <p className="font-display tracking-[0.18em] text-foreground">GPS Contracting</p>
          <p>Fencing &middot; Bird proofing &middot; Land management — Essex, Suffolk &amp; Norfolk</p>
          <p>&copy; {new Date().getFullYear()} GPS Contracting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
