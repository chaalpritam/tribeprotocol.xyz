import type { Metadata } from "next";
import {
  Box,
  Settings,
  Share2,
  MessageSquare,
  Image as ImageIcon,
  Hash,
  CalendarCheck,
  CheckSquare,
  HandCoins,
  Bookmark,
  Vote,
  Search as SearchIcon,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "SDK Reference",
  description:
    "@tribe-protocol/sdk — one TypeScript client for identity, social graph, tweets, DMs, channels, polls, events, tasks, crowdfunds, tips, stories, and onchain Anchor calls.",
};

const hubBackedModules = [
  { icon: Share2, name: "social", desc: "Follow / unfollow with ER fast-path and direct-Solana fallback." },
  { icon: MessageSquare, name: "tweets", desc: "Publish signed posts and read the feed." },
  { icon: MessageSquare, name: "dms", desc: "End-to-end encrypted DMs with NaCl box ciphertexts." },
  { icon: Hash, name: "channels", desc: "Topic channels with first-registration ownership on-chain." },
  { icon: Bookmark, name: "bookmarks", desc: "Per-TID bookmarks of any signed message hash." },
  { icon: Vote, name: "polls", desc: "One-vote-per-TID polls with an 8-slot tally." },
  { icon: CalendarCheck, name: "events", desc: "RSVPable events with optional lat/lng." },
  { icon: CheckSquare, name: "tasks", desc: "Local tasks with optional on-chain reward escrow." },
  { icon: HandCoins, name: "crowdfunds", desc: "Campaigns with pledge / claim / refund flows." },
  { icon: HandCoins, name: "tips", desc: "Off-chain receipts that mirror on-chain SOL tips." },
  { icon: SearchIcon, name: "search", desc: "Full-text search over content the hub has indexed." },
  { icon: ImageIcon, name: "stories", desc: "Ephemeral 24-hour stories (Phase 3 of tribe-insta)." },
  { icon: Box, name: "userData", desc: "Display name, bio, avatar, and other profile metadata." },
];

const onchainModules = [
  { name: "tips", desc: "Anchor program calls for on-chain SOL tip receipts." },
  { name: "crowdfunds", desc: "Direct escrow account management." },
  { name: "tasks", desc: "On-chain reward escrow for task posters." },
  { name: "channels", desc: "First-registration channel slug claims." },
  { name: "karma", desc: "Trustless karma reads from tip + task proofs." },
  { name: "polls", desc: "Optional fully-on-chain poll storage." },
  { name: "events", desc: "Event accounts with lat/lng + RSVP counters." },
];

export default function SDKDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">SDK Reference</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          <code className="font-mono text-base px-1.5 py-0.5 bg-zinc-100 rounded">@tribe-protocol/sdk</code> is the single TypeScript entry point for everything — identity, social graph, content, payments, and direct Anchor calls.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Install</h2>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
            <pre>{`npm install @tribe-protocol/sdk @coral-xyz/anchor @solana/web3.js`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">TribeClient</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Construct one of the three preset clients — they ship with the right program IDs and hub URLs baked in.
          </p>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
<pre>{`import { TribeClient } from "@tribe-protocol/sdk";
import { AnchorProvider } from "@coral-xyz/anchor";

const provider = new AnchorProvider(connection, wallet, { commitment: "confirmed" });

const tribe = TribeClient.forDevnet(provider);
// or: TribeClient.forMainnet(provider) / TribeClient.forLocalnet(provider)

// Identity
const { tid } = await tribe.identity.tid.register(recoveryAddress);
await tribe.identity.appKeys.addAppKey(tid, appPubkey, AppKeyScope.Full);
await tribe.identity.usernames.register(tid, "alice");

// Social
await tribe.social.follow(myTid, targetTid);
await tribe.tweets.publish(myTid, "gm from the mesh", appKey);`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Hub-backed modules</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Each of these speaks to the hub&apos;s REST API and signs envelopes locally with your app key. The hub validates signatures against the on-chain app-key record.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hubBackedModules.map((m) => (
              <div key={m.name} className="p-5 rounded-2xl border border-zinc-200 bg-white">
                <m.icon className="w-5 h-5 mb-3 text-black" />
                <h3 className="font-bold mb-1 text-sm font-mono">tribe.{m.name}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">On-chain Anchor clients</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            For features that involve lamport transfers, escrow, or voting integrity, the SDK exposes raw Anchor program clients under <code className="font-mono text-xs px-1.5 py-0.5 bg-zinc-100 rounded">tribe.onchain.*</code> — distinct from the hub-backed modules above.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {onchainModules.map((m) => (
              <div key={m.name} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                <code className="text-xs font-bold font-mono block mb-1">tribe.onchain.{m.name}</code>
                <p className="text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Execution Providers
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            <code className="font-mono text-xs px-1.5 py-0.5 bg-zinc-100 rounded">tribe.social</code> is the only module that goes through an <code className="font-mono text-xs px-1.5 py-0.5 bg-zinc-100 rounded">ExecutionProvider</code> — defaults to <code className="font-mono text-xs px-1.5 py-0.5 bg-zinc-100 rounded">DirectSolanaProvider</code>. Swap it for the ER provider to get sub-50 ms follow confirmations.
          </p>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-xs overflow-x-auto">
<pre>{`import { TribeClient, EphemeralRollupProvider } from "@tribe-protocol/sdk";

const tribe = TribeClient.forDevnet(provider, {
  execution: new EphemeralRollupProvider({
    erServerUrl: "http://localhost:3003",
    custodyPubkey: wallet.publicKey.toBase58(),
    signFn: (msg) => wallet.signMessage(msg),
  }),
});

// Instant follow — settles to L1 within 10s
await tribe.social.follow(myTid, targetTid);`}</pre>
          </div>
          <div className="mt-6 p-5 rounded-2xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 shrink-0 text-zinc-400 mt-0.5" />
            <span>
              If the ER server is unreachable, follows transparently fall back to direct L1 transactions. The ER is a convenience layer, never a gatekeeper.
            </span>
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
