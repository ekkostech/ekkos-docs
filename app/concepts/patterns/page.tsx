import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Check, X } from 'lucide-react';

export default function PatternsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Core Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Patterns</h1>
          <p className="text-xl text-white/60">
            Save solutions. Retrieve them when you need them.
          </p>
        </div>

        {/* What is a Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What is a Pattern?</h2>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
            <p className="text-white/70 leading-relaxed mb-6">
              A pattern is a <strong className="text-white">problem-solution pair</strong> that you can save and retrieve later.
              When you solve a problem, save it. When you face a similar problem, search for it.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Solutions</h4>
                <p className="text-white/60 text-sm">Approaches that worked — save these for future reference.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Anti-Patterns</h4>
                <p className="text-white/60 text-sm">What NOT to do — save these to avoid repeating mistakes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Example Pattern</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <span className="font-semibold text-white">Use Supabase Auth for Next.js</span>
              <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Works well</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-white/70">Need to add authentication to a Next.js application with social logins and email/password.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-white/70">Use @supabase/auth-helpers-nextjs with the App Router. Configure providers in Supabase dashboard. Use middleware for route protection.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Works When</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>• Next.js 13+ with App Router</li>
                  <li>• Need social auth (Google, GitHub, etc.)</li>
                  <li>• Using Supabase for database</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">Avoid</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" />
                    Don't roll custom JWT handling
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" />
                    Don't store tokens in localStorage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Save Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Saving Patterns</h2>
          <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              Tell your AI to save something when you've solved a problem:
            </p>
            <div className="space-y-3">
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-purple-400">"Remember this for next time"</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-purple-400">"Save this pattern: always validate user input before database queries"</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-purple-400">"Forge this as an anti-pattern — we should never do this again"</code>
              </div>
            </div>
          </div>
        </section>

        {/* Using Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Using Patterns</h2>
          <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              Patterns are automatically retrieved when relevant. You can also search explicitly:
            </p>
            <div className="space-y-3">
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Search my memory for authentication patterns"</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"What patterns do we have for error handling?"</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"How did we solve this before?"</code>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
              <p className="text-sm text-white/50">See ekkOS_Forge and other tools</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/quickstart" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Get Started</h3>
              <p className="text-sm text-white/50">Connect your AI and start saving patterns</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                Quick start <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
