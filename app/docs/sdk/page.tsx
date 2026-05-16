import { 
  Code, 
  Terminal, 
  Box, 
  Settings,
  Share2,
  MessageSquare
} from "lucide-react";

export default function SDKDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">SDK Reference</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The @tribe-protocol/sdk is the primary way to interact with the Tribe Protocol.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">TribeClient</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            The main entry point for all protocol interactions.
          </p>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
<pre>{`import { TribeClient } from "@tribe-protocol/sdk";

// Initialize for Devnet
const tribe = TribeClient.forDevnet(provider);

// Initialize for Mainnet
const tribe = TribeClient.forMainnet(provider);`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <Box className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">identity</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                TID registration, app key management, and username registration.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <Share2 className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">social</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Follow/unfollow actions and social profile queries.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <MessageSquare className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">tweets</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Publishing content and querying the feed.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white">
              <Settings className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">hub</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Low-level access to Hub API and gossip status.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Execution Providers</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Configure how operations are executed (L1 vs ER).
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
            <h4 className="font-bold mb-2">ER Provider Example</h4>
            <div className="bg-zinc-900 text-zinc-300 rounded-xl p-4 font-mono text-xs overflow-x-auto">
<pre>{`const tribe = TribeClient.forDevnet(provider, {
  execution: new EphemeralRollupProvider({
    erServerUrl: "http://localhost:3003",
    custodyPubkey: wallet.publicKey.toBase58(),
    signFn: (msg) => wallet.signMessage(msg),
  }),
});`}</pre>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/protocol/er" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Ephemeral Rollup
        </a>
        <a href="/docs/api" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Hub API →
        </a>
      </div>
    </div>
  );
}
