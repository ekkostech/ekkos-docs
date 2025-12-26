import DocsLayout from '../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Shield, Check, Terminal, AlertCircle, Mail, Lock } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
            <Terminal className="w-4 h-4" />
            <span>Welcome</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Welcome to ekkOS
          </h1>

          <p className="text-xl text-white/60 leading-relaxed mb-8">
            ekkOS gives your AI persistent memory. Context, solutions, and preferences
            persist across sessions and sync across all your tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/quickstart"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/concepts/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Beta Notice */}
        <div className="mb-12 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-amber-400">Beta Software</h3>
          </div>
          <p className="text-white/70 mb-4">
            ekkOS is currently in beta. You may encounter bugs or incomplete features.
            Please report any issues to help us improve.
          </p>
          <a
            href="mailto:support@ekkos.dev?subject=Bug%20Report"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg font-semibold text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            support@ekkos.dev
          </a>
        </div>

        {/* What is ekkOS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What is ekkOS?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              ekkOS (pronounced "echoes") gives AI tools like Claude Code and Cursor
              <strong className="text-white"> persistent, cloud-based memory</strong>.
              When you connect your AI to ekkOS, it gains:
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Persistent Memory</strong> — Context survives across sessions and syncs across tools</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Saved Solutions</strong> — Store patterns that can be retrieved for similar problems</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Persistent Rules</strong> — Set preferences that apply across every session</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Secure Secrets</strong> — Store API keys and credentials with encryption</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Search Past Context</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Ask "what did we decide about X?" and get relevant context from past sessions.
                Solutions, decisions, and conversations are all searchable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Save Solutions</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Tell your AI "remember this" to store solutions. Saved patterns can be
                retrieved when you encounter similar problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/5 to-transparent border border-pink-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Set Rules</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Say "always use TypeScript" or "never commit secrets" to establish
                rules that persist across every session.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Store Secrets</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Securely store API keys and credentials with AES-256-GCM encryption.
                Access them when needed without exposing them in chat.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Get</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">29</div>
                <div className="text-sm text-white/50">MCP tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">11</div>
                <div className="text-sm text-white/50">Memory layers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">∞</div>
                <div className="text-sm text-white/50">Session persistence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Supported AI Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="font-semibold text-white mb-1">Claude Code</h3>
              <p className="text-sm text-white/50">Anthropic's CLI tool</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold text-white mb-1">Cursor</h3>
              <p className="text-sm text-white/50">AI-powered IDE</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-white mb-1">Custom Agents</h3>
              <p className="text-sm text-white/50">Any MCP-compatible agent</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Quick Start Guide</h3>
              </div>
              <p className="text-sm text-white/50">Get up and running in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Start now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">MCP Tools</h3>
              </div>
              <p className="text-sm text-white/50">Browse all 29 available tools</p>
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
