"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar, type AppSection } from "@/components/layout/Sidebar";
import { DashboardModule } from "@/components/modules/dashboard/DashboardModule";
import { ProcessModule } from "@/components/modules/proceso/ProcessModule";
import { CpatModule } from "@/components/modules/cpat/CpatModule";
import { CalidadWebModule } from "@/components/modules/calidad-web/CalidadWebModule";
import { GestionDatosModule } from "@/components/modules/gestion-datos/GestionDatosModule";
import { BrechasModule } from "@/components/modules/brechas/BrechasModule";
import { initialCpatProcedures } from "@/data/cpat.data";
import { initialQualityEvaluations } from "@/data/calidad-web.data";
import {
  initialDataManagementDimensions,
  initialManualGaps,
  initialProcess,
  initialTraceEvents
} from "@/data/gestion-datos.data";
import { calculateDimensionProgress } from "@/lib/calculations";
import type { AdministrativeProcedure } from "@/types/cpat.types";
import type { Gap } from "@/types/brechas.types";
import type { QualityEvaluation, QualityQuestion } from "@/types/calidad-web.types";
import type { DataManagementDimension } from "@/types/gestion-datos.types";
import type { DiagnosticProcess, TraceEvent } from "@/types/process.types";

export function DiagnosticWorkspace() {
  const [activeSection, setActiveSection] = useState<AppSection>("dashboard");
  const [process, setProcess] = useState<DiagnosticProcess>(initialProcess);
  const [procedures, setProcedures] = useState<AdministrativeProcedure[]>(initialCpatProcedures);
  const [evaluations, setEvaluations] = useState<QualityEvaluation[]>(initialQualityEvaluations);
  const [dataDimensions, setDataDimensions] = useState<DataManagementDimension[]>(initialDataManagementDimensions);
  const [traceEvents, setTraceEvents] = useState<TraceEvent[]>(initialTraceEvents);

  function addTrace(action: string, modulo: TraceEvent["modulo"]) {
    setTraceEvents((current) => [
      {
        id: `trace-${Date.now()}`,
        fecha: new Date().toISOString().slice(0, 10),
        accion: action,
        responsable: "Usuario prototipo",
        modulo
      },
      ...current
    ]);
  }

  const consolidatedGaps = useMemo<Gap[]>(() => {
    const cpatGaps = procedures.flatMap((procedure) =>
      procedure.brechas.map((gap, index) => ({
        id: `gap-${procedure.id}-${index}`,
        dimension: "CPAT",
        subdimension: procedure.nombreRegistro,
        descripcion: gap,
        prioridadPreliminar:
          procedure.nivelDigitalizacion === "Nivel 0" || procedure.nivelDigitalizacion === "Nivel 1"
            ? "Alta"
            : "Media",
        fuente: "CPAT",
        estado: "Abierta"
      } satisfies Gap))
    );

    const qualityGaps = evaluations.flatMap((evaluation) =>
      evaluation.dimensiones
        .map((dimension) => ({
          dimension,
          progress: calculateDimensionProgress(dimension)
        }))
        .filter(({ progress }) => progress < 50)
        .slice(0, 8)
        .map(({ dimension, progress }) => ({
          id: `gap-quality-${evaluation.id}-${dimension.id}`,
          dimension: "Calidad Web",
          subdimension: dimension.nombre,
          descripcion: `Cumplimiento de ${progress}% en ${evaluation.tipoInstrumento}; requiere revisión de preguntas imprescindibles y evidencia.`,
          prioridadPreliminar: progress < 30 ? "Alta" : "Media",
          fuente: "Calidad Web",
          estado: "Abierta"
        } satisfies Gap))
    );

    const dataGaps = dataDimensions
      .filter((dimension) => dimension.brechaDetectada.trim())
      .map((dimension) => ({
        id: `gap-${dimension.id}`,
        dimension: "Gestion de Datos",
        subdimension: dimension.dimension,
        descripcion: dimension.brechaDetectada,
        prioridadPreliminar: dimension.prioridadPreliminar,
        fuente: "Gestion de Datos",
        estado: "Abierta"
      } satisfies Gap));

    return [...initialManualGaps, ...cpatGaps, ...qualityGaps, ...dataGaps];
  }, [procedures, evaluations, dataDimensions]);

  function createProcess(nextProcess: DiagnosticProcess) {
    setProcess(nextProcess);
    addTrace("Proceso diagnostico vigente actualizado", "Proceso");
  }

  function addProcedure(procedure: AdministrativeProcedure) {
    setProcedures((current) => [procedure, ...current]);
    addTrace(`Registro CPAT ${procedure.nombreRegistro} agregado`, "CPAT");
  }

  function addEvaluation(evaluation: QualityEvaluation) {
    setEvaluations((current) => [evaluation, ...current]);
    addTrace(`Evaluacion ${evaluation.nombre} creada`, "Calidad Web");
  }

  function updateQualityQuestion(
    evaluationId: string,
    dimensionId: string,
    questionId: string,
    updates: Pick<QualityQuestion, "respuesta" | "observacionEvidencia">
  ) {
    setEvaluations((current) =>
      current.map((evaluation) =>
        evaluation.id !== evaluationId
          ? evaluation
          : {
              ...evaluation,
              dimensiones: evaluation.dimensiones.map((dimension) =>
                dimension.id !== dimensionId
                  ? dimension
                  : {
                      ...dimension,
                      preguntas: dimension.preguntas.map((question) =>
                        question.id === questionId ? { ...question, ...updates } : question
                      )
                    }
              )
            }
      )
    );
  }

  function updateDataDimension(nextDimension: DataManagementDimension) {
    setDataDimensions((current) =>
      current.map((dimension) => (dimension.id === nextDimension.id ? nextDimension : dimension))
    );
    addTrace(`Dimension ${nextDimension.dimension} actualizada`, "Gestion de Datos");
  }

  return (
    <div className="min-h-screen bg-paper text-slate-900 lg:flex">
      <Sidebar activeSection={activeSection} onChange={setActiveSection} />
      <div className="min-w-0 flex-1">
        <Header process={process} />
        <main className="mx-auto max-w-7xl p-4 sm:p-6">
          {activeSection === "dashboard" && (
            <DashboardModule
              process={process}
              procedures={procedures}
              evaluations={evaluations}
              dataDimensions={dataDimensions}
              gaps={consolidatedGaps}
              traceEvents={traceEvents}
            />
          )}
          {activeSection === "proceso" && <ProcessModule process={process} onCreateProcess={createProcess} />}
          {activeSection === "cpat" && <CpatModule procedures={procedures} onAddProcedure={addProcedure} />}
          {activeSection === "calidad-web" && (
            <CalidadWebModule
              evaluations={evaluations}
              onAddEvaluation={addEvaluation}
              onUpdateQuestion={updateQualityQuestion}
            />
          )}
          {activeSection === "gestion-datos" && (
            <GestionDatosModule dimensions={dataDimensions} onUpdateDimension={updateDataDimension} />
          )}
          {activeSection === "brechas" && <BrechasModule gaps={consolidatedGaps} />}
        </main>
      </div>
    </div>
  );
}
