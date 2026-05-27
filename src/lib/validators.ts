export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateRequiredFields(
  values: Record<string, string>,
  fields: string[]
): ValidationResult {
  const errors = fields.reduce<Record<string, string>>((accumulator, field) => {
    if (!values[field]?.trim()) {
      accumulator[field] = "Este campo es obligatorio.";
    }

    return accumulator;
  }, {});

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export function isValidDateRange(startDate: string, endDate: string): boolean {
  if (!startDate || !endDate) {
    return true;
  }

  return new Date(startDate).getTime() <= new Date(endDate).getTime();
}

export function createId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}
