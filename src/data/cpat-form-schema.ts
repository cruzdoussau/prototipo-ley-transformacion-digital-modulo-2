import {
  cpatAccesoExpedienteElectronicoOptions,
  cpatAreaResponsableMunicipalOptions,
  cpatDisponibilidadRealizacionOptions,
  cpatFirmaElectronicaAvanzadaOptions,
  cpatIngresoSolicitudesOptions,
  cpatMedioComunicacionesOficialesOrganosOptions,
  cpatNivelDigitalizacionOptions,
  cpatPagoAsociadoOptions,
  cpatProductoInstitucionalOptions,
  cpatSegmentoUsuariosOptions,
  cpatSiNoOptions,
  cpatTipoExpedienteOptions,
  cpatTipoInicioOptions,
  cpatTipoRegistroOptions,
  cpatTipoUsuarioOptions
} from "@/data/cpat-options";
import type { CpatFieldName, CpatFormValues } from "@/types/cpat.types";

export type CpatFieldInputType = "text" | "textarea" | "select" | "url" | "number";

export interface CpatFormField {
  name: CpatFieldName;
  label: string;
  inputType: CpatFieldInputType;
  options?: readonly string[];
  required?: boolean;
}

export interface CpatFormSection {
  title: string;
  fields: CpatFormField[];
}

export const cpatRequiredFields = [
  "nombreRegistro",
  "descripcionRegistro",
  "areaResponsableMunicipal",
  "cargoResponsable",
  "tipoInicio",
  "actoInicio",
  "actoTermino",
  "numeroLey"
] as const satisfies readonly CpatFieldName[];

