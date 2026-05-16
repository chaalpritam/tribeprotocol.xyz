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
  title: "TribeEco Protocol",
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
      <body className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-zinc-200">
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
              <div className="w-6 h-6 rounded-full bg-black" />
              <a href="/">TribeEco</a>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
              <a href="/docs" className="hover:text-black transition-colors">Developers</a>
              <a href="#" className="hover:text-black transition-colors">Apps</a>
              <a href="#" className="hover:text-black transition-colors">Network</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors">
                Run Node
              </a>
              <a href="/docs" className="text-sm font-medium px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors">
                Read Docs
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-zinc-200 bg-zinc-50 py-12 text-center text-zinc-500 text-sm">
          <p>© 2026 TribeEco Protocol. Built on Solana.</p>
        </footer>
      </body>
    </html>
  );
}
