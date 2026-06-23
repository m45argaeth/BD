"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Lightbulb,
  Shuffle,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { BIASES } from "@/lib/data/biases"
import type { Scenario } from "@/lib/data/scenarios"
import { getDailyScenario } from "@/lib/daily"
import { FUN_FACTS } from "@/lib/data/fun-facts"

export function Landing() {
  const { locale, t } = useI18n()
  const [daily, setDaily] = React.useState<Scenario | null>(null)
  const [fact, setFact] = React.useState<string | null>(null)

  React.useEffect(() => {
    setDaily(getDailyScenario())
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)][locale])
  }, [locale])

  return (
    <>
      <section className="container flex flex-col items-center gap-8 py-16 text-center sm:py-24">
        <Badge variant="secondary" className="gap-1.5">
          <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
        </Badge>
        <div className="space-y-5">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            {t.hero.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/playground">{t.hero.startTest}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/playground">
              <Shuffle /> {t.hero.randomScenario}
            </Link>
          </Button>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          {[t.hero.flowDecision, t.hero.flowBias, t.hero.flowConclusion].map(
            (label, i) => (
              <React.Fragment key={label}>
                <div className="rounded-xl border bg-card px-8 py-3 font-mono text-sm font-medium shadow-sm">
                  {label}
                </div>
                {i < 2 && (
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                )}
              </React.Fragment>
            ),
          )}
          <p className="mt-4 max-w-sm font-mono text-xs leading-relaxed text-muted-foreground">
            {t.hero.caption}
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-16 sm:py-20">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {t.sections.howTitle}
            </h2>
            <p className="text-muted-foreground">{t.sections.howSubtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.sections.steps.map((step) => (
              <Card key={step.title}>
                <CardContent className="space-y-2 p-6">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-16 sm:py-20 md:grid-cols-2">
        <Card className="flex flex-col justify-between">
          <CardContent className="space-y-4 p-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">
              {t.sections.libraryTeaserTitle}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.sections.libraryTeaserBody}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {BIASES.slice(0, 6).map((b) => (
                <Badge key={b.slug} variant="outline">
                  {b.name[locale]}
                </Badge>
              ))}
            </div>
            <Button asChild variant="secondary" className="mt-2 w-fit">
              <Link href="/library">
                {t.sections.browseLibrary} <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between">
          <CardContent className="space-y-4 p-8">
            <CalendarDays className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">
              {t.sections.dailyTitle}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.sections.dailyBody}
            </p>
            {daily && (
              <p className="rounded-xl border bg-muted/30 p-4 text-sm leading-relaxed">
                {daily.prompt[locale]}
              </p>
            )}
            <Button asChild className="mt-2 w-fit">
              <Link href="/playground">
                {t.sections.dailyCta} <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="border-t border-border/60 bg-muted/20">
        <div className="container flex flex-col items-center gap-4 py-16 text-center">
          <Lightbulb className="h-8 w-8 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t.sections.funFactTitle}
          </h2>
          <p className="max-w-2xl text-balance text-xl font-medium leading-relaxed">
            {fact ?? FUN_FACTS[0][locale]}
          </p>
        </div>
      </section>
    </>
  )
}
