import { 
  Network, 
  Share2, 
  Database, 
  ArrowRightLeft 
} from "lucide-react";

export default function SocialGraphDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Social Graph</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The social graph on Tribe is fully on-chain, using a PDA-per-relationship design that is both efficient and scalable.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Link PDAs</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Every follow relationship is represented by a tiny (33-byte) Program Derived Address on Solana. 
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 font-mono text-xs text-zinc-500 overflow-x-auto">
            {`Seed: ["link", follower_tid_le_bytes(8), following_tid_le_bytes(8)]`}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 bg-white">
              <h4 className="font-bold text-sm mb-1">O(1) Access</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Check if A follows B instantly without scanning an entire list.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-white">
              <h4 className="font-bold text-sm mb-1">Rent Reclamation</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Unfollowing closes the PDA and returns the SOL rent to the user.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Social Profiles</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Every user has a Social Profile PDA that tracks their aggregate counts. These counters are updated by the protocol when links are created or destroyed.
          </p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-center justify-around">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 tracking-tighter">Following</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-mono">u32 LE</div>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-zinc-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 tracking-tighter">Followers</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-mono">u32 LE</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Delegated Actions</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            To support the Ephemeral Rollup, the social-graph program includes delegated instructions.
          </p>
          <ul className="space-y-4">
            <li className="p-4 rounded-xl border border-zinc-200">
              <div className="font-mono text-sm font-bold mb-1">follow_delegated</div>
              <p className="text-xs text-zinc-500">Allows a registered sequencer to create a Link PDA on behalf of a user.</p>
            </li>
            <li className="p-4 rounded-xl border border-zinc-200">
              <div className="font-mono text-sm font-bold mb-1">unfollow_delegated</div>
              <p className="text-xs text-zinc-500">Allows a registered sequencer to close a Link PDA on behalf of a user.</p>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/protocol/identity" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Identity (TID)
        </a>
        <a href="/docs/protocol/er" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Ephemeral Rollup →
        </a>
      </div>
    </div>
  );
}
