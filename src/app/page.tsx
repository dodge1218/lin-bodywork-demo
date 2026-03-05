import type { Metadata } from "next";
import { CheckCircle2, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional wellness services in Philadelphia with clear pricing, trusted reviews, and easy booking.",
};

const services = [
  { name: "Foot Reflexology", duration: "30 / 60 / 90 min", price: "$35 / $60 / $90" },
  { name: "Body Work", duration: "30 / 60 / 90 min", price: "$40 / $70 / $110" },
];

const concerns = [
  "Body tension from desk work and long shifts",
  "Persistent stress, poor sleep, and low energy",
  "Need for consistent recovery without guesswork",
];

const outcomes = [
  "Personalized pressure and focus areas every session",
  "Cleaner, calmer space designed for full reset",
  "Straightforward booking and no hidden pricing",
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: SITE.location,
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section">
        <div className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-white via-rose-50/30 to-amber-50 p-8 md:p-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
            <Sparkles className="size-4" /> Professional Wellness Services
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Relax, Refresh, Revitalize</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Premium wellness and therapeutic services tailored to your body. This demo redesign is built to help visitors understand both the problem and the solution in under 30 seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking"><Button>Book Appointment</Button></a>
            <a href="#services"><Button variant="outline">View Services & Pricing</Button></a>
          </div>
        </div>
      </section>

      <section id="why-us" className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold">What clients are feeling before treatment</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {concerns.map((item) => (
                <li key={item} className="flex items-start gap-2"><Clock3 className="mt-0.5 size-4 text-slate-400" />{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold">What changes after treatment</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-rose-600" />{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section id="services" className="section pt-0">
        <h2 className="text-3xl font-semibold">Services & Transparent Pricing</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Exact prices from your current site, presented in a cleaner conversion-focused format.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.name} className="p-6">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-slate-600">Duration: {service.duration}</p>
              <p className="mt-1 text-lg font-semibold text-rose-700">Price: {service.price}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="reviews" className="section pt-0">
        <h2 className="text-3xl font-semibold">Client Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["The therapist was incredibly attentive and kind. I walked out feeling like a new person!", "Emily Watson"],
            ["From the moment I walked in, I felt welcomed and relaxed. My stress melted away.", "David Li"],
            ["Clean, calming space and expert hands. Easily one of the best massages I've had in years.", "Sophia Kim"],
          ].map(([quote, name]) => (
            <Card key={name} className="p-6">
              <div className="mb-3 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-slate-700">“{quote}”</p>
              <p className="mt-3 text-sm font-medium">— {name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="booking" className="section pt-0">
        <Card className="p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Book your next reset</h2>
              <p className="mt-3 text-slate-600">Call or text for fastest booking. Walk-ins based on availability.</p>
              <div className="mt-6 space-y-2 text-slate-700">
                <p className="flex items-center gap-2"><ShieldCheck className="size-4 text-rose-600" /> Licensed professional care</p>
                <p>{SITE.phone}</p>
                <p>{SITE.location}</p>
              </div>
              <div className="mt-6">
                <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}><Button>Call to Book</Button></a>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Why this demo page is higher-converting</p>
              <ul className="mt-3 space-y-2">
                <li>• Clear value proposition above the fold</li>
                <li>• Pricing visible without hunting</li>
                <li>• Strong trust section with review proof</li>
                <li>• Booking CTA repeated at decision points</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
