import { clampPercentage } from "@/lib/calculations";

interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const safeValue = clampPercentage(value);

  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
        <span>{label ?? "Avance"}</span>
        <span className="font-semibold text-slate-700">{safeValue}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-civic transition-all"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
