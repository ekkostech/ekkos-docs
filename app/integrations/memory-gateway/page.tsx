import DocsLayout from '../../components/DocsLayout';
import Link from 'next/link';
import { ArrowRight, Code, Copy, Check, Globe, Cpu, Zap, Server, Cloud, Shield, Terminal, ExternalLink } from 'lucide-react';

const providers = [
  {
    name: 'OpenAI',
    models: 22,
    status: 'live',
    examples: ['GPT-5.1', 'GPT-4o', 'o3', 'o4'],
    color: 'emerald',
  },
  {
    name: 'Anthropic',
    models: 11,
    status: 'live',
    examples: ['Claude 4.5', 'Claude 4', 'Claude 3.x'],
    color: 'orange',
  },
  {
    name: 'xAI (Grok)',
    models: 12,
    status: 'live',
    examples: ['Grok 4', 'Grok 3', 'Grok 2'],
    color: 'blue',
  },
  {
    name: 'Google (Gemini)',
    models: 6,
    status: 'live',
    examples: ['Gemini 3', 'Gemini 2.5', 'Gemini 2.0'],
    color: 'red',
  },
  {
    name: 'DeepSeek',
    models: 5,
    status: 'coming',
    examples: ['DeepSeek V3', 'DeepSeek Coder'],
    color: 'purple',
  },
  {
    name: 'Meta (Llama)',
    models: 5,
    status: 'coming',
    examples: ['Llama 4', 'Llama 3.x'],
    color: 'blue',
  },
  {
    name: 'Mistral',
    models: 8,
    status: 'coming',
    examples: ['Mistral Large', 'Codestral'],
    color: 'amber',
  },
];

export default function MemoryGatewayPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
            <Globe className="w-4 h-4" />
            <span>Universal LLM Proxy</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Memory Gateway</h1>
          <p className="text-xl text-white/60">
            Use <span className="text-white font-semibold">83 models</span> from <span className="text-white font-semibold">11 providers</span> with your ekkOS memory.
            One endpoint. Any AI.
          </p>
        </div>

        {/* Key Value Prop */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Use the Gateway?</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Point any AI tool at <code className="bg-white/10 px-2 py-1 rounded text-purple-400">mcp.ekkos.dev/v1</code> and get:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80"><strong className="text-white">Pattern Injection</strong> — Your relevant patterns automatically included in every request</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80"><strong className="text-white">Context Capture</strong> — Conversations are saved for future retrieval</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80"><strong className="text-white">Provider Freedom</strong> — Switch between GPT, Claude, Grok, or Gemini anytime</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80"><strong className="text-white">Unified Memory</strong> — All conversations feed the same memory substrate</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            Quick Setup
          </h2>

          <div className="space-y-6">
            {/* Cursor Setup */}
            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-400" />
                Cursor / Cline / Continue / Aider
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Set your OpenAI Base URL:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80 font-mono">
https://mcp.ekkos.dev/v1</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <p className="text-white/50 text-xs mt-3">
                In Cursor: Settings → OpenAI → Base URL
              </p>
            </div>

            {/* Claude Code Setup */}
            <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-orange-400" />
                Claude Code (CLI)
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Set environment variable:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80 font-mono">
export ANTHROPIC_BASE_URL=https://mcp.ekkos.dev</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Generic API */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-purple-400" />
                Direct API Usage
              </h3>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/80 font-mono">{`curl https://mcp.ekkos.dev/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_EKKOS_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}</pre>
                <button className="absolute top-3 right-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Copy className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Providers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Cloud className="w-6 h-6 text-blue-400" />
            Supported Providers
          </h2>

          <div className="grid gap-4">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className={`bg-gradient-to-br from-${provider.color}-500/5 to-transparent border border-${provider.color}-500/20 rounded-xl p-5`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${provider.color}-500/20 flex items-center justify-center`}>
                      <Cpu className={`w-5 h-5 text-${provider.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{provider.name}</h3>
                      <p className="text-white/50 text-sm">{provider.models} models</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    provider.status === 'live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {provider.status === 'live' ? 'Live' : 'Coming Soon'}
                  </div>
                </div>
                <p className="text-white/60 text-sm">
                  {provider.examples.join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white/60 text-sm text-center">
              <span className="text-white font-semibold">83 models</span> total across <span className="text-white font-semibold">11 providers</span>.
              More coming soon.
            </p>
          </div>
        </section>

        {/* Model Selection */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Model Selection</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              The gateway auto-detects which provider to use based on the model name:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-emerald-400">gpt-*</code>
                <span className="text-white/50 ml-2">→ OpenAI</span>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-orange-400">claude-*</code>
                <span className="text-white/50 ml-2">→ Anthropic</span>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-blue-400">grok-*</code>
                <span className="text-white/50 ml-2">→ xAI</span>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <code className="text-red-400">gemini-*</code>
                <span className="text-white/50 ml-2">→ Google</span>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Also supports <code className="bg-white/10 px-1 rounded">provider/model</code> format (e.g., <code className="text-purple-400">openai/gpt-4o</code>)
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>
          <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/20 rounded-xl p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-400">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Retrieve</h4>
                  <p className="text-white/60 text-sm">Gateway searches your memory for relevant patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-400">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Inject</h4>
                  <p className="text-white/60 text-sm">Patterns are injected into the system prompt automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-400">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Forward</h4>
                  <p className="text-white/60 text-sm">Request is forwarded to your chosen LLM provider</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-amber-400">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Store</h4>
                  <p className="text-white/60 text-sm">Conversation is saved for future retrieval</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">API Endpoints</h2>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-green-400 font-mono text-sm">POST</code>
                <code className="text-white font-mono text-sm">/v1/chat/completions</code>
              </div>
              <p className="text-white/50 text-sm">OpenAI-compatible chat endpoint</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-green-400 font-mono text-sm">POST</code>
                <code className="text-white font-mono text-sm">/v1/messages</code>
              </div>
              <p className="text-white/50 text-sm">Anthropic-compatible messages endpoint</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-blue-400 font-mono text-sm">GET</code>
                <code className="text-white font-mono text-sm">/v1/models</code>
              </div>
              <p className="text-white/50 text-sm">List all 83 supported models</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-blue-400 font-mono text-sm">GET</code>
                <code className="text-white font-mono text-sm">/v1/gateway/health</code>
              </div>
              <p className="text-white/50 text-sm">Gateway health check</p>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-400" />
            Privacy & Security
          </h2>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">Your data is stored in <strong className="text-white">your</strong> memory substrate only</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">Never shared with other users</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">Never used to train models</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">SOC 2 compliance in progress</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/mcp-integration" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Integration</h3>
              <p className="text-sm text-white/50">Use ekkOS tools directly with MCP</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/cursor" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Cursor Setup</h3>
              <p className="text-sm text-white/50">Configure Cursor with the gateway</p>
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
