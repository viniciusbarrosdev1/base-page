import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "default" | "inverted"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.18em] uppercase",
            tone === "inverted" ? "text-primary-foreground/70" : "text-primary"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl",
          tone === "inverted" ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-balance sm:text-lg",
            tone === "inverted" ? "text-primary-foreground/80" : "text-muted-foreground",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
