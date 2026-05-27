import type { Gap } from "@/types/brechas.types";
import type { DataManagementDimension } from "@/types/gestion-datos.types";
import type { DiagnosticProcess, TraceEvent } from "@/types/process.types";

export const initialProcess: DiagnosticProcess = {
  id: "process-1",
  nombre: "Diagnostico estrategico institucional 2026",
  institucion: "Municipalidad piloto",
  periodo: "2026",
  etapa: "Levantamiento",
  comiteAsociado: "Comite de Transformacion Digital",
  fechaInicio: "2026-05-26",
  fechaCierreEstimada: "2026-07-30",
  objetivo:
    "Levantar brechas institucionales para planificar la implementacion de la Ley 21.180."
};

export const initialDataManagementDimensions: DataManagementDimension[] = [
  {
    id: "data-1",
    dimension: "Gobernanza de datos",
    descripcion: "Roles, responsabilidades, politicas y toma de decisiones sobre datos.",
    nivelActual: "Basico",
    brechaDetectada: "No existe comite formal de datos ni owners por dominio.",
    prioridadPreliminar: "Alta"
  },
  {
    id: "data-2",
    dimension: "Calidad de datos",
    descripcion: "Reglas, controles, completitud, exactitud y oportunidad.",
    nivelActual: "Inicial",
    brechaDetectada: "Controles manuales sin indicadores de calidad institucional.",
    prioridadPreliminar: "Alta"
  },
  {
    id: "data-3",
    dimension: "Arquitectura e interoperabilidad",
    descripcion: "Inventario, integraciones, estandares y flujo entre sistemas.",
    nivelActual: "Basico",
    brechaDetectada: "Integraciones puntuales sin catalogo de APIs ni servicios.",
    prioridadPreliminar: "Media"
  },
  {
    id: "data-4",
    dimension: "Seguridad y privacidad",
    descripcion: "Controles de acceso, trazabilidad, privacidad y resguardo.",
    nivelActual: "Gestionado",
    brechaDetectada: "Se requiere formalizar monitoreo periodico de permisos.",
    prioridadPreliminar: "Media"
  }
];

export const initialManualGaps: Gap[] = [
  {
    id: "gap-cpat-1",
    dimension: "CPAT",
    subdimension: "Soporte electronico",
    descripcion: "Procedimientos con expediente fisico o mixto sin trazabilidad integral.",
    prioridadPreliminar: "Alta",
    fuente: "CPAT",
    estado: "Abierta"
  },
  {
    id: "gap-quality-1",
    dimension: "Calidad Web",
    subdimension: "Accesibilidad web",
    descripcion: "Faltan evidencias de contraste, navegacion por teclado y textos alternativos.",
    prioridadPreliminar: "Alta",
    fuente: "Calidad Web",
    estado: "En tratamiento"
  },
  {
    id: "gap-data-1",
    dimension: "Gestion de Datos",
    subdimension: "Gobernanza",
    descripcion: "No hay responsables de datos definidos por dominio institucional.",
    prioridadPreliminar: "Alta",
    fuente: "Gestion de Datos",
    estado: "Abierta"
  }
];

export const initialTraceEvents: TraceEvent[] = [
  {
    id: "trace-1",
    fecha: "2026-05-26",
    accion: "Proceso diagnostico creado",
    responsable: "Administrador",
    modulo: "Proceso"
  },
  {
    id: "trace-2",
    fecha: "2026-05-26",
    accion: "Carga inicial CPAT preparada",
    responsable: "Equipo TD",
    modulo: "CPAT"
  },
  {
    id: "trace-3",
    fecha: "2026-05-26",
    accion: "Instrumento de calidad web inicializado",
    responsable: "Equipo TD",
    modulo: "Calidad Web"
  }
];
