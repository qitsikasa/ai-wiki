'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Sparkles, Brain } from 'lucide-react';
import { categories } from '@/data/models';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-dark-800/80 backdrop-blur-xl border-b border-dark-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              AI Wiki
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg transition-all">
              Inicio
            </Link>
            <Link href="/categorias" className="px-3 py-2 text-sm text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg transition-all">
              Categorías
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg transition-all flex items-center gap-1">
                Empresas
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-dark-700 border border-dark-600 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                {['openai', 'anthropic', 'google', 'meta', 'mistral', 'xai', 'cohere', 'stability'].map((slug) => (
                  <Link key={slug} href={`/empresa/${slug}`} className="flex items-center gap-3 px-3 py-2 text-sm text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg transition-all capitalize">
                    {slug === 'google' ? 'Google DeepMind' : slug === 'xai' ? 'xAI' : slug}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-300" />
              <input
                type="text"
                placeholder="Buscar modelos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-xl text-sm text-white placeholder:text-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark-100 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-600/50 px-4 py-4 space-y-2">
          <Link href="/" className="block px-3 py-2 text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            Inicio
          </Link>
          <Link href="/categorias" className="block px-3 py-2 text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            Categorías
          </Link>
          {['openai', 'anthropic', 'google', 'meta', 'mistral'].map((slug) => (
            <Link key={slug} href={`/empresa/${slug}`} className="block px-3 py-2 text-dark-100 hover:text-white hover:bg-dark-600/50 rounded-lg capitalize" onClick={() => setMobileMenuOpen(false)}>
              {slug === 'google' ? 'Google DeepMind' : slug}
            </Link>
          ))}
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-300" />
            <input
              type="text"
              placeholder="Buscar modelos..."
              className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-xl text-sm text-white placeholder:text-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
          </div>
        </div>
      )}
    </header>
  );
}
