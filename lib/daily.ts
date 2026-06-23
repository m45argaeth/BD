import { SCENARIOS } from "@/lib/data/scenarios"

/** Deterministic scenario of the day based on the local date. */
export function getDailyScenario(date: Date = new Date()) {
  const key =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate()
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0
  }
  return SCENARIOS[hash % SCENARIOS.length]
}
