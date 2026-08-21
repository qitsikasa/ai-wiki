import Link from 'next/link';
import { AIModel } from '@/types';
import { ExternalLink, Eye, Zap, Lock, Unlock, Brain, Bot } from 'lucide-react';

const companyColors: Record<string, string> = {
  openai: '#10a37f',
  anthropic: '#d97706',
  google: '#4285f4',
  meta: '#1877f2',
  mistral: '#f43f5e',
  xai: '#6b7280',
  deepseek: '#3b82f6',
  qwen: '#ff6a00',
  moonshot: '#8b5cf6',
  zhipu: '#059669',
};

export default function ModelCard({ model }: { model: AIModel }) {
  const color = companyColors[model.companySlug] || '#5c7cfa';

  return (
    <Link href={`/modelo/${model.id}`} className="group block">
      <div className="relative bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6 hover:border-brand-500/50 hover:bg-dark-700 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1">
        {model.tag && (
          <div
            className="absolute -top-3 right-4 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-lg"
            style={{ backgroundColor: color }}
          >
            {model.tag}
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{ backgroundColor: color + '20', color: color }}
            >
              {model.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-brand-400 transition-colors">
                {model.name}
              </h3>
              <p className="text-dark-200 text-sm">{model.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {model.openSource && (
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg flex items-center gap-1">
                <Unlock className="w-3 h-3" /> OSS
              </span>
            )}
            {model.multimodal && (
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-lg flex items-center gap-1">
                <Eye className="w-3 h-3" /> Multi
              </span>
            )}
            {model.reasoning && (
              <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-lg flex items-center gap-1">
                <Brain className="w-3 h-3" /> Think
              </span>
            )}
            {model.agentic && (
              <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-lg flex items-center gap-1">
                <Bot className="w-3 h-3" /> Agent
              </span>
            )}
          </div>
        </div>

        <p className="text-dark-200 text-sm leading-relaxed mb-4 line-clamp-2">
          {model.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-dark-600/50 text-dark-100 text-xs rounded-lg">
            {model.contextWindow}
          </span>
          {model.parameters && (
            <span className="px-2 py-1 bg-dark-600/50 text-dark-100 text-xs rounded-lg">
              {model.parameters}
            </span>
          )}
          <span className="px-2 py-1 bg-dark-600/50 text-dark-100 text-xs rounded-lg">
            {model.releaseDate}
          </span>
          {model.openSourceLicense && (
            <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg">
              {model.openSourceLicense}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-dark-300 text-xs">
            <Zap className="w-3 h-3" />
            {model.pricingInput && model.pricingOutput
              ? `$${model.pricingInput} / $${model.pricingOutput}`
              : model.pricing.split(',')[0]}
          </div>
          <span className="text-brand-400 text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Ver detalles <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
