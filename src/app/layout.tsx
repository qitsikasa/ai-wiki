import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Wiki - Enciclopedia de Modelos de IA',
  description: 'Explora todos los modelos de inteligencia artificial del mercado. Comparativas, benchmarks, precios y más.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-dark-900 text-white antialiased">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
