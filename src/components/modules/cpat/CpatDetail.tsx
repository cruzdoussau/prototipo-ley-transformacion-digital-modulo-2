import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cpatFormSchema } from "@/data/cpat-form-schema";
import type { AdministrativeProcedure } from "@/types/cpat.types";

interface CpatDetailProps {
  procedure: AdministrativeProcedure;
}

export function CpatDetail({ procedure }: CpatDetailProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="info">{procedure.tipoRegistro}</Badge>
        <Badge tone="neutral">{procedure.nivelDigitalizacion}</Badge>
        <Badge tone={procedure.pagoAsociado === "No" ? "neutral" : "warning"}>
          {`Pago asociado: ${procedure.pagoAsociado}`}
        </Badge>
      </div>

      {cpatFormSchema.map((section) => (
        <Card key={section.title} title={section.title}>
          <dl className="grid gap-3 text-sm md:grid-cols-2">
            {section.fields.map((field) => (
              <div key={field.name} className="rounded-lg bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {field.label}
                </dt>
                <dd className="mt-1 whitespace-pre-wrap font-medium text-slate-800">
                  {procedure[field.name] || "Sin información"}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      ))}

      {procedure.brechas.length > 0 && (
        <Card title="Brechas derivadas">
          <ul className="space-y-2 text-sm text-slate-700">
            {procedure.brechas.map((brecha) => (
              <li key={brecha} className="rounded-lg bg-rose-50 p-3 text-rose-700">
                {brecha}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
