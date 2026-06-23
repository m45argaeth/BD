"use client"

import * as React from "react"
import {
  ArrowRight,
  BarChart3,
  Download,
  Link2,
  RotateCcw,
  Share2,
  Shuffle,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/lib/i18n"
import { SCENARIOS, type ScenarioOption } from "@/lib/data/scenarios"
import { BIASES } from "@/lib/data/biases"
import {
  clearProfile,
  getProfile,
  recordBias,
  type ProfileCounts,
} from "@/lib/bias-profile"
import { copyText, exportResultPng } from "@/lib/share"

const BIAS_MAP = new Map(BIASES.map((b) => [b.slug, b]))

function shuffle(options: ScenarioOption[]): ScenarioOption[] {
  const a = [...options]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

export function BiasQuiz() {
  const { locale, t } = useI18n()
  const tp = t.playground
  const [pointer, setPointer] = React.useState(0)
  const [selected, setSelected] = React.useState<string | null>(null)
  const [profile, setProfile] = React.useState<ProfileCounts>({})
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    setProfile(getProfile())
    try {
      const params = new URLSearchParams(window.location.search)
      const id = params.get("scenario")
      if (id) {
        const idx = SCENARIOS.findIndex((s) => s.id === id)
        if (idx >= 0) {
          setPointer(idx)
          return
        }
      }
      if (params.get("random") !== null) {
        setPointer(Math.floor(Math.random() * SCENARIOS.length))
      }
    } catch {
      /* ignore */
    }
  }, [])

  const scenario = SCENARIOS[pointer]
  const bias = BIAS_MAP.get(scenario.biasSlug)
  const isBiased = selected !== null && selected === scenario.biasedOptionId

  // Keep source order until mounted (avoids hydration mismatch), then
  // shuffle. Reshuffles only when the scenario changes, not on every
  // selection, so options don't jump around after answering.
  const displayOptions = React.useMemo(
    () => (mounted ? shuffle(scenario.options) : scenario.options),
    [mounted, scenario],
  )

  function choose(optionId: string) {
    if (selected) return
    setSelected(optionId)
    if (optionId === scenario.biasedOptionId) {
      setProfile(recordBias(scenario.biasSlug))
    }
  }

  function next() {
    setSelected(null)
    setPointer((p) => (p + 1) % SCENARIOS.length)
  }

  function random() {
    setSelected(null)
    setPointer(Math.floor(Math.random() * SCENARIOS.length))
  }

  function restart() {
    setSelected(null)
    setPointer(0)
    clearProfile()
    setProfile({})
  }

  async function onShare() {
    if (!bias) return
    const text =
      tp.shareTitle + ": " + bias.name[locale] + " \u2014 " + bias.short[locale]
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: tp.shareTitle, text })
      } else {
        await copyText(text)
        toast.success(tp.copied)
      }
    } catch {
      /* ignore */
    }
  }

  async function onCopyLink() {
    try {
      await copyText(window.location.href)
      toast.success(tp.linkCopied)
    } catch {
      /* ignore */
    }
  }

  function onExport() {
    if (!bias) return
    exportResultPng(bias.name[locale], bias.short[locale])
  }

  const profileEntries = Object.entries(profile).sort((a, b) => b[1] - a[1])
  const maxCount = profileEntries.length ? profileEntries[0][1] : 0
  const progress = ((pointer + 1) / SCENARIOS.length) * 100
  const progressStyle: React.CSSProperties = { width: progress + "%" }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {tp.title}
        </h1>
        <p className="text-muted-foreground">{tp.subtitle}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>
            {tp.progress} {pointer + 1} / {SCENARIOS.length}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={progressStyle}
          />
        </div>
      </div>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {scenario.prompt[locale]}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{tp.chooseHint}</p>
          <div className="grid gap-3">
            {displayOptions.map((opt) => {
              const isChosen = selected === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => choose(opt.id)}
                  disabled={Boolean(selected)}
                  className={
                    "rounded-xl border p-4 text-left text-sm transition-colors " +
                    (isChosen
                      ? "border-primary bg-secondary"
                      : selected
                        ? "border-border opacity-60"
                        : "border-border hover:border-primary hover:bg-secondary/60")
                  }
                >
                  {opt.label[locale]}
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {selected && bias && (
        <Card className="animate-fade-in border-primary/30">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant={isBiased ? "default" : "secondary"}>
                {isBiased ? tp.detectedBias : tp.avoidedBias}
              </Badge>
            </div>
            <CardTitle className="text-2xl">{bias.name[locale]}</CardTitle>
            <p className="text-sm font-medium">
              {isBiased ? tp.biasedNote : tp.awareNote}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {scenario.analysis[locale]}
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sm leading-relaxed">{bias.short[locale]}</p>
            <Separator />
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tp.whyTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {bias.why[locale]}
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tp.exampleTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {bias.example[locale]}
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold">{tp.tipsTitle}</h3>
              <ul className="space-y-1.5">
                {bias.tips.map((tip, i) => (
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
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="secondary" onClick={onShare}>
                <Share2 /> {tp.share}
              </Button>
              <Button size="sm" variant="secondary" onClick={onCopyLink}>
                <Link2 /> {tp.copyLink}
              </Button>
              <Button size="sm" variant="secondary" onClick={onExport}>
                <Download /> {tp.exportPng}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={next}>
          {tp.next} <ArrowRight />
        </Button>
        <Button variant="outline" onClick={random}>
          <Shuffle /> {tp.random}
        </Button>
        <Button variant="ghost" onClick={restart}>
          <RotateCcw /> {tp.restart}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="h-5 w-5" /> {tp.profileTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {profileEntries.length === 0 ? (
            <p className="text-sm text-muted-foreground">{tp.profileEmpty}</p>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {tp.mostFrequent}
              </p>
              {profileEntries.map(([slug, count]) => {
                const b = BIAS_MAP.get(slug)
                if (!b) return null
                const pct = maxCount ? (count / maxCount) * 100 : 0
                const barStyle: React.CSSProperties = { width: pct + "%" }
                return (
                  <div key={slug} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{b.name[locale]}</span>
                      <span className="text-muted-foreground">
                        {count} {tp.times}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={barStyle} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <p className="text-xs text-muted-foreground">{tp.profileNote}</p>
        </CardContent>
      </Card>
    </div>
  )
}
