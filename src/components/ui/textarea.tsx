import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-500 transition focus-visible:ring-2",
        className
      )}
      {...props}
    />
  );
}
