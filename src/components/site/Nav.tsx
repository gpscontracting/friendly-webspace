import logo from "@/assets/gps-logo.png.asset.json";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="GPS Contracting logo"
            width={56}
            height={52}
            className="h-11 w-auto"
          />
          <span className="font-display text-sm leading-tight sm:text-base">
            GPS Contracting
            <span className="block text-[0.62rem] tracking-[0.18em] text-muted-foreground">
              Fencing &amp; Land Management
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-sm bg-grad-green px-4 py-2 font-display text-xs tracking-[0.14em] text-primary-foreground shadow-hard transition-transform hover:-translate-y-0.5"
        >
          Free Quote
        </a>
      </div>
    </header>
  );
}
