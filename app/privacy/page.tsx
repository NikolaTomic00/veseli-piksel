import Link from "next/link";
import { ShieldCheckIcon } from "lucide-react";

const privacySections = [
  {
    title: "1. Uvod",
    body:
      "Ova Politika privatnosti objašnjava kako Veseli Piksel prikuplja, koristi i čuva podatke korisnika prilikom korišćenja sajta i usluga za AI stilizaciju fotografija.",
  },
  {
    title: "2. Koje podatke prikupljamo",
    body:
      "Možemo prikupljati osnovne podatke naloga, informacije koje dobrovoljno unesete, otpremljene fotografije, generisane rezultate i tehničke podatke neophodne za funkcionisanje platforme.",
  },
  {
    title: "3. Kako koristimo podatke",
    body:
      "Podatke koristimo za pružanje usluge, obradu generisanja slika, unapređenje performansi platforme, korisničku podršku, zaštitu naloga i ispunjavanje zakonskih obaveza.",
  },
  {
    title: "4. Fotografije i generisani sadržaj",
    body:
      "Vaše fotografije i generisani rezultati namenjeni su privatnom korišćenju u okviru vašeg naloga. Ne objavljujemo ih javno bez vaše dozvole, osim ako to nije neophodno zbog bezbednosti, zakona ili tehničke isporuke usluge.",
  },
  {
    title: "5. Deljenje sa trećim stranama",
    body:
      "Podatke možemo deliti samo sa pouzdanim partnerima i obrađivačima koji su neophodni za rad platforme, kao što su hosting, autentikacija, skladištenje datoteka i obrada AI zahteva, uz odgovarajuće mere zaštite.",
  },
  {
    title: "6. Čuvanje i bezbednost podataka",
    body:
      "Preduzimamo razumne tehničke i organizacione mere za zaštitu podataka od neovlašćenog pristupa, gubitka ili zloupotrebe. Ipak, nijedan sistem prenosa ili čuvanja podataka nije apsolutno bezbedan.",
  },
  {
    title: "7. Kolačići i analitika",
    body:
      "Sajt može koristiti kolačiće i slične tehnologije radi osnovne funkcionalnosti, sigurnosti, prijavljivanja korisnika i razumevanja načina korišćenja platforme.",
  },
  {
    title: "8. Vaša prava",
    body:
      "U zavisnosti od primenljivih propisa, možete imati pravo da zatražite pristup svojim podacima, ispravku, brisanje, ograničenje obrade ili prigovor na određene načine korišćenja podataka.",
  },
  {
    title: "9. Izmene politike",
    body:
      "Ovu politiku privatnosti možemo povremeno ažurirati kako bismo odražavali promene u uslugama, zakonskim obavezama ili načinu obrade podataka. Ažurirana verzija biće objavljena na ovoj stranici.",
  },
  {
    title: "10. Kontakt",
    body:
      "Ako imate pitanja u vezi sa privatnošću ili obradom podataka, možete nas kontaktirati putem stranice, podrške ili dostupnih kontakt kanala navedenih na sajtu.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-lg shadow-primary/5 sm:px-8 sm:py-10 lg:px-10">
          <div className="flex flex-col gap-6 border-b border-border/60 pb-8">
            <div className="flex items-center gap-3 text-primary">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/12">
                <ShieldCheckIcon className="size-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Privatnost
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-mono tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Politika privatnosti
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                Ovaj dokument predstavlja osnovni pregled načina na koji Veseli Piksel obrađuje
                podatke korisnika. Tekst je informativnog karaktera i služi kao početna,
                boilerplate politika privatnosti za platformu.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/"
                className="rounded-full border border-border/70 px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                Nazad na početnu
              </Link>
              <Link
                href="/studio"
                prefetch={false}
                className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Otvori studio
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {privacySections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/40 px-5 py-5 sm:px-6"
              >
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}