import Link from "next/link";
import { NAV, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {SITE.name}
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-sky-700">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#booking">
          <Button size="sm">{SITE.cta}</Button>
        </a>
      </div>
    </header>
  );
}
