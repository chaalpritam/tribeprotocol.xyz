import type { Metadata } from "next";
import {
  Terminal,
  Cpu,
  ShieldAlert,
  CheckCircle,
  Server,
  Radio,
  HardDrive
} from "lucide-react";

export const metadata: Metadata = {
  title: "Running a Node",
  description:
    "Run a Tribe Hub and ER sequencer via `brew install tribe` — auto-generated hub IDs, seed-node setup, gossip sync, and CLI reference.",
};

export default function RunningANode() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Running a Node</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          Help decentralize the Tribe network by hosting your own Hub and Ephemeral Rollup sequencer. The Homebrew formula installs Docker, Postgres, the hub, and the ER server, then auto-generates a unique hub ID on first start.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6" /> System Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="font-bold text-sm mb-1">Home node</div>
              <p className="text-xs text-zinc-500">2 vCPU, 4 GB RAM, 20 GB SSD. Fine on a Raspberry Pi 5 or Mac mini.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="font-bold text-sm mb-1">Seed node (public)</div>
              <p className="text-xs text-zinc-500">4 vCPU, 8 GB RAM, 100 GB SSD on a VPS with a public IP. Hub-only — no ER.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" /> Install (macOS)
          </h2>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto leading-relaxed">
<pre>{`# Tap and install the hub + ER stack
brew tap chaalpritam/tribe
brew install --HEAD tribe

# Boot the stack (hub-db, er-db, hub, er-server)
tribe start

# Auto-connect to the seed node (one-time)
tribe seed set ws://<seed-ip>:4000/gossip
tribe start

# Optional: install the demo UI (separate formula)
brew install --HEAD tribe-app
tribe-app link http://localhost:4000
tribe-app`}</pre>
          </div>
          <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
            The frontend used to bundle with <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe</code> on port 3002. It now ships as its own formula — <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">brew install tribe-app</code> — so the core node has no Node.js dev-server in the loop.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Radio className="w-6 h-6" /> Joining the Mesh
          </h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Hubs gossip pull-based over WebSocket. Seed nodes live on public IPs; home nodes connect outbound — no inbound ports required.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-600 leading-relaxed">
            <li><code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe seed set ws://&lt;seed-ip&gt;:4000/gossip</code> — point at a known seed.</li>
            <li>Run <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe start</code> — the hub dials out, exchanges <em>hello → have → want → messages</em>, and starts catching up.</li>
            <li><code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe peer add &lt;ws-url&gt;</code> adds extra peers on demand; <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe peers</code> lists what&apos;s connected.</li>
            <li><code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe sync</code> shows coverage <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">(local / peer total)</code>; <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">tribe sync --peer all</code> forces a hard 30-day catch-up.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">CLI Reference</h2>
          <div className="space-y-2">
            {[
              { cmd: "tribe start", desc: "Boot Docker services, wait for health, auto-connect to seed." },
              { cmd: "tribe stop", desc: "Stop all Docker services." },
              { cmd: "tribe status", desc: "Show which services are running." },
              { cmd: "tribe logs [svc]", desc: "Tail logs for hub, er-server, hub-db, or er-db." },
              { cmd: "tribe doctor", desc: "Check prereqs (Docker, Colima, Solana, pnpm) and auto-generate a wallet." },
              { cmd: "tribe peers", desc: "List currently connected gossip peers." },
              { cmd: "tribe peer add <url>", desc: "POST a peer WebSocket URL to /v1/peers." },
              { cmd: "tribe sync", desc: "Coverage table (local / peer total) and last-sync per peer." },
              { cmd: "tribe sync --peer <id|all>", desc: "Force a hard catch-up via /v1/sync/trigger." },
              { cmd: "tribe seed set <url>", desc: "Persist seed-node WebSocket URL in ~/.tribe/seed." },
              { cmd: "tribe hub-id [show|set|reset]", desc: "Show, set, or reset this hub's gossip identifier." },
              { cmd: "tribe network", desc: "Print local, LAN, and seed-node URLs." },
              { cmd: "tribe share", desc: "Copy-paste hub/ER URLs plus a reachability check for other devices on Wi-Fi." },
              { cmd: "tribe backup", desc: "Snapshot hub-db + er-db to a tarball." },
              { cmd: "tribe restore <file>", desc: "Restore a previous backup." },
              { cmd: "tribe reset", desc: "Wipe local data and start over." },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-6 p-4 rounded-xl border border-zinc-200 bg-white">
                <code className="text-xs font-bold text-black font-mono shrink-0">{item.cmd}</code>
                <span className="text-xs text-zinc-500 text-right">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HardDrive className="w-6 h-6" /> Persistent State (~/.tribe/)
          </h2>
          <div className="space-y-3">
            {[
              { file: "server-wallet.json", desc: "ER sequencer Solana keypair. Survives reinstalls; restored automatically." },
              { file: "hub-id", desc: "This hub's unique gossip identifier. Auto-generated on first start so two laptops don't collide." },
              { file: "seed", desc: "Seed-node WebSocket URL. One line, e.g. ws://1.2.3.4:4000/gossip." },
              { file: "tribe-app.env", desc: "NEXT_PUBLIC_HUB_URL + NEXT_PUBLIC_ER_SERVER_URL for the tribe-app demo UI." },
            ].map(item => (
              <div key={item.file} className="flex items-center justify-between gap-6 p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                <code className="text-xs font-mono font-bold">~/.tribe/{item.file}</code>
                <span className="text-xs text-zinc-500 text-right">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Server className="w-6 h-6" /> Running a Seed Node
          </h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Seed nodes are hub-only (no ER) and live on a public IP so home nodes can dial them outbound. Use the compose file in <code className="font-mono text-xs px-1 py-0.5 bg-zinc-100 rounded">deploy/seed/docker-compose.seed.yml</code>.
          </p>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto leading-relaxed">
<pre>{`# On a VPS with a public IP
git clone https://github.com/chaalpritam/TribeEco
cd TribeEco
bash deploy/seed/setup-seed.sh
# Hub listens on :4000 — share ws://<ip>:4000/gossip with peers`}</pre>
          </div>
        </section>

        <section>
          <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
            <div className="flex items-center gap-3 mb-4 text-zinc-800">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-bold">Security Best Practices</h3>
            </div>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Keep <code className="font-mono text-xs px-1 py-0.5 bg-white rounded border border-zinc-200">~/.tribe/server-wallet.json</code> funded with a small amount of devnet/mainnet SOL so the ER can settle batches.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Home nodes only need outbound network — keep ports 4000 (hub) and 3003 (ER) firewalled unless you want public peering.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Use a dedicated SSD for Postgres (hub-db on :5436, er-db on :5435) — gossip throughput is I/O bound.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Back up <code className="font-mono text-xs px-1 py-0.5 bg-white rounded border border-zinc-200">~/.tribe/</code> before reinstalling — your wallet and hub identity live there.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-center">
        <a href="/docs/api" className="text-sm font-bold flex items-center gap-1 hover:underline">
          ← Hub API
        </a>
        <div className="text-sm text-zinc-400">Documentation Complete</div>
      </div>
    </div>
  );
}
