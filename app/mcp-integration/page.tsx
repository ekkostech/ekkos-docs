import { AlertCircle, ArrowRight, Check, CheckCircle, Code, Copy, Terminal } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';

export default function MCPIntegrationPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-400 mb-6">
            <Code className="w-4 h-4" />
            <span>Integration Guide</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Connect Your AI</h1>
          <p className="text-xl text-white/60">
            Give your AI persistent memory in minutes.
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What is MCP?</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6">
            <p className="text-white/70 leading-relaxed mb-4">
              <strong className="text-white">Model Context Protocol (MCP)</strong> is an open standard that allows AI assistants
              to connect to external tools. Think of it as a plugin system for AI.
            </p>
            <p className="text-white/70 leading-relaxed">
              When you connect Claude Code or Cursor to ekkOS via MCP, they gain the ability to:
            </p>
            <ul className="mt-4 space-y-2 text-white/60">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Remember context across sessions
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Learn from successful problem-solving
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Apply proven patterns automatically
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Follow your rules consistently
              </li>
            </ul>
          </div>
        </section>

        {/* Claude Code Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Terminal className="w-6 h-6 text-purple-400" />
            Claude Code Setup
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 1: Locate your settings file</h3>
              <p className="text-white/60 text-sm mb-4">
                Claude Code stores its configuration in <code className="bg-white/10 px-2 py-1 rounded text-purple-400">~/.claude/settings.json</code>
              </p>
              <div className="bg-black/50 rounded-lg p-4">
                <pre className="text-sm text-white/70 font-mono"># macOS/Linux
~/.claude/settings.json

# Windows
%USERPROFILE%\.claude\settings.json</pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 2: Add ekkOS MCP server</h3>
              <p className="text-white/60 text-sm mb-4">
                Add this to your settings.json:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80 font-mono">{`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 3: Restart Claude Code</h3>
              <p className="text-white/60 text-sm">
                Close your terminal and reopen it. Claude Code will load the MCP server on next launch.
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                <CheckCircle className="w-5 h-5" />
                Verify Installation
              </div>
              <p className="text-white/60 text-sm">
                Ask Claude: <code className="bg-white/10 px-2 py-0.5 rounded">"Search my memory for recent patterns"</code>
                — if it uses the memory tools, you're connected.
              </p>
            </div>
          </div>
        </section>

        {/* Cursor Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-400" />
            Cursor Setup
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 1: Create MCP configuration</h3>
              <p className="text-white/60 text-sm mb-4">
                Create <code className="bg-white/10 px-2 py-1 rounded text-blue-400">.cursor/mcp.json</code> in your project root:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80 font-mono">{`{
  "mcpServers": {
    "ekkos-memory": {
      "command": "npx",
      "args": ["-y", "@ekkos/mcp-server"],
      "env": {
        "EKKOS_API_KEY": "your_api_key_here"
      }
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 2: Enable MCP in Cursor Settings</h3>
              <ol className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">1</span>
                  Open Cursor Settings (Cmd/Ctrl + ,)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">2</span>
                  Search for "MCP"
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">3</span>
                  Enable "Use MCP Servers"
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Step 3: Reload Window</h3>
              <p className="text-white/60 text-sm">
                Press <kbd className="bg-white/10 px-2 py-0.5 rounded text-xs">Cmd/Ctrl + Shift + P</kbd> and run "Reload Window"
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Search Memory
              </h3>
              <p className="text-white/60 text-sm">
                "Search my memory for authentication patterns"
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Save Patterns
              </h3>
              <p className="text-white/60 text-sm">
                "Remember this solution for next time"
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Set Rules
              </h3>
              <p className="text-white/60 text-sm">
                "Always use TypeScript strict mode"
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Recall Conversations
              </h3>
              <p className="text-white/60 text-sm">
                "What did we discuss about the database?"
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>

          <div className="space-y-4">
            <details className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-4 cursor-pointer flex items-center justify-between text-white font-medium hover:bg-white/5">
                <span>MCP server not starting?</span>
                <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4 text-white/60 text-sm space-y-2">
                <p>1. Verify Node.js 18+ is installed: <code className="bg-white/10 px-1 rounded">node --version</code></p>
                <p>2. Check npx is available: <code className="bg-white/10 px-1 rounded">npx --version</code></p>
                <p>3. Try running manually: <code className="bg-white/10 px-1 rounded">EKKOS_API_KEY=xxx npx @ekkos/mcp-server</code></p>
              </div>
            </details>

            <details className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group">
              <summary className="p-4 cursor-pointer flex items-center justify-between text-white font-medium hover:bg-white/5">
                <span>AI not using memory tools?</span>
                <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4 text-white/60 text-sm space-y-2">
                <p>1. Explicitly ask: "Search my memory for..." or "Use ekkOS to..."</p>
                <p>2. Verify the MCP server is connected</p>
                <p>3. Check your API key is valid at <Link href="https://ekkos.dev" className="text-purple-400 hover:underline">ekkos.dev</Link></p>
              </div>
            </details>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Memory Tools</h3>
              <p className="text-sm text-white/50">See all available tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/golden-loop" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How Learning Works</h3>
              <p className="text-sm text-white/50">Patterns improve over time</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
