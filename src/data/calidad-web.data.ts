import { qualityInstrumentCatalog } from "./calidad-web-instruments.generated";
import type {
  QualityDimension,
  QualityEvaluation,
  QualityInstrumentType,
  QualityQuestion,
  QuestionAnswer
} from "@/types/calidad-web.types";

export const websiteDimensions = qualityInstrumentCatalog["Sitio Web"].dimensiones.map(
  (dimension) => dimension.nombre
);

export const digitalServiceDimensions = qualityInstrumentCatalog[
  "Servicio Digital"
].dimensiones.map((dimension) => dimension.nombre);

function seedAnswer(dimensionIndex: number, questionIndex: number): QuestionAnswer {
  if (dimensionIndex > 4 || questionIndex > 5) {
    return "Por responder";
  }

  if (questionIndex === 2) {
    return "No";
  }

  if (questionIndex === 4) {
    return "No aplica";
  }

  return "Sí";
}

function buildQualityQuestion(
  question: Omit<QualityQuestion, "respuesta" | "observacionEvidencia">,
  dimensionIndex: number,
  questionIndex: number,
  answeredSeed: boolean
): QualityQuestion {
  const respuesta = answeredSeed
    ? seedAnswer(dimensionIndex, questionIndex)
    : "Por responder";

  return {
    ...question,
    respuesta,
    observacionEvidencia:
      respuesta === "Por responder"
        ? ""
        : "Registro precargado para mostrar cálculo inicial del prototipo."
  };
}

export function buildQualityDimensions(
  type: QualityInstrumentType,
  answeredSeed = false
): QualityDimension[] {
  return qualityInstrumentCatalog[type].dimensiones.map((dimension, dimensionIndex) => ({
    ...dimension,
    preguntas: dimension.preguntas.map((question, questionIndex) =>
      buildQualityQuestion(question, dimensionIndex, questionIndex, answeredSeed)
    )
  }));
}

export const initialQualityEvaluations: QualityEvaluation[] = [
  {
    id: "quality-1",
    nombre: "Evaluación portal municipal",
    urlObjetivo: "https://www.municipalidad-ejemplo.cl",
    tipoInstrumento: "Sitio Web",
    responsable: "Equipo Transformación Digital",
    fecha: "2026-05-26",
    dimensiones: buildQualityDimensions("Sitio Web", true)
  }
];
