import type { GapPriority } from "./brechas.types";

export type DataMaturityLevel = "Inicial" | "Basico" | "Gestionado" | "Optimizado";

export interface DataManagementDimension {
  id: string;
  dimension: string;
  descripcion: string;
  nivelActual: DataMaturityLevel;
  brechaDetectada: string;
  prioridadPreliminar: GapPriority;
}
