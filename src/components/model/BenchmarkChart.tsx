import { AIModel } from '@/types';
import { Check, X, TrendingUp } from 'lucide-react';

export default function BenchmarkChart({ benchmarks }: { benchmarks: AIModel['benchmarks'] }) {
  if (!benchmarks || benchmarks.length === 0) return null;

  return (
    <div className="space-y-4">
      {benchmarks.map((b) => (
        <div key={b.name}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-dark-100 font-medium">{b.name}</span>
            <span className="text-sm text-brand-400 font-semibold">{b.score}/{b.maxScore}</span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-brand-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000"
              style={{ width: `${(b.score / b.maxScore) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
