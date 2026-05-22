"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  KeyRound,
  Hash,
  Server,
  Zap,
  Lock,
  Shield,
  Radio,
  Activity,
  Smartphone,
  Code2,
  Layers,
  GitBranch,
  ExternalLink,
  ArrowRight,
  ArrowDown,
  UserCircle,
  Network,
  Code,
  Terminal
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const whyTribeItems = [
  {
    icon: Fingerprint,
    title: "You own your identity",
    body: "Your account is a Solana keypair — no email, no password, no central authority that can deactivate you. Your TID and all your content go wherever you go.",
  },
  {
    icon: Server,
    title: "No single server",
    body: "Content lives across a mesh of independent hubs that gossip with each other. If one goes down, the others still have the data. Run your own hub on a $5 VPS or a Raspberry Pi.",
  },
  {
    icon: Network,
    title: "Fork the client",
    body: "The protocol is open and permissionless. Build a different UI, a mobile app, a CLI, or a bot — they all speak the same signed-message format and talk to the same hubs.",
  },
];

const keyConcepts = [
  {
    icon: UserCircle,
    term: "TID (Tribe ID)",
    definition:
      "A unique auto-incrementing 64-bit numeric identity registered on Solana. Each TID has a custody wallet (daily signatures) and a recovery wallet (reclaims custody keys if lost). Just keys you own.",
  },
  {
    icon: KeyRound,
    term: "App Keys",
    definition:
      "Scoped ed25519 signing keys delegated by your TID. Your main wallet stays secure offline; the app signs daily actions on your device. Keys can be rotated, revoked, or scoped with granular permissions.",
  },
  {
    icon: Hash,
    term: "Signed Messages",
    definition:
      "Every single action — posts, likes, follows, DM ciphertexts, poll votes — is a protobuf envelope signed with your device app key and hashed with BLAKE3. Hubs validate them cryptographically.",
  },
  {
    icon: Network,
    term: "Social Graph",
    definition:
      "A custom PDA-per-relationship follow graph design on Solana. Highly efficient, O(1) checks, unlimited follows, and rent reclamation. The most scalable on-chain social graph.",
  },
  {
    icon: Zap,
    term: "Ephemeral Rollup",
    definition:
      "An optimistic sequencer that confirms follow/unfollow intents instantly (<50ms), then batches them into Solana L1 instructions every 10 seconds. Real-time feel with L1 finality.",
  },
  {
    icon: Code,
    term: ".tribe Usernames",
    definition:
      "Human-readable, decentralized names bound to TIDs. Registered on-chain, transferrable, and directly embedded into the namespace with annual renewals to prevent squatting.",
  },
];

const dataFlowSteps = [
  {
    step: "01",
    title: "User signs a message",
    detail:
      "The app builds a MessageData payload (type, TID, timestamp, body). The ed25519 app key signs the BLAKE3 hash locally on device. This produces a TribeMessage envelope.",
    icon: Fingerprint,
  },
  {
    step: "02",
    title: "Hub validates and stores",
    detail:
      "The hub fetches the TID's app key record from Solana, verifies the ed25519 signature, checks the BLAKE3 hash, and writes the envelope to Postgres.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Hub gossips to peers",
    detail:
      "Every 5 seconds each hub broadcasts 'have' frames (hashes of recent messages). Peer hubs reply with 'want' for any they're missing. Full envelopes flow back.",
    icon: Radio,
  },
  {
    step: "04",
    title: "Clients get real-time updates",
    detail:
      "Apps subscribe to the hub WebSocket (/v1/ws). New validated messages are pushed immediately — no polling, no central broker.",
    icon: Activity,
  },
];

