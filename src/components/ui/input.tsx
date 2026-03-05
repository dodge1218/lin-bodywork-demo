import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none ring-sky-500 transition focus-visible:ring-2",
        className
      )}
      {...props}
    />
  );
}
