import type {
  CpatAccesoExpedienteElectronico,
  CpatAreaResponsableMunicipal,
  CpatDisponibilidadRealizacion,
  CpatFirmaElectronicaAvanzada,
  CpatIngresoSolicitudes,
  CpatMedioComunicacionesOficialesOrganos,
  CpatNivelDigitalizacion,
  CpatPagoAsociado,
  CpatProductoInstitucional,
  CpatSegmentoUsuarios,
  CpatSiNo,
  CpatTipoExpediente,
  CpatTipoInicio,
  CpatTipoRegistro,
  CpatTipoUsuario
} from "@/types/cpat.types";

export const cpatTipoRegistroOptions = [
  "Procedimiento administrativo de función común",
  "Procedimiento administrativo de función específica",
  "Otras tramitaciones"
] as const satisfies readonly CpatTipoRegistro[];

export const cpatAreaResponsableMunicipalOptions = [
  "Dirección de administración y Finanzas (DAF)",
  "Secretaría Municipal",
  "Dirección de Tránsito y Transporte Público",
  "Dirección de Desarrollo Comunitario (DIDECO)",
  "Dirección de Obras Municipales",
  "Secretaría de Planificación (SECPLA)",
  "Dirección de Control",
  "Dirección Jurídica",
  "Administración Municipal",
  "OIRS",
  "Otro"
] as const satisfies readonly CpatAreaResponsableMunicipal[];

export const cpatTipoInicioOptions = [
  "Solicitud de partes",
  "De oficio",
  "A petición de otros órganos",
  "Por denuncia"
] as const satisfies readonly CpatTipoInicio[];

export const cpatProductoInstitucionalOptions = [
  "Acreditación",
  "Atención y/o información ciudadana",
  "Autorización",
  "Beca",
  "Fiscalización",
  "Fondos concursables y/o postulables",
  "Recaudación y pagos",
  "Registros",
  "Otro"
] as const satisfies readonly CpatProductoInstitucional[];

export const cpatPagoAsociadoOptions = [
  "Sí",
  "No",
  "En algunos casos"
] as const satisfies readonly CpatPagoAsociado[];

export const cpatTipoUsuarioOptions = [
  "Persona natural",
  "Persona jurídica",
  "Ambos tipos de personas"
] as const satisfies readonly CpatTipoUsuario[];

export const cpatSegmentoUsuariosOptions = [
  "No aplica",
  "Género",
  "Productividad y emprendimiento",
  "Calidad indígena",
  "Discapacidad",
  "Medio Ambiente",
  "Otro"
] as const satisfies readonly CpatSegmentoUsuarios[];

export const cpatDisponibilidadRealizacionOptions = [
  "Se puede realizar durante todo el año",
  "Se puede realizar sólo en algunos períodos del año"
] as const satisfies readonly CpatDisponibilidadRealizacion[];

export const cpatNivelDigitalizacionOptions = [
  "Nivel 0",
  "Nivel 1",
  "Nivel 2",
  "Nivel 3",
  "Nivel 4"
] as const satisfies readonly CpatNivelDigitalizacion[];

export const cpatIngresoSolicitudesOptions = [
  "El ingreso de solicitudes se realiza por medios físicos",
  "El ingreso de solicitudes se realiza por medios electrónicos",
  "El ingreso de solicitudes se realiza por ambos medios"
] as const satisfies readonly CpatIngresoSolicitudes[];

export const cpatSiNoOptions = ["Sí", "No"] as const satisfies readonly CpatSiNo[];

export const cpatTipoExpedienteOptions = [
  "Expediente con documentos en formato físico",
  "Expediente con documentos en formato electrónico",
  "Expediente con documentos en formato físico y electrónico (mixto)"
] as const satisfies readonly CpatTipoExpediente[];

export const cpatAccesoExpedienteElectronicoOptions = [
  "Sí, los(as) interesados(as) tienen acceso al expediente electrónico",
  "No"
] as const satisfies readonly CpatAccesoExpedienteElectronico[];

export const cpatFirmaElectronicaAvanzadaOptions = [
  "Utiliza firma electrónica avanzada",
  "No utiliza firma electrónica avanzada"
] as const satisfies readonly CpatFirmaElectronicaAvanzada[];

export const cpatMedioComunicacionesOficialesOrganosOptions = [
  "No considera comunicaciones oficiales",
  "Sí, realiza envíos sólo por medios electrónicos propios",
  "Sí, utiliza DocDigital",
  "Ambos medios"
] as const satisfies readonly CpatMedioComunicacionesOficialesOrganos[];
