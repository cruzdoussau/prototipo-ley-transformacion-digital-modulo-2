export type DiagnosticStage =
  | "Preparacion"
  | "Levantamiento"
  | "Analisis"
  | "Plan de accion"
  | "Cierre";

export interface DiagnosticProcess {
  id: string;
  nombre: string;
  institucion: string;
  periodo: string;
  etapa: DiagnosticStage;
  comiteAsociado: string;
  fechaInicio: string;
  fechaCierreEstimada: string;
  objetivo: string;
}

export interface TraceEvent {
  id: string;
  fecha: string;
  accion: string;
  responsable: string;
  modulo: "Proceso" | "CPAT" | "Calidad Web" | "Gestion de Datos" | "Brechas";
}
