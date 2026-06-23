import { SCENARIOS } from "@/lib/data/scenarios"

/**
 * Deterministic scenario of the day. Cycles through the scenarios in order
 * based on the local calendar day, so there are no repeats until every
 * scenario has been shown once.
 */
export function getDailyScenario(date: Date = new Date()) {
  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  )
  const dayNumber = Math.floor(startOfDay.getTime() / 86_400_000)
  const len = SCENARIOS.length
  const index = ((dayNumber % len) + len) % len
  return SCENARIOS[index]
}
