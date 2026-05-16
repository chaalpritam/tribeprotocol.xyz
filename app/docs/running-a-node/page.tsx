import { 
  Server, 
  Terminal, 
  Cpu, 
  ShieldAlert, 
  CheckCircle 
} from "lucide-react";

export default function RunningANode() {
  return (
    <div className="max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Running a Node</h1>
        <p className="text-xl text-zinc-500 leading-relaxed">
          Help decentralize the Tribe network by hosting your own Hub and Ephemeral Rollup Sequencer.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6" /> System Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="font-bold text-sm mb-1">Standard Node</div>
              <p className="text-xs text-zinc-500">2 vCPU, 4GB RAM, 20GB SSD. Ideal for Raspberry Pi or Mac Mini.</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="font-bold text-sm mb-1">Full Hub + ER</div>
              <p className="text-xs text-zinc-500">4 vCPU, 8GB RAM, 100GB SSD. Recommended for Seed Nodes.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" /> Quick Install (macOS)
          </h2>
          <div className="bg-zinc-900 text-zinc-300 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
<pre>{`brew tap chaalpritam/tribe
brew install --HEAD tribe
tribe start`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">CLI Commands</h2>
          <div className="space-y-3">
            {[
              { cmd: "tribe status", desc: "Check the status of all running services" },
              { cmd: "tribe logs [svc]", desc: "Tail logs for hub, er-server, or app" },
              { cmd: "tribe peers", desc: "List all connected Hub peers" },
              { cmd: "tribe share", desc: "Print URLs for cross-device development" },
              { cmd: "tribe backup", desc: "Create a snapshot of all node data" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white">
                <code className="text-xs font-bold text-black font-mono">{item.cmd}</code>
                <span className="text-xs text-zinc-500">{item.desc}</span>
              </div>
            ))}
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
                <span>Keep your server wallet funded with a small amount of SOL for settlement.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Expose only port 4000 (Hub) and 3003 (ER) to the public internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Use a dedicated SSD for PostgreSQL to ensure high I/O performance.</span>
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
