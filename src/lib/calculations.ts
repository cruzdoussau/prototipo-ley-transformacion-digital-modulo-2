import type { AdministrativeProcedure } from "@/types/cpat.types";
import type { Gap } from "@/types/brechas.types";
import type {
  QualityDimension,
  QualityEvaluation,
  QualityQuestion,
  QuestionPriority
} from "@/types/calidad-web.types";
import type { DataManagementDimension } from "@/types/gestion-datos.types";

export function clampPercentage(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round(value)));
}

export function calculateQuestionScore(question: QualityQuestion): number | null {
  if (question.respuesta === "No aplica") {
    return null;
  }

  if (question.respuesta === "Sí") {
    return 1;
  }

  return 0;
}

export function calculateDimensionProgress(dimension: QualityDimension): number {
  const applicableScores = dimension.preguntas
    .map(calculateQuestionScore)
    .filter((score): score is number => score !== null);

  if (applicableScores.length === 0) {
    return 100;
  }

  const score = applicableScores.reduce((total, current) => total + current, 0);
  return clampPercentage((score / applicableScores.length) * 100);
}

export function countAnsweredQuestions(evaluation: QualityEvaluation): {
  answered: number;
  total: number;
} {
  const questions = evaluation.dimensiones.flatMap((dimension) => dimension.preguntas);
  const answered = questions.filter((question) => question.respuesta !== "Por responder").length;

  return {
    answered,
    total: questions.length
  };
}

export interface QualityPriorityStats {
  total: number;
  answered: number;
  yes: number;
  no: number;
  notApplicable: number;
  unanswered: number;
  score: number;
}

const emptyPriorityStats: QualityPriorityStats = {
  total: 0,
  answered: 0,
  yes: 0,
  no: 0,
  notApplicable: 0,
  unanswered: 0,
  score: 0
};

export function summarizeQualityByPriority(
  questions: QualityQuestion[]
): Record<QuestionPriority, QualityPriorityStats> {
  const summary: Record<QuestionPriority, QualityPriorityStats> = {
    Imprescindible: { ...emptyPriorityStats },
    Esperable: { ...emptyPriorityStats },
    Deseable: { ...emptyPriorityStats }
  };

  questions.forEach((question) => {
    const stats = summary[question.prioridad];
    stats.total += 1;

    if (question.respuesta === "Por responder") {
      stats.unanswered += 1;
      return;
    }

    stats.answered += 1;

    if (question.respuesta === "Sí") {
      stats.yes += 1;
    }

    if (question.respuesta === "No") {
      stats.no += 1;
    }

    if (question.respuesta === "No aplica") {
      stats.notApplicable += 1;
    }
  });

  Object.values(summary).forEach((stats) => {
    const applicable = stats.total - stats.notApplicable;
    stats.score = applicable === 0 ? 100 : clampPercentage((stats.yes / applicable) * 100);
  });

  return summary;
}

export function countCriticalQualityFindings(evaluation: QualityEvaluation): number {
  return evaluation.dimensiones
    .flatMap((dimension) => dimension.preguntas)
    .filter(
      (question) =>
        question.prioridad === "Imprescindible" &&
        (question.respuesta === "No" || question.respuesta === "Por responder")
    ).length;
}

export function calculateEvaluationResult(evaluation: QualityEvaluation): number {
  const dimensions = evaluation.dimensiones.map(calculateDimensionProgress);

  if (dimensions.length === 0) {
    return 0;
  }

  return clampPercentage(
    dimensions.reduce((total, progress) => total + progress, 0) / dimensions.length
  );
}

export function calculateCpatProgress(procedures: AdministrativeProcedure[]): number {
  if (procedures.length === 0) {
    return 0;
  }

  const completed = procedures.filter(
    (procedure) =>
      procedure.nombreRegistro.trim() &&
      procedure.descripcionRegistro.trim() &&
      procedure.areaResponsableMunicipal.trim() &&
      procedure.cargoResponsable.trim() &&
      procedure.tipoInicio.trim() &&
      procedure.actoInicio.trim() &&
      procedure.actoTermino.trim() &&
      procedure.numeroLey.trim()
  ).length;

  return clampPercentage((completed / procedures.length) * 100);
}

export function calculateDataManagementProgress(
  dimensions: DataManagementDimension[]
): number {
  const weights: Record<DataManagementDimension["nivelActual"], number> = {
    Inicial: 25,
    Basico: 50,
    Gestionado: 75,
    Optimizado: 100
  };

  if (dimensions.length === 0) {
    return 0;
  }

  return clampPercentage(
    dimensions.reduce((total, dimension) => total + weights[dimension.nivelActual], 0) /
      dimensions.length
  );
}

export function summarizeGaps(gaps: Gap[]): Record<Gap["prioridadPreliminar"], number> {
  return gaps.reduce(
    (summary, gap) => ({
      ...summary,
      [gap.prioridadPreliminar]: summary[gap.prioridadPreliminar] + 1
    }),
    { Alta: 0, Media: 0, Baja: 0 }
  );
}
