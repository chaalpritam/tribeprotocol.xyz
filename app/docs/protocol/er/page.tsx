import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  Layers 
} from "lucide-react";

export default function ERDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Ephemeral Rollup (ER)</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The Ephemeral Rollup is a high-speed sequencer that provides instant confirmations for social actions while ensuring eventual L1 finality.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" /> Instant Confirmations
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Every social action (follow, unfollow) is processed by the ER server in under 50ms. Users get immediate feedback in the UI without waiting for a blockchain transaction to confirm.
          </p>
          <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
            <h4 className="font-bold text-sm mb-4">The Optimistic Flow</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm text-zinc-600">Frontend signs a message & submits to ER Server.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm text-zinc-600">ER Server validates signature and updates local database.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm text-zinc-600">Frontend receives "Success" and updates UI immediately.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6" /> L1 Settlement
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            The ER server batches all pending operations and settles them to Solana L1 every 10 seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <Layers className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">Batch Processing</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Up to 4 operations are batched per transaction, significantly reducing transaction costs and network congestion.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <ShieldCheck className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">Verifiable Authority</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                The ER server signs transactions with a registered sequencer wallet. On-chain programs verify this authority before updating state.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Failure Recovery</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            The ER server is designed to be highly available, but if it fails, users can always bypass it and interact directly with Solana L1.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 text-sm text-zinc-600 leading-relaxed">
            "The ER server is a convenience layer, not a gatekeeper. If the sequencer is unreachable, the SDK automatically falls back to direct L1 transactions."
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/protocol/social-graph" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Social Graph
        </a>
        <a href="/docs/sdk" className="text-sm font-bold flex items-center gap-1 hover:underline">
          SDK Reference →
        </a>
      </div>
    </div>
  );
}
