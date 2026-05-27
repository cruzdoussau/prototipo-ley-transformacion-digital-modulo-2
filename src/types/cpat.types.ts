export type CpatTipoRegistro =
  | "Procedimiento administrativo de función común"
  | "Procedimiento administrativo de función específica"
  | "Otras tramitaciones";

export type CpatAreaResponsableMunicipal =
  | "Dirección de administración y Finanzas (DAF)"
  | "Secretaría Municipal"
  | "Dirección de Tránsito y Transporte Público"
  | "Dirección de Desarrollo Comunitario (DIDECO)"
  | "Dirección de Obras Municipales"
  | "Secretaría de Planificación (SECPLA)"
  | "Dirección de Control"
  | "Dirección Jurídica"
  | "Administración Municipal"
  | "OIRS"
  | "Otro";

export type CpatTipoInicio =
  | "Solicitud de partes"
  | "De oficio"
  | "A petición de otros órganos"
  | "Por denuncia";

export type CpatProductoInstitucional =
  | "Acreditación"
  | "Atención y/o información ciudadana"
  | "Autorización"
  | "Beca"
  | "Fiscalización"
  | "Fondos concursables y/o postulables"
  | "Recaudación y pagos"
  | "Registros"
  | "Otro";

export type CpatPagoAsociado = "Sí" | "No" | "En algunos casos";

export type CpatTipoUsuario =
  | "Persona natural"
  | "Persona jurídica"
  | "Ambos tipos de personas";

export type CpatSegmentoUsuarios =
  | "No aplica"
  | "Género"
  | "Productividad y emprendimiento"
  | "Calidad indígena"
  | "Discapacidad"
  | "Medio Ambiente"
  | "Otro";

export type CpatDisponibilidadRealizacion =
  | "Se puede realizar durante todo el año"
  | "Se puede realizar sólo en algunos períodos del año";

export type CpatNivelDigitalizacion =
  | "Nivel 0"
  | "Nivel 1"
  | "Nivel 2"
  | "Nivel 3"
  | "Nivel 4";

export type CpatIngresoSolicitudes =
  | "El ingreso de solicitudes se realiza por medios físicos"
  | "El ingreso de solicitudes se realiza por medios electrónicos"
  | "El ingreso de solicitudes se realiza por ambos medios";

export type CpatSiNo = "Sí" | "No";

export type CpatTipoExpediente =
  | "Expediente con documentos en formato físico"
  | "Expediente con documentos en formato electrónico"
  | "Expediente con documentos en formato físico y electrónico (mixto)";

export type CpatAccesoExpedienteElectronico =
  | "Sí, los(as) interesados(as) tienen acceso al expediente electrónico"
  | "No";

export type CpatFirmaElectronicaAvanzada =
  | "Utiliza firma electrónica avanzada"
  | "No utiliza firma electrónica avanzada";

export type CpatMedioComunicacionesOficialesOrganos =
  | "No considera comunicaciones oficiales"
  | "Sí, realiza envíos sólo por medios electrónicos propios"
  | "Sí, utiliza DocDigital"
  | "Ambos medios";

export interface CpatFormValues {
  tipoRegistro: CpatTipoRegistro;
  nombreRegistro: string;
  descripcionRegistro: string;
  areaResponsableMunicipal: CpatAreaResponsableMunicipal;
  cargoResponsable: string;
  tipoInicio: CpatTipoInicio;
  actoInicio: string;
  actoTermino: string;
  productoInstitucional: CpatProductoInstitucional;
  numeroLey: string;
  urlLeyChile: string;
  pagoAsociado: CpatPagoAsociado;
  tipoUsuario: CpatTipoUsuario;
  segmentoUsuarios: CpatSegmentoUsuarios;
  disponibilidadRealizacion: CpatDisponibilidadRealizacion;
  nivelDigitalizacion: CpatNivelDigitalizacion;
  ingresoSolicitudes: CpatIngresoSolicitudes;
  canalDigital: CpatSiNo;
  canalPresencial: CpatSiNo;
  canalTelefonico: CpatSiNo;
  modulosAutoatencion: CpatSiNo;
  tipoExpediente: CpatTipoExpediente;
  accesoExpedienteElectronico: CpatAccesoExpedienteElectronico;
  urlInicio: string;
  fichaChileAtiendeRelacionada: CpatSiNo;
  urlFichaChileAtiende: string;
  numeroPlataformas: string;
  alcancePlataformas: string;
  utilizaSimpleSaas: CpatSiNo;
  utilizaSimpleOnPremise: CpatSiNo;
  plataformaDesarrolladaInstitucion: CpatSiNo;
  plataformaProvistaExternamente: CpatSiNo;
  plataformasTransversalesEstado: CpatSiNo;
  noUtilizaAutenticacion: CpatSiNo;
  utilizaClaveUnica: CpatSiNo;
  utilizaClaveTributaria: CpatSiNo;
  autenticacionPropia: CpatSiNo;
  autenticacionDigitalFuncionarios: string;
  firmaElectronicaAvanzada: CpatFirmaElectronicaAvanzada;
  notificacionesPracticadas: CpatSiNo;
  tieneEtapaInicio: CpatSiNo;
  tieneEtapaInstruccion: CpatSiNo;
  tieneEtapaFinalizacion: CpatSiNo;
  medioNotificacionInicio: string;
  medioNotificacionInstruccion: string;
  medioNotificacionFinalizacion: string;
  datosDocumentosPoderOtrosOrganos: CpatSiNo;
  documentosNotariales: CpatSiNo;
  nombreDocumentoNotarialRelacionado: string;
  medioComunicacionesOficialesOrganos: CpatMedioComunicacionesOficialesOrganos;
}

export type CpatFieldName = keyof CpatFormValues;

export interface AdministrativeProcedure extends CpatFormValues {
  id: string;
  brechas: string[];
}
