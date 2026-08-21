import { Check, X } from 'lucide-react';

export default function ProsConsList({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: 'pros' | 'cons';
}) {
  const isPros = type === 'pros';

  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold flex items-center gap-2">
        {isPros ? (
          <span className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
            <Check className="w-4 h-4 text-green-400" />
          </span>
        ) : (
          <span className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
            <X className="w-4 h-4 text-red-400" />
          </span>
        )}
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-dark-200">
            {isPros ? (
              <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
            ) : (
              <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
