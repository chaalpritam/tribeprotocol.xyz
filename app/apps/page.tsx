"use client";

import { motion, Variants } from "framer-motion";
import { 
  MessageCircle, 
  Camera, 
  Globe, 
  Play, 
  ArrowUpRight,
  Layout,
  Smartphone
} from "lucide-react";

const apps = [
  {
    name: "Tribe iOS",
    description: "A fast, decentralized microblogging experience. The flagship social app for Tribe Protocol on mobile.",
    type: "Twitter-like",
    icon: MessageCircle,
    platform: "iOS",
    link: "#",
    tag: "Native"
  },
  {
    name: "Tribe Insta",
    description: "Visual storytelling powered by Solana. Share your moments directly to the open social graph.",
    type: "Instagram-like",
    icon: Camera,
    platform: "iOS / Android",
    link: "#",
    tag: "Visual"
  },
  {
    name: "TribeApp.wtf",
    description: "The primary web interface for Tribe Protocol. Access your feed, manage your TID, and explore the network from any browser.",
    type: "Web Client",
    icon: Globe,
    platform: "Web",
    link: "https://tribeapp.wtf",
    tag: "Web"
  },
  {
    name: "Tribe Demo",
    description: "A sandbox application for developers to see Tribe SDK in action. Includes sample code and live protocol interactions.",
    type: "Developer Tool",
    icon: Play,
    platform: "Web",
    link: "#",
    tag: "Demo"
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
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:bg-zinc-200">
                    {app.tag}
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    {app.platform}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{app.name}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg mb-8 max-w-md">
                  {app.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-black/40 italic">
                    {app.type}
                  </span>
                  <a 
                    href={app.link}
                    className="flex items-center gap-2 font-bold text-sm bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                  >
                    Launch App <ArrowUpRight className="w-4 h-4" />
                  </a>
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
