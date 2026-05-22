import type { Metadata } from "next";
import { Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Hub API",
  description:
    "Hub REST surface for the Tribe Protocol — /v1/submit, /v1/feed, DMs, polls, events, tasks, channels, crowdfunds, plus /v1/ws and /gossip WebSockets.",
};

const groups = [
  {
    title: "Submit & feed",
    rows: [
      { m: "POST", p: "/v1/submit", d: "Submit any signed envelope (tweets, follows, reactions, DMs, polls, votes, RSVPs, etc.)." },
      { m: "POST", p: "/v1/upload", d: "Upload media — returns its BLAKE3 hash for use in subsequent envelopes." },
      { m: "GET", p: "/v1/feed", d: "Global feed of recent posts." },
      { m: "GET", p: "/v1/feed/:tid", d: "Posts authored by a specific TID." },
      { m: "GET", p: "/v1/feed/channel/:channelId", d: "Posts addressed to a specific channel." },
      { m: "GET", p: "/v1/messages/:hash", d: "Fetch a single signed envelope by BLAKE3 hash." },
      { m: "GET", p: "/v1/media/:hash", d: "Serve uploaded media by its hash." },
    ],
  },
  {
    title: "Identity & social",
    rows: [
      { m: "GET", p: "/v1/user/:tid", d: "User profile and aggregate counters." },
      { m: "GET", p: "/v1/followers/:tid", d: "List followers of a TID." },
      { m: "GET", p: "/v1/following/:tid", d: "List who a TID is following." },
      { m: "GET", p: "/v1/bookmarks/:tid", d: "Bookmarked envelope hashes for a TID." },
      { m: "GET", p: "/v1/notifications/:tid", d: "Server-rendered notifications for a TID." },
      { m: "GET", p: "/v1/notifications/:tid/count", d: "Unread notification count." },
    ],
  },
  {
    title: "DMs (NaCl-box encrypted)",
    rows: [
      { m: "POST", p: "/v1/dm/register-key", d: "Publish your Curve25519 public key for inbound DMs." },
      { m: "GET", p: "/v1/dm/key/:tid", d: "Look up another TID's DM public key." },
      { m: "POST", p: "/v1/dm/send", d: "Send a 1:1 DM ciphertext." },
      { m: "GET", p: "/v1/dm/conversations/:tid", d: "List a TID's conversation summaries." },
      { m: "GET", p: "/v1/dm/messages/:conversationId", d: "Fetch ciphertexts for a conversation." },
      { m: "POST", p: "/v1/dm/groups/create", d: "Create a group conversation. (+ add-member / remove-member / leave / send / delete)" },
    ],
  },
  {
    title: "Channels · polls · events · tasks · crowdfunds",
    rows: [
      { m: "GET", p: "/v1/channels", d: "List registered channels." },
      { m: "GET", p: "/v1/polls/:id", d: "Hub-stored poll with current tally." },
      { m: "GET", p: "/v1/polls/:id/vote/:tid", d: "Whether a TID has voted, and what for." },
      { m: "GET", p: "/v1/events/:id", d: "Event details and aggregate RSVPs." },
      { m: "GET", p: "/v1/events/:id/rsvp/:tid", d: "RSVP state for a specific TID." },
      { m: "GET", p: "/v1/crowdfunds/:id/pledges", d: "All pledges on a campaign." },
      { m: "GET", p: "/v1/karma/onchain/:tid", d: "Karma score derived from on-chain tip + task proofs." },
    ],
  },
  {
    title: "Operations",
    rows: [
      { m: "GET", p: "/health", d: "Liveness probe (no version prefix)." },
      { m: "GET", p: "/metrics", d: "Prometheus metrics." },
      { m: "GET", p: "/v1/stats", d: "Message counts, peer count, indexer head." },
      { m: "GET", p: "/v1/peers", d: "Currently connected gossip peers and their state." },
      { m: "GET", p: "/v1/sync/status", d: "Per-peer sync coverage and last-sync timestamps." },
    ],
  },
];

export default function APIDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hub API</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The Tribe Hub serves a REST API for everything you can&apos;t reasonably read from the chain directly — tweets, DMs, notifications, indexed counters, and signed envelope storage. Onchain endpoints expose the hub&apos;s indexed view of Solana program accounts.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Base URL</h2>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between gap-4 flex-wrap">
              <span className="font-bold text-xs uppercase tracking-wider text-zinc-400">Local hub</span>
              <code className="text-sm font-mono text-black">http://localhost:4000</code>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between gap-4 flex-wrap">
              <span className="font-bold text-xs uppercase tracking-wider text-zinc-400">Your hub</span>
              <code className="text-sm font-mono text-black">http://&lt;hub-host&gt;:4000</code>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
            There is no canonical public hub. Run your own with <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">brew install tribe</code>, or point at a hub a friend is running.
          </p>
        </section>

        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="text-xl font-bold mb-4">{g.title}</h2>
            <div className="border border-zinc-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 border-b border-zinc-200">
                  <tr>
                    <th className="px-4 py-3 font-bold w-20">Method</th>
                    <th className="px-4 py-3 font-bold">Path</th>
                    <th className="px-4 py-3 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {g.rows.map((r) => (
                    <tr key={r.p + r.m}>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-[11px] font-bold">{r.m}</span></td>
                      <td className="px-4 py-3 font-mono text-xs">{r.p}</td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">{r.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Radio className="w-6 h-6" /> WebSockets
          </h2>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between gap-4 flex-wrap">
              <code className="font-mono text-xs font-bold">GET /v1/ws</code>
              <span className="text-xs text-zinc-500 text-right">Client subscription stream — receives new validated envelopes as they arrive.</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between gap-4 flex-wrap">
              <code className="font-mono text-xs font-bold">GET /gossip</code>
              <span className="text-xs text-zinc-500 text-right">Hub-to-hub gossip endpoint. <em>hello → have → want → messages</em> on a 5 s tick.</span>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/sdk" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← SDK Reference
        </a>
        <a href="/docs/running-a-node" className="text-sm font-bold flex items-center gap-1 hover:underline">
          Running a Node →
        </a>
      </div>
    </div>
  );
}
