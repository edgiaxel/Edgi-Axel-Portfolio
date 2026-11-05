import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://edgiaxel.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edgi Axel | Web Developer & AI/ML Enthusiast",
    template: "%s | Edgi Axel",
  },
  description:
    "Professional portfolio of Edgi Axel Limandibrata. Software Engineering student at STMIK LIKMI specializing in modern web applications, local AI integrations, and creative technology.",
  keywords: [
    "Edgi Axel",
    "Edgi Axel Limandibrata",
    "Web Developer",
    "AI/ML Enthusiast",
    "Creative Technology",
    "Software Engineering",
    "Next.js",
    "React",
    "Bandung",
    "STMIK LIKMI",
  ],
  authors: [{ name: "Edgi Axel Limandibrata", url: siteUrl }],
  creator: "Edgi Axel Limandibrata",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Edgi Axel Portfolio",
    title: "Edgi Axel | Web Developer & AI/ML Enthusiast",
    description:
      "Professional portfolio of Edgi Axel Limandibrata. Software Engineering student at STMIK LIKMI specializing in modern web applications, local AI integrations, and creative technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgi Axel | Web Developer & AI/ML Enthusiast",
    description:
      "Professional portfolio of Edgi Axel Limandibrata. Software Engineering student at STMIK LIKMI specializing in modern web applications, local AI integrations, and creative technology.",
    creator: "@edgiaxel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-[#090d16] text-[#f8fafc] min-h-screen flex flex-col font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-black focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
