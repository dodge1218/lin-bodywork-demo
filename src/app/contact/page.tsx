import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Right Start Media to discuss your growth goals and marketing roadmap.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold tracking-tight">Questions? We&apos;re here to help.</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Tell us where you are now, where you want to be, and we&apos;ll send a practical plan.</p>
      <div className="mt-10 max-w-3xl">
        <ContactForm />
      </div>
    </section>
  );
}
