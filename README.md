<div align="center">

# 🧠 AI Wiki

### La Enciclopedia Definitiva de Modelos de Inteligencia Artificial

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://ai-wiki-qitsikasa.netlify.app)

**Explora, compara y mantente al día con todos los modelos de IA del mercado.**

[🌐 Ver Demo en Vivo](https://ai-wiki-qitsikasa.netlify.app) · [📂 GitHub](https://github.com/qitsikasa/ai-wiki)

</div>

---

## 📸 Capturas

<div align="center">

| Homepage | Detalle de Modelo | Categorías |
|----------|-------------------|------------|
| ![Homepage](docs/homepage.png) | ![Modelo](docs/modelo.png) | ![Categorías](docs/categorias.png) |

</div>

---

## 🚀 Características

- **42 modelos** catalogados con información detallada
- **10 empresas** cubiertas (OpenAI, Anthropic, Google, Meta, Mistral, xAI, DeepSeek, Qwen, Moonshot, Zhipu)
- **9 categorías** de modelos (Chat, Reasoning, Código, Open Source, Imágenes, Audio, Video, Empresarial, Búsqueda)
- **Benchmarks** comparativos con gráficos visuales
- **Diseño responsive** mobile-first con tema oscuro
- **Colores de marca** por empresa integrados en la UI
- **Badges dinámicos**: Open Source (con licencia), Multimodal, Reasoning, Agentic
- **SEO optimizado** con meta tags por página
- **Generación estática** (SSG) para máximo rendimiento

## 🏗️ Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Lenguaje | [TypeScript](https://typescriptlang.org) (strict mode) |
| Estilos | [Tailwind CSS 3.4](https://tailwindcss.com) |
| Iconos | [Lucide React](https://lucide.dev) |
| Despliegue | [Netlify](https://netlify.com) |

## 📂 Estructura del Proyecto

```
ai-wiki/
├── public/
│   └── images/
│       ├── logos/          # 12 logos SVG de empresas
│       └── models/         # ~57 ilustraciones SVG de modelos
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raíz con Header/Footer
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
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── model/
│   │       ├── ModelCard.tsx
│   │       ├── BenchmarkChart.tsx
│   │       │   └── ProsConsList.tsx
│   ├── data/
│   │   └── models.ts        # 42 modelos, 10 empresas
│   └── types/
│       └── index.ts
├── PROJECT_CONTEXT.md       # Contexto del proyecto
├── AI_WIKI_SKILL.md         # Skill de desarrollo
├── ICON_MANIFEST.md         # Manifiesto de iconos
└── package.json
```

## 📊 Modelos Incluidos

### OpenAI
| Modelo | Tipo | Contexto | Precio (in/out) |
|--------|------|----------|-----------------|
| GPT-5.6 Sol | Frontier | 1.05M | $5 / $30 |
| GPT-5.6 Terra | Balanced | 1.05M | $1.25 / $7.50 |
| GPT-5.6 Luna | Budget | 1.05M | $0.50 / $3 |
| GPT-5.5 | General | 512K | $3 / $15 |
| GPT-5.3-Codex | Coding | 256K | $2.50 / $10 |
| o3 / o3-pro | Reasoning | 200K | $10-20 / $40-80 |

### Anthropic
| Modelo | Tipo | Contexto | Precio (in/out) |
|--------|------|----------|-----------------|
| Claude Opus 5 | Frontier | 1M | $5 / $25 |
| Claude Fable 5 | Premium | 1M | $10 / $50 |
| Claude Sonnet 5 | Value | 1M | $2 / $10 |
| Claude Haiku 4.5 | Fast | 200K | $1 / $5 |

### Google DeepMind
| Modelo | Tipo | Contexto | Precio (in/out) |
|--------|------|----------|-----------------|
| Gemini 3.6 Flash | Fast | 1M | $1.50 / $7.50 |
| Gemini 3.5 Flash Lite | Ultra-cheap | 1M | $0.30 / $2.50 |
| Gemma 4 | Open/Edge | 256K | Apache 2.0 |

### Meta AI
| Modelo | Tipo | Contexto | Licencia |
|--------|------|----------|----------|
| Llama 4 Scout | Ultra-long ctx | 10M | Llama 4 Community |
| Llama 4 Maverick | MoE | 1M | Llama 4 Community |
| Muse Spark | Propietario | 256K | Closed |

### Mistral AI
| Modelo | Tipo | Params | Licencia |
|--------|------|--------|----------|
| Mistral Large 3 | Flagship | 675B MoE | Apache 2.0 |
| Mistral Small 4 | Efficient | - | Apache 2.0 |
| Ministral 3 | Edge | 3-14B | Apache 2.0 |
| Codestral | Coding | 22B | Apache 2.0 |

### xAI (SpaceXAI)
| Modelo | Tipo | Contexto | Precio (in/out) |
|--------|------|----------|-----------------|
| Grok 4.6 | Coding/Agent | 500K | $2 / $6 |
| Grok 4.5 | Flagship | 500K | $2 / $6 |
| Grok 4 Heavy | Premium | 256K | SuperGrok |

### DeepSeek
| Modelo | Tipo | Params | Licencia |
|--------|------|--------|----------|
| DeepSeek V4 Pro | #1 Agentic | 1.6T MoE | MIT |
| DeepSeek V4 Flash | Fast/Cheap | MoE | MIT |
| DeepSeek R1 | Reasoning | 671B MoE | MIT |

### Alibaba (Qwen)
| Modelo | Tipo | Params | Licencia |
|--------|------|--------|----------|
| Qwen3.8-Max | Frontier | - | Closed |
| Qwen3.8-27B | Small Coder | 27B | Apache 2.0 |
| Qwen 3.6 | MoE/Dense | Multi | Apache 2.0 |

### Moonshot AI (Kimi)
| Modelo | Tipo | Params | Licencia |
|--------|------|--------|----------|
| Kimi K3 | Open | 2.8T | Open |
| Kimi K2.6 | #1 Open AA | - | Modified MIT |

### Z.ai (Zhipu)
| Modelo | Tipo | Licencia |
|--------|------|----------|
| GLM-5.2 | Open | Apache 2.0 |
| GLM-5.1 | Open | MIT |

## 🔧 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org) 18+
- [pnpm](https://pnpm.io) (recomendado) o npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/qitsikasa/ai-wiki.git
cd ai-wiki

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Despliegue

### Netlify (Recomendado)

1. Push el repositorio a GitHub
2. Conecta el repositorio en [Netlify](https://app.netlify.com)
3. Configuración de build:
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next`
   - **Node version:** 18
4. Deploy automático en cada push

### Vercel

```bash
npx vercel
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## 📄 Documentación

| Archivo | Contenido |
|---------|-----------|
| [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) | Arquitectura, modelo de datos, roadmap |
| [`AI_WIKI_SKILL.md`](AI_WIKI_SKILL.md) | Guía de desarrollo, convenciones, patterns |
| [`ICON_MANIFEST.md`](ICON_MANIFEST.md) | Lista de iconos y fuentes para imágenes reales |

## �Contribuir

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/nuevo-modelo`)
3. Commit tus cambios (`git commit -m 'Add nuevo-modelo'`)
4. Push a la branch (`git push origin feature/nuevo-modelo`)
5. Abre un Pull Request

### Guía para agregar un modelo

```bash
# 1. Agregar datos en src/data/models.ts
# 2. Crear SVG placeholder en public/images/models/
# 3. Verificar: pnpm build
# 4. Commit y push
```

## 📋 Roadmap

- [x] 42 modelos con info detallada
- [x] 10 empresas con profiles
- [x] 9 categorías
- [x] SVGs placeholder para logos y modelos
- [x] Diseño responsive con tema oscuro
- [x] Badges dinámicos (OSS, Multimodal, Reasoning, Agentic)
- [ ] Reemplazar SVGs con logos/imágenes reales
- [ ] Sistema de comparación side-by-side
- [ ] Filtros avanzados (precio, fecha, licencia)
- [ ] Calculadora de costos
- [ ] Blog de noticias de IA
- [ ] Modo claro/oscuro
- [ ] Internacionalización (i18n)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A todas las empresas de IA por sus APIs y documentación
- A la comunidad open-source por los modelos de código abierto
- A [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com) y [Lucide](https://lucide.dev)

---

<div align="center">

**Hecho con ❤️ para la comunidad de IA**

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/qitsikasa)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/qitsikasa)

</div>
