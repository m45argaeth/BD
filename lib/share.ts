export async function copyText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text)
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let line = ""
  for (const word of words) {
    const test = line ? line + " " + word : word
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  return lines
}

export function exportResultPng(
  title: string,
  body: string,
  filename = "bias-detector.png",
): void {
  if (typeof document === "undefined") return
  const width = 1200
  const height = 630
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  ctx.fillStyle = "#0a0a0a"
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = "#fafafa"
  ctx.font = "600 64px Inter, system-ui, sans-serif"
  ctx.fillText(title, 80, 180)

  ctx.fillStyle = "#a3a3a3"
  ctx.font = "400 32px Inter, system-ui, sans-serif"
  let y = 270
  for (const line of wrapText(ctx, body, width - 160)) {
    ctx.fillText(line, 80, y)
    y += 48
  }

  ctx.fillStyle = "#737373"
  ctx.font = "500 26px Inter, system-ui, sans-serif"
  ctx.fillText("Bias Detector \u2014 bd-playground.vercel.app", 80, height - 70)

  canvas.toBlob((blob) => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  })
}
