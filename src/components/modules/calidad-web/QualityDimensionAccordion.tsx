"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QualityQuestionTable } from "./QualityQuestionTable";
import { calculateDimensionProgress, summarizeQualityByPriority } from "@/lib/calculations";
import type { QualityDimension, QualityQuestion } from "@/types/calidad-web.types";

interface QualityDimensionAccordionProps {
  dimension: QualityDimension;
  onUpdateQuestion: (dimensionId: string, questionId: string, updates: Pick<QualityQuestion, "respuesta" | "observacionEvidencia">) => void;
}

export function QualityDimensionAccordion({ dimension, onUpdateQuestion }: QualityDimensionAccordionProps) {
  const [open, setOpen] = useState(false);
  const progress = calculateDimensionProgress(dimension);
  const prioritySummary = summarizeQualityByPriority(dimension.preguntas);
  const answered = dimension.preguntas.filter((question) => question.respuesta !== "Por responder").length;
  const criticalPending =
    prioritySummary.Imprescindible.no + prioritySummary.Imprescindible.unanswered;
  const isCritical = progress < 50 || criticalPending > 0;

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full flex-col gap-3 p-4 text-left md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="font-semibold text-slate-800">
            {dimension.orden}. {dimension.nombre}
          </p>
          <p className="mt-1 max-w-3xl text-xs text-slate-500">{dimension.descripcion}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge tone="neutral">{`${answered}/${dimension.preguntas.length} respondidas`}</Badge>
            <Badge tone="danger">{`${prioritySummary.Imprescindible.total} imprescindibles`}</Badge>
            <Badge tone="warning">{`${prioritySummary.Esperable.total} esperables`}</Badge>
            <Badge tone="neutral">{`${prioritySummary.Deseable.total} deseables`}</Badge>
          </div>
          {isCritical && (
            <p className="mt-2 text-xs font-medium text-rose-600">
              Dimensión crítica: {criticalPending} preguntas imprescindibles están pendientes o con respuesta No.
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 md:w-80">
          <ProgressBar value={progress} label="Cumplimiento" />
          <ChevronDown className={clsx("h-5 w-5 text-slate-500 transition", open && "rotate-180")} />
        </div>
      </button>
      {open && (
        <div className="border-t border-slate-200 p-4">
          <QualityQuestionTable
            questions={dimension.preguntas}
            onUpdateQuestion={(questionId, updates) => onUpdateQuestion(dimension.id, questionId, updates)}
          />
        </div>
      )}
    </div>
  );
}
