import { AlertCircle, ArrowRight, Check, Package, Settings, Terminal } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';

export default function InstallationPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <Package className="w-4 h-4" />
            <span>Installation</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Installation</h1>
          <p className="text-xl text-white/60">
            Multiple ways to install and configure ekkOS for your environment.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Prerequisites</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">Node.js 18+</strong> — Required for the MCP server</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">npm or yarn</strong> — Package manager</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">ekkOS API Key</strong> — Get one at <Link href="https://platform.ekkos.dev" className="text-purple-400 hover:underline">platform.ekkos.dev</Link></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Installation Methods</h2>

          <div className="space-y-6">
            {/* NPX (Recommended) */}
            <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">NPX (Recommended)</h3>
                <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Easiest</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                No installation required. The MCP server runs directly via npx:
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-green-400 overflow-x-auto">
npx @ekkos/mcp-server</pre>
              <p className="text-white/50 text-sm mt-4">
                This is the method used in MCP configuration files. The package is downloaded and cached automatically.
              </p>
            </div>

            {/* Global Install */}
            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Global Installation</h3>
                <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded">Faster startup</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Install globally for faster startup times:
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-blue-400 overflow-x-auto">
npm install -g @ekkos/mcp-server</pre>
              <p className="text-white/50 text-sm mt-4">
                After global install, you can use <code className="bg-white/10 px-1 rounded">@ekkos/mcp-server</code> as the command instead of npx.
              </p>
            </div>

            {/* SDK */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">TypeScript SDK</h3>
                <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded">For custom integration</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                For building custom integrations or using ekkOS in your own applications:
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-purple-400 overflow-x-auto">
npm install @ekkos/sdk</pre>
              <p className="text-white/50 text-sm mt-4">
                The SDK provides typed access to all ekkOS APIs for Node.js applications.
              </p>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Environment Variables</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-3 text-left text-white/60 font-medium">Variable</th>
                  <th className="px-6 py-3 text-left text-white/60 font-medium">Required</th>
                  <th className="px-6 py-3 text-left text-white/60 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3"><code className="text-purple-400">EKKOS_API_KEY</code></td>
                  <td className="px-6 py-3 text-green-400">Yes</td>
                  <td className="px-6 py-3 text-white/70">Your ekkOS API key from the dashboard</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3"><code className="text-purple-400">EKKOS_API_URL</code></td>
                  <td className="px-6 py-3 text-white/40">No</td>
                  <td className="px-6 py-3 text-white/70">API endpoint (default: https://mcp.ekkos.dev)</td>
                </tr>
                <tr>
                  <td className="px-6 py-3"><code className="text-purple-400">EKKOS_DEBUG</code></td>
                  <td className="px-6 py-3 text-white/40">No</td>
                  <td className="px-6 py-3 text-white/70">Enable debug logging (set to "true")</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Verify Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Verify Installation</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <p className="text-white/70">Test that the MCP server starts correctly:</p>
            <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-white/70 overflow-x-auto">
EKKOS_API_KEY=your_key npx @ekkos/mcp-server</pre>
            <p className="text-white/60 text-sm">
              You should see output indicating the server is ready to accept MCP connections.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  The MCP server is designed to be started by your AI tool (Claude Code, Cursor), not run standalone.
                  This test just verifies the installation works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/integrations/claude-code" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Configure Claude Code</h3>
              <p className="text-sm text-white/50">Set up ekkOS with Claude Code CLI</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Configure <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/cursor" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Configure Cursor</h3>
              <p className="text-sm text-white/50">Set up ekkOS with Cursor IDE</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                Configure <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
