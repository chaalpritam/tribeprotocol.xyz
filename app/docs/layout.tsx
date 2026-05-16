import { 
  BookOpen, 
  Layers, 
  Cpu, 
  Terminal, 
  Network, 
  Github,
  Search
} from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-80 border-r border-zinc-100 hidden lg:block sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
        <div className="px-8 py-10">
          <div className="relative mb-10 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-black transition-colors" />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
            />
          </div>

          {sidebarLinks.map((section, i) => (
            <div key={i} className="mb-10">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5 px-3">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-black hover:bg-zinc-50 rounded-xl transition-all"
                    >
                      <div className="w-1 h-1 rounded-full bg-transparent group-hover:bg-black transition-all" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-16 lg:px-24 max-w-5xl">
        <div className="prose prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-black prose-pre:bg-zinc-50 prose-pre:border prose-pre:border-zinc-100 prose-pre:rounded-2xl prose-p:leading-relaxed prose-li:leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  );
}

const sidebarLinks = [
  {
    title: "Introduction",
    items: [
      { name: "Overview", href: "/docs" },
      { name: "How it Works", href: "/docs/how-it-works" },
      { name: "Quick Start", href: "/docs/quick-start" },
    ]
  },
  {
    title: "Protocol",
    items: [
      { name: "Chain Overview", href: "/docs/chain" },
      { name: "Identity (TID)", href: "/docs/protocol/identity" },
      { name: "Social Graph", href: "/docs/protocol/social-graph" },
      { name: "Ephemeral Rollup", href: "/docs/protocol/er" },
    ]
  },
  {
    title: "Developers",
    items: [
      { name: "SDK Reference", href: "/docs/sdk" },
      { name: "Hub API", href: "/docs/api" },
      { name: "Running a Node", href: "/docs/running-a-node" },
    ]
  }
];
