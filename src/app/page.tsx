import Link from 'next/link';
import { models, companies, categories, getOpenSourceModels, getAgenticModels } from '@/data/models';
import ModelCard from '@/components/model/ModelCard';
import { Brain, Sparkles, Globe, ArrowRight, Code, Unlock, Bot, Zap } from 'lucide-react';

const stats = [
  { label: 'Modelos', value: models.length, icon: Brain },
  { label: 'Empresas', value: companies.length, icon: Globe },
  { label: 'Open Source', value: getOpenSourceModels().length, icon: Unlock },
  { label: 'Agentic', value: getAgenticModels().length, icon: Bot },
];

const featuredModels = models.filter(m =>
  ['gpt-5.6-sol', 'claude-opus-5', 'gemini-3.6-flash', 'deepseek-v4-pro', 'llama-4-scout'].includes(m.id)
);

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-600/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Actualizado Agosto 2026 — {models.length} modelos catalogados
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent">
              AI Wiki
            </span>
            <br />
            <span className="text-dark-200 text-3xl sm:text-4xl lg:text-5xl">
              La Enciclopedia de la IA
            </span>
          </h1>
          
          <p className="text-dark-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explora, compara y mantente al día con todos los modelos de inteligencia artificial del mercado. 
            Desde GPT-5.6 hasta los modelos open-source más recientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/categorias"
              className="px-8 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 flex items-center gap-2"
            >
              Explorar Modelos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/categorias#open-source"
              className="px-8 py-3.5 bg-dark-700 border border-dark-600 hover:border-green-500/50 text-white rounded-xl font-medium transition-all flex items-center gap-2"
            >
              <Unlock className="w-4 h-4" /> Open Source
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-dark-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Modelos Destacados</h2>
              <p className="text-dark-200">Los modelos más importantes del momento</p>
            </div>
            <Link href="/categorias" className="hidden sm:flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Modelos Open Source</h2>
            <p className="text-dark-200">Código abierto para self-hosting y personalización</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getOpenSourceModels().slice(0, 6).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Explora por Categoría</h2>
            <p className="text-dark-200">Encuentra el modelo perfecto para tu caso de uso</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                href="/categorias"
                className="p-6 bg-dark-700/50 border border-dark-600/50 rounded-2xl hover:border-brand-500/50 hover:bg-dark-700 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  {cat.icon === 'MessageSquare' && <Brain className="w-6 h-6 text-brand-400" />}
                  {cat.icon === 'Brain' && <Brain className="w-6 h-6 text-brand-400" />}
                  {cat.icon === 'Code' && <Code className="w-6 h-6 text-brand-400" />}
                  {cat.icon === 'Unlock' && <Unlock className="w-6 h-6 text-brand-400" />}
                  {cat.icon === 'Image' && <Sparkles className="w-6 h-6 text-brand-400" />}
                  {cat.icon === 'Building2' && <Globe className="w-6 h-6 text-brand-400" />}
                </div>
                <h3 className="text-white font-semibold mb-1">{cat.name}</h3>
                <p className="text-dark-300 text-sm">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Models */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Todos los Modelos</h2>
            <p className="text-dark-200">Catálogo completo — {models.length} modelos de IA</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-brand-600/20 to-purple-600/20 border border-brand-500/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para explorar?</h2>
            <p className="text-dark-200 mb-8 max-w-lg mx-auto">
              Descubre el modelo de IA perfecto para tu proyecto. Compara capacidades, precios y rendimiento.
            </p>
            <Link
              href="/categorias"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-brand-500/25"
            >
              Comenzar ahora
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
