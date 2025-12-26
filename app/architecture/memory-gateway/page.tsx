import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, CheckCircle2 } from 'lucide-react';

export default function MemoryGatewayPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
            <Globe className="w-4 h-4" />
            <span>Connection</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Connecting Your AI</h1>
          <p className="text-xl text-white/60">
            ekkOS connects to your AI through the MCP (Model Context Protocol).
            One connection gives your AI access to persistent memory.
          </p>
        </div>

        {/* What You Get */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Instant Memory</h3>
              <p className="text-white/60">
                Your AI can search and recall past conversations, solutions, and patterns instantly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Secure by Default</h3>
              <p className="text-white/60">
                All connections are encrypted. Your memory is isolated to your account.
              </p>
            </div>
          </div>
        </section>

        {/* Endpoint */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Connection Endpoint</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <code className="bg-black/50 px-4 py-2 rounded-lg text-blue-400 text-lg block mb-4">
              https://mcp.ekkos.dev
            </code>
            <p className="text-white/60 text-sm">
              This is the MCP server URL. The ekkOS Connect extension configures this automatically.
            </p>
          </div>
        </section>

        {/* Supported AI Agents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Supported AI Agents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Cursor', status: 'Full Support' },
              { name: 'Claude Code', status: 'Full Support' },
              { name: 'Windsurf', status: 'Full Support' },
              { name: 'VS Code', status: 'Via Extension' },
              { name: 'ChatGPT', status: 'API Access' },
              { name: 'Custom Agents', status: 'MCP Compatible' },
            ].map((ide) => (
              <div
                key={ide.name}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <h3 className="font-semibold text-white mb-1">{ide.name}</h3>
                <span className="text-green-400 text-sm">{ide.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Authentication</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                OAuth (Recommended)
              </h3>
              <p className="text-white/60 text-sm">
                Install the ekkOS Connect extension and click "Connect to ekkOS".
                Sign in with your account and you're done. The extension handles everything.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h3 className="font-semibold text-white mb-2">API Key (Direct Access)</h3>
              <p className="text-white/60 text-sm mb-2">
                For direct API access or custom integrations:
              </p>
              <code className="bg-black/50 px-3 py-2 rounded-lg text-green-400 text-sm block">
                Authorization: Bearer ekk_your_api_key
              </code>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What Your AI Can Do</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Search Memory</strong>
                  <span className="text-white/60"> — Find relevant context from past conversations</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Save Patterns</strong>
                  <span className="text-white/60"> — Store solutions that work for future use</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Set Rules</strong>
                  <span className="text-white/60"> — Define MUST/NEVER behavioral constraints</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Recall Conversations</strong>
                  <span className="text-white/60"> — Find what you discussed yesterday or last week</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Check Conflicts</strong>
                  <span className="text-white/60"> — Validate actions against your rules</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/integrations/claude-code" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Setup</h3>
              <p className="text-sm text-white/50">Connect in 2 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/cursor" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Cursor Setup</h3>
              <p className="text-sm text-white/50">Add memory to Cursor</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                View guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
