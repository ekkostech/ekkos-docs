import { AlertCircle, ArrowRight, Check, CheckCircle, Copy, ExternalLink, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../components/DocsLayout';

export default function QuickStartPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>5 minute setup</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Quick Start</h1>
          <p className="text-xl text-white/60">
            Get ekkOS memory working with Claude Code or Cursor in under 5 minutes.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Prerequisites</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Node.js 18+ installed</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Claude Code or Cursor installed</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>ekkOS account (free tier available)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Step 1: Get API Key */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Get Your API Key</h2>
              <p className="text-white/60 mt-1">Sign up and grab your API key from the dashboard</p>
            </div>
          </div>

          <div className="ml-14 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <ol className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <span>Go to <Link href="https://platform.ekkos.dev" className="text-purple-400 hover:underline">platform.ekkos.dev</Link></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <span>Create an account or sign in with GitHub</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <span>Navigate to <strong className="text-white">Settings → API Keys</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <span>Click <strong className="text-white">"Generate New Key"</strong></span>
                </li>
              </ol>
            </div>

            <Link
              href="https://platform.ekkos.dev/signup"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Get API Key
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Step 2: Choose Your Tool */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Configure Your AI Tool</h2>
              <p className="text-white/60 mt-1">Add ekkOS to Claude Code or Cursor</p>
            </div>
          </div>

          <div className="ml-14 space-y-6">
            {/* Claude Code Config */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-purple-500/20 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Claude Code</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-white/60 text-sm">
                  Add to <code className="bg-white/10 px-2 py-1 rounded text-purple-400">~/.claude/settings.json</code>:
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
            </div>

            {/* Cursor Config */}
            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-blue-500/20 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Cursor</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-white/60 text-sm">
                  Add to <code className="bg-white/10 px-2 py-1 rounded text-blue-400">.cursor/mcp.json</code> in your project:
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
            </div>

            {/* Alternative: Auto Setup */}
            <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">One-Command Setup (Beta)</h3>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Run our setup script to automatically configure your tools:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-green-400">npx @ekkos/setup</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Restart */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Restart Your Tool</h2>
              <p className="text-white/60 mt-1">The MCP server needs a restart to activate</p>
            </div>
          </div>

          <div className="ml-14">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/70">
                  <strong className="text-white">Important:</strong> You must restart Claude Code or Cursor
                  for the MCP server configuration to take effect.
                </p>
              </div>
              <ul className="space-y-2 text-white/60 ml-8">
                <li>• <strong className="text-white">Claude Code:</strong> Close and reopen your terminal</li>
                <li>• <strong className="text-white">Cursor:</strong> Restart the application or reload the window</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 4: Verify */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Verify Connection</h2>
              <p className="text-white/60 mt-1">Test that ekkOS is working</p>
            </div>
          </div>

          <div className="ml-14 space-y-4">
            <p className="text-white/70">
              After restarting, ask your AI to use memory. Try these prompts:
            </p>

            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <code className="text-blue-400">"Search my memory for previous solutions"</code>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <code className="text-blue-400">"Remember that we use PostgreSQL for the database"</code>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <code className="text-blue-400">"What patterns do you know about authentication?"</code>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-6">
              <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                <CheckCircle className="w-5 h-5" />
                Success Indicators
              </div>
              <ul className="space-y-1 text-white/60 text-sm ml-7">
                <li>• AI mentions using ekkOS or memory tools</li>
                <li>• You see tool calls like <code className="text-green-400">ekkOS_Search</code>, <code className="text-green-400">ekkOS_Forge</code>, or <code className="text-green-400">ekkOS_Conflict</code></li>
                <li>• AI recalls information from previous sessions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Using Memory */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Using ekkOS Memory</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">ekkOS_Search</span> — Search Memory
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Search your memory for patterns, solutions, and context.
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-white/70">
"Search my memory for how we handled authentication"
"What patterns do we have for error handling?"
"Find previous solutions to database connection issues"</pre>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">ekkOS_Forge</span> — Save Patterns
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Permanently save important decisions and learned solutions.
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-white/70">
"Remember that we always use Supabase for auth"
"Save this: API routes should return typed responses"
"Forge this pattern for future reference"</pre>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-pink-400">ekkOS_Conflict</span> — Validate Actions
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Check proposed actions against your directives and patterns (Confidence Signals™).
              </p>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-white/70">
"Before implementing this, check if it aligns with our patterns"
"Validate this approach against our rules"
"Does this action conflict with any directives?"</pre>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">MCP server not loading?</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Ensure Node.js 18+ is installed: <code className="bg-white/10 px-2 py-0.5 rounded">node --version</code></li>
                <li>• Check your config file syntax is valid JSON</li>
                <li>• Verify your API key is correct</li>
                <li>• Try running <code className="bg-white/10 px-2 py-0.5 rounded">npx @ekkos/mcp-server</code> directly to see errors</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">AI not using memory tools?</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Explicitly ask the AI to "search memory" or "use ekkOS"</li>
                <li>• Check that the MCP server appears in your tool's MCP list</li>
                <li>• Restart your AI tool completely (not just reload)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">API key issues?</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Regenerate your key at <Link href="https://platform.ekkos.dev/dashboard/settings/api-keys" className="text-purple-400 hover:underline">platform.ekkos.dev</Link></li>
                <li>• Check for extra spaces or newlines in the key</li>
                <li>• Ensure the key is in the correct environment variable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/concepts/how-it-works" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-white/50">See what you can do with ekkOS</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Available Tools</h3>
              <p className="text-sm text-white/50">Browse all 29 MCP tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
