import { 
  Terminal, 
  Copy, 
  Check 
} from "lucide-react";

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
      <div className="bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-2xl p-6 mb-8 font-mono text-sm relative group">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-400">Terminal</span>
          <button className="p-1 hover:bg-zinc-100 rounded transition-colors">
            <Copy className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
        <code className="text-black font-medium">npm install @tribe-protocol/sdk</code>
      </div>

      <h2 className="text-2xl font-bold mb-6">Connect and Register</h2>
      <div className="bg-zinc-50 border border-zinc-200 text-zinc-700 rounded-2xl p-6 mb-12 font-mono text-sm overflow-x-auto">
<pre>{`// Connect to devnet
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
      <p className="text-zinc-600 mb-6 leading-relaxed">
        Join the network by running a full node using Homebrew. This installs the Hub, ER Sequencer, and all dependencies.
      </p>
      <div className="bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-2xl p-6 mb-8 font-mono text-sm">
<pre className="text-zinc-600 font-medium">{`brew tap chaalpritam/tribe
brew install --HEAD tribe
tribe start`}</pre>
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
