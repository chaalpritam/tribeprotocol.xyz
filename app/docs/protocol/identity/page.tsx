import type { Metadata } from "next";
import {
  User,
  RefreshCw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Identity (TID)",
  description:
    "Tribe ID — a Solana PDA-backed numeric identity with custody and recovery wallets, delegated ed25519 app keys, and .tribe usernames.",
};

export default function IdentityDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Identity (TID)</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The Tribe ID (TID) is the foundational layer of the protocol, providing every user with a permanent, numeric identifier.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">TID Record</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Every TID is stored on Solana as a Program Derived Address (PDA). A TID record contains two crucial addresses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
              <User className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">Custody Address</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                The primary wallet that controls the TID. This address is used to register app keys and usernames.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
              <RefreshCw className="w-6 h-6 mb-4 text-black" />
              <h3 className="font-bold mb-2">Recovery Address</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                A backup wallet that can reclaim the TID if the custody key is lost or compromised.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">App Keys</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            App keys are delegated signing keys. Instead of using your main wallet to sign every social interaction, you register a lightweight ed25519 key on-chain.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-zinc-400">Supported Scopes</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-zinc-200">
                <span className="font-mono text-sm">Full (0)</span>
                <span className="text-xs text-zinc-500">All permissions</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-200">
                <span className="font-mono text-sm">TweetsOnly (1)</span>
                <span className="text-xs text-zinc-500">Only posting content</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-200">
                <span className="font-mono text-sm">SocialOnly (2)</span>
                <span className="text-xs text-zinc-500">Only follow/unfollow</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="font-mono text-sm">ReadOnly (3)</span>
                <span className="text-xs text-zinc-500">No signing permissions</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Usernames (.tribe)</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Usernames are human-readable aliases for TIDs. They are registered on-chain and require annual renewal.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                Max 20 characters, alphanumeric only.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                1-year registration period (renewable).
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                Transferable between TIDs.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/how-it-works" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← How it Works
        </a>
        <a href="/docs/protocol/social-graph" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Social Graph →
        </a>
      </div>
    </div>
  );
}
