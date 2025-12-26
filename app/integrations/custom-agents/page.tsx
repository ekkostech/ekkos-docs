import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Cpu, Code, Copy, Terminal } from 'lucide-react';

export default function CustomAgentsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Cpu className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Custom Agent Integration</h1>
          <p className="text-xl text-white/60">
            Add ekkOS memory to your own AI agents and applications.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Integration Options</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              There are two ways to integrate ekkOS with custom agents:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">MCP Protocol</h4>
                <p className="text-white/60 text-sm">For agents that support the Model Context Protocol</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">REST API</h4>
                <p className="text-white/60 text-sm">Direct HTTP calls for any application</p>
              </div>
            </div>
          </div>
        </section>

        {/* REST API Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">REST API Integration</h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Search Memory</h3>
              <p className="text-white/60 text-sm mb-4">Find relevant patterns and context:</p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-white/80">{`curl -X POST https://mcp.ekkos.dev/api/v1/memory/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "authentication patterns",
    "limit": 5
  }'`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Save Pattern</h3>
              <p className="text-white/60 text-sm mb-4">Store a new pattern:</p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-white/80">{`curl -X POST https://mcp.ekkos.dev/api/v1/patterns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Rate limiting with Redis",
    "problem": "Need to limit API requests",
    "solution": "Use Redis sorted sets with sliding window",
    "tags": ["api", "redis", "performance"]
  }'`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Write Working Memory</h3>
              <p className="text-white/60 text-sm mb-4">Capture conversation messages:</p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-white/80">{`curl -X POST https://mcp.ekkos.dev/api/v1/working \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "role": "user",
    "content": "Help me implement user authentication",
    "session_id": "session_123",
    "source": "my-custom-agent"
  }'`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TypeScript SDK */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">TypeScript SDK</h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-400" />
                Installation
              </h3>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-green-400">npm install @ekkos/sdk</pre>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Usage Example
              </h3>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-white/80">{`import { EkkosClient } from '@ekkos/sdk';

const ekkos = new EkkosClient({
  apiKey: process.env.EKKOS_API_KEY
});

// Search memory
const results = await ekkos.search({
  query: 'authentication best practices',
  limit: 5
});

// Inject context into your AI prompt
const context = results.map(r => r.content).join('\\n');
const prompt = \`
Given this context from memory:
\${context}

User question: \${userQuestion}
\`;

// Save a new pattern
await ekkos.forgeInsight({
  title: 'JWT refresh token rotation',
  problem: 'Tokens expire during long sessions',
  solution: 'Implement automatic token refresh with rotation',
  tags: ['auth', 'security', 'jwt']
});

// Track outcome
await ekkos.recordOutcome({
  applicationId: results.retrieval_id,
  success: true
});`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Pattern */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Recommended Integration Pattern</h2>
          <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
            <ol className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-medium flex-shrink-0">1</span>
                <div>
                  <strong className="text-white">Before AI call</strong> — Search memory for relevant context
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-medium flex-shrink-0">2</span>
                <div>
                  <strong className="text-white">Inject context</strong> — Add retrieved patterns to system prompt
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-medium flex-shrink-0">3</span>
                <div>
                  <strong className="text-white">Make AI call</strong> — Let the AI use the enriched context
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-medium flex-shrink-0">4</span>
                <div>
                  <strong className="text-white">Capture conversation</strong> — Write messages to working memory
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-medium flex-shrink-0">5</span>
                <div>
                  <strong className="text-white">Track outcome</strong> — Report if the patterns helped
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/api-reference" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">API Reference</h3>
              <p className="text-sm text-white/50">Complete REST API documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                View API <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools</h3>
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
