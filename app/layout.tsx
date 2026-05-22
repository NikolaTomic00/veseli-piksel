import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";
import { clerkModalAppearance } from "@/lib/clerk-modal-appearance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veseli Piksel",
  description: "Premium AI studio za stilski transfer slika - pretvorite svoje fotografije u umetnost uz pomoć veštačke inteligencije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="dark">
      <body>
        <ClerkProvider appearance={clerkModalAppearance}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
