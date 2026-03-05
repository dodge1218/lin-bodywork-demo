import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{SITE.name}</p>
          <p className="mt-2 text-sm text-slate-600">Therapeutic bodywork with transparent pricing and easy booking.</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900">Contact</p>
          <p className="mt-2">{SITE.phone}</p>
          <p>{SITE.location}</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900">Hours</p>
          <p className="mt-2">Mon–Sat: 10:00 AM – 10:00 PM</p>
          <p>Sunday: By appointment</p>
        </div>
      </div>
    </footer>
  );
}
