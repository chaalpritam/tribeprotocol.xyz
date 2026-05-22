"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageCircle,
  Camera,
  Globe,
  Play,
  ArrowUpRight,
  Layout,
  Smartphone,
} from "lucide-react";

type AppStatus = "live" | "scaffolding" | "coming-soon";

const apps: {
  name: string;
  description: string;
  type: string;
  icon: typeof Globe;
  platform: string;
  link?: string;
  tag: string;
  status: AppStatus;
}[] = [
  {
    name: "tribeapp.wtf",
    description: "The primary web client for Tribe Protocol. Sign in with a Solana wallet, manage your TID and .tribe username, and post to any hub.",
    type: "Web · Twitter-shaped",
    icon: Globe,
    platform: "Web",
    link: "https://tribeapp.wtf",
    tag: "Primary",
    status: "live"
  },
  {
    name: "Tribe",
    description: "The native Tribe iOS app — SwiftUI client with full read/write against the hub and ER. BLAKE3 + ed25519 signing via Apple CryptoKit; NaCl-box encrypted DMs.",
    type: "Native · iOS",
    icon: Smartphone,
    platform: "iOS",
    link: "https://github.com/chaalpritam/tribe",
    tag: "Native",
    status: "live"
  },
  {
    name: "tribe-ios",
    description: "Twitter-shaped SwiftUI reference client for Tribe Protocol. Microblogging timeline, follows, and signed envelopes — built on the same hub + ER stack as Tribe.",
    type: "Native · Twitter-shaped",
    icon: MessageCircle,
    platform: "iOS",
    link: "https://github.com/chaalpritam/tribe-ios",
    tag: "Client",
    status: "live"
  },
  {
    name: "Tribe Android",
    description: "Native Android client for Tribe Protocol — same hub, same signed envelopes, same social graph. Built to match the iOS app feature-for-feature.",
    type: "Native · Twitter-shaped",
    icon: Layout,
    platform: "Android",
    tag: "Native",
    status: "coming-soon"
  },
  {
    name: "Tribe Insta",
    description: "Native SwiftUI client, Instagram-shaped — photo grid, stories, reels. Sister to tribe-ios: same hub, same envelope format, different surface.",
    type: "Native · Instagram-shaped",
    icon: Camera,
    platform: "iOS",
    link: "https://github.com/chaalpritam/tribe-insta",
    tag: "Native",
    status: "scaffolding"
  },
  {
    name: "tribe-app (demo)",
    description: "Next.js demo UI shipped via `brew install tribe-app`. Point it at any hub with `tribe-app link <hub-url>` and explore the SDK in a browser.",
    type: "Web · Developer demo",
    icon: Play,
    platform: "Web · Homebrew",
    link: "https://github.com/chaalpritam/tribe-demo-app",
    tag: "Demo",
    status: "live"
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AppsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Ecosystem</span> Apps
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Explore the diverse range of applications building on the open social layer of Solana. From microblogging to visual storytelling.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {apps.map((app, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="group glass p-10 rounded-[48px] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-zinc-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-[100px] -mr-4 -mt-4 group-hover:bg-black transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-white transition-colors duration-500">
                  <app.icon className="w-8 h-8 text-black" />
                </div>
                
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:bg-zinc-200">
                    {app.tag}
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    {app.platform}
                  </span>
                  {app.status === "scaffolding" && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-bold uppercase tracking-wider text-amber-700 border border-amber-100">
                      Scaffolding
                    </span>
                  )}
                  {app.status === "coming-soon" && (
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-600 border border-zinc-200">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-bold mb-4">{app.name}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg mb-8 max-w-md">
                  {app.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-black/40 italic">
                    {app.type}
                  </span>
                  {app.status === "coming-soon" ? (
                    <span className="flex items-center gap-2 font-bold text-sm bg-zinc-100 text-zinc-400 px-6 py-3 rounded-full cursor-not-allowed">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={app.link}
                      target={app.link?.startsWith("http") ? "_blank" : undefined}
                      rel={app.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 font-bold text-sm bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                    >
                      {app.status === "scaffolding" ? "View Source" : "Open"}{" "}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[56px] bg-zinc-50 border border-zinc-200 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Want to build your own?</h2>
          <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
            The Tribe Protocol is open and permissionless. Use our SDK to launch your social app in days, not months.
          </p>
          <a 
            href="/docs" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-black text-white text-lg font-medium hover:bg-zinc-800 transition-all"
          >
            Read Developer Docs <Layout className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
