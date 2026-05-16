import { 
  ShieldCheck, 
  Share2, 
  Zap, 
  Users 
} from "lucide-react";

export default function DocsOverview() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Overview</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          Tribe Protocol is a decentralized social protocol built on Solana. It provides on-chain identity (TID), delegated app keys, human-readable usernames (.tribe), a social graph with an Ephemeral Rollup sequencer, hub registration for peer discovery, and off-chain storage of signed messages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-[32px] glass hover:bg-zinc-50/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 group-hover:bg-black group-hover:text-white transition-all">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Self-Sovereign Identity</h3>
          <p className="text-zinc-500 leading-relaxed">
            Users fully own their identity and social data. No platform can revoke access or censor content at the infrastructure layer.
          </p>
        </div>
        <div className="p-8 rounded-[32px] glass hover:bg-zinc-50/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 group-hover:bg-black group-hover:text-white transition-all">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Open Social Graph</h3>
          <p className="text-zinc-500 leading-relaxed">
            A portable social graph built on Solana PDAs, enabling O(1) checks and efficient on-chain storage.
          </p>
        </div>
        <div className="p-8 rounded-[32px] glass hover:bg-zinc-50/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Instant Interactions</h3>
          <p className="text-zinc-500 leading-relaxed">
            Ephemeral Rollup (ER) sequencer provides sub-50ms confirmations for social actions while settling to L1 every 10s.
          </p>
        </div>
        <div className="p-8 rounded-[32px] glass hover:bg-zinc-50/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-200 group-hover:bg-black group-hover:text-white transition-all">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Distributed Hubs</h3>
          <p className="text-zinc-500 leading-relaxed">
            Decentralized storage nodes (Hubs) store signed messages and sync via gossip protocol for maximum resilience.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Key Components</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-zinc-200 pl-6 py-2">
          <h4 className="font-bold mb-1">TID (Tribe ID)</h4>
          <p className="text-sm text-zinc-500">Universal identifier across the entire protocol with built-in recovery.</p>
        </div>
        <div className="border-l-4 border-zinc-200 pl-6 py-2">
          <h4 className="font-bold mb-1">App Keys</h4>
          <h4 className="font-bold mb-1">Signed Messages</h4>
          <p className="text-sm text-zinc-500">Self-authenticating off-chain actions validated against on-chain records.</p>
        </div>
        <div className="border-l-4 border-zinc-200 pl-6 py-2">
          <h4 className="font-bold mb-1">Ephemeral Rollup (ER)</h4>
          <p className="text-sm text-zinc-500">Optimistic sequencer for fast social graph updates.</p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <div className="text-sm text-zinc-400">Next: Quick Start</div>
        <a href="/docs/quick-start" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Quick Start →
        </a>
      </div>
    </div>
  );
}