export const cpatFormSchema: readonly CpatFormSection[] = [
  {
    title: "SECCIÓN 1: Identificación",
    fields: [
      {
        name: "tipoRegistro",
        label: "Tipo de registro",
        inputType: "select",
        options: cpatTipoRegistroOptions
      },
      { name: "nombreRegistro", label: "Nombre del registro", inputType: "text", required: true },
      {
        name: "descripcionRegistro",
        label: "Descripción del registro",
        inputType: "textarea",
        required: true
      },
      {
        name: "areaResponsableMunicipal",
        label: "Área responsable municipal",
        inputType: "select",
        options: cpatAreaResponsableMunicipalOptions,
        required: true
      },
      {
        name: "cargoResponsable",
        label: "Cargo del o la responsable",
        inputType: "text",
        required: true
      },
      {
        name: "tipoInicio",
        label: "Tipo de inicio",
        inputType: "select",
        options: cpatTipoInicioOptions,
        required: true
      },
      { name: "actoInicio", label: "Acto de inicio", inputType: "text", required: true },
      { name: "actoTermino", label: "Acto de término", inputType: "text", required: true },
      {
        name: "productoInstitucional",
        label: "Producto institucional",
        inputType: "select",
        options: cpatProductoInstitucionalOptions
      }
    ]
  },
  {
    title: "SECCIÓN 2: Marco normativo y usuarios",
    fields: [
      { name: "numeroLey", label: "Número Ley", inputType: "text", required: true },
      { name: "urlLeyChile", label: "URL LeyChile", inputType: "url" },
      {
        name: "pagoAsociado",
        label: "Pago asociado",
        inputType: "select",
        options: cpatPagoAsociadoOptions
      },
      {
        name: "tipoUsuario",
        label: "Tipo de usuario(a)",
        inputType: "select",
        options: cpatTipoUsuarioOptions
      },
      {
        name: "segmentoUsuarios",
        label: "Segmento de usuarios(as)",
        inputType: "select",
        options: cpatSegmentoUsuariosOptions
      },
      {
        name: "disponibilidadRealizacion",
        label: "Disponibilidad para su realización",
        inputType: "select",
        options: cpatDisponibilidadRealizacionOptions
      }
    ]
  },
  {
    title: "SECCIÓN 3: Soporte electrónico",
    fields: [
      {
        name: "nivelDigitalizacion",
        label: "Nivel de digitalización",
        inputType: "select",
        options: cpatNivelDigitalizacionOptions
      },
      {
        name: "ingresoSolicitudes",
        label: "Ingreso de solicitudes",
        inputType: "select",
        options: cpatIngresoSolicitudesOptions
      },
      { name: "canalDigital", label: "Canal digital", inputType: "select", options: cpatSiNoOptions },
      {
        name: "canalPresencial",
        label: "Canal presencial",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "canalTelefonico",
        label: "Canal telefónico",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "modulosAutoatencion",
        label: "Módulos de autoatención",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "tipoExpediente",
        label: "Tipo de expediente",
        inputType: "select",
        options: cpatTipoExpedienteOptions
      },
      {
        name: "accesoExpedienteElectronico",
        label: "Acceso al expediente electrónico",
        inputType: "select",
        options: cpatAccesoExpedienteElectronicoOptions
      },
      { name: "urlInicio", label: "URL del inicio", inputType: "url" },
      {
        name: "fichaChileAtiendeRelacionada",
        label: "Ficha ChileAtiende relacionada",
        inputType: "select",
        options: cpatSiNoOptions
      },
      { name: "urlFichaChileAtiende", label: "URL ficha ChileAtiende", inputType: "url" },
      { name: "numeroPlataformas", label: "Número de plataformas", inputType: "number" },
      { name: "alcancePlataformas", label: "Alcance de plataformas", inputType: "textarea" },
      {
        name: "utilizaSimpleSaas",
        label: "Utiliza SIMPLE Saas",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "utilizaSimpleOnPremise",
        label: "Utiliza SIMPLE On premise",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "plataformaDesarrolladaInstitucion",
        label: "Plataforma desarrollada por la institución",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "plataformaProvistaExternamente",
        label: "Plataforma provista externamente",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "plataformasTransversalesEstado",
        label: "Plataformas transversales del Estado",
        inputType: "select",
        options: cpatSiNoOptions
      }
    ]
  },
  {
    title: "SECCIÓN 4: Identidad digital, firma y notificaciones",
    fields: [
      {
        name: "noUtilizaAutenticacion",
        label: "No utiliza autenticación",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "utilizaClaveUnica",
        label: "Utiliza ClaveÚnica",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "utilizaClaveTributaria",
        label: "Utiliza Clave Tributaria",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "autenticacionPropia",
        label: "Autenticación propia",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "autenticacionDigitalFuncionarios",
        label: "Autenticación digital funcionarios",
        inputType: "text"
      },
      {
        name: "firmaElectronicaAvanzada",
        label: "Firma electrónica avanzada",
        inputType: "select",
        options: cpatFirmaElectronicaAvanzadaOptions
      },
      {
        name: "notificacionesPracticadas",
        label: "Notificaciones practicadas",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "tieneEtapaInicio",
        label: "Tiene etapa inicio",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "tieneEtapaInstruccion",
        label: "Tiene etapa instrucción",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "tieneEtapaFinalizacion",
        label: "Tiene etapa finalización",
        inputType: "select",
        options: cpatSiNoOptions
      },
      { name: "medioNotificacionInicio", label: "Medio notificación inicio", inputType: "text" },
      {
        name: "medioNotificacionInstruccion",
        label: "Medio notificación instrucción",
        inputType: "text"
      },
      {
        name: "medioNotificacionFinalizacion",
        label: "Medio notificación finalización",
        inputType: "text"
      }
    ]
  },
  {
    title: "SECCIÓN 5: Datos, documentos y comunicaciones oficiales",
    fields: [
      {
        name: "datosDocumentosPoderOtrosOrganos",
        label: "Datos/documentos en poder de otros órganos",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "documentosNotariales",
        label: "Documento(s) notarial(es)",
        inputType: "select",
        options: cpatSiNoOptions
      },
      {
        name: "nombreDocumentoNotarialRelacionado",
        label: "Nombre documento notarial relacionado",
        inputType: "text"
      },
      {
        name: "medioComunicacionesOficialesOrganos",
        label: "Medio de comunicaciones oficiales entre órganos",
        inputType: "select",
        options: cpatMedioComunicacionesOficialesOrganosOptions
      }
    ]
  }
];

export function buildInitialCpatFormValues(): CpatFormValues {
  const values = {} as Record<CpatFieldName, string>;

  cpatFormSchema.forEach((section) => {
    section.fields.forEach((field) => {
      values[field.name] = field.options?.[0] ?? "";
    });
  });

  return values as unknown as CpatFormValues;
}
