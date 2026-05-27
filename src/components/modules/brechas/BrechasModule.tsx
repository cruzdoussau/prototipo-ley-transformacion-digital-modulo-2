import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type DataTableColumn } from "@/components/ui/DataTable";
import { summarizeGaps } from "@/lib/calculations";
import type { Gap } from "@/types/brechas.types";

interface BrechasModuleProps {
  gaps: Gap[];
}

export function BrechasModule({ gaps }: BrechasModuleProps) {
  const summary = summarizeGaps(gaps);
  const columns: DataTableColumn<Gap>[] = [
    { header: "Dimension", accessor: "dimension" },
    { header: "Subdimension", accessor: "subdimension" },
    { header: "Descripcion", accessor: "descripcion" },
    {
      header: "Prioridad",
      accessor: (gap) => (
        <Badge tone={gap.prioridadPreliminar === "Alta" ? "danger" : gap.prioridadPreliminar === "Media" ? "warning" : "success"}>
          {gap.prioridadPreliminar}
        </Badge>
      )
    },
    { header: "Fuente", accessor: "fuente" },
    {
      header: "Estado",
      accessor: (gap) => <Badge tone={gap.estado === "Cerrada" ? "success" : "info"}>{gap.estado}</Badge>
    }
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Alta prioridad">
          <p className="text-3xl font-bold text-rose-700">{summary.Alta}</p>
        </Card>
        <Card title="Prioridad media">
          <p className="text-3xl font-bold text-amber-700">{summary.Media}</p>
        </Card>
        <Card title="Prioridad baja">
          <p className="text-3xl font-bold text-emerald-700">{summary.Baja}</p>
        </Card>
      </div>
      <Card title="Consolidador de brechas" description="Brechas provenientes de CPAT, Calidad Web y Gestion de Datos.">
        <DataTable columns={columns} rows={gaps} getRowKey={(gap) => gap.id} />
      </Card>
    </div>
  );
}
