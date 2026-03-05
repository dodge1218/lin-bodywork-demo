"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  email: z.email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please share more details"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
    reset();
  };

  return (
    <Card className="p-6 md:p-8">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Business Name" {...register("business")} />
            {errors.business && <p className="mt-1 text-xs text-red-600">{errors.business.message}</p>}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Email" type="email" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <Input placeholder="Phone (optional)" {...register("phone")} />
          </div>
        </div>
        <div>
          <Textarea placeholder="Tell us about your goals..." {...register("message")} />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : compact ? "Book a Free Strategy Call" : "Submit"}
        </Button>
        {sent && <p className="text-sm text-emerald-700">Thanks! We&apos;ll follow up within 1 business day.</p>}
      </form>
    </Card>
  );
}
