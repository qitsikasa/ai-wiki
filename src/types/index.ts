export interface AIModel {
  id: string;
  name: string;
  company: string;
  companySlug: string;
  description: string;
  longDescription: string;
  category: ModelCategory;
  releaseDate: string;
  parameters?: string;
  contextWindow: string;
  pricing: string;
  pricingInput?: string;
  pricingOutput?: string;
  strengths: string[];
  weaknesses: string[];
  useCases: string[];
  benchmarks?: Benchmark[];
  image: string;
  logo: string;
  website: string;
  apiAvailable: boolean;
  openSource: boolean;
  openSourceLicense?: string;
  multimodal: boolean;
  reasoning?: boolean;
  agentic?: boolean;
  tag?: string;
}

export type ModelCategory =
  | 'chat'
  | 'code'
  | 'image'
  | 'audio'
  | 'video'
  | 'search'
  | 'enterprise'
  | 'reasoning'
  | 'open-source';

export interface Benchmark {
  name: string;
  score: number;
  maxScore: number;
}

export interface Company {
  slug: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  models: string[];
  founded: string;
  headquarters: string;
  color: string;
}
