import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Right Start Media's mission to bring unforgettable businesses to more people through strategic marketing.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight">About Right Start Media</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Our mission is to help businesses offering unforgettable experiences reach more of the right audience and convert visitors into loyal customers.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card className="p-6"><h2 className="font-semibold">Audience-first strategy</h2><p className="mt-2 text-sm text-slate-600">We start with buyer intent and map messaging to each stage of the customer journey.</p></Card>
        <Card className="p-6"><h2 className="font-semibold">Creative that converts</h2><p className="mt-2 text-sm text-slate-600">Story-driven content that creates emotional buy-in and clear calls to action.</p></Card>
        <Card className="p-6"><h2 className="font-semibold">Transparent performance</h2><p className="mt-2 text-sm text-slate-600">Simple reporting dashboards with metrics that tie directly to pipeline and sales.</p></Card>
      </div>
      <div className="mt-10">
        <Link href="/get-started"><Button>{SITE.cta}</Button></Link>
      </div>
    </section>
  );
}