const architectureLayers = [
  {
    icon: Smartphone,
    name: "Applications",
    repo: "tribeapp.wtf · tribe-app · tribe-ios · tribe-insta",
    color: "#f5f5f5",
    description:
      "Web clients (Next.js) and native SwiftUI iOS apps — a Twitter-shaped one (tribe-ios) and an Instagram-shaped one (tribe-insta). All build signed envelopes locally; the hub never receives plaintext intent.",
  },
  {
    icon: Lock,
    name: "Shared Swift Core",
    repo: "tribe-core-swift",
    color: "#f2f2f2",
    description:
      "Byte-for-byte protocol code consumed by both iOS apps — BLAKE3, NaCl box DM crypto, ed25519 envelope signing, BIP39, Solana HD derivation, and the backup file format.",
  },
  {
    icon: Code2,
    name: "TypeScript SDK",
    repo: "tribe-sdk",
    color: "#f0f0f0",
    description:
      "Single entry-point client covering identity, social graph, tweets, DMs, channels, bookmarks, polls, events, tasks, crowdfunds, tips, search, karma, and notifications. Published as @tribe-protocol/sdk.",
  },
  {
    icon: Server,
    name: "Decentralized Hub",
    repo: "tribe-hub",
    color: "#ebebeb",
    description:
      "Fastify + Postgres node that stores validated signed envelopes, indexes Solana events via WebSocket subscription + startup backfill, and syncs with peers over a pull-based gossip protocol.",
  },
  {
    icon: Zap,
    name: "Ephemeral Rollup Sequencer",
    repo: "tribe-er-server",
    color: "#e6e6e6",
    description:
      "Accepts follow/unfollow intents signed by custody wallets, confirms instantly (optimistic), batches follow_delegated / unfollow_delegated instructions, and settles to L1 every 10 seconds.",
  },
  {
    icon: Layers,
    name: "Solana Programs (12)",
    repo: "tribe-protocol",
    color: "#e0e0e0",
    description:
      "Anchor programs for identity (TID, app keys, usernames), social graph with ER delegation, hub discovery, tips, crowdfunds, tasks, channel ownership, karma, polls, and events.",
  },
];

const solanaPrograms = [
  { name: "tid-registry", desc: "Mints TIDs, tracks custody + recovery addresses" },
  { name: "app-key-registry", desc: "Registers, revokes, and rotates app signing keys" },
  { name: "username-registry", desc: "Human-readable .tribe usernames bound to TIDs" },
  { name: "social-graph", desc: "PDA-per-relationship follow graph + ER delegation" },
  { name: "hub-registry", desc: "On-chain hub discovery — URL, gossip key, heartbeat" },
  { name: "tip-registry", desc: "On-chain tip receipts with SOL transfer in one ix" },
  { name: "crowdfund-registry", desc: "Campaign escrow — pledge, claim, or refund" },
  { name: "task-registry", desc: "Local tasks with optional reward escrow" },
  { name: "channel-registry", desc: "First-registration ownership of channel slugs" },
  { name: "karma-registry", desc: "Trustless karma from on-chain tip + task proofs" },
  { name: "poll-registry", desc: "One-vote-per-TID polls with 8-slot tally" },
  { name: "event-registry", desc: "Events with one-RSVP-per-TID and lat/lng" },
];

