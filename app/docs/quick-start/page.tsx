import type { Metadata } from "next";
import {
  Copy
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Start",
  description:
    "Install @tribe-protocol/sdk, register a TID, publish a signed post, and optionally spin up a hub + ER stack with Homebrew.",
};

export default function QuickStart() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Quick Start</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          Get started with Tribe Protocol by installing the SDK or running your own node.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Install the SDK</h2>
      <div className="glass rounded-[32px] p-8 mb-10 font-mono text-sm relative group shadow-sm hover:shadow-md transition-all">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Terminal</span>
          <button className="p-2 hover:bg-zinc-100 rounded-xl transition-colors">
            <Copy className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
        <code className="text-black font-semibold bg-zinc-50 px-4 py-2 rounded-lg border border-zinc-100">npm install @tribe-protocol/sdk</code>
      </div>

      <h2 className="text-2xl font-bold mb-6">Connect and Register</h2>
      <div className="glass rounded-[32px] p-8 mb-16 font-mono text-sm overflow-x-auto shadow-sm hover:shadow-md transition-all">
<pre className="bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100 text-zinc-700 leading-relaxed">{`// Connect to devnet
const provider = new AnchorProvider(connection, wallet, { commitment: "confirmed" });
const tribe = TribeClient.forDevnet(provider);

// Register a Tribe ID
const { tid, txSig } = await tribe.identity.tid.register(recoveryAddress);

// Add an app key for signing messages
await tribe.identity.appKeys.addAppKey(tid, appPubkey, AppKeyScope.Full);

// Publish a tweet
await tribe.tweets.publish(tid, "Hello Tribe!", signingKey);`}</pre>
      </div>

      <h2 className="text-2xl font-bold mb-6">Run a Tribe Node</h2>
      <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
        Join the network by running a full node via Homebrew. The <code className="font-mono text-sm px-1 py-0.5 bg-zinc-100 rounded">tribe</code> formula installs the hub and the ER sequencer plus their Postgres databases. The demo UI ships as a separate formula.
      </p>
      <div className="glass rounded-[32px] p-8 mb-10 font-mono text-sm shadow-sm hover:shadow-md transition-all">
<pre className="text-zinc-600 font-medium bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100 leading-relaxed">{`brew tap chaalpritam/tribe
brew install --HEAD tribe
tribe start

# Optional: install the demo UI on top
brew install --HEAD tribe-app
tribe-app`}</pre>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/how-it-works" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← How it Works
        </a>
        <a href="/docs/chain" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Chain Overview →
        </a>
      </div>
    </div>
  );
}
