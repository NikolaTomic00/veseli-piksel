"use client";

import Link from "next/link";
import {
  ChevronDownIcon,
  RefreshCcwIcon,
  SparklesIcon,
  UploadIcon,
} from "lucide-react";

import {
  openAiImageModels,
  openAiImageModelLabels,
  type OpenAiImageModel,
} from "@/lib/openai-image-models";
import { stylePresets } from "@/lib/style-presets";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useStudioWorkbench } from "@/context/StudioWorkbenchContext";
import { GenerateButton, StylePresetCard } from "./workbench-ui";

export function StudioControlsPanel() {
  const {
    error,
    file,
    inputId,
    isGenerateDisabled,
    isLoading,
    quota,
    replaceFile,
    selectedCategory,
    selectedModel,
    selectedStyle,
    selectCategory,
    selectModel,
    selectStyle,
  } = useStudioWorkbench();

  return (
    <section className="studio-panel rounded-[2rem] border p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="studio-panel-inset flex size-[4.5rem] shrink-0 items-center justify-center rounded-[1.65rem] border text-primary">
          <UploadIcon className="size-8" />
        </div>

        <div className="pt-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.4rem]">
            Kreirajte stilizovani rezultat
          </h1>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-xl">
            Otpremite sliku, izaberite stil, i generišite novi rezultat.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 rounded-[1.35rem] border border-border/45 bg-background/25 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">
          <span className="tabular-nums text-lg font-semibold text-primary">
            {quota.remaining}
          </span>{" "}
          generacija preostalo
          <span className="font-normal text-muted-foreground">
            {" "}
            ({quota.used} od {quota.limit} iskorišćeno ovog meseca)
          </span>
        </p>
        {quota.remaining <= 0 ? (
          <Button className="text-sm font-medium" asChild>
            <Link href="/#pricing">Pogledajte planove</Link>
          </Button>
        ) : null}
      </div>

      <div className="mt-7">
        <p className="text-[1.05rem] font-semibold text-foreground sm:text-[1.2rem]">
          1. Izaberi stil
        </p>

        <div className="mt-4 relative">
          <select
            value={selectedCategory}
            onChange={(e) => {
              selectCategory(
                e.target.value as
                  | ""
                  | "animirani-karakteri"
                  | "portret"
                  | "profesionalna-profilna-slika",
              );
              selectStyle("");
            }}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto w-full appearance-none rounded-[1.2rem] border-border/35 bg-background/25 px-4 py-3 pr-11 font-medium focus:border-primary",
            )}
          >
            <option value="" className="bg-background text-foreground">
              -- Izaberi kategoriju --
            </option>
            <option
              value="animirani-karakteri"
              className="bg-background text-foreground"
            >
              Animirani Karakteri
            </option>
            <option value="portret" className="bg-background text-foreground">
              Portret
            </option>
            <option
              value="profesionalna-profilna-slika"
              className="bg-background text-foreground"
            >
              Poslovni Portret
            </option>
          </select>

          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        {selectedCategory && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stylePresets
              .filter((preset) => preset.category === selectedCategory)
              .map((preset) => (
                <StylePresetCard
                  key={preset.slug}
                  isSelected={preset.slug === selectedStyle}
                  label={preset.label}
                  onSelect={() => selectStyle(preset.slug)}
                  thumbnailAlt={preset.thumbnailAlt}
                  thumbnailPath={preset.thumbnailPath}
                />
              ))}
          </div>
        )}
      </div>

      <div className="studio-panel-inset mt-7 rounded-[1.8rem] border p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[1.05rem] font-semibold text-foreground sm:text-[1.2rem]">
            2. Otpremite sliku
          </p>

          {file ? (
            <Button
              variant="outline"
              size="sm"
              className="studio-pill gap-2 rounded-full px-3.5 py-1.5 text-xs"
              asChild
            >
              <label htmlFor={inputId} className="cursor-pointer">
                <RefreshCcwIcon className="size-4" />
                Izaberi drugu
              </label>
            </Button>
          ) : null}
        </div>

        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          onClick={(e) => {
            e.currentTarget.value = "";
          }}
          onChange={(e) => replaceFile(e.target.files?.[0] ?? null)}
        />

        <div className="mt-5 flex flex-col gap-4 rounded-[1.45rem] border border-border/35 bg-background/22 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              className="studio-primary-action rounded-full p-5 text-base font-semibold"
              asChild
            >
              <label htmlFor={inputId} className="cursor-pointer">
                {file ? "Promeni sliku" : "Izaberi sliku"}
              </label>
            </Button>

            <p className="max-w-xl text-lg text-muted-foreground">
              {file
                ? file.name
                : "Molim vas izaberite JPG, PNG ili WEBP format slike"}
            </p>
          </div>
        </div>
      </div>

      <div className="studio-panel-inset mt-7 rounded-[1.8rem] border p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[1.05rem] font-semibold text-foreground">
            3. Model
          </p>
          <SparklesIcon className="size-4 text-primary" />
        </div>

        <div className="mt-4 relative">
          <select
            value={selectedModel}
            onChange={(event) =>
              selectModel(event.target.value as OpenAiImageModel)
            }
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto w-full appearance-none rounded-[1.2rem] border-border/35 bg-background/25 px-4 py-3 pr-11 font-medium focus:border-primary",
            )}
          >
            {openAiImageModels.map((model) => (
              <option key={model} value={model}>
                {openAiImageModelLabels[model]}
              </option>
            ))}
          </select>

          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Prikazuju se samo modeli koji podržavaju editovanje slika, kako bi
          generisanje ostalo kompatibilno.
        </p>
      </div>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
        Prva verzija će biti generisana odmah. Kasnije je možete dodatno
        doraditi ako bude potrebno.
      </p>

      <GenerateButton disabled={isGenerateDisabled} isLoading={isLoading} />

      <p className="mt-5 text-center text-lg text-muted-foreground">
        Stilizacija je omogućena pomoću OpenAI image modela.
      </p>

      {error ? (
        <div className="mt-5 rounded-[1.3rem] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}
    </section>
  );
}
