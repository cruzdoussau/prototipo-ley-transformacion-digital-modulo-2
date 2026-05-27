"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QualityDimensionAccordion } from "./QualityDimensionAccordion";
import {
  calculateEvaluationResult,
  countAnsweredQuestions,
  countCriticalQualityFindings,
  summarizeQualityByPriority
} from "@/lib/calculations";
import type { QualityEvaluation, QualityQuestion } from "@/types/calidad-web.types";

interface QualityEvaluationDetailProps {
  evaluation: QualityEvaluation;
  onUpdateQuestion: (
    dimensionId: string,
    questionId: string,
    updates: Pick<QualityQuestion, "respuesta" | "observacionEvidencia">
  ) => void;
}

export function QualityEvaluationDetail({
  evaluation,
  onUpdateQuestion
}: QualityEvaluationDetailProps) {
  const result = calculateEvaluationResult(evaluation);
  const answered = countAnsweredQuestions(evaluation);
  const allQuestions = evaluation.dimensiones.flatMap((dimension) => dimension.preguntas);
  const prioritySummary = summarizeQualityByPriority(allQuestions);
  const criticalFindings = countCriticalQualityFindings(evaluation);

  return (
    <div className="space-y-4">
      <Card title={evaluation.nombre} description={`${evaluation.tipoInstrumento} · ${evaluation.urlObjetivo}`}>
        <div className="grid gap-4 md:grid-cols-4">
          <ProgressBar value={result} label="Resultado general" />
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase text-slate-500">Preguntas respondidas</p>
            <p className="text-2xl font-bold text-ink">
              {answered.answered}/{answered.total}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase text-slate-500">Dimensiones</p>
            <p className="text-2xl font-bold text-ink">{evaluation.dimensiones.length}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase text-slate-500">Responsable</p>
            <p className="font-semibold text-slate-800">{evaluation.responsable}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-rose-50 p-3">
            <p className="text-xs font-semibold uppercase text-rose-700">Hallazgos críticos</p>
            <p className="text-xl font-bold text-rose-700">{criticalFindings}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <Badge tone="danger">{`Imprescindibles: ${prioritySummary.Imprescindible.score}%`}</Badge>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <Badge tone="warning">{`Esperables: ${prioritySummary.Esperable.score}%`}</Badge>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <Badge tone="neutral">{`Deseables: ${prioritySummary.Deseable.score}%`}</Badge>
          </div>
        </div>
      </Card>
      <div className="space-y-3">
        {evaluation.dimensiones.map((dimension) => (
          <QualityDimensionAccordion
            key={dimension.id}
            dimension={dimension}
            onUpdateQuestion={onUpdateQuestion}
          />
        ))}
      </div>
    </div>
  );
}
