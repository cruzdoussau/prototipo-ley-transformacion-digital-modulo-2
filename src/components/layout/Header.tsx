import type { DiagnosticProcess } from "@/types/process.types";
import { Badge } from "@/components/ui/Badge";

interface HeaderProps {
  process: DiagnosticProcess;
}

export function Header({ process }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-5 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">{process.institucion}</p>
          <h2 className="text-xl font-semibold text-ink">{process.nombre}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="info">{process.periodo}</Badge>
          <Badge tone="warning">{process.etapa}</Badge>
        </div>
      </div>
    </header>
  );
}
