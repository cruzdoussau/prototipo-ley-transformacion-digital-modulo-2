"use client";

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { buildQualityDimensions } from "@/data/calidad-web.data";
import { createId, validateRequiredFields } from "@/lib/validators";
import type { QualityEvaluation, QualityInstrumentType } from "@/types/calidad-web.types";

const instrumentTypes: QualityInstrumentType[] = ["Sitio Web", "Servicio Digital"];

interface QualityEvaluationFormProps {
  onSubmit: (evaluation: QualityEvaluation) => void;
}

const initialForm = {
  nombre: "",
  urlObjetivo: "",
  tipoInstrumento: "Sitio Web" as QualityInstrumentType,
  responsable: "",
  fecha: new Date().toISOString().slice(0, 10)
};

export function QualityEvaluationForm({ onSubmit }: QualityEvaluationFormProps) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateRequiredFields(form, ["nombre", "urlObjetivo", "responsable", "fecha"]);
    setErrors(validation.errors);

    if (!validation.valid) {
      return;
    }

    onSubmit({
      id: createId("quality"),
      ...form,
      dimensiones: buildQualityDimensions(form.tipoInstrumento)
    });
    setForm(initialForm);
  }

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={submitForm}>
      <FormField label="Nombre evaluacion" name="nombre" value={form.nombre} onChange={updateField} error={errors.nombre} />
      <FormField label="URL o servicio evaluado" name="urlObjetivo" value={form.urlObjetivo} onChange={updateField} error={errors.urlObjetivo} />
      <FormField label="Instrumento" name="tipoInstrumento" value={form.tipoInstrumento} onChange={updateField} as="select" options={instrumentTypes} />
      <FormField label="Responsable" name="responsable" value={form.responsable} onChange={updateField} error={errors.responsable} />
      <FormField label="Fecha" name="fecha" value={form.fecha} onChange={updateField} type="date" error={errors.fecha} />
      <div className="flex items-end justify-end">
        <button type="submit" className="rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white">
          Crear evaluacion
        </button>
      </div>
    </form>
  );
}
