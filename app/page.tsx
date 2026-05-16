"use client";

import { motion } from "framer-motion";
import { 
  Network, 
  Key, 
  Database, 
  Zap, 
  UserCircle,
  Code,
  ArrowRight
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-sm font-medium mb-8 text-zinc-600 border border-zinc-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            v0.1.0 Live on Solana Devnet
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black leading-[1.1]">
            <span className="text-gradient">The Open Social</span>
            <br />
            Protocol.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tribe Protocol is a decentralized social protocol built on Solana. Fully owned identity, portable social graph, and instant peer-to-peer gossip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/docs" 
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-black text-white text-lg font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
            >
              Start Building <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/docs/protocol/social-graph" 
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black border-2 border-zinc-200 text-lg font-medium hover:border-black transition-all flex items-center justify-center"
            >
              Explore the Graph
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Key Concepts Grid */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Concepts</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Everything you need to build scalable, resilient, and fully-owned social applications.
            </p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: UserCircle, title: "Tribe ID (TID)", desc: "Unique auto-incrementing 64-bit numeric identity with custody and recovery addresses. Universal identifier across the protocol." },
              { icon: Database, title: "Signed Messages", desc: "Off-chain actions signed with ed25519 app keys, stored by the hub, and synced via gossip. Covers tweets, DMs, polls, and more." },
              { icon: Network, title: "Social Graph", desc: "PDA-per-relationship design on Solana. O(1) checks, unlimited follows, and rent reclamation. The most efficient on-chain graph." },
              { icon: Zap, title: "Ephemeral Rollup", desc: "Instant follow confirmations (<50ms) using optimistic processing, settling into Solana L1 batches every 10 seconds." },
              { icon: Key, title: "App Keys", desc: "Scoped delegation keys to sign on user behalf. Granular permissions (Full, TweetsOnly, ReadOnly) with optional expiry." },
              { icon: Code, title: ".tribe Usernames", desc: "Human-readable names bound to TIDs. Requires annual renewal, transferrable, directly embedded into the namespace." }
            ].map((concept, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white/50 backdrop-blur-sm p-10 rounded-[40px] border border-zinc-200 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-black transition-colors">
                  <concept.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">
                  {concept.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-[56px] p-8 md:p-20 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-200/40 blur-[120px] rounded-full -mr-64 -mt-64" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Run a Node in Seconds.</h2>
                <p className="text-xl text-zinc-500 mb-10 leading-relaxed">
                  Join the distributed network and host your own piece of the protocol. Our Homebrew formula handles everything from dependencies to database setup.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/docs/running-a-node" className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
                    View Setup Guide <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="/docs/running-a-node" className="px-8 py-4 rounded-full border border-zinc-200 font-medium hover:bg-zinc-50 transition-colors bg-white">
                    Docker Setup
                  </a>
                </div>
              </div>

              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-zinc-200 rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] perspective-1000"
              >
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                </div>
                <pre className="text-base font-mono text-zinc-600 overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-zinc-400"># Install the Homebrew tap</span><br/>
                    brew tap chaalpritam/tribe<br/><br/>
                    <span className="text-zinc-400"># Install Tribe node</span><br/>
                    brew install --HEAD tribe<br/><br/>
                    <span className="text-zinc-400"># Start services</span><br/>
                    <span className="text-black font-bold">tribe start</span><br/><br/>
                    <span className="text-zinc-400"># Check peers</span><br/>
                    tribe peers
                  </code>
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
