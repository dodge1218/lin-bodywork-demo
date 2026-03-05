import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Website, SEO, paid ads, social media, and email marketing services tailored to SMB growth goals.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight">Services built to drive bookings and revenue</h1>
      <p className="mt-4 max-w-3xl text-slate-600">We combine strategy, creative, and performance marketing to move prospects from first click to signed customer.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((service) => (
          <Card key={service.title} className="p-6">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-600">{service.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/get-started"><Button>{SITE.cta}</Button></Link>
      </div>
    </section>
  );
}
