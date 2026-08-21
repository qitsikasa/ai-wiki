import Link from 'next/link';
import { models, categories, getModelsByCategory } from '@/data/models';
import ModelCard from '@/components/model/ModelCard';
import { Brain, Code, Image, Mic, Video, Building2, Search, MessageSquare, Unlock } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Brain,
  Code,
  Image,
  Mic,
  Video,
  Building2,
  Search,
  Unlock,
};

export const metadata = {
  title: 'Categorías - AI Wiki',
  description: 'Explora los modelos de IA por categoría',
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Categorías</h1>
        <p className="text-dark-200 text-lg max-w-2xl mx-auto">
          Explora los modelos de inteligencia artificial organizados por tipo y caso de uso
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat) => {
          const categoryModels = getModelsByCategory(cat.id);
          if (categoryModels.length === 0) return null;

          const Icon = iconMap[cat.icon] || Brain;

          return (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
                  <p className="text-dark-300">{cat.description} ({categoryModels.length} modelos)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* All Models */}
      <section className="mt-16 pt-16 border-t border-dark-700">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Todos los Modelos</h2>
          <p className="text-dark-200">{models.length} modelos en total</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}
