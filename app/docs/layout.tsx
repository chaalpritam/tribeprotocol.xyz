import { 
  BookOpen, 
  Layers, 
  Cpu, 
  Terminal, 
  Network, 
  Github 
} from "lucide-react";

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

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 hidden lg:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div className="px-6 py-8">
          {sidebarLinks.map((section, i) => (
            <div key={i} className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 px-2">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href={item.href}
                      className="block px-2 py-1.5 text-sm font-medium text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-md transition-colors"
                    >
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
      <main className="flex-1 px-6 py-12 lg:px-16 max-w-4xl">
        <div className="prose prose-zinc prose-invert max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
}
