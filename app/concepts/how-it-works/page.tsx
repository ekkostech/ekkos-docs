import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Shield, CheckCircle2 } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>Overview</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">How ekkOS Works</h1>
          <p className="text-xl text-white/60">
            Persistent memory for AI assistants.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Problem</h2>
          <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-xl p-6">
            <p className="text-white/70 leading-relaxed mb-4">
              AI assistants don't remember between sessions. Every conversation starts fresh.
            </p>
            <ul className="space-y-2 text-white/60">
              <li>• You explain your project setup — again</li>
              <li>• You correct the same mistakes — again</li>
              <li>• You establish the same preferences — again</li>
              <li>• Knowledge from yesterday is gone today</li>
            </ul>
          </div>
        </section>

        {/* What ekkOS Does */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What ekkOS Does</h2>
          <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-xl p-6">
            <p className="text-white/70 leading-relaxed mb-6">
              ekkOS gives your AI persistent, cloud-based memory. Context and solutions
              persist across sessions and sync across all your tools.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">29</div>
                <div className="text-xs text-white/50">MCP tools</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">11</div>
                <div className="text-xs text-white/50">Memory layers</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">∞</div>
                <div className="text-xs text-white/50">Session persistence</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Can Do</h2>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Search Past Context</h3>
                  <p className="text-white/60">
                    Ask "what did we decide about authentication?" or "how did we handle that bug before?"
                    and get relevant context from past sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Save Solutions</h3>
                  <p className="text-white/60">
                    Tell your AI "remember this" or "save this pattern" to store solutions
                    that can be retrieved in future sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Set Preferences</h3>
                  <p className="text-white/60">
                    Say "always use TypeScript" or "never commit secrets" to establish rules
                    that persist across every session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Observe */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What You'll Observe</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Relevant Context Surfaces</h3>
              <p className="text-white/60 text-sm">
                When you ask questions, your AI receives relevant patterns and past context
                before responding.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Preferences Are Enforced</h3>
              <p className="text-white/60 text-sm">
                Rules you've set apply automatically. Your AI follows your established preferences.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Solutions Persist</h3>
              <p className="text-white/60 text-sm">
                Patterns you've saved remain available. Past solutions can be applied to new problems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Context Syncs Across Tools</h3>
              <p className="text-white/60 text-sm">
                Memory is cloud-based. What you save in Claude Code is available in Cursor.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-white/50">Set up ekkOS in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Available Tools</h3>
              <p className="text-sm text-white/50">See all 29 MCP tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
