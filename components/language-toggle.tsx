"use client"

import { LOCALES, useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="inline-flex items-center rounded-full border border-border p-0.5">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium uppercase transition-colors",
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  )
}
