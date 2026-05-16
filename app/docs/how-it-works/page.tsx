import { 
  ArrowRight, 
  Lock, 
  RefreshCw, 
  Server 
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How it Works</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          Tribe Protocol uses a hybrid architecture that balances on-chain security with off-chain performance.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock className="w-6 h-6" /> The Trust Model
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Content on Tribe is stored off-chain on Hubs to ensure speed and low cost. However, every piece of content is cryptographically signed and verifiable against the user's on-chain identity.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-sm font-bold">1</div>
              <div>
                <p className="font-bold mb-1">On-Chain Registration</p>
                <p className="text-sm text-zinc-500">User registers a TID and an App Key (ed25519) on Solana.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-sm font-bold">2</div>
              <div>
                <p className="font-bold mb-1">Off-Chain Signing</p>
                <p className="text-sm text-zinc-500">User signs a message (e.g., a tweet) with their App Key secret.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-sm font-bold">3</div>
              <div>
                <p className="font-bold mb-1">Hub Verification</p>
                <p className="text-sm text-zinc-500">The Hub verifies the signature and checks that the App Key is valid on Solana.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <RefreshCw className="w-6 h-6" /> Gossip Synchronization
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Hubs sync messages with each other via a custom gossip protocol. This ensures that even if one hub goes down, the content remains available across the network.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50">
              <div className="font-bold text-sm mb-1 uppercase tracking-wider text-zinc-400">HAVE</div>
              <p className="text-xs text-zinc-500">Hubs broadcast hashes of new messages they've received.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50">
              <div className="font-bold text-sm mb-1 uppercase tracking-wider text-zinc-400">NEED</div>
              <p className="text-xs text-zinc-500">Peers request missing messages by their hashes.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50">
              <div className="font-bold text-sm mb-1 uppercase tracking-wider text-zinc-400">SYNC</div>
              <p className="text-xs text-zinc-500">Full messages are exchanged to reach eventual consistency.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Server className="w-6 h-6" /> The Settlement Loop
          </h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Ephemeral Rollup operations follow a strict 10-second settlement cycle to ensure on-chain finality.
          </p>
          <div className="relative pl-8 border-l border-zinc-200 space-y-12">
            <div>
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-black" />
              <h4 className="font-bold mb-1">Operation Received</h4>
              <p className="text-sm text-zinc-500">ER Server receives a signed follow/unfollow and updates optimistic state.</p>
            </div>
            <div>
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-zinc-200" />
              <h4 className="font-bold mb-1">Batching</h4>
              <p className="text-sm text-zinc-500">Server batches multiple operations into a single Solana transaction.</p>
            </div>
            <div>
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-zinc-200" />
              <h4 className="font-bold mb-1">L1 Settlement</h4>
              <p className="text-sm text-zinc-500">Transaction is signed by the sequencer and sent to Solana L1.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/quick-start" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Quick Start
        </a>
        <a href="/docs/protocol/identity" className="text-sm font-bold flex items-center gap-1 hover:underline">
          TID Identity →
        </a>
      </div>
    </div>
  );
}
