import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Download, Settings, Check, AlertCircle, Zap, Shield, BarChart3, RefreshCw } from 'lucide-react';

export default function VSCodeExtensionPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
            <Download className="w-4 h-4" />
            <span>VS Code Extension</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">ekkOS_Connect Extension</h1>
          <p className="text-xl text-white/60">
            One-click setup for universal AI memory across all your IDEs.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              <strong className="text-white">ekkOS_Connect</strong> is a VS Code extension that provides
              one-click setup for the ekkOS memory system. It automatically configures MCP (Model Context Protocol)
              for all supported IDEs including Cursor, Claude Code, Windsurf, and Codex.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">v1.8.14</div>
                <div className="text-xs text-white/50">Current Version</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Free</div>
                <div className="text-xs text-white/50">Beta Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-xs text-white/50">IDEs Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">Daily</div>
                <div className="text-xs text-white/50">Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">One-Click OAuth</h3>
              </div>
              <p className="text-white/60 text-sm">
                Seamless authentication with Google OAuth. No manual API key copying required.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Settings className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Auto MCP Deployment</h3>
              </div>
              <p className="text-white/60 text-sm">
                Automatically deploys MCP configuration to Cursor, Claude Code, Windsurf, and Codex.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Activity Dashboard</h3>
              </div>
              <p className="text-white/60 text-sm">
                Real-time monitoring of retrievals, applications, success rates, and forged patterns.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <Shield className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white">System Diagnostics</h3>
              </div>
              <p className="text-white/60 text-sm">
                Setup score, API latency monitoring, and one-click diagnostics for all IDEs.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Installation</h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-purple-400" />
                VS Code Marketplace
              </h3>
              <ol className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">1</span>
                  Open VS Code Extensions (<kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Cmd/Ctrl + Shift + X</kbd>)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">2</span>
                  Search for <code className="bg-white/10 px-2 py-0.5 rounded text-purple-400">ekkOS_Connect</code>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">3</span>
                  Click Install
                </li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-400" />
                For Cursor Users (Open VSX)
              </h3>
              <p className="text-white/60 text-sm">
                The extension is also available on <a href="https://open-vsx.org" className="text-blue-400 hover:underline">Open VSX Registry</a> for
                Cursor and other VS Code forks.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Getting Started</h2>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">1</span>
                Open the ekkOS Sidebar
              </h3>
              <p className="text-white/60 text-sm">
                Click the ekkOS icon in the activity bar (left sidebar) to open the control panel.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">2</span>
                Connect Your Account
              </h3>
              <p className="text-white/60 text-sm">
                Click "Connect Account" and sign in with your ekkOS account (Google OAuth supported).
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">3</span>
                Auto MCP Deployment
              </h3>
              <p className="text-white/60 text-sm">
                MCP configuration is automatically deployed to all detected IDEs. Check the sidebar for connection status.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">4</span>
                Setup Project Hooks (Optional)
              </h3>
              <p className="text-white/60 text-sm">
                Click "Setup Rules" to deploy AI instruction files (<code className="bg-white/10 px-1 rounded">.claude.md</code>, <code className="bg-white/10 px-1 rounded">.cursorrules</code>) to your project.
              </p>
            </div>
          </div>
        </section>

        {/* Supported IDEs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Supported IDEs</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white font-medium">IDE</th>
                  <th className="text-left p-4 text-white font-medium">Config Location</th>
                  <th className="text-left p-4 text-white font-medium">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-white/70">Cursor</td>
                  <td className="p-4 text-white/50 font-mono text-xs">~/.cursor/mcp.json</td>
                  <td className="p-4 text-white/50">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/70">Claude Code</td>
                  <td className="p-4 text-white/50 font-mono text-xs">~/Library/Application Support/Claude/</td>
                  <td className="p-4 text-white/50">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/70">Windsurf</td>
                  <td className="p-4 text-white/50 font-mono text-xs">~/.codeium/windsurf/mcp_config.json</td>
                  <td className="p-4 text-white/50">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/70">Codex</td>
                  <td className="p-4 text-white/50 font-mono text-xs">~/.codex/config.toml</td>
                  <td className="p-4 text-white/50">TOML</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/70">VS Code</td>
                  <td className="p-4 text-white/50 font-mono text-xs">Continue extension</td>
                  <td className="p-4 text-white/50">JSON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Commands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Available Commands</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white font-medium">Command</th>
                  <th className="text-left p-4 text-white font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Connect Account</td>
                  <td className="p-4 text-white/60">Start OAuth flow and authenticate</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Disconnect Account</td>
                  <td className="p-4 text-white/60">Remove credentials and sign out</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Deploy MCP Config</td>
                  <td className="p-4 text-white/60">Deploy MCP config to all detected IDEs</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Deploy AI Instructions</td>
                  <td className="p-4 text-white/60">Deploy .claude.md and .cursorrules</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Setup Rules</td>
                  <td className="p-4 text-white/60">Setup ekkOS rules in current workspace</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Open Dashboard</td>
                  <td className="p-4 text-white/60">Open platform.ekkos.dev web dashboard</td>
                </tr>
                <tr>
                  <td className="p-4 text-purple-400 font-mono text-xs">ekkOS: Refresh Status</td>
                  <td className="p-4 text-white/60">Refresh connection and activity status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Dashboard Features</h2>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Activity Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-400">Searches</div>
                  <div className="text-xs text-white/50">Memory queries</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-400">Retrieved</div>
                  <div className="text-xs text-white/50">Patterns found</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-lg font-bold text-yellow-400">Saved</div>
                  <div className="text-xs text-white/50">Patterns stored</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-400">Directives</div>
                  <div className="text-xs text-white/50">Rules created</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                Real-time Activity Feed
              </h3>
              <p className="text-white/60 text-sm">
                Live stream of memory operations with timestamps, showing retrievals, applications,
                and pattern forging as they happen.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Extension not detecting installed IDEs?</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Verify IDE installation paths match OS defaults</li>
                    <li>• Click "Run Diagnostics" to identify specific issues</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">MCP deployment fails?</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Ensure IDE configuration directories exist</li>
                    <li>• Check file permissions on IDE config paths</li>
                    <li>• Extension auto-retries with exponential backoff</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Activity stats not updating?</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Click "Refresh Status" in sidebar</li>
                    <li>• Ensure API key is valid (displayed in sidebar)</li>
                    <li>• Check setup score is above 50%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://marketplace.visualstudio.com/items?itemName=ekkostech.ekkos-connect"
               target="_blank" rel="noopener noreferrer"
               className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="font-medium text-white mb-1">VS Code Marketplace</div>
              <div className="text-sm text-white/50">Install from marketplace</div>
            </a>
            <a href="https://github.com/ekkostech/ekkos-connect"
               target="_blank" rel="noopener noreferrer"
               className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="font-medium text-white mb-1">GitHub Repository</div>
              <div className="text-sm text-white/50">Source code & issues</div>
            </a>
            <a href="https://discord.gg/vePAuEYp"
               target="_blank" rel="noopener noreferrer"
               className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="font-medium text-white mb-1">Discord Community</div>
              <div className="text-sm text-white/50">Get help & feedback</div>
            </a>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools Reference</h3>
              <p className="text-sm text-white/50">Complete documentation of all 20+ memory tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/how-it-works" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-white/50">See what you can do with ekkOS</p>
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
