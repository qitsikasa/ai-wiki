# AI Wiki - Skill de Desarrollo

## Resumen del Skill

Este skill guía el desarrollo y mantenimiento de **AI Wiki**, una enciclopedia de modelos de inteligencia artificial construida con Next.js 14, TypeScript y Tailwind CSS. Actualizado a agosto 2026 con 42 modelos y 10 empresas.

## Stack y Herramientas

```
Framework:  Next.js 14 (App Router)
Language:   TypeScript (strict mode)
Styling:    Tailwind CSS 3.4
Icons:      Lucide React
Runtime:    Node.js 18+
Package:    pnpm
```

## Comandos Esenciales

```bash
# Desarrollo
pnpm dev          # Servidor en http://localhost:3000

# Build
pnpm build        # Build de producción
pnpm start        # Iniciar producción

# Linting
pnpm run lint     # ESLint check
```

## Arquitectura - Reglas Clave

### 1. Estructura de Directorios

```
src/
├── app/              # Páginas (App Router)
│   ├── layout.tsx    # Layout compartido
│   ├── page.tsx      # Homepage
│   ├── modelo/       # Rutas dinámicas de modelos (42)
│   ├── categorias/   # Página de categorías
│   └── empresa/      # Rutas dinámicas de empresas (10)
├── components/       # Componentes reutilizables
│   ├── layout/       # Header, Footer
│   └── model/        # ModelCard, BenchmarkChart, ProsConsList
├── data/             # Datos centralizados
│   └── models.ts     # 42 modelos, 10 empresas
├── lib/              # Utilidades
└── types/            # Definiciones TypeScript
```

### 2. Convenciones de Componentes

```tsx
// Server Component (por defecto)
export default function PageName() {
  return <div>...</div>;
}

// Client Component (solo cuando necesites hooks)
'use client';
export default function InteractiveComponent() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

### 3. Patrón de Datos

Todos los modelos están en `src/data/models.ts`. Para agregar un nuevo modelo:

```typescript
// 1. Agregar al array 'models'
{
  id: 'nuevo-modelo',        // slug único
  name: 'Nuevo Modelo',
  company: 'Empresa',
  companySlug: 'empresa',    // debe existir en companies[]
  description: '...',
  longDescription: '...',
  category: 'chat',          // ModelCategory válida
  releaseDate: '2026-08',
  contextWindow: '128K tokens',
  pricing: '$X / 1M tokens',
  pricingInput: '$X',        // opcional
  pricingOutput: '$Y',       // opcional
  strengths: ['...'],
  weaknesses: ['...'],
  useCases: ['...'],
  benchmarks: [{ name: 'MMLU', score: 85, maxScore: 100 }],
  image: '/images/models/nuevo-modelo.svg',
  logo: '/images/logos/empresa.svg',
  website: 'https://...',
  apiAvailable: true,
  openSource: false,
  openSourceLicense: undefined, // o 'MIT', 'Apache 2.0', etc.
  multimodal: true,
  reasoning: false,          // nuevo campo
  agentic: false,            // nuevo campo
  tag: 'New',                // opcional: Frontier, Latest, etc.
}

// 2. Agregar ID al array 'models' de la empresa en 'companies'
```

### 4. Agregar una Nueva Empresa

```typescript
// 1. Agregar al array 'companies'
{
  slug: 'nueva-empresa',
  name: 'Nueva Empresa',
  description: '...',
  logo: '/images/logos/nueva-empresa.svg',
  website: 'https://...',
  models: ['modelo-1', 'modelo-2'],
  founded: '2024',
  headquarters: 'Ciudad, País',
  color: '#hexcolor',        // nuevo campo requerido
}
```

### 5. Agregar una Nueva Categoría

```typescript
// 1. Agregar tipo en types/index.ts
export type ModelCategory = 'chat' | '...' | 'nueva-categoria';

// 2. Agregar en data/models.ts
{ id: 'nueva-categoria', name: 'Nombre', icon: 'IconName', description: '...' }

// 3. Agregar icono en categorias/page.tsx (iconMap)
```

## Paleta de Colores por Empresa

| Empresa | Color Hex | Uso |
|---------|-----------|-----|
| OpenAI | #10a37f | Verde |
| Anthropic | #d97706 | Ámbar |
| Google | #4285f4 | Azul |
| Meta | #1877f2 | Azul FB |
| Mistral | #f43f5e | Rosa |
| xAI | #6b7280 | Gris |
| DeepSeek | #3b82f6 | Azul |
| Qwen | #ff6a00 | Naranja |
| Moonshot | #8b5cf6 | Violeta |
| Zhipu | #059669 | Verde |

## Estilos - Guía Visual

### Componentes Comunes

```tsx
// Tarjeta base
<div className="bg-dark-700/50 border border-dark-600/50 rounded-2xl p-6">

// Botón primario
<button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl">

// Badge
<span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-lg">

// Input
<input className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-xl text-sm text-white">

// Tag/Label de empresa (dinámico)
<div style={{ backgroundColor: color }} className="text-white rounded-full px-3 py-1">
```

## Funciones de Datos Disponibles

```typescript
import {
  getModelById,          // ID → Model | undefined
  getModelsByCategory,   // Category → Model[]
  getModelsByCompany,    // CompanySlug → Model[]
  getCompanyBySlug,      // Slug → Company | undefined
  searchModels,          // Query → Model[]
  getOpenSourceModels,   // → Model[] (openSource: true)
  getReasoningModels,    // → Model[] (reasoning: true)
  getAgenticModels,      // → Model[] (agentic: true)
} from '@/data/models';
```

## Rutas Existentes

| Ruta | Tipo | Descripción |
|------|------|-------------|
| `/` | Static | Homepage |
| `/categorias` | Static | Lista de categorías (9) |
| `/modelo/[id]` | Dynamic | Detalle de modelo (42 modelos) |
| `/empresa/[slug]` | Dynamic | Perfil de empresa (10 empresas) |

## Checklist - Agregar Nuevo Modelo

- [ ] Definir datos del modelo (nombre, empresa, specs)
- [ ] Agregar objeto al array `models` en `src/data/models.ts`
- [ ] Agregar ID al array `models` de la empresa correspondiente
- [ ] Crear SVG placeholder en `public/images/models/`
- [ ] Verificar que la ruta funcione: `/modelo/[id]`
- [ ] Ejecutar `pnpm build` para verificar

## Checklist - Agregar Nueva Empresa

- [ ] Definir datos (nombre, slug, color, website)
- [ ] Agregar objeto al array `companies`
- [ ] Crear SVG logo en `public/images/logos/`
- [ ] Agregar color en ModelCard.tsx (companyColors)
- [ ] Agregar color en modelo/[id]/page.tsx (companyColors)
- [ ] Ejecutar `pnpm build`

## Anti-Patrones a Evitar

❌ No crear archivos fuera de la estructura establecida
❌ No usar `any` en TypeScript
❌ No importar datos desde archivos externos (todo en `src/data/`)
❌ No usar estilos inline (usar Tailwind, excepto colores dinámicos)
❌ No crear componentes monolíticos (dividir en archivos)
❌ No usar `'use client'` innecesariamente
❌ No hardcodear valores que puedan cambiar (usar constantes)

## Iconos

Los iconos actuales son SVGs placeholder con:
- Colores de marca de cada empresa
- Inicial del nombre como texto
- Formato viewBox 200x200 (logos) y 400x300 (modelos)

Ver `ICON_MANIFEST.md` para lista completa y fuentes de iconos reales.
