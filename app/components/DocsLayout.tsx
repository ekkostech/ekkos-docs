'use client';

import {
    ArrowRight,
    Book,
    Brain,
    ChevronRight,
    Code,
    Cpu,
    Database,
    ExternalLink,
    Github,
    Globe,
    Layers,
    Menu,
    Search,
    Terminal,
    X,
    Zap
} from 'lucide-react';

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/introduction', icon: Book },
      { name: 'Quick Start', href: '/quickstart', icon: Zap },
      { name: 'Installation', href: '/installation', icon: Terminal },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { name: 'How It Works', href: '/concepts/how-it-works', icon: Brain },
      { name: 'Memory Layers', href: '/concepts/memory-layers', icon: Layers },
      { name: 'The Golden Loop', href: '/concepts/golden-loop', icon: Cpu },
      { name: 'Patterns & Learning', href: '/concepts/patterns', icon: Database },
    ]
  },
  {
    title: 'Integration',
    items: [
      { name: 'MCP Setup', href: '/mcp-integration', icon: Code },
      { name: 'Memory Gateway', href: '/architecture/memory-gateway', icon: Globe },
      { name: 'VS Code Extension', href: '/integrations/vscode-extension', icon: Zap },
      { name: 'Claude Code', href: '/integrations/claude-code', icon: Terminal },
      { name: 'Cursor', href: '/integrations/cursor', icon: Code },
      { name: 'Custom Agents', href: '/integrations/custom-agents', icon: Cpu },
    ]
  },
  {
    title: 'Architecture',
    items: [
      { name: 'Overview', href: '/architecture', icon: Layers },
      { name: '11-Layer System', href: '/architecture/layers', icon: Database },
      { name: 'Data Flow', href: '/architecture/data-flow', icon: ArrowRight },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { name: 'REST API', href: '/api-reference', icon: Code },
      { name: 'MCP Tools', href: '/api-reference/mcp-tools', icon: Terminal },
      { name: 'Webhooks', href: '/api-reference/webhooks', icon: ExternalLink },
    ]
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ekkOS_
              </span>
              <span className="text-white/40 text-sm font-medium">docs</span>
            </Link>

            {/* Search - Desktop */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl w-64">
              <Search className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/40">Search docs...</span>
              <kbd className="ml-auto px-2 py-0.5 text-xs bg-white/10 rounded text-white/40">⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://platform.ekkos.dev"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              Platform
              <ExternalLink className="w-3 h-3" />
            </Link>
            <a
              href="https://discord.gg/yuamkWAaXU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <Link
              href="https://github.com/ekkostech/ekkos"
              target="_blank"
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`
          fixed md:sticky top-16 left-0 z-40 w-72 h-[calc(100vh-4rem)]
          bg-[#050508] md:bg-transparent border-r border-white/10
          overflow-y-auto scrollbar-thin scrollbar-thumb-white/10
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <nav className="p-6 space-y-8">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                            ${isActive
                              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                            }
                          `}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.name}</span>
                          {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 select-text">
          {children}
        </main>
      </div>
    </div>
  );
}
