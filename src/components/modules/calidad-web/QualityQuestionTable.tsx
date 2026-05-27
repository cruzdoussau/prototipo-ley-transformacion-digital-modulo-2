"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type {
  QualityQuestion,
  QuestionAnswer,
  QuestionPriority
} from "@/types/calidad-web.types";

const answers: QuestionAnswer[] = ["Por responder", "Sí", "No", "No aplica"];
const priorities: Array<QuestionPriority | "Todas"> = [
  "Todas",
  "Imprescindible",
  "Esperable",
  "Deseable"
];
const answerFilters: Array<QuestionAnswer | "Todas"> = [
  "Todas",
  "Por responder",
  "Sí",
  "No",
  "No aplica"
];

interface QualityQuestionTableProps {
  questions: QualityQuestion[];
  onUpdateQuestion: (
    questionId: string,
    updates: Pick<QualityQuestion, "respuesta" | "observacionEvidencia">
  ) => void;
}

export function QualityQuestionTable({ questions, onUpdateQuestion }: QualityQuestionTableProps) {
  const [priorityFilter, setPriorityFilter] = useState<QuestionPriority | "Todas">("Todas");
  const [answerFilter, setAnswerFilter] = useState<QuestionAnswer | "Todas">("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return questions.filter((question) => {
      const matchesPriority =
        priorityFilter === "Todas" || question.prioridad === priorityFilter;
      const matchesAnswer = answerFilter === "Todas" || question.respuesta === answerFilter;
      const matchesSearch =
        !normalizedSearch ||
        `${question.codigo} ${question.indicador} ${question.descripcion} ${question.preguntaChequeo}`
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesPriority && matchesAnswer && matchesSearch;
    });
  }, [answerFilter, priorityFilter, questions, searchTerm]);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
        <label className="relative block text-sm font-medium text-slate-700">
          Buscar
          <Search className="pointer-events-none absolute bottom-2.5 left-3 h-4 w-4 text-slate-400" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-civic focus:ring-2 focus:ring-civic/20"
            placeholder="Código, indicador o texto de pregunta"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Prioridad
          <select
            value={priorityFilter}
            onChange={(event) => setPriorityFilter(event.target.value as QuestionPriority | "Todas")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Respuesta
          <select
            value={answerFilter}
            onChange={(event) => setAnswerFilter(event.target.value as QuestionAnswer | "Todas")}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            {answerFilters.map((answer) => (
              <option key={answer} value={answer}>
                {answer}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-xs text-slate-500">
        Mostrando {filteredQuestions.length} de {questions.length} preguntas de chequeo.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-[1180px] divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {[
                "Código",
                "Indicador",
                "Prioridad",
                "Pregunta de chequeo",
                "Ejemplo o ayuda",
                "Respuesta",
                "Observación/evidencia"
              ].map((header) => (
                <th
                  key={header}
                  className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredQuestions.map((question) => (
              <tr key={question.id} className="align-top">
                <td className="whitespace-nowrap px-3 py-3 font-semibold text-slate-800">
                  {question.codigo}
                </td>
                <td className="px-3 py-3">
                  <p className="font-medium text-slate-800">{question.indicador}</p>
                  <p className="mt-1 text-xs text-slate-500">{question.descripcion}</p>
                </td>
                <td className="px-3 py-3">
                  <Badge
                    tone={
                      question.prioridad === "Imprescindible"
                        ? "danger"
                        : question.prioridad === "Esperable"
                          ? "warning"
                          : "neutral"
                    }
                  >
                    {question.prioridad}
                  </Badge>
                </td>
                <td className="px-3 py-3 text-slate-600">{question.preguntaChequeo}</td>
                <td className="px-3 py-3 text-xs text-slate-500">{question.ejemploAyuda}</td>
                <td className="px-3 py-3">
                  <select
                    value={question.respuesta}
                    onChange={(event) =>
                      onUpdateQuestion(question.id, {
                        respuesta: event.target.value as QuestionAnswer,
                        observacionEvidencia: question.observacionEvidencia
                      })
                    }
                    className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                  >
                    {answers.map((answer) => (
                      <option key={answer} value={answer}>
                        {answer}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-3">
                  <textarea
                    value={question.observacionEvidencia}
                    onChange={(event) =>
                      onUpdateQuestion(question.id, {
                        respuesta: question.respuesta,
                        observacionEvidencia: event.target.value
                      })
                    }
                    rows={2}
                    className="w-64 rounded-md border border-slate-300 px-2 py-1 text-sm"
                  />
                </td>
              </tr>
            ))}
            {filteredQuestions.length === 0 && (
              <tr>
                <td colSpan={7} className="px-3 py-8 text-center text-slate-500">
                  No hay preguntas que coincidan con los filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
