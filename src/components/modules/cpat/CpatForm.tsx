"use client";

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import {
  buildInitialCpatFormValues,
  cpatFormSchema,
  cpatRequiredFields
} from "@/data/cpat-form-schema";
import { createId, validateRequiredFields } from "@/lib/validators";
import type {
  AdministrativeProcedure,
  CpatFieldName,
  CpatFormValues
} from "@/types/cpat.types";

interface CpatFormProps {
  initialValues?: AdministrativeProcedure;
  onSubmit: (procedure: AdministrativeProcedure) => void;
}

function deriveCpatBrechas(values: CpatFormValues): string[] {
  const brechas: string[] = [];

  if (values.nivelDigitalizacion === "Nivel 0" || values.nivelDigitalizacion === "Nivel 1") {
    brechas.push("Nivel de digitalización bajo para la tramitación del registro.");
  }

  if (values.datosDocumentosPoderOtrosOrganos === "Sí") {
    brechas.push("Datos/documentos en poder de otros órganos requieren revisión de intercambio institucional.");
  }

  if (values.firmaElectronicaAvanzada === "No utiliza firma electrónica avanzada") {
    brechas.push("Firma electrónica avanzada pendiente para actos administrativos digitales.");
  }

  return brechas;
}

export function CpatForm({ initialValues, onSubmit }: CpatFormProps) {
  const [form, setForm] = useState<CpatFormValues>(
    initialValues ?? buildInitialCpatFormValues()
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const fieldName = event.target.name as CpatFieldName;
    const { value } = event.target;

    setForm((current) => ({
      ...current,
      [fieldName]: value
    }));
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationValues = cpatRequiredFields.reduce<Record<string, string>>(
      (accumulator, field) => {
        accumulator[field] = form[field];
        return accumulator;
      },
      {}
    );
    const validation = validateRequiredFields(validationValues, [...cpatRequiredFields]);
    setErrors(validation.errors);

    if (!validation.valid) {
      return;
    }

    onSubmit({
      ...form,
      id: initialValues?.id ?? createId("cpat"),
      brechas: deriveCpatBrechas(form)
    });

    if (!initialValues) {
      setForm(buildInitialCpatFormValues());
    }
  }

  return (
    <form className="space-y-6" onSubmit={submitForm}>
      {cpatFormSchema.map((section) => (
        <fieldset key={section.title} className="grid gap-4 md:grid-cols-2">
          <legend className="col-span-full text-sm font-semibold text-ink">{section.title}</legend>
          {section.fields.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              name={field.name}
              value={form[field.name]}
              onChange={updateField}
              error={errors[field.name]}
              as={field.inputType === "textarea" ? "textarea" : field.inputType === "select" ? "select" : "input"}
              type={field.inputType === "url" ? "url" : field.inputType === "number" ? "number" : "text"}
              options={field.options ? [...field.options] : undefined}
            />
          ))}
        </fieldset>
      ))}
      <div className="flex justify-end">
        <button type="submit" className="rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white">
          Guardar registro CPAT
        </button>
      </div>
    </form>
  );
}
