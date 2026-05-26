import { ImagePlusIcon, PaletteIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/GridBackground";
import { HOW_IT_WORKS_STEPS, WORKFLOW_STYLE_PREVIEW } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <GridBackground className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-pill caps-md inline-flex items-center rounded-full px-4 py-2 text-xs font-medium uppercase text-primary">
            Kako radi
          </div>

          <h2 className="mt-6 font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Od originalne fotografije do izabranog stila.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Tri brza koraka do savršene fotografije. Najbolji promptovi koji
            daju najlepše fotografije.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="grid gap-6 lg:col-span-7">
            <article className="workflow-panel group relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8">
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-primary">
                      {HOW_IT_WORKS_STEPS[0].step}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                      {HOW_IT_WORKS_STEPS[0].title}
                    </h3>
                  </div>
                  <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <ImagePlusIcon className="size-6" />
                  </div>
                </div>

                <div className="grid flex-1 gap-5 sm:grid-cols-[0.9fr_1fr] sm:items-start">
                  <div className="relative aspect-4/5 min-h-[13rem] overflow-hidden rounded-[1.5rem] border border-border/60 bg-card">
                    <Image
                      src="/original.png"
                      alt="Primer originalne slike"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                  </div>

                  <div className="flex h-full items-center">
                    <p className="text-base leading-7 text-muted-foreground">
                      {HOW_IT_WORKS_STEPS[0].body}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="workflow-panel relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8">
              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium tracking-wide text-primary">
                      {HOW_IT_WORKS_STEPS[1].step}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                      {HOW_IT_WORKS_STEPS[1].title}
                    </h3>
                  </div>
                  <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <PaletteIcon className="size-6" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {WORKFLOW_STYLE_PREVIEW.map((style, index) => (
                    <div
                      key={style}
                      className={cn(
                        "rounded-[1.5rem] border border-border/60 px-4 py-4",
                        index === 0
                          ? "bg-secondary shadow-lg shadow-primary/10"
                          : "bg-card",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground">
                          {style}
                        </p>
                        {index === 0 ? (
                          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                            Izabrano
                          </span>
                        ) : (
                          <span className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground">
                            Izaberi
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {HOW_IT_WORKS_STEPS[1].body}
                </p>
              </div>
            </article>
          </div>

          <article className="workflow-panel workflow-panel-featured relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-5">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[2].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[2].title}
                  </h3>
                </div>
                <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <SparklesIcon className="size-6" />
                </div>
              </div>

              <div className="flex flex-1 flex-col rounded-[1.75rem] border border-border/60 bg-card p-5">
                <div className="relative min-h-[17rem] flex-1 overflow-hidden rounded-[1.75rem] border border-border/60 bg-card">
                  <Image
                    src="/storybook-example.png"
                    alt="Primer storybook AI renderovanja"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="caps-sm text-sm uppercase text-muted-foreground">
                      Obrada slike
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      AI renderovanje
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="pointer-events-none rounded-full shadow-lg shadow-primary/20"
                    tabIndex={-1}
                    type="button"
                  >
                    AI renderovanje
                  </Button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="h-3 overflow-hidden rounded-full bg-secondary/70">
                    <div className="h-full w-[78%] rounded-full bg-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    78% završeno
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </GridBackground>
  );
}
