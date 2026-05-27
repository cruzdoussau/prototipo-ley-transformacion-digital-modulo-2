"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NewProcessModal } from "./NewProcessModal";
import type { DiagnosticProcess } from "@/types/process.types";

interface ProcessModuleProps {
  process: DiagnosticProcess;
  onCreateProcess: (process: DiagnosticProcess) => void;
}

export function ProcessModule({ process, onCreateProcess }: ProcessModuleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-5">
      <Card
        title="Proceso diagnostico vigente"
        description="Ficha de control del levantamiento institucional."
        action={
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white"
          >
            <Plus className="h-4 w-4" />
            Nuevo proceso
          </button>
        }
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Institucion", process.institucion],
            ["Periodo", process.periodo],
            ["Comite asociado", process.comiteAsociado],
            ["Fecha inicio", process.fechaInicio],
            ["Cierre estimado", process.fechaCierreEstimada],
            ["Etapa", process.etapa]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase text-slate-500">{label}</p>
              <p className="mt-1 font-semibold text-slate-800">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-slate-200 p-4">
          <div className="mb-2">
            <Badge tone="warning">{process.etapa}</Badge>
          </div>
          <p className="text-sm text-slate-600">{process.objetivo}</p>
        </div>
      </Card>
      <NewProcessModal open={open} onClose={() => setOpen(false)} onCreate={onCreateProcess} />
    </div>
  );
}
