import { 
  Database, 
  Shield, 
  Zap, 
  Network 
} from "lucide-react";

export default function ChainOverview() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Chain Overview</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The Tribe Protocol leverages Solana for its high-performance L1 state, combined with a custom Ephemeral Rollup (ER) for sub-second social interactions.
        </p>
      </div>

      <div className="bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-3xl p-8 mb-12 overflow-hidden relative">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
          <span className="text-xs text-zinc-400 ml-2 font-mono">Architecture Layers</span>
        </div>
        <pre className="text-xs md:text-sm font-mono leading-relaxed overflow-x-auto text-zinc-600">
{`                        Users / Apps
                             |
                       tribe-sdk (TypeScript)
                       /         |          \\
   tribe-app / tribeapp.wtf   tribe-ios / tribe-insta   tribe-er-server   tribe-hub
        (web frontends)              (native iOS)         (ER sequencer)    (storage + indexing + gossip)
                \\                  |                /
  ┌──────────────┴──────────────────┴──────────────┴────┐
  |                Solana Programs                       |
  |  tid-registry . app-key-registry                     |
  |  username-registry . social-graph . hub-registry     |
  └──────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold mb-8">Protocol Layers</h2>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">Layer 1: Solana Programs</h3>
          </div>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            The source of truth for all ownership and identity. Four core programs store data that is permanent and censorship-resistant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200">
              <div className="font-bold text-sm mb-1">tid-registry</div>
              <p className="text-xs text-zinc-500">Universal numeric identity (TID) with custody and recovery addresses.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200">
              <div className="font-bold text-sm mb-1">app-key-registry</div>
              <p className="text-xs text-zinc-500">Delegated ed25519 keys for signing off-chain social messages.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200">
              <div className="font-bold text-sm mb-1">username-registry</div>
              <p className="text-xs text-zinc-500">Human-readable names (.tribe) bound to TIDs with annual renewal.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200">
              <div className="font-bold text-sm mb-1">social-graph</div>
              <p className="text-xs text-zinc-500">PDA-per-relationship graph for follow/unfollow actions.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">Layer 2: Ephemeral Rollup (ER)</h3>
          </div>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            A high-speed sequencer that provides sub-50ms confirmations for social graph updates.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-zinc-600">
            <li>Instant follow/unfollow confirmations.</li>
            <li>Optimistic processing with batched L1 settlement.</li>
            <li>10-second settlement window to Solana L1.</li>
            <li>Verifiable sequencer authority registered on-chain.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">Layer 3: Distributed Hubs</h3>
          </div>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            The off-chain storage layer for content like tweets, DMs, and media.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-zinc-600">
            <li>Signed messages verified against on-chain app keys.</li>
            <li>P2P Gossip sync between hubs for data availability.</li>
            <li>Indexed views of on-chain state for fast queries.</li>
            <li>Open REST and WebSocket APIs for client applications.</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Overview
        </a>
        <div className="text-sm text-zinc-400 text-right">
          Next: TID Identity
        </div>
      </div>
    </div>
  );
}
