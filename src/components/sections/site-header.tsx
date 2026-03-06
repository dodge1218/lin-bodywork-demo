import Link from "next/link";
import { NAV, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/logo";

export function SiteHeader() {
  const telHref = `tel:${SITE.phone.replace(/[^+\d]/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-[#f9fffc]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Lin Body Work Spa home">
          <BrandLogo />
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-emerald-700">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={telHref}>
          <Button size="sm">{SITE.cta}</Button>
        </a>
      </div>
    </header>
  );
}
