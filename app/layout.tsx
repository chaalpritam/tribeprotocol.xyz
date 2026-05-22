import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tribeprotocol.xyz"),
  title: {
    default: "Tribe Protocol — The Open Social Protocol on Solana",
    template: "%s · Tribe Protocol",
  },
  description:
    "Decentralized social on Solana. Own your identity, run a hub, fork the client. 12 Anchor programs, signed-envelope storage, gossip-synced hubs, and an Ephemeral Rollup for sub-50ms social actions.",
  keywords: [
    "Solana",
    "social protocol",
    "decentralized social",
    "Tribe",
    "Anchor",
    "Ephemeral Rollup",
    "self-sovereign identity",
    "TID",
    "gossip protocol",
  ],
  authors: [{ name: "Tribe Protocol" }],
  openGraph: {
    title: "Tribe Protocol — The Open Social Protocol on Solana",
    description:
      "Own your identity, run a hub, fork the client. Decentralized social on Solana with signed envelopes, gossip-synced hubs, and an Ephemeral Rollup.",
    url: "https://tribeprotocol.xyz",
    siteName: "Tribe Protocol",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribe Protocol",
    description:
      "The open social protocol on Solana. Own your identity, run a hub, fork the client.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white text-black selection:bg-primary/20 selection:text-black">
        {/* Floating Glass Navigation Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]">
          <div className="flex items-center justify-between rounded-full bg-[#f5f5f5]/60 p-2.5 backdrop-blur-md nav-pill-shadow border border-zinc-100/50 hover:bg-[#f5f5f5]/85 transition-all duration-300">
            <Link href="/" className="flex items-center gap-2 pl-4 font-black text-[18px] tracking-tight hover:opacity-80 transition-opacity">
              <span className="text-[20px] font-black text-black">tribe</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20 px-2.5 py-0.5 rounded-full bg-primary/5">
                protocol
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-1">
              <a href="/docs" className="px-4 py-2 text-[13px] font-bold text-zinc-500 hover:text-black transition-colors rounded-full hover:bg-black/5">
                Docs
              </a>
              <a href="/apps" className="px-4 py-2 text-[13px] font-bold text-zinc-500 hover:text-black transition-colors rounded-full hover:bg-black/5">
                Apps
              </a>
              <a href="/docs/api" className="px-4 py-2 text-[13px] font-bold text-zinc-500 hover:text-black transition-colors rounded-full hover:bg-black/5">
                Network
              </a>
              <a href="/docs/running-a-node" className="px-4 py-2 text-[13px] font-bold text-zinc-500 hover:text-black transition-colors rounded-full hover:bg-black/5">
                Node Setup
              </a>
            </nav>

            <a 
              href="/docs" 
              className="rounded-full bg-primary px-6 py-2.5 text-[13px] font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Get Started
            </a>
          </div>
        </header>

        <main className="flex-1 pt-12">
          {children}
        </main>

        {/* Minimal Premium Footer styled like tribeapp.wtf */}
        <footer className="border-t border-[#f0f0f0] bg-zinc-50/20 py-16">
          <div className="container mx-auto max-w-[1200px] px-8 flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tighter">tribe</span>
              <span className="text-xs font-bold opacity-30 uppercase tracking-widest">&copy; 2026 · MIT License</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-[#666]">
              <a href="/docs" className="hover:text-black transition-colors">Documentation</a>
              <a href="/apps" className="hover:text-black transition-colors">Ecosystem Apps</a>
              <a href="/docs/api" className="hover:text-black transition-colors">API Specs</a>
              <a
                href="https://github.com/chaalpritam/tribeeco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
