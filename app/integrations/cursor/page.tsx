import { AlertCircle, ArrowRight, Check, Code, DollarSign, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

export default function CursorPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
            <Code className="w-4 h-4" />
            <span>Integration</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">Cursor Integration</h1>
          <p className="text-xl text-white/60 mb-6">
            Add persistent memory to Cursor with two integration options.
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-3">Choose Your Integration Method</h3>
            <p className="text-white/70 text-sm mb-4">
              ekkOS offers two ways to integrate with Cursor, each optimized for different workflows and cost preferences.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Gateway Proxy</div>
                  <div className="text-white/50">Fully automatic, pay-per-token</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Wrench className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">MCP Tools</div>
                  <div className="text-white/50">Manual control, Cursor subscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-medium">Feature</th>
                  <th className="px-4 py-3 text-left text-white font-medium">Gateway Proxy</th>
                  <th className="px-4 py-3 text-left text-white font-medium">MCP Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3 text-white/60">Setup Difficulty</td>
                  <td className="px-4 py-3 text-white/80">Medium</td>
                  <td className="px-4 py-3 text-white/80">Easy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/60">Pattern Injection</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-green-400">
                      <Check className="w-4 h-4" /> Fully automatic
                    </span>
                  </td>
                  <td className="px-4 py-3 text-yellow-400">Manual calls</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/60">AI Provider</td>
                  <td className="px-4 py-3 text-white/80">Your own API key</td>
                  <td className="px-4 py-3 text-white/80">Cursor subscription</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/60">Cost</td>
                  <td className="px-4 py-3 text-white/80">
                    Pay OpenAI/Anthropic per token<br />
                    <span className="text-xs text-white/40">ekkOS gateway free</span>
                  </td>
                  <td className="px-4 py-3 text-white/80">
                    Cursor Pro subscription<br />
                    <span className="text-xs text-white/40">+ ekkOS usage tiers</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/60">Latency</td>
                  <td className="px-4 py-3 text-white/80">+50-100ms</td>
                  <td className="px-4 py-3 text-white/80">Only when calling tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Method Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Method 1: Gateway Proxy (Automatic)</h2>
          
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">Recommended for: Power users with API credits</h3>
                <p className="text-white/70 text-sm">
                  ekkOS sits between Cursor and your AI provider, automatically injecting patterns into every request.
                  No manual tool calls needed.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <div className="text-green-400 font-medium mb-1">✓ Pros</div>
                <ul className="text-white/60 space-y-1">
                  <li>• Fully automatic pattern injection</li>
                  <li>• Patterns delivered with every request</li>
                  <li>• Access 500+ models via OpenRouter</li>
                  <li>• Context syncs across sessions</li>
                </ul>
              </div>
              <div>
                <div className="text-yellow-400 font-medium mb-1">⚠ Considerations</div>
                <ul className="text-white/60 space-y-1">
                  <li>• Requires own API key</li>
                  <li>• Pay per token to provider</li>
                  <li>• +50-100ms latency</li>
                  <li>• Not compatible with Cursor subscription models</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">1</span>
                Get AI Provider API Key
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-white/60">Choose one provider:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener" className="block bg-black/30 border border-white/10 rounded-lg p-3 hover:border-blue-500/30 transition-colors">
                    <div className="font-medium text-white mb-1">OpenAI</div>
                    <div className="text-xs text-white/40">GPT-4o, o1, o3-mini</div>
                  </a>
                  <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener" className="block bg-black/30 border border-white/10 rounded-lg p-3 hover:border-purple-500/30 transition-colors">
                    <div className="font-medium text-white mb-1">Anthropic</div>
                    <div className="text-xs text-white/40">Claude Opus/Sonnet 4.5</div>
                  </a>
                  <a href="https://openrouter.ai/keys" target="_blank" rel="noopener" className="block bg-black/30 border border-white/10 rounded-lg p-3 hover:border-green-500/30 transition-colors">
                    <div className="font-medium text-white mb-1">OpenRouter</div>
                    <div className="text-xs text-white/40">500+ models, one key</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">2</span>
                Configure Cursor Base URL
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">1.</span>
                  <div>
                    <div className="text-white/80">Open <strong>Cursor Settings</strong> (Cmd+,)</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">2.</span>
                  <div>
                    <div className="text-white/80">Go to <strong>Models</strong> tab</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">3.</span>
                  <div className="space-y-2">
                    <div className="text-white/80">Paste your API key in <strong>OpenAI API Key</strong> field</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">4.</span>
                  <div className="space-y-2">
                    <div className="text-white/80">Enable <strong>"Override OpenAI Base URL"</strong></div>
                    <div className="bg-black/50 rounded-lg p-3 font-mono text-xs">
                      <span className="text-white/40">Base URL:</span> <span className="text-blue-400">https://mcp.ekkos.dev/api/v1/gateway/openai</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">5.</span>
                  <div>
                    <div className="text-white/80">Click <strong>Verify</strong></div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm">3</span>
                Test Integration
              </h3>
              <p className="text-white/60 text-sm mb-4">Open Cursor Agent and ask a technical question. You should see patterns appear automatically:</p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-white/60">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br />
                🧠 ekkOS Memory<br />
                ✓ 3 patterns loaded<br />
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br />
                <br />
                <span className="text-green-400">1. Pattern Name</span><br />
                   Solution: ...
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">💡 Pro Tip: Use OpenRouter</h3>
              <p className="text-white/70 text-sm mb-3">
                Get ONE API key from <a href="https://openrouter.ai" className="text-blue-400 hover:underline">OpenRouter</a> and access 500+ models:
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• <code className="text-blue-400">openai/gpt-4o</code> - Latest GPT-4</li>
                <li>• <code className="text-blue-400">anthropic/claude-3.5-sonnet</code> - Claude Sonnet</li>
                <li>• <code className="text-blue-400">x-ai/grok-4-fast-reasoning</code> - Grok-4</li>
                <li>• <code className="text-blue-400">deepseek/deepseek-chat</code> - Ultra-cheap 70B model</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Method 2: MCP Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Method 2: MCP Tools (Manual Control)</h2>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Wrench className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">Recommended for: Cursor Pro subscribers</h3>
                <p className="text-white/70 text-sm">
                  ekkOS provides tools that the AI calls when needed. Uses your Cursor subscription, no separate AI costs.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <div className="text-green-400 font-medium mb-1">✓ Pros</div>
                <ul className="text-white/60 space-y-1">
                  <li>• Use Cursor subscription models</li>
                  <li>• No separate AI costs</li>
                  <li>• Control when to retrieve patterns</li>
                  <li>• Works with privacy mode</li>
                </ul>
              </div>
              <div>
                <div className="text-yellow-400 font-medium mb-1">⚠ Considerations</div>
                <ul className="text-white/60 space-y-1">
                  <li>• AI must manually call tools</li>
                  <li>• Depends on AI compliance</li>
                  <li>• No auto-injection</li>
                  <li>• Easier to forget to use memory</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">1</span>
                Install ekkOS Connect Extension
              </h3>
              <ol className="space-y-2 text-white/60 text-sm">
                <li>• Open Cursor Extensions (Cmd+Shift+X)</li>
                <li>• Search for "ekkOS Connect"</li>
                <li>• Install <code className="bg-white/10 px-1 rounded text-blue-400">ekkostech.ekkos-connect</code></li>
                <li>• Click ekkOS icon in sidebar</li>
                <li>• Click "Connect Account" and authenticate</li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">2</span>
                MCP Configuration (Auto-Created)
              </h3>
              <p className="text-white/60 text-sm mb-4">
                The extension automatically creates <code className="bg-white/10 px-1 rounded">~/.cursor/mcp.json</code>:
              </p>
              <div className="relative">
                <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-xs text-white/80 font-mono">{`{
  "mcpServers": {
    "ekkos-memory": {
      "url": "https://mcp.ekkos.dev/api/v1/mcp/sse",
      "transport": "sse",
      "headers": {
        "Authorization": "Bearer YOUR_EKKOS_API_KEY",
        "X-User-ID": "YOUR_USER_ID"
      }
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">3</span>
                Restart Cursor
              </h3>
              <p className="text-white/60 text-sm">
                MCP servers only load on startup. Restart Cursor to activate ekkOS tools.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">4</span>
                Available Tools
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-black/30 rounded-lg p-3">
                  <code className="text-blue-400">ekkOS_Search</code>
                  <p className="text-white/40 text-xs mt-1">Search all 11 memory layers</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <code className="text-purple-400">ekkOS_Forge</code>
                  <p className="text-white/40 text-xs mt-1">Create new patterns</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <code className="text-green-400">ekkOS_Context</code>
                  <p className="text-white/40 text-xs mt-1">Get full context</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <code className="text-orange-400">ekkOS_Track</code>
                  <p className="text-white/40 text-xs mt-1">Track pattern usage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Cost Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-white">Gateway Proxy</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white/80 mb-1">ekkOS Gateway: <span className="text-green-400 font-medium">Free</span></div>
                  <div className="text-white/40 text-xs">Pattern injection included</div>
                </div>
                <div>
                  <div className="text-white/80 mb-1">AI Provider: <span className="text-yellow-400 font-medium">Pay per token</span></div>
                  <div className="text-white/40 text-xs">
                    • GPT-4o: ~$0.01 per 1K tokens<br />
                    • DeepSeek: ~$0.0001 per 1K tokens<br />
                    • Via your provider account
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">MCP Tools</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white/80 mb-1">Cursor Pro: <span className="text-blue-400 font-medium">$20/month</span></div>
                  <div className="text-white/40 text-xs">AI usage included</div>
                </div>
                <div>
                  <div className="text-white/80 mb-1">ekkOS: <span className="text-green-400 font-medium">5K calls free</span></div>
                  <div className="text-white/40 text-xs">
                    • Developer: 5K/month free<br />
                    • Builder: 250K for $39/month<br />
                    • Team: 2M+ for $149/month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Which Method? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Which Method Should You Use?</h2>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Choose Gateway Proxy if:</h4>
              <ul className="text-white/60 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You have API credits with OpenAI, Anthropic, or OpenRouter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You want fully automatic pattern injection (zero manual work)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You're willing to pay per-token for maximum integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>You want access to 500+ models via OpenRouter</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Choose MCP Tools if:</h4>
              <ul className="text-white/60 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>You have Cursor Pro subscription ($20/month)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>You want predictable costs (no per-token charges)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>You need Cursor's privacy mode / zero data retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>You prefer manual control over when patterns are retrieved</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">💎 Hybrid Approach</h4>
              <p className="text-white/70 text-sm mb-3">
                Configure BOTH methods and toggle between them based on your task:
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• <strong className="text-white">Gateway proxy</strong> for active coding sessions (automatic patterns)</li>
                <li>• <strong className="text-white">MCP tools</strong> for quick questions (use subscription)</li>
                <li>• Switch by toggling "Override Base URL" in Cursor settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting</h2>
          
          <h3 className="text-lg font-semibold text-white mb-4">Gateway Proxy Issues</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">"Failed to verify API key"</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Verify your OpenAI/provider API key is valid and has credits</li>
                    <li>• Ensure base URL is exactly: <code className="text-blue-400 text-xs">https://mcp.ekkos.dev/api/v1/gateway/openai</code></li>
                    <li>• Check you're not using Cursor's built-in OpenAI integration (must override base URL)</li>
                    <li>• Test gateway health: <code className="text-xs">curl https://mcp.ekkos.dev/api/v1/gateway/health</code></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">No patterns appearing in responses?</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Gateway only injects patterns for technical queries, not general chat</li>
                    <li>• Check you have patterns in your account: <Link href="https://platform.ekkos.dev" className="text-blue-400 hover:underline">platform.ekkos.dev</Link></li>
                    <li>• Verify ekkOS account is connected (different from AI provider key)</li>
                    <li>• Check Cursor's Network log for gateway requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">MCP Tools Issues</h3>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">ekkOS tools not appearing?</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Check <code className="text-xs">~/.cursor/mcp.json</code> exists and has ekkos-memory configured</li>
                    <li>• Restart Cursor (MCP servers only load on startup)</li>
                    <li>• Verify token matches your <Link href="https://platform.ekkos.dev" className="text-blue-400 hover:underline">platform.ekkos.dev</Link> account</li>
                    <li>• Check Cursor Output panel → MCP Servers for connection errors</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Patterns retrieved but not used?</h4>
                  <p className="text-white/60 text-sm mb-2">
                    MCP Tools require the AI to manually call tools. The AI must be instructed to use memory.
                  </p>
                  <p className="text-white/70 text-sm">
                    <strong>Solution:</strong> Switch to Gateway Proxy for automatic injection, or add an Always-Apply Cursor rule
                    that reminds the AI to search memory before responding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Recommended Setup Path</h2>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">For Most Users:</h3>
            <ol className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">1.</span>
                <div>
                  <strong className="text-white">Start with MCP Tools</strong> (easier setup, uses Cursor subscription)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">2.</span>
                <div>
                  Install ekkOS Connect extension and authenticate
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">3.</span>
                <div>
                  Try manual tool calls for a few days
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-mono">4.</span>
                <div>
                  If you want automatic injection, <strong className="text-white">upgrade to Gateway Proxy</strong>
                </div>
              </li>
            </ol>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="font-semibold text-white mb-4">For Power Users:</h3>
              <ol className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">1.</span>
                  <div>
                    <strong className="text-white">Start with Gateway Proxy</strong> (automatic, powerful)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">2.</span>
                  <div>
                    Get OpenRouter API key (500+ models, often cheaper than direct providers)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">3.</span>
                  <div>
                    Configure base URL override in Cursor settings
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-mono">4.</span>
                  <div>
                    Enjoy fully automatic memory injection in every response
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/api-reference/mcp-tools" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">MCP Tools Reference</h3>
              <p className="text-sm text-white/50">Complete tool documentation</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                View tools <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/memory-gateway" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Gateway Proxy Details</h3>
              <p className="text-sm text-white/50">Deep dive into automatic injection</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-yellow-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Integration</h3>
              <p className="text-sm text-white/50">Use ekkOS with Claude Code</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                Configure <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-3">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-white/80 mb-1">Platform Dashboard</div>
                <a href="https://platform.ekkos.dev" className="text-blue-400 hover:underline">platform.ekkos.dev</a>
              </div>
              <div>
                <div className="text-white/80 mb-1">Support Email</div>
                <a href="mailto:support@ekkos.dev" className="text-blue-400 hover:underline">support@ekkos.dev</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
