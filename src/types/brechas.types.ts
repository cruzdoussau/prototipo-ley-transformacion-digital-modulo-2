export type GapPriority = "Alta" | "Media" | "Baja";
export type GapSource = "CPAT" | "Calidad Web" | "Gestion de Datos";
export type GapStatus = "Abierta" | "En tratamiento" | "Cerrada";

export interface Gap {
  id: string;
  dimension: string;
  subdimension: string;
  descripcion: string;
  prioridadPreliminar: GapPriority;
  fuente: GapSource;
  estado: GapStatus;
}
