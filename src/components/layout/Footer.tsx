import Link from 'next/link';
import { Brain, Github, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-600/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                AI Wiki
              </span>
            </Link>
            <p className="text-dark-200 text-sm max-w-md leading-relaxed">
              La enciclopedia definitiva de modelos de inteligencia artificial. 
              Explora, compara y mantente al día con la última tecnología en IA.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categorías</h3>
            <ul className="space-y-2">
              <li><Link href="/categorias" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Chat & Conversación</Link></li>
              <li><Link href="/categorias" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Código</Link></li>
              <li><Link href="/categorias" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Imágenes</Link></li>
              <li><Link href="/categorias" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Audio & Video</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Empresas</h3>
            <ul className="space-y-2">
              <li><Link href="/empresa/openai" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">OpenAI</Link></li>
              <li><Link href="/empresa/anthropic" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Anthropic</Link></li>
              <li><Link href="/empresa/google" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Google DeepMind</Link></li>
              <li><Link href="/empresa/meta" className="text-dark-200 hover:text-brand-400 text-sm transition-colors">Meta AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-300 text-xs">
            AI Wiki - Enciclopedia de Modelos de Inteligencia Artificial
          </p>
          <p className="text-dark-400 text-xs">
            Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
