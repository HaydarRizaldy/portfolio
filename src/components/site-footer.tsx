import Link from "next/link";
import { Container } from "@/components/container";
import { Year } from "@/components/year";

const SITE = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

// Verified links only (LinkedIn and GitHub confirmed by the user).
const ELSEWHERE = [
  { href: "mailto:haydarrizaldyputera@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/haydar-rizaldy/", label: "LinkedIn" },
  { href: "https://github.com/HaydarRizaldy", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ink">
              Haydar Rizaldy<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Data &amp; technology professional — analytics, data engineering,
              and applied automation.
            </p>
          </div>

          <nav aria-label="Footer site map">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {SITE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2">
              {ELSEWHERE.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line/60 pt-6">
          <p className="text-xs text-muted">
            © <Year /> Haydar Rizaldy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
