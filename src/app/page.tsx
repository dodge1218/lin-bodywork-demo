import type { Metadata } from "next";
import { CheckCircle2, Clock3, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

const services = [
  {
    name: "Therapeutic Body Work (Massage + Acupressure)",
    durations: [
      { min: "30 min", price: "$40" },
      { min: "60 min", price: "$70" },
      { min: "90 min", price: "$110" },
    ],
    note: "Pressure and focus are adjusted to your comfort and tension areas.",
  },
  {
    name: "Foot Reflexology",
    durations: [
      { min: "30 min", price: "$35" },
      { min: "60 min", price: "$60" },
      { min: "90 min", price: "$90" },
    ],
    note: "Great for stress relief, circulation support, and post-work reset.",
  },
];

const concerns = [
  "Neck, shoulders, and lower-back tension from work",
  "Stress buildup that impacts sleep and focus",
  "Need a reliable recovery routine, not guesswork",
];

const outcomes = [
  "Custom pressure and pacing for your body",
  "Calming, clean environment with professional care",
  "Clear pricing before booking — no surprises",
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended. Walk-ins are welcome when therapists are available.",
  },
  {
    q: "What should I choose if I’m not sure?",
    a: "Start with 60 minutes of body work. Your therapist can tailor pressure and focus areas in-session.",
  },
  {
    q: "Do you offer acupressure?",
    a: "Yes. Acupressure can be integrated into body work based on your needs and comfort level.",
  },
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

      <section className="section pb-10">
        <div className="grid gap-6 rounded-[2rem] border border-emerald-100 bg-white/80 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              <Sparkles className="size-4" /> Therapeutic bodywork in Philadelphia
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Relax, refresh, and reset your body.</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Massage, acupressure-focused body work, and reflexology designed to reduce tension and help you feel better fast.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={telHref}>
                <Button>Call Now to Book</Button>
              </a>
              <a href="#services">
                <Button variant="outline">See Services & Pricing</Button>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-900">Transparent pricing</span>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-900">Walk-ins when available</span>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-900">Fast booking by phone</span>
            </div>
          </div>

          <Card className="border-emerald-100 bg-[#f7fdf9] p-6">
            <p className="text-sm font-semibold text-emerald-800">Today&apos;s quick booking path</p>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 text-emerald-700" />
                Call {SITE.phone}
              </li>
              <li className="flex gap-2">
                <Clock3 className="mt-0.5 size-4 text-emerald-700" />
                Pick 30, 60, or 90 minutes
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 text-emerald-700" />
                Visit {SITE.location}
              </li>
            </ol>
            <div className="mt-5 rounded-xl border border-emerald-200 bg-white p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Hours</p>
              <p className="mt-1">Mon–Sat: 10:00 AM – 10:00 PM</p>
              <p>Sunday: By appointment</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="why-us" className="section py-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-emerald-100 bg-white/80 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">What clients feel before treatment</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {concerns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 size-4 text-emerald-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-emerald-100 bg-white/80 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">What improves after treatment</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-emerald-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="text-3xl font-semibold text-slate-900">Services & Pricing</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Straightforward options so you can choose quickly and book confidently.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.name} className="border-emerald-100 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
              <div className="mt-4 space-y-2">
                {service.durations.map((d) => (
                  <div key={d.min} className="flex items-center justify-between rounded-xl border border-emerald-100 bg-[#f7fdf9] px-4 py-3">
                    <span className="text-slate-700">{d.min}</span>
                    <span className="text-lg font-semibold text-emerald-800">{d.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">{service.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="reviews" className="section py-0">
        <h2 className="text-3xl font-semibold text-slate-900">Client Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["The therapist was incredibly attentive and kind. I walked out feeling like a new person!", "Emily Watson"],
            ["From the moment I walked in, I felt welcomed and relaxed. My stress melted away.", "David Li"],
            ["Clean, calming space and expert hands. Easily one of the best massages I&apos;ve had in years.", "Sophia Kim"],
          ].map(([quote, name]) => (
            <Card key={name} className="border-emerald-100 bg-white p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700">“{quote}”</p>
              <p className="mt-3 text-sm font-medium text-slate-900">— {name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section pt-10">
        <h2 className="text-3xl font-semibold text-slate-900">FAQ</h2>
        <div className="mt-5 grid gap-3">
          {faqs.map((item) => (
            <Card key={item.q} className="border-emerald-100 bg-white p-5">
              <p className="font-semibold text-slate-900">{item.q}</p>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="booking" className="section pt-0">
        <Card className="border-emerald-200 bg-[#effaf4] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Call or text to book your session</h2>
              <p className="mt-3 text-slate-700">Fastest response by phone. We&apos;ll help you choose the right service and time.</p>
              <div className="mt-6 space-y-2 text-slate-700">
                <p className="flex items-center gap-2"><ShieldCheck className="size-4 text-emerald-700" /> Professional, attentive care</p>
                <p className="text-lg font-semibold text-slate-900">{SITE.phone}</p>
                <p>{SITE.location}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={telHref}><Button>Call Now</Button></a>
                <a href="#services"><Button variant="outline">Review Pricing</Button></a>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Why this page converts better</p>
              <ul className="mt-3 space-y-2">
                <li>• Offer + booking path is clear above the fold</li>
                <li>• Pricing is visible without extra clicks</li>
                <li>• Real trust signals near decision points</li>
                <li>• Single strong booking CTA (no noisy distractions)</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <a href={telHref} className="fixed inset-x-4 bottom-4 z-50 rounded-xl bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-xl md:hidden">
        Call Now • {SITE.phone}
      </a>
    </>
  );
}
