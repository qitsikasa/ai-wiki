import { notFound } from 'next/navigation';
import Link from 'next/link';
import { companies, getCompanyBySlug, getModelsByCompany } from '@/data/models';
import ModelCard from '@/components/model/ModelCard';
import { ExternalLink, ArrowLeft, MapPin, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const company = getCompanyBySlug(params.slug);
  if (!company) return { title: 'Empresa no encontrada' };
  return {
    title: `${company.name} - AI Wiki`,
    description: company.description,
  };
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = getCompanyBySlug(params.slug);

  if (!company) {
    notFound();
  }

  const companyModels = getModelsByCompany(params.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-dark-300 mb-8">
        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Inicio
        </Link>
        <span>/</span>
        <span className="text-white">{company.name}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl"
          style={{ backgroundColor: company.color }}
        >
          {company.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{company.name}</h1>
          <p className="text-dark-200 text-lg leading-relaxed mb-4">{company.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-dark-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Fundada en {company.founded}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {company.headquarters}
            </div>
          </div>
        </div>

        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
          style={{ backgroundColor: company.color }}
        >
          Sitio Oficial <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Models */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">
          Modelos de {company.name}
          <span className="text-dark-300 text-lg ml-2">({companyModels.length})</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        {companyModels.length === 0 && (
          <div className="text-center py-12 bg-dark-700/50 rounded-2xl border border-dark-600/50">
            <p className="text-dark-300">No hay modelos registrados para esta empresa aún.</p>
          </div>
        )}
      </section>

      {/* Other Companies */}
      <section className="mt-16 pt-16 border-t border-dark-700">
        <h2 className="text-2xl font-bold text-white mb-6">Otras Empresas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {companies
            .filter((c) => c.slug !== params.slug)
            .slice(0, 4)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/empresa/${c.slug}`}
                className="p-4 bg-dark-700/50 border border-dark-600/50 rounded-xl hover:border-brand-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name.charAt(0)}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">{c.name}</h3>
                </div>
                <p className="text-dark-300 text-sm line-clamp-2">{c.description}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
