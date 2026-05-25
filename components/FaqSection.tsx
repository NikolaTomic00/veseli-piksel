"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";

import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative my-20 bg-background">
      <div className="container z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[620px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1">Često Postavljana Pitanja</div>
          </div>

          <h2 className="mt-5 text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Sve što treba da znaš na{" "}
            <span className="text-theme-orange-gradient">jednom mestu</span>
          </h2>
          <p className="mt-5 text-center opacity-75">
            Odgovori na najčešća pitanja o generisanju slika, stilovima, privatnosti i
            korišćenju platforme.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card transition-colors duration-200",
                  isOpen ? "border-primary/70" : "border-border hover:border-primary/40",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-medium text-foreground sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      "size-5 shrink-0 text-primary transition-transform duration-200",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:px-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
