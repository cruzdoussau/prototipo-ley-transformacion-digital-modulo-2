import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DataTable, type DataTableColumn } from "@/components/ui/DataTable";
import type { AdministrativeProcedure } from "@/types/cpat.types";

interface CpatTableProps {
  procedures: AdministrativeProcedure[];
  onView: (procedure: AdministrativeProcedure) => void;
}

export function CpatTable({ procedures, onView }: CpatTableProps) {
  const columns: DataTableColumn<AdministrativeProcedure>[] = [
    { header: "Nombre del registro", accessor: "nombreRegistro" },
    { header: "Área responsable municipal", accessor: "areaResponsableMunicipal" },
    { header: "Tipo de registro", accessor: "tipoRegistro" },
    { header: "Nivel de digitalización", accessor: "nivelDigitalizacion" },
    {
      header: "Pago asociado",
      accessor: (row) => <Badge tone={row.pagoAsociado === "No" ? "neutral" : "warning"}>{row.pagoAsociado}</Badge>
    },
    { header: "Tipo de usuario(a)", accessor: "tipoUsuario" },
    {
      header: "Acciones",
      accessor: (row) => (
        <button
          type="button"
          onClick={() => onView(row)}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Eye className="h-4 w-4" />
          Ver
        </button>
      )
    }
  ];

  return <DataTable columns={columns} rows={procedures} getRowKey={(row) => row.id} />;
}
