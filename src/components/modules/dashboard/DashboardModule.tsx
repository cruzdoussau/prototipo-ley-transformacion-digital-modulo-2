import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  calculateCpatProgress,
  calculateDataManagementProgress,
  calculateEvaluationResult,
  summarizeGaps
} from "@/lib/calculations";
import type { AdministrativeProcedure } from "@/types/cpat.types";
import type { Gap } from "@/types/brechas.types";
import type { QualityEvaluation } from "@/types/calidad-web.types";
import type { DataManagementDimension } from "@/types/gestion-datos.types";
import type { DiagnosticProcess, TraceEvent } from "@/types/process.types";

interface DashboardModuleProps {
  process: DiagnosticProcess;
  procedures: AdministrativeProcedure[];
  evaluations: QualityEvaluation[];
  dataDimensions: DataManagementDimension[];
  gaps: Gap[];
  traceEvents: TraceEvent[];
}

export function DashboardModule({
  process,
  procedures,
  evaluations,
  dataDimensions,
  gaps,
  traceEvents
}: DashboardModuleProps) {
  const cpatProgress = calculateCpatProgress(procedures);
  const qualityProgress = evaluations[0] ? calculateEvaluationResult(evaluations[0]) : 0;
  const dataProgress = calculateDataManagementProgress(dataDimensions);
  const generalProgress = Math.round((cpatProgress + qualityProgress + dataProgress) / 3);
  const gapSummary = summarizeGaps(gaps);

  return (
    <div className="space-y-5">
      <Card title="Estado general del diagnostico" description={process.objetivo}>
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ProgressBar value={generalProgress} label="Avance global ponderado" />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <ProgressBar value={cpatProgress} label="CPAT" />
              <ProgressBar value={qualityProgress} label="Calidad Web" />
              <ProgressBar value={dataProgress} label="Gestion de Datos" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg bg-rose-50 p-3 text-rose-700">
              <p className="text-xs font-medium">Brechas altas</p>
              <p className="text-2xl font-bold">{gapSummary.Alta}</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-amber-700">
              <p className="text-xs font-medium">Brechas medias</p>
              <p className="text-2xl font-bold">{gapSummary.Media}</p>
            </div>
            <div className="rounded-lg bg-emerald-50 p-3 text-emerald-700">
              <p className="text-xs font-medium">Brechas bajas</p>
              <p className="text-2xl font-bold">{gapSummary.Baja}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card title="Alertas prioritarias">
          <div className="space-y-3">
            {gaps.slice(0, 4).map((gap) => (
              <div key={gap.id} className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{gap.subdimension}</p>
                  <p className="text-xs text-slate-500">{gap.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Hitos del proceso">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Inicio: {process.fechaInicio}
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-4 w-4 text-blue-600" />
              Cierre estimado: {process.fechaCierreEstimada}
            </div>
            <Badge tone="warning">{process.etapa}</Badge>
          </div>
        </Card>

        <Card title="Trazabilidad">
          <div className="space-y-3">
            {traceEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="border-l-2 border-civic pl-3">
                <p className="text-sm font-medium text-slate-800">{event.accion}</p>
                <p className="text-xs text-slate-500">
                  {event.fecha} · {event.modulo} · {event.responsable}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
