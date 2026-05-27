"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { CpatForm } from "./CpatForm";
import { CpatTable } from "./CpatTable";
import { CpatDetail } from "./CpatDetail";
import type { AdministrativeProcedure } from "@/types/cpat.types";

interface CpatModuleProps {
  procedures: AdministrativeProcedure[];
  onAddProcedure: (procedure: AdministrativeProcedure) => void;
}

export function CpatModule({ procedures, onAddProcedure }: CpatModuleProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState<AdministrativeProcedure | null>(null);

  function addProcedure(procedure: AdministrativeProcedure) {
    onAddProcedure(procedure);
    setFormOpen(false);
  }

  return (
    <div className="space-y-5">
      <Card
        title="Catastro CPAT"
        description="Procedimientos administrativos levantados para diagnostico institucional."
        action={
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-civic px-4 py-2 text-sm font-semibold text-white"
          >
            <Plus className="h-4 w-4" />
            Nuevo registro CPAT
          </button>
        }
      >
        <CpatTable procedures={procedures} onView={setSelectedProcedure} />
      </Card>
      <Modal open={formOpen} title="Nuevo procedimiento administrativo" onClose={() => setFormOpen(false)}>
        <CpatForm onSubmit={addProcedure} />
      </Modal>
      <Modal
        open={Boolean(selectedProcedure)}
        title="Ficha completa CPAT"
        onClose={() => setSelectedProcedure(null)}
      >
        {selectedProcedure && <CpatDetail procedure={selectedProcedure} />}
      </Modal>
    </div>
  );
}
