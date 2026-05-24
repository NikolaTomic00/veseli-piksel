import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CENTER_NAV_LINKS, HERO_VIDEO_SRC } from "@/lib/constants";

const HERO_BEFORE_AFTER_IMAGES = [
  "/beforeafter1.png",
  "/beforeafter2.png",
  "/beforeafter3.png",
  "/beforeafter5.png",
] as const;

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <div className="hero-surface absolute inset-0 z-10" />
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-fade pointer-events-none absolute inset-0 z-20" />

      <div className="home-hero-stack">
        <nav className="hero-pill home-nav">
          <Link href="/" className="home-brand">
            <span className="relative mr-2 flex h-10 w-10 shrink-0 items-center justify-center overflow-visible">
              <Image
                src="/logo.png"
                alt="Veseli piksel"
                width={72}
                height={72}
                className="h-10 w-10 max-h-none max-w-none origin-left scale-[1.55] object-cover"
                priority
              />
            </span>
            <div className="min-w-0">
              <span className="caps-2xs block text-sm font-semibold text-foreground">
                Veseli Piksel
              </span>
            </div>
          </Link>

          <div className="home-nav-center">
            {CENTER_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hero-nav-link inline-flex items-center gap-1"
              >
                {link.label}
                {"chevron" in link && link.chevron ? (
                  <ChevronDownIcon className="home-nav-chevron" aria-hidden />
                ) : null}
              </Link>
            ))}
          </div>

          <div className="home-nav-auth">
            <Show when="signed-out">
              <SignInButton mode="modal" fallbackRedirectUrl="/studio">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="home-btn-signin"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                <Button type="button" className="home-btn-nav-primary">
                  Započni
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Button
                variant="outline"
                asChild
                className="home-btn-studio-outline"
              >
                <Link href="/studio" prefetch={false}>
                  Studio
                </Link>
              </Button>
              <UserButton />
            </Show>
          </div>
        </nav>

        <div className="home-hero-copy">
          <h1 className="hero-title home-hero-title">
            <span className="block">Profesionalni AI Stilovi</span>
            <span className="home-hero-tagline">
              Pretvori običnu fotografiju u moderan portret uz pažljivo kreirane AI stilove.
            </span>
          </h1>

          <p className="home-hero-lede">
            Bez podešavanja i komplikovanih promptova — fokus je samo na brzom i lepom rezultatu.
          </p>

          <div className="home-hero-ctas">
            <Show when="signed-out">
              <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                <Button type="button" className="home-btn-hero-primary py-5">
                  Pоčni potpuno besplatno
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Button asChild className="home-btn-hero-primary p-5">
                <Link href="/studio" prefetch={false}>
                  Otvori Studio
                </Link>
              </Button>
            </Show>
          </div>
        </div>

        <div className="home-demo-wrap py-6">
          <div className="home-demo-shift">
            <div className="home-demo-grid">
              {HERO_BEFORE_AFTER_IMAGES.map((src, index) => (
                <div
                  key={src}
                  className="hero-demo-glass home-demo-glass-shell home-demo-grid-card"
                >
                  <div className="hero-demo-glass-inner home-demo-inner">
                    <Image
                      src={src}
                      alt={`Primer stilizacije pre i posle ${index + 1}`}
                      width={1200}
                      height={1200}
                      className="home-demo-grid-image"
                      priority={index < 2}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
