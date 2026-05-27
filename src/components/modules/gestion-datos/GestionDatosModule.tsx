"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateDataManagementProgress } from "@/lib/calculations";
import type { GapPriority } from "@/types/brechas.types";
import type { DataManagementDimension, DataMaturityLevel } from "@/types/gestion-datos.types";

const levels: DataMaturityLevel[] = ["Inicial", "Basico", "Gestionado", "Optimizado"];
const priorities: GapPriority[] = ["Alta", "Media", "Baja"];

interface GestionDatosModuleProps {
  dimensions: DataManagementDimension[];
  onUpdateDimension: (dimension: DataManagementDimension) => void;
}

export function GestionDatosModule({ dimensions, onUpdateDimension }: GestionDatosModuleProps) {
  const progress = calculateDataManagementProgress(dimensions);

  return (
    <div className="space-y-5">
      <Card title="Marco de Referencia de Gestion de Datos" description="Registro de madurez actual, brecha detectada y prioridad preliminar.">
        <ProgressBar value={progress} label="Madurez promedio" />
      </Card>
      <div className="grid gap-4 xl:grid-cols-2">
        {dimensions.map((dimension) => (
          <Card key={dimension.id} title={dimension.dimension} description={dimension.descripcion}>
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Nivel actual
                  <select
                    value={dimension.nivelActual}
                    onChange={(event) =>
                      onUpdateDimension({
                        ...dimension,
                        nivelActual: event.target.value as DataMaturityLevel
                      })
                    }
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Prioridad preliminar
                  <select
                    value={dimension.prioridadPreliminar}
                    onChange={(event) =>
                      onUpdateDimension({
                        ...dimension,
                        prioridadPreliminar: event.target.value as GapPriority
                      })
                    }
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  >
                    {priorities.map((priority) => (
                      <option key={priority} value={priority}>
                        {priority}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Brecha detectada
                <textarea
                  value={dimension.brechaDetectada}
                  onChange={(event) =>
                    onUpdateDimension({ ...dimension, brechaDetectada: event.target.value })
                  }
                  rows={3}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                />
              </label>
              <div className="flex gap-2">
                <Badge tone="info">{dimension.nivelActual}</Badge>
                <Badge tone={dimension.prioridadPreliminar === "Alta" ? "danger" : "warning"}>
                  {dimension.prioridadPreliminar}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
