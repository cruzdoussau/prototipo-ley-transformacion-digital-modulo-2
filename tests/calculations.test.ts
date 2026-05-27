import { describe, expect, it } from "vitest";
import {
  calculateDimensionProgress,
  calculateEvaluationResult,
  countAnsweredQuestions,
  summarizeGaps
} from "../src/lib/calculations";
import { buildQualityDimensions } from "../src/data/calidad-web.data";
import type { Gap } from "../src/types/brechas.types";
import type { QualityEvaluation } from "../src/types/calidad-web.types";

describe("quality calculations", () => {
  it("counts unanswered questions as zero and ignores no aplica in denominator", () => {
    const [sourceDimension] = buildQualityDimensions("Sitio Web");
    const dimension = {
      ...sourceDimension,
      preguntas: sourceDimension.preguntas.slice(0, 2)
    };
    dimension.preguntas[0].respuesta = "Sí";
    dimension.preguntas[1].respuesta = "No aplica";

    expect(calculateDimensionProgress(dimension)).toBe(100);
  });

  it("counts answered questions without treating por responder as answered", () => {
    const evaluation: QualityEvaluation = {
      id: "test",
      nombre: "Smoke",
      urlObjetivo: "https://example.test",
      tipoInstrumento: "Sitio Web",
      responsable: "QA",
      fecha: "2026-05-26",
      dimensiones: buildQualityDimensions("Sitio Web")
    };

    evaluation.dimensiones[0].preguntas[0].respuesta = "No";

    expect(countAnsweredQuestions(evaluation)).toEqual({ answered: 1, total: 325 });
    expect(calculateEvaluationResult(evaluation)).toBeGreaterThanOrEqual(0);
  });
});

describe("gap summary", () => {
  it("summarizes gaps by priority", () => {
    const gaps: Gap[] = [
      {
        id: "1",
        dimension: "CPAT",
        subdimension: "Soporte",
        descripcion: "Pendiente",
        prioridadPreliminar: "Alta",
        fuente: "CPAT",
        estado: "Abierta"
      },
      {
        id: "2",
        dimension: "Datos",
        subdimension: "Calidad",
        descripcion: "Pendiente",
        prioridadPreliminar: "Media",
        fuente: "Gestion de Datos",
        estado: "Abierta"
      }
    ];

    expect(summarizeGaps(gaps)).toEqual({ Alta: 1, Media: 1, Baja: 0 });
  });
});
