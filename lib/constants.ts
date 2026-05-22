import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ImagePlusIcon,
  PaletteIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

/** MIME types accepted for user source images (upload + generation API). */
export const ACCEPTED_SOURCE_IMAGE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

export const HIGHLIGHTS: { label: string; icon: LucideIcon }[] = [
  { label: "AI Magija", icon: Wand2Icon },
  { label: "Umetnički Stilovi", icon: SparklesIcon },
  { label: "Trenutno", icon: ZapIcon },
  { label: "Kreativno", icon: CameraIcon },
];

export const GALLERY_STATS = [
  { value: "50K+", label: "Slike kreirane" },
  { value: "10K+", label: "Zadovoljnih korisnika" },
  { value: "4.9/5", label: "Ocena korisnika" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery-1.png", alt: "Stilizovani portret na kiši" },
  { src: "/gallery-2.png", alt: "Stilizovana porodična scena u bašti" },
  { src: "/gallery-3.png", alt: "Stilizovana fantazijska scena sa pečurkama" },
  { src: "/gallery-4.png", alt: "Stilizovana scena pravljenja kafe" },
] as const;

export const HERO_VIDEO_SRC = "https://ik.imagekit.io/p6w6u5p5s/hero.mp4";

export const SHOWCASE_BG_VIDEO_SRC =
  "https://ik.imagekit.io/p6w6u5p5s/showcase.mp4";

export const CENTER_NAV_LINKS = [
  { label: "Početna", href: "/" },
  { label: "Cene", href: "#pricing" },
  { label: "Stilovi", href: "#styles", chevron: true },
  { label: "Kako radi", href: "#how-it-works" },
  { label: "Privatnost", href: "/privacy" },
  { label: "Česta pitanja", href: "#faq" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Cene", href: "#pricing" },
  { label: "Stilovi", href: "#styles" },
  { label: "Kako radi", href: "#how-it-works" },
  { label: "Studio", href: "/studio" },
] as const;

export const FEATURED_STYLES = [
  "Priča 3D",
  "Anime Cel",
  "Glina Render",
  "Pixart",
] as const;

export const WORKFLOW_STYLE_PREVIEW = [
  FEATURED_STYLES[0],
  FEATURED_STYLES[1],
  FEATURED_STYLES[2],
] as const;

export type MarketingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: MarketingTestimonial[] = [
  {
    text: "Ovaj radni tok potpuno je promenio koliko brzo možemo pretvoriti originalne fotografije u uglađene vizuale spremne za kampanje.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    name: "Briana Patton",
    role: "Menadžer operacija",
  },
  {
    text: "Interfejs je jasan, rezultati su dosledni, a uvođenje u naš tim bilo je iznenađujuće bez napora.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Bilal Ahmed",
    role: "IT menadžer",
  },
  {
    text: "Podrška je bila promišljena od samog početka, a proizvod već deluje mnogo doteranije od većine kreativnih AI alata.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    name: "Saman Malik",
    role: "Rukovodilac korisničke podrške",
  },
  {
    text: "Čuva suštinu naših izvornih slika dok svakom rezultatu daje uzdignutiji i umetnički doteran završetak.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Omar Raza",
    role: "Direktor",
  },
  {
    text: "Odmah smo uštedeli vreme kada je postao deo našeg radnog toka sa sadržajem, posebno za brza vizuelna istraživanja.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
    name: "Zainab Hussain",
    role: "Menadžer projekata",
  },
  {
    text: "Rezultati su dovoljno kvalitetni za prezentacije klijentima, što nam je pomoglo da brže pređemo od koncepta do odobrenja.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    name: "Aliza Khan",
    role: "Poslovni analitičar",
  },
  {
    text: "Omogućio je našem timu čišći način da eksperimentiše sa više pravaca bez ugrožavanja vernosti subjekta.",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80",
    name: "Farhan Siddiqui",
    role: "Direktor marketinga",
  },
  {
    text: "Iskustvo deluje vrhunsko od početka do kraja, a naši korisnici su odmah primetili skok u kvalitetu.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    name: "Sana Sheikh",
    role: "Menadžer prodaje",
  },
  {
    text: "Proizvod nam je pomogao da poboljšamo kvalitet i doslednost izlaza, dok smo timu ostavili prostora za brzo delovanje.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    name: "Hassan Ali",
    role: "Menadžer e-trgovine",
  },
];

export const TESTIMONIAL_COLUMNS = [
  TESTIMONIALS.slice(0, 3),
  TESTIMONIALS.slice(3, 6),
  TESTIMONIALS.slice(6, 9),
];

export type HowItWorksStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "Korak 1",
    title: "Otpremite sliku",
    body: "Počnite sa portretom, fotografijom kućnog ljubimca ili scenom koju već volite. Najbolje funkcionišu jasni subjekti i dobro osvetljenje.",
    icon: ImagePlusIcon,
  },
  {
    step: "Korak 2",
    title: "Izaberite stil",
    body: "Odaberite pažljivo odabran izgled poput Priča 3D, Anime Cel ili Glina Render bez pisanja uputstava ili podešavanja postavki.",
    icon: PaletteIcon,
  },
  {
    step: "Korak 3",
    title: "Pokrenite transformaciju",
    body: "Luma menjaju stil slike dok štiti kompoziciju, identitetske znake i male detalje koji su važni.",
    icon: SparklesIcon,
    featured: true,
  },
];
