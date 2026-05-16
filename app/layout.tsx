import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tribe Protocol",
  description: "A fully-owned, open social protocol on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
        <header className="sticky top-0 z-50 w-full glass border-b border-zinc-100">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
              <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white text-xs">T</div>
              <a href="/" className="hover:opacity-80 transition-opacity">Tribe Protocol</a>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-zinc-500">
              <a href="/docs" className="hover:text-black transition-colors relative group">
                Developers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </a>
              <a href="https://tribeapp.wtf" className="hover:text-black transition-colors relative group">
                Apps
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </a>
              <a href="/docs/api" className="hover:text-black transition-colors relative group">
                Network
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:inline-flex text-sm font-bold px-6 py-2.5 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                Run Node
              </a>
              <a href="/docs" className="text-sm font-bold px-6 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
                Read Docs
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-zinc-100 bg-zinc-50/50 py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 font-bold text-lg mb-6">
              <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center text-white text-[10px]">T</div>
              Tribe Protocol
            </div>
            <p className="text-zinc-400 text-sm mb-8">© 2026 Tribe Protocol. Built for the decentralized future on Solana.</p>
            <div className="flex items-center justify-center gap-8 text-sm font-medium text-zinc-400">
              <a href="https://x.com/tribeprotocol" className="hover:text-black transition-colors">Twitter</a>
              <a href="https://github.com/chaalpritam/tribeeco" className="hover:text-black transition-colors">GitHub</a>
              <a href="https://t.me/tribeprotocol" className="hover:text-black transition-colors">Telegram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
