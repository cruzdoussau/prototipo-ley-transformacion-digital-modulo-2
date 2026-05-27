"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { QualityEvaluationForm } from "./QualityEvaluationForm";
import { QualityEvaluationDetail } from "./QualityEvaluationDetail";
import { qualityInstrumentCatalog } from "@/data/calidad-web-instruments.generated";
import type { QualityEvaluation, QualityQuestion } from "@/types/calidad-web.types";

interface CalidadWebModuleProps {
  evaluations: QualityEvaluation[];
  onAddEvaluation: (evaluation: QualityEvaluation) => void;
  onUpdateQuestion: (evaluationId: string, dimensionId: string, questionId: string, updates: Pick<QualityQuestion, "respuesta" | "observacionEvidencia">) => void;
}

export function CalidadWebModule({
  evaluations,
  onAddEvaluation,
  onUpdateQuestion
}: CalidadWebModuleProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [activeEvaluationId, setActiveEvaluationId] = useState(evaluations[0]?.id ?? "");
  const activeEvaluation =
    evaluations.find((evaluation) => evaluation.id === activeEvaluationId) ?? evaluations[0] ?? null;

  function addEvaluation(evaluation: QualityEvaluation) {
    onAddEvaluation(evaluation);
    setActiveEvaluationId(evaluation.id);
    setFormOpen(false);
  }

  return (
    <div className="space-y-5">
      <Card
        title="Evaluacion de calidad web"
        description="Instrumentos oficiales Calidad Web 2.0 para sitios web y servicios digitales."
        action={
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white"
          >
            <Plus className="h-4 w-4" />
            Nueva evaluacion
          </button>
        }
      >
        <div className="mb-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase text-slate-500">Sitios Web</p>
            <p className="mt-1 font-semibold text-slate-800">
              {qualityInstrumentCatalog["Sitio Web"].dimensiones.length} dimensiones ·{" "}
              {qualityInstrumentCatalog["Sitio Web"].dimensiones.reduce(
                (total, dimension) => total + dimension.preguntas.length,
                0
              )}{" "}
              preguntas
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase text-slate-500">Servicios Digitales</p>
            <p className="mt-1 font-semibold text-slate-800">
              {qualityInstrumentCatalog["Servicio Digital"].dimensiones.length} dimensiones ·{" "}
              {qualityInstrumentCatalog["Servicio Digital"].dimensiones.reduce(
                (total, dimension) => total + dimension.preguntas.length,
                0
              )}{" "}
              preguntas
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {evaluations.map((evaluation) => (
            <button
              key={evaluation.id}
              type="button"
              onClick={() => setActiveEvaluationId(evaluation.id)}
              className="rounded-full"
            >
              <Badge tone={activeEvaluation?.id === evaluation.id ? "info" : "neutral"}>
                {evaluation.nombre}
              </Badge>
            </button>
          ))}
        </div>
      </Card>
      {activeEvaluation && (
        <QualityEvaluationDetail
          evaluation={activeEvaluation}
          onUpdateQuestion={(dimensionId, questionId, updates) =>
            onUpdateQuestion(activeEvaluation.id, dimensionId, questionId, updates)
          }
        />
      )}
      <Modal open={formOpen} title="Nueva evaluacion" onClose={() => setFormOpen(false)}>
        <QualityEvaluationForm onSubmit={addEvaluation} />
      </Modal>
    </div>
  );
}
