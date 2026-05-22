import { clerkPricingAppearance } from "@/lib/clerk-pricing-appearence";
import { PricingTable } from "@clerk/nextjs";

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="caps-sm text-sm font-semibold uppercase text-primary">Cene</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Jednostavni planovi za svakog kreatora
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Izaberite Free, Pro ili Studio. Nadogradite ili promenite bilo kada sa vašeg naloga.
          </p>
        </div>

        <div className="w-full rounded-[1.75rem] border border-border/60 bg-card/40 p-4 sm:p-6 lg:p-8">
          <PricingTable for="user" appearance={clerkPricingAppearance} />
        </div>
      </div>
    </section>
  );
}
