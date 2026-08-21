# AI Wiki - Contexto del Proyecto

## Descripción General

**AI Wiki** es una aplicación web que funciona como enciclopedia completa de modelos de inteligencia artificial disponibles en el mercado (actualizado a agosto 2026). Permite a los usuarios explorar, comparar y obtener información detallada sobre cada modelo de IA, incluyendo sus capacidades, precios, benchmarks y casos de uso.

## Objetivo

Crear una referencia centralizada y visualmente atractiva de todos los modelos de IA relevantes, organizados por empresa, categoría y características, facilitando la toma de decisiones para desarrolladores, investigadores y empresas.

## Stack Tecnológico

| Componente | Tecnología |
|------------|------------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Iconos | Lucide React |
| Despliegue | Vercel / Netlify |

## Datos del Proyecto (Agosto 2026)

- **42 modelos** catalogados
- **10 empresas** cubiertas
- **9 categorías** disponibles
- **~10 modelos open-source** con licencias diversas (MIT, Apache 2.0, Llama Community)

## Empresas Cubiertas

| Empresa | Slug | Modelos | Color |
|---------|------|---------|-------|
| OpenAI | openai | GPT-5.6 Sol/Terra/Luna, GPT-5.5, 5.4, Codex, o3 | #10a37f |
| Anthropic | anthropic | Claude Opus 5, Fable 5, Sonnet 5, Haiku 4.5, Opus 4.8 | #d97706 |
| Google DeepMind | google | Gemini 3.6/3.5 Flash, 3.1 Pro, Gemma 4 | #4285f4 |
| Meta AI | meta | Llama 4 Scout/Maverick, Muse Spark | #1877f2 |
| Mistral AI | mistral | Large 3, Small 4, Ministral 3, Codestral | #f43f5e |
| xAI (SpaceXAI) | xai | Grok 4.6, 4.5, 4, 4 Heavy | #6b7280 |
| DeepSeek | deepseek | V4 Pro, V4 Flash, V3.2, R1 | #3b82f6 |
| Alibaba (Qwen) | qwen | Qwen3.8-Max, 3.8-27B, 3.6, 3.5 | #ff6a00 |
| Moonshot AI (Kimi) | moonshot | Kimi K3, K2.6 | #8b5cf6 |
| Z.ai (Zhipu) | zhipu | GLM-5.2, GLM-5.1 | #059669 |

## Arquitectura del Proyecto

```
ai-wiki/
├── public/
│   └── images/
│       ├── logos/          # Logos de empresas (10 SVGs)
│       └── models/         # Ilustraciones de modelos (~50 SVGs)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raíz
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Estilos globales
│   │   ├── modelo/
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Detalle de modelo
│   │   ├── categorias/
│   │   │   └── page.tsx    # Lista por categorías
│   │   └── empresa/
│   │       └── [slug]/
│   │           └── page.tsx    # Perfil de empresa
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Navegación principal
│   │   │   └── Footer.tsx   # Pie de página
│   │   ├── model/
│   │   │   ├── ModelCard.tsx      # Tarjeta de modelo
│   │   │   ├── BenchmarkChart.tsx # Gráfico de benchmarks
│   │   │   └── ProsConsList.tsx   # Lista de pros/contras
│   │   └── ui/              # Componentes genéricos
│   ├── data/
│   │   └── models.ts        # Datos centralizados (42 modelos)
│   ├── lib/                 # Utilidades
│   └── types/
│       └── index.ts         # Definiciones TypeScript
├── PROJECT_CONTEXT.md       # Este archivo
├── AI_WIKI_SKILL.md         # Skill de desarrollo
├── ICON_MANIFEST.md         # Manifiesto de iconos
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Modelo de Datos

### AIModel (Modelo de IA)
- `id`: Identificador único (slug)
- `name`: Nombre comercial
- `company`: Empresa propietaria
- `companySlug`: Slug de la empresa
- `description`: Descripción corta
- `longDescription`: Descripción detallada
- `category`: Categoría principal
- `releaseDate`: Fecha de lanzamiento (YYYY-MM-DD)
- `parameters`: Número de parámetros (opcional)
- `contextWindow`: Tamaño de ventana de contexto
- `pricing`: Información de precios (texto)
- `pricingInput`: Precio entrada por 1M tokens (opcional)
- `pricingOutput`: Precio salida por 1M tokens (opcional)
- `strengths`: Lista de fortalezas
- `weaknesses`: Lista de debilidades
- `useCases`: Casos de uso recomendados
- `benchmarks`: Resultados de benchmarks
- `image`: Ruta de imagen del modelo
- `logo`: Ruta del logo de la empresa
- `website`: URL del sitio oficial
- `apiAvailable`: Si tiene API disponible
- `openSource`: Si es de código abierto
- `openSourceLicense`: Tipo de licencia (MIT, Apache 2.0, etc.)
- `multimodal`: Si soporta múltiples modalidades
- `reasoning`: Si tiene capacidades de razonamiento
- `agentic`: Si tiene capacidades agénticas
- `tag`: Etiqueta destacada (Frontier, Latest, etc.)

### Company (Empresa)
- `slug`: Identificador único
- `name`: Nombre de la empresa
- `description`: Descripción de la empresa
- `logo`: Ruta del logo
- `website`: URL oficial
- `models`: IDs de modelos asociados
- `founded`: Año de fundación
- `headquarters`: Sede principal
- `color`: Color de marca hexadecimal

### ModelCategory (Categorías)
- `chat`: Chat y conversación
- `reasoning`: Razonamiento profundo
- `code`: Programación
- `open-source`: Código abierto / open-weight
- `image`: Generación de imágenes
- `audio`: Procesamiento de audio
- `video`: Generación de video
- `enterprise`: Soluciones empresariales
- `search`: Búsqueda semántica

## Funcionalidades

### Implementadas
- Homepage con modelos destacados, open-source y estadísticas
- Ficha detallada de cada modelo con benchmarks, tags y badges
- Página de empresas con todos sus modelos
- Vista por categorías (9 categorías)
- Diseño responsive (mobile-first)
- Tema oscuro con colores de marca por empresa
- Navegación con dropdowns
- Badges: Open Source (con licencia), Multimodal, Reasoning, Agentic, Tag
- Búsqueda de modelos
- Modelos open-source section dedicada
- 42 modelos con info detallada
- 10 empresas con profiles
- SVGs placeholder para logos y modelos

### Futuras Mejoras
- [ ] Reemplazar SVGs placeholders con logos/imágenes reales
- [ ] Sistema de comparación de modelos (side-by-side)
- [ ] Filtros avanzados (precio, fecha, capacidad, licencia)
- [ ] Blog de noticias de IA
- [ ] Calculadora de costos por uso
- [ ] API pública para consultas
- [ ] Sistema de usuarios y favoritos
- [ ] Notificaciones de nuevos modelos
- [ ] Modo claro/oscuro
- [ ] Internacionalización (i18n)

## Cómo Ejecutar

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor
pnpm start
```

## Estructura de Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage con overview |
| `/modelo/[id]` | Detalle de un modelo (42 rutas) |
| `/categorias` | Todos los modelos por categoría |
| `/empresa/[slug]` | Perfil de empresa (10 rutas) |
