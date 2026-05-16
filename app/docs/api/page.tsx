import { 
  Globe, 
  Send, 
  Search, 
  Users, 
  Zap 
} from "lucide-react";

export default function APIDocs() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hub API</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          The Tribe Hub provides a REST API for reading and writing off-chain social data.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Base URLs</h2>
          <div className="space-y-2">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-zinc-400">Devnet Hub</span>
              <code className="text-sm font-mono text-black">https://devnet.hub.tribe.protocol</code>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-zinc-400">Mainnet Hub</span>
              <code className="text-sm font-mono text-black">https://hub.tribe.protocol</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
          <div className="border border-zinc-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-4 font-bold">Method</th>
                  <th className="px-6 py-4 font-bold">Path</th>
                  <th className="px-6 py-4 font-bold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-xs font-bold">POST</span></td>
                  <td className="px-6 py-4 font-mono text-xs">/v1/submit</td>
                  <td className="px-6 py-4 text-zinc-500">Submit a signed message</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-xs font-bold">GET</span></td>
                  <td className="px-6 py-4 font-mono text-xs">/v1/feed</td>
                  <td className="px-6 py-4 text-zinc-500">Global global feed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-xs font-bold">GET</span></td>
                  <td className="px-6 py-4 font-mono text-xs">/v1/user/:tid</td>
                  <td className="px-6 py-4 text-zinc-500">Get user profile and metadata</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-xs font-bold">GET</span></td>
                  <td className="px-6 py-4 font-mono text-xs">/v1/followers/:tid</td>
                  <td className="px-6 py-4 text-zinc-500">List followers for a TID</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-zinc-100 rounded font-mono text-xs font-bold">GET</span></td>
                  <td className="px-6 py-4 font-mono text-xs">/v1/search?q=</td>
                  <td className="px-6 py-4 text-zinc-500">Full-text search over content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Real-time Updates</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Connect to the Hub's WebSocket endpoint for real-time notification and feed updates.
          </p>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm">
            <code>ws://hub.tribe.protocol/v1/ws</code>
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
