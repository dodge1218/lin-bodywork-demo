export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="grid size-9 place-items-center rounded-2xl border border-emerald-300/70 bg-emerald-100/70 text-emerald-900">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path d="M12 4c2.1 2.2 3 4 3 5.5A3 3 0 0 1 12 13a3 3 0 0 1-3-3.5C9 8 9.9 6.2 12 4Z" fill="currentColor" />
          <path d="M5 14c1.6 0 2.6 1.2 3.3 2.4.7-1.2 1.7-2.4 3.7-2.4 2 0 3 1.2 3.7 2.4.7-1.2 1.7-2.4 3.3-2.4-1 3.5-3.7 6-7 6s-6-2.5-7-6Z" fill="currentColor" opacity="0.9" />
        </svg>
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">Lin Body Work Spa</p>
          <p className="text-xs text-slate-600">Massage • Acupressure • Reflexology</p>
        </div>
      )}
    </div>
  );
}
