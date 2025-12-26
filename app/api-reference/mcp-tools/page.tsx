import { ArrowRight, Brain, Key, MessageSquare, Search, Shield, Terminal, Zap, Download, RefreshCw, BarChart } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '../../components/DocsLayout';

// Complete list of all 29 MCP tools
const tools = [
  {
    category: 'Search & Recall',
    color: 'purple',
    icon: Search,
    items: [
      {
        name: 'ekkOS_Search',
        what: 'Find past solutions, conversations, and patterns across all memory layers',
        example: '"Search my memory for how we handled authentication"',
      },
      {
        name: 'ekkOS_Recall',
        what: 'Remember what you discussed at a specific time',
        example: '"What did we discuss yesterday?"',
      },
      {
        name: 'ekkOS_Context',
        what: 'Get relevant context for your current task',
        example: '"Get context for implementing user auth"',
      },
      {
        name: 'ekkOS_Codebase',
        what: 'Find relevant code in your project',
        example: '"Find code related to authentication"',
      },
    ],
  },
  {
    category: 'Learning & Patterns',
    color: 'blue',
    icon: Brain,
    items: [
      {
        name: 'ekkOS_Forge',
        what: 'Save solutions as reusable patterns',
        example: '"Remember that we always use Supabase for auth"',
      },
      {
        name: 'ekkOS_Capture',
        what: 'Record an event or context to memory',
        example: 'Called automatically by integrations',
      },
      {
        name: 'ekkOS_Track',
        what: 'Record that specific patterns were applied',
        example: 'Called when patterns are used during a task',
      },
      {
        name: 'ekkOS_Outcome',
        what: 'Report whether a pattern application succeeded or failed',
        example: '"That pattern worked" or "That approach failed"',
      },
      {
        name: 'ekkOS_Detect',
        what: 'Automatically detect which patterns were used in a response',
        example: 'Called automatically by hooks after task completion',
      },
      {
        name: 'ekkOS_Directive',
        what: 'Set rules your AI follows (MUST/NEVER/PREFER/AVOID)',
        example: '"Always use TypeScript strict mode"',
      },
    ],
  },
  {
    category: 'Validation',
    color: 'pink',
    icon: Shield,
    items: [
      {
        name: 'ekkOS_Conflict',
        what: 'Check if an action conflicts with your rules or patterns',
        example: '"Check if deleting these files violates any rules"',
      },
      {
        name: 'ekkOS_Reflect',
        what: 'Analyze a response for improvement opportunities',
        example: 'Called for continuous improvement suggestions',
      },
    ],
  },
  {
    category: 'Plans & Tasks',
    color: 'green',
    icon: MessageSquare,
    items: [
      {
        name: 'ekkOS_Plan',
        what: 'Create a structured plan with steps',
        example: '"Create a plan for implementing OAuth"',
      },
      {
        name: 'ekkOS_Plans',
        what: 'List your active and completed plans',
        example: '"Show my current plans"',
      },
      {
        name: 'ekkOS_PlanStatus',
        what: 'Update plan status (draft, in_progress, completed)',
        example: '"Mark this plan as completed"',
      },
      {
        name: 'ekkOS_PlanStep',
        what: 'Mark a step as complete or incomplete',
        example: '"Mark step 2 as done"',
      },
      {
        name: 'ekkOS_Generate',
        what: 'Generate a plan using AI based on context',
        example: '"Generate a plan for refactoring auth"',
      },
      {
        name: 'ekkOS_SaveTemplate',
        what: 'Save a plan as a reusable template',
        example: '"Save this plan as a template"',
      },
      {
        name: 'ekkOS_Templates',
        what: 'List available plan templates',
        example: '"Show available templates"',
      },
      {
        name: 'ekkOS_FromTemplate',
        what: 'Create a new plan from a template',
        example: '"Use the API template for this endpoint"',
      },
    ],
  },
  {
    category: 'Secrets',
    color: 'red',
    icon: Key,
    items: [
      {
        name: 'ekkOS_StoreSecret',
        what: 'Securely store API keys and credentials (encrypted)',
        example: '"Store my OpenAI API key"',
      },
      {
        name: 'ekkOS_GetSecret',
        what: 'Retrieve a stored credential',
        example: '"Get my GitHub token"',
      },
      {
        name: 'ekkOS_ListSecrets',
        what: 'List stored secrets (metadata only, no values)',
        example: '"What API keys do I have saved?"',
      },
      {
        name: 'ekkOS_DeleteSecret',
        what: 'Permanently delete a stored secret',
        example: '"Delete my old Stripe key"',
      },
      {
        name: 'ekkOS_RotateSecret',
        what: 'Update a secret with a new value',
        example: '"Update my AWS access key"',
      },
    ],
  },
  {
    category: 'Analytics & Portability',
    color: 'cyan',
    icon: BarChart,
    items: [
      {
        name: 'ekkOS_Stats',
        what: 'Get statistics about your memory usage',
        example: '"How many patterns do I have?"',
      },
      {
        name: 'ekkOS_Summary',
        what: 'Get a summary of recent ekkOS activity',
        example: '"What has ekkOS done this session?"',
      },
      {
        name: 'ekkOS_Export',
        what: 'Export all patterns, directives, and plans as JSON',
        example: '"Export all my patterns"',
      },
      {
        name: 'ekkOS_Import',
        what: 'Import memory data from a backup',
        example: '"Import my backup"',
      },
    ],
  },
];

export default function MCPToolsPage() {
  const totalTools = tools.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
            <Terminal className="w-4 h-4" />
            <span>Reference</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">All 29 MCP Tools</h1>
          <p className="text-xl text-white/60 mb-6">
            Complete reference for every ekkOS memory tool.
          </p>

          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <p className="text-white/70">
              ekkOS provides <strong className="text-white">{totalTools} MCP tools</strong> organized into {tools.length} categories.
              Your AI calls these automatically based on what you ask — no manual invocation needed.
            </p>
          </div>
        </div>

        {/* Tool Categories */}
        {tools.map((category) => {
          const Icon = category.icon;
          return (
            <section key={category.category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-${category.color}-500/10 border border-${category.color}-500/20`}>
                  <Icon className={`w-5 h-5 text-${category.color}-400`} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {category.category}
                  <span className="text-white/40 text-sm font-normal ml-2">({category.items.length} tools)</span>
                </h2>
              </div>

              <div className="space-y-3">
                {category.items.map((tool) => (
                  <div
                    key={tool.name}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 hover:border-${category.color}-500/30 transition-all`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <code className={`text-${category.color}-400 font-mono font-semibold`}>{tool.name}</code>
                        <p className="text-white/60 mt-2">{tool.what}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-xs text-white/40 uppercase tracking-wider">Example</span>
                      <p className="text-white/50 text-sm italic mt-1">{tool.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* How to Use */}
        <section className="mb-12 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">How to Use</h2>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
            <p className="text-white/70 mb-4">
              You don't need to call tools directly. Just ask your AI naturally:
            </p>
            <div className="space-y-3">
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Search my memory for..."</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Remember this pattern..."</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"What did we discuss about..."</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Always use X" or "Never do Y"</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Store my API key for..."</code>
              </div>
              <div className="bg-black/50 rounded-lg p-3">
                <code className="text-blue-400">"Create a plan for..."</code>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Your AI will automatically use the right tools based on what you ask.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/quickstart" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-white/50">Connect your AI in 5 minutes</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Get started <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/integrations/claude-code" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all">
              <h3 className="font-semibold text-white mb-2">Claude Code Setup</h3>
              <p className="text-sm text-white/50">Detailed integration guide</p>
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
