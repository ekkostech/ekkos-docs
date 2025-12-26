import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Clock, Shield, Layers, Lock, CheckCircle2 } from 'lucide-react';

export default function MemoryLayersPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
            <Layers className="w-4 h-4" />
            <span>Concepts</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Memory Layers</h1>
          <p className="text-xl text-white/60">
            ekkOS organizes different kinds of knowledge into 11 distinct layers.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6">
            <p className="text-white/70 leading-relaxed">
              Different types of information are stored separately for fast, relevant retrieval.
              You don't need to understand the layers to use ekkOS — just know that your context,
              solutions, preferences, and secrets are all organized and accessible.
            </p>
          </div>
        </section>

        {/* What Gets Stored */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What Gets Stored</h2>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Recent Context</h3>
                  <p className="text-white/60">
                    What you're working on now. Recent conversations, current files, immediate decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Past Sessions</h3>
                  <p className="text-white/60">
                    Conversations from previous sessions. Ask "what did we decide about X?" to retrieve past context.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Saved Patterns</h3>
                  <p className="text-white/60">
                    Solutions you've saved. Problem-solution pairs that can be retrieved when similar issues arise.
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
                  <h3 className="font-semibold text-lg text-white mb-2">User Rules</h3>
                  <p className="text-white/60">
                    Preferences and constraints. "Always use TypeScript." "Never force-push to main."
                    Rules that apply across all sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">Secrets (Layer 11)</h3>
                  <p className="text-white/60">
                    API keys, tokens, and credentials stored with AES-256-GCM encryption.
                    Accessible only through explicit tool calls. Never exposed in search results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">How You Interact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Search</h3>
              <p className="text-white/60 text-sm">
                "Search memory for authentication patterns" — retrieves relevant stored knowledge.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Save</h3>
              <p className="text-white/60 text-sm">
                "Remember this solution" — stores a pattern for future retrieval.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Set Rules</h3>
              <p className="text-white/60 text-sm">
                "Always do X" or "Never do Y" — creates persistent preferences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Store Secrets</h3>
              <p className="text-white/60 text-sm">
                "Store my API key" — encrypts and saves credentials securely.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
              <p className="text-sm text-white/50">All 29 tools for interacting with memory</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Browse tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/concepts/how-it-works" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">How It Works</h3>
              <p className="text-sm text-white/50">Overview of ekkOS</p>
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
