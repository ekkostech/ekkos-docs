import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ContinuousImprovementPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400 mb-6">
            <RefreshCw className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Continuous Improvement</h1>
          <p className="text-xl text-white/60">
            ekkOS updates future suggestions based on outcomes.
          </p>
        </div>

        {/* Simple Explanation */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
            <p className="text-white/70 leading-relaxed text-lg">
              Solutions that work become available for similar problems in the future.
              Preferences you establish persist across sessions. The more you use ekkOS,
              the more relevant context it can provide.
            </p>
          </div>
        </section>

        {/* What This Means For You */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">What This Means For You</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Context accumulates</strong>
                  <span className="text-white/60"> — Past conversations inform future responses</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Solutions persist</strong>
                  <span className="text-white/60"> — Saved patterns remain available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Preferences stick</strong>
                  <span className="text-white/60"> — Rules apply across every session</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Knowledge syncs</strong>
                  <span className="text-white/60"> — What you save in one tool is available everywhere</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Save useful solutions</h3>
              <p className="text-white/60 text-sm">
                Tell your AI "remember this" when something works well.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Set your preferences</h3>
              <p className="text-white/60 text-sm">
                "Always use X" or "Never do Y" creates persistent rules.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Search before starting</h3>
              <p className="text-white/60 text-sm">
                "Search memory for X" finds relevant past context.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Correct mistakes</h3>
              <p className="text-white/60 text-sm">
                When something doesn't work, tell your AI. Corrections become context.
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
