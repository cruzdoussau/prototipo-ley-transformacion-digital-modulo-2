export type QualityInstrumentType = "Sitio Web" | "Servicio Digital";
export type QuestionPriority = "Imprescindible" | "Esperable" | "Deseable";
export type QuestionAnswer = "Por responder" | "Sí" | "No" | "No aplica";

export interface QualityQuestionTemplate {
  id: string;
  codigo: string;
  indicador: string;
  descripcion: string;
  prioridad: QuestionPriority;
  preguntaChequeo: string;
  ejemploAyuda: string;
}

export interface QualityQuestion extends QualityQuestionTemplate {
  respuesta: QuestionAnswer;
  observacionEvidencia: string;
}

export interface QualityDimensionTemplate {
  id: string;
  orden: number;
  nombre: string;
  descripcion: string;
  sourceSheet: string;
  preguntas: QualityQuestionTemplate[];
}

export interface QualityDimension extends Omit<QualityDimensionTemplate, "preguntas"> {
  preguntas: QualityQuestion[];
}

export interface QualityInstrumentDefinition {
  tipoInstrumento: QualityInstrumentType;
  sourceFile: string;
  dimensiones: QualityDimensionTemplate[];
}

export interface QualityEvaluation {
  id: string;
  nombre: string;
  urlObjetivo: string;
  tipoInstrumento: QualityInstrumentType;
  responsable: string;
  fecha: string;
  dimensiones: QualityDimension[];
}
