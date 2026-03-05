import type { Metadata } from "next";
import { CheckCircle2, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

const services = [
  { name: "Therapeutic Body Work (Massage + Acupressure)", duration: "30 / 60 / 90 min", price: "$40 / $70 / $110" },
  { name: "Foot Reflexology", duration: "30 / 60 / 90 min", price: "$35 / $60 / $90" },
];

const concerns = [
  "Body tension from desk work and long shifts",
  "Persistent stress, poor sleep, and low energy",
  "Need consistent recovery without guesswork",
];

const outcomes = [
  "Personalized pressure and focus areas every session",
  "Calming, clean space designed for a full reset",
  "Clear pricing + simple booking (call/text)",
];

export default function Home() {
  const telHref = `tel:${SITE.phone.replace(/[^+\d]/g, "")}`;

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
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-b from-[#CFEEDA] via-[#A4D2C7] to-[#5FB39E] p-8 md:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/35 px-3 py-1 text-sm font-medium text-[#062A3A]">
            <Sparkles className="size-4" /> Calm body work • massage • acupressure
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#062A3A] md:text-6xl">Lin Body Work Spa</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#062A3A]/80">
            Relax, refresh, and reset. Therapeutic body work with optional acupressure focus — plus foot reflexology — in a clean, calming space.
          </p>

          <div className="mt-6">
            <div
              className="inline-block text-3xl font-black leading-none text-white md:text-5xl"
              style={{ WebkitTextStroke: "2px #062A3A", textShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
            >
              {SITE.phone}
            </div>
            <div className="mt-2 text-sm font-medium text-[#062A3A]/80">Call now • Walk-ins welcome (based on availability)</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telHref}>
              <Button>Call Now</Button>
            </a>
            <a href="#services">
              <Button variant="outline">View Services & Pricing</Button>
            </a>
          </div>
        </div>
      </section>

      <section id="why-us" className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-emerald-100/60 bg-white/70 p-6">
            <h2 className="text-2xl font-semibold text-[#062A3A]">What clients feel before treatment</h2>
            <ul className="mt-4 space-y-3 text-[#062A3A]/75">
              {concerns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 size-4 text-[#2F6B63]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-emerald-100/60 bg-white/70 p-6">
            <h2 className="text-2xl font-semibold text-[#062A3A]">What changes after treatment</h2>
            <ul className="mt-4 space-y-3 text-[#062A3A]/75">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-[#2F6B63]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section id="services" className="section pt-0">
        <h2 className="text-3xl font-semibold text-[#062A3A]">Services & Transparent Pricing</h2>
        <p className="mt-3 max-w-2xl text-[#062A3A]/75">
          Clear options, straightforward pricing, and a calm experience from first click to appointment.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.name} className="border-emerald-100/60 bg-white/70 p-6">
              <h3 className="text-xl font-semibold text-[#062A3A]">{service.name}</h3>
              <p className="mt-2 text-[#062A3A]/75">Duration: {service.duration}</p>
              <p className="mt-1 text-lg font-semibold text-[#2F6B63]">Price: {service.price}</p>
            </Card>
          ))}
        </div>

        <p className="mt-5 text-sm text-[#062A3A]/70">
          Note: Acupressure can be incorporated into body work sessions depending on client preference and therapist assessment.
        </p>
      </section>

      <section id="reviews" className="section pt-0">
        <h2 className="text-3xl font-semibold text-[#062A3A]">Client Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["The therapist was incredibly attentive and kind. I walked out feeling like a new person!", "Emily Watson"],
            ["From the moment I walked in, I felt welcomed and relaxed. My stress melted away.", "David Li"],
            ["Clean, calming space and expert hands. Easily one of the best massages I've had in years.", "Sophia Kim"],
          ].map(([quote, name]) => (
            <Card key={name} className="border-emerald-100/60 bg-white/70 p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FFD77A] text-[#FFD77A]" />
                ))}
              </div>
              <p className="text-[#062A3A]/90">“{quote}”</p>
              <p className="mt-3 text-sm font-medium text-[#062A3A]">— {name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="booking" className="section pt-0">
        <Card className="border-emerald-100/60 bg-white/70 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-[#062A3A]">Call / text to book</h2>
              <p className="mt-3 text-[#062A3A]/75">Fastest booking by phone. Walk-ins welcome based on availability.</p>
              <div className="mt-6 space-y-2 text-[#062A3A]/85">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#2F6B63]" /> Licensed professional care
                </p>
                <p className="text-lg font-semibold text-[#062A3A]">{SITE.phone}</p>
                <p>{SITE.location}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={telHref}>
                  <Button>Call Now</Button>
                </a>
                <a href="#services">
                  <Button variant="outline">See Pricing</Button>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white/40 p-5 text-sm text-[#062A3A]/85">
              <p className="font-semibold text-[#062A3A]">Quick visitor path</p>
              <ul className="mt-3 space-y-2">
                <li>• See services + pricing</li>
                <li>• Trust signal from reviews</li>
                <li>• Call/text to book</li>
                <li>• Walk-in if there’s availability</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
