"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/lib/i18n"
import { BIASES } from "@/lib/data/biases"

export function BiasLibrary() {
  const { locale, t } = useI18n()
  const tl = t.library
  const [q, setQ] = React.useState("")
  const [selected, setSelected] = React.useState<string | null>(null)

  const query = q.trim().toLowerCase()
  const filtered = BIASES.filter((b) => {
    if (!query) return true
    const hay = [
      b.name[locale],
      b.short[locale],
      b.why[locale],
      b.example[locale],
      b.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase()
    return hay.includes(query)
  })

  const active = selected
    ? BIASES.find((b) => b.slug === selected) ?? null
    : null

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {tl.title}
        </h1>
        <p className="mx-auto max-w-xl text-muted-foreground">{tl.subtitle}</p>
      </div>

      <div className="relative mx-auto max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={tl.searchPlaceholder}
          className="pl-11"
        />
      </div>

      {active && (
        <Card className="animate-fade-in border-primary/30">
          <CardContent className="space-y-5 p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {active.name[locale]}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelected(null)}
                aria-label={tl.close}
              >
                <X />
              </Button>
            </div>
            <p className="text-sm leading-relaxed">{active.short[locale]}</p>
            <Separator />
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tl.whyTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {active.why[locale]}
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tl.exampleTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {active.example[locale]}
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tl.tipsTitle}</h3>
              <ul className="space-y-1.5">
                {active.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="text-primary">{"\u2192"}</span>
                    <span>{tip[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">{tl.noResults}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <button
              key={b.slug}
              type="button"
              onClick={() => setSelected(b.slug)}
              className="rounded-xl border bg-card p-5 text-left transition-colors hover:border-primary hover:bg-secondary/40"
            >
              <h3 className="font-semibold">{b.name[locale]}</h3>
              <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {b.short[locale]}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
