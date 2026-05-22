import { Show, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FEATURED_STYLES, FOOTER_QUICK_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 rounded-[2rem] border border-border/60 bg-card px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-border/60 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="caps-sm text-sm font-semibold uppercase text-primary">Veseli Piksel</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Klasičan, privatan i predivno fokusiran AI stilski transfer.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Transformišite portrete i scene uz pažljivo odabrane vizuelne stilove, dok kompozicija,
              identitet subjekta i ukupan karakter slike ostaju u centru pažnje.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Show when="signed-out">
              <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                <Button type="button" className="gap-2 rounded-full px-5 py-3">
                  Započni u Studiju
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Button asChild className="gap-2 rounded-full px-5 py-3">
                <Link href="/studio" prefetch={false}>
                  Započni u Studiju
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
            </Show>
            <Button variant="outline" asChild className="rounded-full border-border/70 px-5 py-3">
              <Link href="#styles">Istražite Stilove</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-foreground">O nama</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Vrhunski studio za visoko-kvalitetnu stilizaciju slika sa pažljivo odabranim presetima,
              privatnim rezultatima i mirnim radnim tokom koji deluje uglađeno od otpremanja do konačnog izlaza.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Navigacija</p>
            <div className="mt-4 flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={link.href === "/studio" ? false : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Istaknuti stilovi</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FEATURED_STYLES.map((style) => (
                <span
                  key={style}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Veseli Piksel</p>
          <p>Privatno po defaultu. Pažljivo odabrano po dizajnu.</p>
        </div>
      </div>
    </footer>
  );
}
