"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CENTER_NAV_LINKS, HERO_VIDEO_SRC } from "@/lib/constants";

export function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

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
              <Button asChild className="home-btn-nav-primary">
                <Link href="/studio" prefetch={false}>
                  Studio
                </Link>
              </Button>
              <UserButton />
            </Show>
          </div>

          <div className="home-mobile-nav-actions">
            <Show when="signed-in">
              <UserButton />
            </Show>

            <button
              type="button"
              className="home-mobile-menu-button"
              aria-label={
                isMobileMenuOpen ? "Zatvori navigaciju" : "Otvori navigaciju"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="home-mobile-menu"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
              </span>
              {isMobileMenuOpen ? (
                <XIcon className="size-5" aria-hidden />
              ) : (
                <MenuIcon className="size-5" aria-hidden />
              )}
            </button>
          </div>

          <div
            id="home-mobile-menu"
            data-open={isMobileMenuOpen}
            className="home-mobile-menu"
          >
            <div className="home-mobile-menu-links">
              {CENTER_NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="home-mobile-menu-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="home-mobile-menu-actions">
              <Show when="signed-out">
                <SignInButton mode="modal" fallbackRedirectUrl="/studio">
                  <Button
                    type="button"
                    variant="outline"
                    className="home-mobile-menu-secondary"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                  <Button
                    type="button"
                    className="home-mobile-menu-primary"
                    onClick={closeMobileMenu}
                  >
                    Započni
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <Button asChild className="home-mobile-menu-primary">
                  <Link href="/studio" prefetch={false} onClick={closeMobileMenu}>
                    Studio
                  </Link>
                </Button>
              </Show>
            </div>
          </div>
        </nav>

        <div className="home-hero-copy">
          <h1 className="hero-title home-hero-title">
            <span className="block">
              Profesionalni{" "}
              <span className="text-theme-orange-gradient">AI Stilovi</span>
            </span>
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
      </div>
    </section>
  );
}
