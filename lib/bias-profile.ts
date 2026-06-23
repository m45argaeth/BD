const KEY = "bd-bias-profile"

export type ProfileCounts = Record<string, number>

export function getProfile(): ProfileCounts {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as ProfileCounts) : {}
  } catch {
    return {}
  }
}

export function recordBias(slug: string): ProfileCounts {
  const next = { ...getProfile() }
  next[slug] = (next[slug] ?? 0) + 1
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* ignore */
  }
  return next
}

export function clearProfile(): void {
  try {
    window.localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
