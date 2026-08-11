import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { QuoteForm } from "@/components/site/QuoteForm";
import heroPanel from "@/assets/20250505_113833.jpg.asset.json";
import photoDriver from "@/assets/20250917_085444.jpg.asset.json";
import photoMachine from "@/assets/20240712_085607.jpg.asset.json";
import photoFieldGate from "@/assets/20240510_141154.jpg.asset.json";
import photoGardenFence from "@/assets/IMG-20220327-WA0017.jpg.asset.json";
import photoChimney from "@/assets/IMG-20210603-WA0052.jpg.asset.json";
import photoSolarNet from "@/assets/IMG-20221022-WA0004.jpg.asset.json";
import photoSolarPanels from "@/assets/IMG-20220912-WA0001.jpg.asset.json";
import logo from "@/assets/gps-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "GPS Contracting | Fencing Contractors in Essex, Suffolk & Norfolk",
      },
      {
        name: "description",
        content:
          "Professional fencing contractors covering Essex, Suffolk and Norfolk. Post & rail, stock and deer fencing, bird proofing and land management. Free quotes.",
      },
      {
        property: "og:title",
        content: "GPS Contracting | Fencing Contractors in Essex, Suffolk & Norfolk",
      },
      {
        property: "og:description",
        content:
          "Agricultural, domestic and commercial fencing, bird proofing and land management. Reliable service, quality work, free quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Post & Rail",
    body: "Machine-driven post and rail for paddocks, driveways and boundaries. Straight lines, tight joints, built to last.",
  },
  {
    title: "Stock Fencing",
    body: "Tensioned stock netting with timber strainers — sheep, cattle and horses kept exactly where they should be.",
  },
  {
    title: "Deer Fencing",
    body: "Tall deer and rabbit-proof lines for woodland, plantations and crop protection across difficult ground.",
  },
  {
    title: "Domestic Fencing",
    body: "Close board, feather edge, panels and gates for gardens and smallholdings, finished neatly to the last cap.",
  },
  {
    title: "Bird Proofing",
    body: "Netting, spikes and post-and-wire systems for barns, industrial units and commercial rooflines.",
    link: "/bird-proofing",
  },
  {
    title: "Land Management",
    body: "Clearance, tracks, hedge lines and general estate work to keep land tidy, safe and workable.",
  },
];

const gallery = [
  { src: photoDriver.url, alt: "Tracked post driver knocking in a timber strainer post" },
  { src: photoMachine.url, alt: "Post driving machine working alongside a pole and temporary fencing" },
  { src: heroPanel.url, alt: "New arched-top close board fence panels in a garden" },
  { src: photoFieldGate.url, alt: "Five-bar timber field gate hung on a gravel driveway entrance" },
  { src: photoGardenFence.url, alt: "New close board fence and round-top picket fence around a garden at sunset" },
  { src: photoChimney.url, alt: "Chimney pot bird guard being fitted from a cherry picker" },
  { src: photoSolarNet.url, alt: "Solar panel bird proofing mesh being installed on a roof" },
  { src: photoSolarPanels.url, alt: "Solar panels protected with bird proofing mesh along the roof edge" },
];

const counties = ["Essex", "Suffolk", "Norfolk"];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroPanel.url}
          alt="New arched close board fence panels installed in an Essex garden"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="eyebrow">Essex &middot; Suffolk &middot; Norfolk</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Fencing done <span className="text-primary">properly</span>, first time
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            GPS Contracting installs agricultural, domestic and commercial fencing,
            bird proofing and land management. Same work ethic, same commitment to
            doing things right — from a single gateway to miles of stock line.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-sm bg-grad-green px-6 py-3 font-display tracking-[0.14em] text-primary-foreground shadow-hard transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              className="rounded-sm border border-border bg-card/70 px-6 py-3 font-display tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
            >
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {[
            ["Machine driven posts", "Faster, straighter, firmer than hand work"],
            ["Agricultural to domestic", "Farms, estates, businesses and homes"],
            ["Free, honest quotes", "Priced on site, no surprises after"],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-base text-foreground">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Every line, every gateway</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-panel group rounded-sm p-6 transition-transform hover:-translate-y-1"
            >
              <div className="h-0.5 w-10 bg-grad-green" />
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-card/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Recent work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">On the ground</h2>
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

      {/* About */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Run by Grant, on site daily</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            GPS Contracting grew out of years of hands-on estate and land work
            (previously SkyeSafe Estate Management). Today the focus is fencing, bird
            proofing and land management across East Anglia — the same work ethic and
            the same commitment to doing things properly, just a new chapter.
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            You deal with the person doing the work. No call centres, no subbing it
            out, no vanishing halfway through a job.
          </p>
        </div>
        <img
          src={logo.url}
          alt="GPS Contracting logo"
          width={260}
          height={240}
          loading="lazy"
          className="mx-auto w-40 md:w-56"
        />
      </section>

      {/* Areas */}
      <section id="areas" className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Areas covered</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {counties.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-border bg-secondary px-5 py-2.5 font-display tracking-[0.14em]"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
            Based in Essex and working throughout Suffolk and Norfolk. Just outside the
            patch? Ask anyway — larger jobs travel.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Get a free quote</h2>
            <p className="mt-5 text-muted-foreground">
              Send over a few details about the job and we'll get straight back to you
              to arrange a look and a price.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-display tracking-[0.16em] text-muted-foreground">
                  Email
                </dt>
                <dd>
                  <a
                    className="text-primary hover:underline"
                    href="mailto:Gpscontracting@outlook.com"
                  >
                    Gpscontracting@outlook.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display tracking-[0.16em] text-muted-foreground">
                  Facebook
                </dt>
                <dd>
                  <a
                    className="text-primary hover:underline"
                    href="https://www.facebook.com/profile.php?q=GPS%20Contracting"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @GPS Contracting
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display tracking-[0.16em] text-muted-foreground">
                  Hours
                </dt>
                <dd className="text-muted-foreground">Mon–Sat, 7am–6pm</dd>
              </div>
            </dl>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-xs text-muted-foreground">
          <p className="font-display tracking-[0.18em] text-foreground">
            GPS Contracting
          </p>
          <p>Fencing &middot; Bird proofing &middot; Land management — Essex, Suffolk &amp; Norfolk</p>
          <p>&copy; {new Date().getFullYear()} GPS Contracting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
