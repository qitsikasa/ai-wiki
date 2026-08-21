import { notFound } from 'next/navigation';
import Link from 'next/link';
import { models, getModelById } from '@/data/models';
import BenchmarkChart from '@/components/model/BenchmarkChart';
import ProsConsList from '@/components/model/ProsConsList';
import { ExternalLink, ArrowLeft, Calendar, DollarSign, Layers, Globe, Zap, Code, Eye, Lock, Unlock, Brain, Bot } from 'lucide-react';

export function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const model = getModelById(params.id);
  if (!model) return { title: 'Modelo no encontrado' };
  return {
    title: `${model.name} - AI Wiki`,
    description: model.description,
  };
}

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

export default function ModelPage({ params }: { params: { id: string } }) {
  const model = getModelById(params.id);

  if (!model) {
    notFound();
  }

  const color = companyColors[model.companySlug] || '#5c7cfa';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-dark-300 mb-8">
        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Inicio
        </Link>
        <span>/</span>
        <Link href="/categorias" className="hover:text-white transition-colors">Categorías</Link>
        <span>/</span>
        <span className="text-white">{model.name}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl"
              style={{ backgroundColor: color + '20', color: color }}
            >
              {model.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{model.name}</h1>
                {model.tag && (
                  <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: color }}>
                    {model.tag}
                  </span>
                )}
              </div>
              <Link href={`/empresa/${model.companySlug}`} className="text-brand-400 hover:text-brand-300 transition-colors">
                {model.company}
              </Link>
            </div>
          </div>

          <p className="text-dark-200 text-lg leading-relaxed mb-6">
            {model.longDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {model.apiAvailable && (
              <span className="px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-lg flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> API Disponible
              </span>
            )}
            {model.openSource ? (
              <span className="px-3 py-1.5 bg-green-500/10 text-green-400 text-sm rounded-lg flex items-center gap-1.5">
                <Unlock className="w-4 h-4" /> {model.openSourceLicense || 'Código Abierto'}
              </span>
            ) : (
              <span className="px-3 py-1.5 bg-dark-600/50 text-dark-200 text-sm rounded-lg flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Propietario
              </span>
            )}
            {model.multimodal && (
              <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-sm rounded-lg flex items-center gap-1.5">
                <Eye className="w-4 h-4" /> Multimodal
              </span>
            )}
            {model.reasoning && (
              <span className="px-3 py-1.5 bg-amber-500/10 text-amber-400 text-sm rounded-lg flex items-center gap-1.5">
                <Brain className="w-4 h-4" /> Reasoning
              </span>
            )}
            {model.agentic && (
              <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm rounded-lg flex items-center gap-1.5">
                <Bot className="w-4 h-4" /> Agentic
              </span>
            )}
          </div>
        </div>

        {/* Quick Info Card */}
        <div className="lg:w-80 bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6 space-y-4">
          <h3 className="text-white font-semibold mb-4">Información Rápida</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-dark-300" />
              <div>
                <div className="text-xs text-dark-300">Lanzamiento</div>
                <div className="text-sm text-white">{model.releaseDate}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-dark-300" />
              <div>
                <div className="text-xs text-dark-300">Contexto</div>
                <div className="text-sm text-white">{model.contextWindow}</div>
              </div>
            </div>

            {model.parameters && (
              <div className="flex items-center gap-3">
                <Code className="w-4 h-4 text-dark-300" />
                <div>
                  <div className="text-xs text-dark-300">Parámetros</div>
                  <div className="text-sm text-white">{model.parameters}</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <DollarSign className="w-4 h-4 text-dark-300" />
              <div>
                <div className="text-xs text-dark-300">Precio</div>
                <div className="text-sm text-white">{model.pricing}</div>
              </div>
            </div>
          </div>

          <a
            href={model.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2.5 text-white rounded-xl text-sm font-medium transition-colors mt-4"
            style={{ backgroundColor: color }}
          >
            Sitio Oficial <ExternalLink className="w-4 h-4 inline ml-1" />
          </a>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Benchmarks */}
          {model.benchmarks && model.benchmarks.length > 0 && (
            <div className="bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-400" />
                Benchmarks
              </h2>
              <BenchmarkChart benchmarks={model.benchmarks} />
            </div>
          )}

          {/* Use Cases */}
          <div className="bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-400" />
              Casos de Uso
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {model.useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-2 text-dark-200">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 shrink-0" />
                  {useCase}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="space-y-6">
          <div className="bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6">
            <ProsConsList title="Fortalezas" items={model.strengths} type="pros" />
          </div>
          <div className="bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6">
            <ProsConsList title="Debilidades" items={model.weaknesses} type="cons" />
          </div>
        </div>
      </div>

      {/* Related Models */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Otros modelos de {model.company}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models
            .filter((m) => m.companySlug === model.companySlug && m.id !== model.id)
            .slice(0, 3)
            .map((m) => (
              <Link
                key={m.id}
                href={`/modelo/${m.id}`}
                className="p-4 bg-dark-700/50 border border-dark-600/50 rounded-xl hover:border-brand-500/50 transition-all group"
              >
                <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">{m.name}</h3>
                <p className="text-dark-300 text-sm mt-1 line-clamp-2">{m.description}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