const repos = [
  {
    name: "TribeEco",
    description: "Mono-repo containing every submodule, the tribe CLI, and Homebrew formulas.",
    url: "https://github.com/chaalpritam/TribeEco",
  },
  {
    name: "tribe-protocol",
    description: "12 Solana programs (Anchor): TID, app keys, usernames, social graph, hubs, tips, polls, events, and more.",
    url: "https://github.com/chaalpritam/tribe-protocol",
  },
  {
    name: "tribe-sdk",
    description: "TypeScript SDK for the whole protocol — @tribe-protocol/sdk.",
    url: "https://github.com/chaalpritam/tribe-sdk",
  },
  {
    name: "tribe-hub",
    description: "Decentralized hub: Fastify + Postgres + Solana indexer + gossip.",
    url: "https://github.com/chaalpritam/tribe-hub",
  },
  {
    name: "tribe-er-server",
    description: "Ephemeral Rollup sequencer for instant follow/unfollow with 10s L1 settlement.",
    url: "https://github.com/chaalpritam/tribe-er-server",
  },
  {
    name: "tribe-ios",
    description: "Native SwiftUI iOS client (Twitter-shaped). BLAKE3 + ed25519 signing, NaCl-box DMs.",
    url: "https://github.com/chaalpritam/tribe-ios",
  },
  {
    name: "tribe-insta",
    description: "Native SwiftUI iOS client (Instagram-shaped) — same hub, same envelopes, photo-first surface.",
    url: "https://github.com/chaalpritam/tribe-insta",
  },
  {
    name: "tribe-core-swift",
    description: "Shared Swift package consumed by tribe-ios and tribe-insta — protocol crypto and envelope code.",
    url: "https://github.com/chaalpritam/tribe-core-swift",
  },
  {
    name: "tribeapp.wtf",
    description: "Primary web client — Next.js + Solana wallet adapter.",
    url: "https://github.com/chaalpritam/tribeapp.wtf",
  },
  {
    name: "tribe-app",
    description: "Demo Next.js app shipped via `brew install tribe-app` — points at any hub.",
    url: "https://github.com/chaalpritam/tribe-demo-app",
  },
  {
    name: "homebrew-tap",
    description: "Homebrew formulas — `brew install tribe` (hub + ER) and `brew install tribe-app` (demo UI).",
    url: "https://github.com/chaalpritam/homebrew-tribe",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-black">
      <main className="mx-auto max-w-[1200px] px-8 py-24 sm:py-32">
        
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section id="what" className="mb-48 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-600 border border-zinc-200/50"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            v0.1.0 Live on Solana Devnet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[950px] text-[58px] font-black leading-[1.05] tracking-[-3px] sm:text-[92px]"
          >
            <span className="text-gradient">The Open Social</span> <br />
            Protocol.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mx-auto mt-10 max-w-[680px] text-[19px] font-medium leading-[1.6] text-zinc-500 sm:text-[23px]"
          >
            Tribe Protocol is a decentralized social protocol built on Solana.
            Fully owned identity, portable social graph, and instant peer-to-peer gossip.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black px-10 py-5 text-xl font-bold text-white transition-all hover:bg-zinc-800 hover:scale-[1.03] active:scale-95 shadow-xl shadow-black/10"
            >
              Start Building <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/docs/protocol/social-graph"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-10 py-5 text-xl font-bold text-black transition-all hover:bg-zinc-200/80 hover:scale-[1.03] active:scale-95 border border-zinc-200"
            >
              Explore the Graph <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-24 grid max-w-[760px] grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { value: "12", label: "Solana programs" },
              { value: "100%", label: "Open source" },
              { value: "<50ms", label: "Follow confirms" },
              { value: "MIT", label: "License" },
            ].map((s) => (
              <div key={s.label} className="rounded-[24px] bg-zinc-50 border border-zinc-100 p-5 text-center transition-all hover:scale-[1.02] hover:border-zinc-200">
                <div className="text-3xl font-black tracking-tight text-black">{s.value}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#999]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Why Tribe? (plain-English explainer) ─────────────────── */}
        <section id="why" className="mb-48 border-t border-zinc-100 pt-24">
          <div className="mb-16">
            <h2 className="text-[40px] font-black tracking-[-1.5px] text-black sm:text-[56px]">
              What is Tribe, exactly?
            </h2>
            <p className="mt-6 max-w-[700px] text-[20px] font-medium leading-[1.6] text-zinc-500">
              Tribe is a decentralized social protocol on Solana — like email, but for social. Anyone can run a node, build a client, or read the source. No company controls who can post or who can see what.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyTribeItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-[40px] bg-zinc-50 border border-zinc-100/50 p-10 transition-all hover:bg-zinc-100/30 hover:border-zinc-200"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black border border-zinc-100 shadow-sm">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-black">{item.title}</h3>
                <p className="text-[16px] font-medium leading-[1.6] text-zinc-500">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Key Concepts ─────────────────────────────────────────────── */}
        <section id="concepts" className="mb-48 border-t border-zinc-100 pt-24">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-[40px] font-black tracking-[-1.5px] sm:text-[56px] text-black">
              Key concepts.
            </h2>
            <p className="text-xl font-medium text-zinc-500 leading-relaxed">
              Six architectural building blocks that explain how the whole protocol fits together. Read these once and the design will click.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyConcepts.map((concept, idx) => (
              <motion.div
                key={concept.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-[32px] border border-zinc-100 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-2xl hover:shadow-black/[0.02]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-black border border-zinc-100">
                  <concept.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="mb-1 text-[12px] font-bold uppercase tracking-widest text-[#999]">
                  {concept.term}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.6] text-zinc-600">
                  {concept.definition}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── How data flows ───────────────────────────────────────────── */}
        <section className="mb-48 border-t border-zinc-100 pt-24">
          <div className="mb-16">
            <h2 className="text-[40px] font-black tracking-[-1.5px] sm:text-[56px] text-black">
              How a message travels.
            </h2>
            <p className="mt-6 max-w-[620px] text-xl font-medium text-zinc-500">
              From cryptographic signatures on a local device to the distributed peer network — four steps, zero central servers.
            </p>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="absolute left-[31px] top-16 hidden h-[calc(100%-80px)] w-[2px] bg-zinc-100 sm:block" />

            <div className="space-y-4">
              {dataFlowSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-[64px_1fr] items-start gap-6"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-lg shadow-black/5">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="rounded-[28px] border border-zinc-100 bg-white p-7 sm:p-9 hover:border-zinc-200 transition-all">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      Step {step.step}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-black">{step.title}</h3>
                    <p className="text-[16px] font-medium leading-[1.6] text-zinc-500">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Architecture ─────────────────────────────────────────────── */}
        <section id="architecture" className="mb-48 border-t border-zinc-100 pt-24">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-[40px] font-black tracking-[-1.5px] sm:text-[56px] text-black">
              Architecture.
            </h2>
            <p className="text-xl font-medium text-zinc-500 leading-relaxed">
              Five decoupled layers. Each is a separate open-source repository with its own setup. Swap any layer — the contracts between them are cryptographically signed envelopes and public endpoints.
            </p>
          </div>

          {/* Stack diagram */}
          <div className="mb-8 overflow-hidden rounded-[48px] border border-zinc-100 bg-white">
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="grid grid-cols-[80px_1fr] items-center gap-6 border-b border-zinc-100 p-6 last:border-0 sm:p-8 transition-colors hover:bg-zinc-50/50"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-black border border-zinc-200/40"
                  style={{ background: layer.color }}
                >
                  <layer.icon className="h-7 w-7 text-black" />
                </div>
                <div>
                  <div className="mb-1.5 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-black">{layer.name}</h3>
                    <code className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-mono text-zinc-500 font-bold border border-zinc-200/50">
                      {layer.repo}
                    </code>
                  </div>
                  <p className="text-[15px] font-medium leading-[1.5] text-zinc-500">
                    {layer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solana programs grid */}
          <div className="rounded-[48px] bg-black p-10 sm:p-14 text-white">
            <div className="mb-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                <Layers className="h-3.5 w-3.5 text-primary animate-pulse" />
                tribe-protocol · 12 Anchor programs on Solana
              </div>
              <h3 className="text-[28px] font-bold tracking-[-1px] sm:text-[36px]">
                The on-chain layer.
              </h3>
              <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-[1.6] opacity-60">
                Every program is modular and independently deployed. Identity registries, PDA-per-relationship social graph, tip receipts, and trustless karma verification — each has its own Anchor program workspace.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {solanaPrograms.map((prog, idx) => (
                <motion.div
                  key={prog.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="rounded-[20px] bg-white/5 p-5 transition-colors hover:bg-white/10 border border-white/5"
                >
                  <code className="mb-2 block text-[13px] font-black text-white/95 tracking-tight">{prog.name}</code>
                  <p className="text-[13px] font-medium leading-[1.5] text-white/50">{prog.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/chaalpritam/tribe-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-bold text-black transition-all hover:scale-[1.02]"
              >
                <GitBranch className="h-4 w-4" />
                tribe-protocol on GitHub
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://github.com/chaalpritam/tribe-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-[13px] font-bold text-white transition-all hover:bg-white/20"
              >
                <GitBranch className="h-4 w-4" />
                tribe-hub on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── Run a Node & SDK quick-start ──────────────────────────────────────────── */}
        <section id="setup" className="mb-48 border-t border-zinc-100 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Run Node Box */}
            <div className="flex flex-col justify-between rounded-[48px] bg-zinc-50 border border-zinc-100 p-8 sm:p-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <Terminal className="h-3.5 w-3.5 text-black" />
                  CLI Node Setup
                </div>
                <h2 className="text-[32px] font-black tracking-[-1px] text-black">
                  Run a Node in Seconds.
                </h2>
                <p className="text-zinc-500 mt-4 leading-relaxed font-medium">
                  Join the distributed network and host your own piece of the protocol. The Homebrew formula installs the hub + ER sequencer, sets up Postgres, and auto-generates a unique hub ID so two laptops never collide.
                </p>
              </div>

              {/* Mac Terminal Mockup */}
              <div className="mt-8 bg-black rounded-3xl p-6 shadow-2xl shadow-black/10 border border-zinc-800">
                <div className="flex gap-2 mb-4 border-b border-zinc-900 pb-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <pre className="text-[13px] font-mono text-white/80 overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-zinc-500"># Tap and install the hub + ER stack</span><br/>
                    brew tap chaalpritam/tribe<br/>
                    brew install --HEAD tribe<br/><br/>
                    <span className="text-zinc-500"># Boot Docker services and gossip in</span><br/>
                    <span className="text-primary font-bold">tribe start</span><br/><br/>
                    <span className="text-zinc-500"># Check peers and sync coverage</span><br/>
                    tribe peers<br/>
                    tribe sync<br/><br/>
                    <span className="text-zinc-500"># Optional: install the demo UI</span><br/>
                    brew install --HEAD tribe-app && tribe-app
                  </code>
                </pre>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/docs/running-a-node"
                  className="px-6 py-3 rounded-full bg-black text-white font-bold text-sm hover:bg-zinc-800 transition-all flex items-center gap-2"
                >
                  View Setup Guide <ArrowRight className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="/docs/running-a-node"
                  className="px-6 py-3 rounded-full border border-zinc-200 font-bold text-sm hover:bg-zinc-100 transition-all bg-white text-black"
                >
                  Docker Guide
                </a>
              </div>
            </div>

            {/* SDK setup box */}
            <div className="flex flex-col justify-between rounded-[48px] bg-zinc-50 border border-zinc-100 p-8 sm:p-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  <Code2 className="h-3.5 w-3.5 text-primary" />
                  tribe-sdk · NPM package
                </div>
                <h2 className="text-[32px] font-black tracking-[-1px] text-black">
                  Start building in minutes.
                </h2>
                <p className="text-zinc-500 mt-4 leading-relaxed font-medium">
                  One TypeScript client for the whole protocol — identity, social graph, tweets, encrypted DMs, channels, bookmarks, polls, events, tasks, crowdfunds, tips, stories, search, and karma.
                </p>
              </div>

              {/* NPM SDK Block */}
              <div className="mt-8 bg-black rounded-3xl p-6 shadow-2xl shadow-black/10 border border-zinc-800">
                <div className="flex gap-2 mb-4 border-b border-zinc-900 pb-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <pre className="text-[12.5px] font-mono text-white/80 overflow-x-auto leading-relaxed">
                  <code>{`import { TribeClient } from '@tribe-protocol/sdk';

const tribe = TribeClient.forDevnet(provider);

// Register a TID on Solana
const { tid } = await tribe.identity.tid.register(recovery);

// Publish a signed post
await tribe.tweets.publish(tid, "gm from the mesh", appKey);

// Follow someone (instant via Ephemeral Rollup)
await tribe.social.follow(tid, targetTid);`}</code>
                </pre>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/chaalpritam/tribe-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02]"
                >
                  <GitBranch className="h-4 w-4" />
                  tribe-sdk on GitHub
                  <ArrowRight className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── Open source / repos ──────────────────────────────────────── */}
        <section className="mb-32 border-t border-zinc-100 pt-24">
          <div className="rounded-[48px] bg-black p-12 sm:p-20 text-white">
            <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <GitBranch className="h-4 w-4 text-primary" />
                  Open source · MIT License
                </div>
                <h2 className="text-[40px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
                  Every piece on GitHub.
                </h2>
              </div>
              <p className="text-lg font-medium opacity-75 leading-relaxed">
                The protocol programs, the TypeScript SDK, the storage hub, the ER rollup, and all frontends live in public repositories. Read the source, run a hub, fork the app, or contribute.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col justify-between gap-3 rounded-[24px] bg-white/5 p-6 transition-all hover:bg-white/10 border border-white/5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <GitBranch className="h-4 w-4 opacity-70 group-hover:opacity-100 text-primary transition-opacity" />
                        <code className="text-[13.5px] font-bold tracking-tight text-white/95">{repo.name}</code>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[12.5px] font-medium leading-[1.5] opacity-50 group-hover:opacity-85 transition-opacity">
                      {repo.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/chaalpritam/tribeeco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[14px] font-black text-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <GitBranch className="h-4 w-4" />
                Browse the Mono-repo
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
