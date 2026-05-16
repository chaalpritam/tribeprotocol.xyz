import { 
  Network, 
  Key, 
  Database, 
  Zap, 
  UserCircle,
  Code
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-sm font-medium mb-8 text-zinc-600 border border-zinc-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            v0.1.0 Live on Solana Devnet
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black">
            The Open Social Protocol.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            TribeEco is a decentralized social protocol built on Solana. Fully owned identity, portable social graph, and instant peer-to-peer gossip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/docs" className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-black/10">
              Start Building
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black border-2 border-zinc-200 text-lg font-medium hover:border-black transition-all">
              Explore the Graph
            </a>
          </div>
        </div>
      </section>

      {/* Key Concepts Grid */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Concepts</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Everything you need to build scalable, resilient, and fully-owned social applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Concept 1 */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                <UserCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tribe ID (TID)</h3>
              <p className="text-zinc-500 leading-relaxed">
                Unique auto-incrementing 64-bit numeric identity with custody and recovery addresses. Universal identifier across the protocol.
              </p>
            </div>

            {/* Concept 2 */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                <Database className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Signed Messages</h3>
              <p className="text-zinc-500 leading-relaxed">
                Off-chain actions signed with ed25519 app keys, stored by the hub, and synced via gossip. Covers tweets, DMs, polls, tips, and more.
              </p>
            </div>

            {/* Concept 3 */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                <Network className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Graph</h3>
              <p className="text-zinc-500 leading-relaxed">
                PDA-per-relationship design on Solana. O(1) checks, unlimited follows, and rent reclamation. The most efficient on-chain graph.
              </p>
            </div>

            {/* Concept 4 */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ephemeral Rollup</h3>
              <p className="text-zinc-500 leading-relaxed">
                Instant follow confirmations (&lt;50ms) using optimistic processing, settling into Solana L1 batches every 10 seconds.
              </p>
            </div>

            {/* Concept 5 */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                <Key className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">App Keys</h3>
              <p className="text-zinc-500 leading-relaxed">
                Scoped delegation keys to sign on user behalf. Granular permissions (Full, TweetsOnly, ReadOnly) with optional expiry.
              </p>
            </div>

            {/* Concept 6 */}
            <div className="bg-zinc-50 p-8 rounded-[32px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 border border-zinc-200">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">.tribe Usernames</h3>
              <p className="text-zinc-500 leading-relaxed">
                Human-readable names bound to TIDs. Requires annual renewal, transferrable, directly embedded into the namespace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code/Architecture Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/50 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-100/50 blur-3xl rounded-full" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Run a Node in Seconds</h2>
                <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                  Join the distributed network and host your own piece of the protocol. Our Homebrew formula auto-installs all dependencies and boots up the Hub, Ephemeral Rollup Sequencer, and databases.
                </p>
                <div className="flex gap-4">
                  <a href="/docs" className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors">
                    View Setup Guide
                  </a>
                  <button className="px-6 py-3 rounded-full border border-zinc-200 font-medium hover:bg-zinc-50 transition-colors">
                    Docker Setup
                  </button>
                </div>
              </div>

              <div className="bg-white border border-zinc-200 rounded-[24px] p-6 shadow-xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                </div>
                <pre className="text-sm font-mono text-zinc-600 overflow-x-auto">
                  <code>
                    <span className="text-zinc-400"># Install the Homebrew tap</span><br/>
                    brew tap chaalpritam/tribe<br/><br/>
                    <span className="text-zinc-500"># Install TribeEco node</span><br/>
                    brew install --HEAD tribe<br/><br/>
                    <span className="text-zinc-500"># Start all services</span><br/>
                    <span className="text-black font-bold">tribe start</span><br/><br/>
                    <span className="text-zinc-400"># Verify connection</span><br/>
                    tribe peers
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
