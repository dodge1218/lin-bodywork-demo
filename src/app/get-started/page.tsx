import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Book a free strategy call and get a tailored digital growth plan for your business.",
};

export default function GetStartedPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight">Book a Free Strategy Call</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Share your goals and budget, and we&apos;ll recommend a practical roadmap with clear priorities.</p>
      <div className="mt-10 max-w-3xl">
        <ContactForm compact />
      </div>
    </section>
  );
}
