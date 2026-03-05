import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RESULTS, SITE, TESTIMONIALS } from "@/data/site";

export const metadata: Metadata = {
  title: "Results",
  description: "See sample outcomes and proof points from Right Start Media marketing engagements.",
};

export default function ResultsPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight">Results that compound over time</h1>
      <p className="mt-4 max-w-3xl text-slate-600">We focus on lead quality, conversion rates, and return on ad spend so growth is sustainable.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {RESULTS.map((result) => (
          <Card key={result.label} className="p-6">
            <p className="text-3xl font-bold text-sky-700">{result.metric}</p>
            <p className="mt-2 text-sm text-slate-600">{result.label}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} className="p-6">
            <p className="text-slate-700">“{t.quote}”</p>
            <p className="mt-3 text-sm font-medium">{t.name}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/get-started"><Button>{SITE.cta}</Button></Link>
      </div>
    </section>
  );
}
