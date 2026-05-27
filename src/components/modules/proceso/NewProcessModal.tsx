"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { FormField } from "@/components/ui/FormField";
import { createId, isValidDateRange, validateRequiredFields } from "@/lib/validators";
import type { DiagnosticProcess, DiagnosticStage } from "@/types/process.types";

const stages: DiagnosticStage[] = [
  "Preparacion",
  "Levantamiento",
  "Analisis",
  "Plan de accion",
  "Cierre"
];

const blankProcess: Omit<DiagnosticProcess, "id"> = {
  nombre: "",
  institucion: "",
  periodo: "2026",
  etapa: "Preparacion",
  comiteAsociado: "",
  fechaInicio: "",
  fechaCierreEstimada: "",
  objetivo: ""
};

interface NewProcessModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (process: DiagnosticProcess) => void;
}

export function NewProcessModal({ open, onClose, onCreate }: NewProcessModalProps) {
  const [form, setForm] = useState(blankProcess);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateRequiredFields(form, [
      "nombre",
      "institucion",
      "periodo",
      "comiteAsociado",
      "fechaInicio",
      "fechaCierreEstimada",
      "objetivo"
    ]);

    if (!isValidDateRange(form.fechaInicio, form.fechaCierreEstimada)) {
      validation.errors.fechaCierreEstimada = "La fecha de cierre debe ser posterior al inicio.";
      validation.valid = false;
    }

    setErrors(validation.errors);

    if (!validation.valid) {
      return;
    }

    onCreate({ ...form, id: createId("process") });
    setForm(blankProcess);
    onClose();
  }

  return (
    <Modal open={open} title="Nuevo proceso diagnostico" onClose={onClose}>
      <form className="space-y-5" onSubmit={submitForm}>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Nombre" name="nombre" value={form.nombre} onChange={updateField} error={errors.nombre} />
          <FormField label="Institucion" name="institucion" value={form.institucion} onChange={updateField} error={errors.institucion} />
          <FormField label="Periodo" name="periodo" value={form.periodo} onChange={updateField} error={errors.periodo} />
          <FormField label="Etapa" name="etapa" value={form.etapa} onChange={updateField} as="select" options={stages} />
          <FormField label="Comite asociado" name="comiteAsociado" value={form.comiteAsociado} onChange={updateField} error={errors.comiteAsociado} />
          <FormField label="Fecha inicio" name="fechaInicio" value={form.fechaInicio} onChange={updateField} type="date" error={errors.fechaInicio} />
          <FormField label="Fecha cierre estimada" name="fechaCierreEstimada" value={form.fechaCierreEstimada} onChange={updateField} type="date" error={errors.fechaCierreEstimada} />
        </div>
        <FormField label="Objetivo" name="objetivo" value={form.objetivo} onChange={updateField} as="textarea" error={errors.objetivo} />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700">
            Cancelar
          </button>
          <button type="submit" className="rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white">
            Crear proceso
          </button>
        </div>
      </form>
    </Modal>
  );
}
