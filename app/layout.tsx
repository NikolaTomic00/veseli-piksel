import type { Metadata } from "next";
import { srRS } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { clerkModalAppearance } from "@/lib/clerk-modal-appearance";

export const metadata: Metadata = {
  title: "Veseli Piksel",
  description:
    "Premium AI studio za stilski transfer slika - pretvorite svoje fotografije u umetnost uz pomoć veštačke inteligencije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="dark">
      <body>
        <ClerkProvider appearance={clerkModalAppearance} localization={srRS}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
