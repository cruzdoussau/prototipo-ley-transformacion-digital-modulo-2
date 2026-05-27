"use client";

import { BarChart3, ClipboardList, Database, FileStack, Gauge, Layers } from "lucide-react";
import { clsx } from "clsx";

export type AppSection = "dashboard" | "proceso" | "cpat" | "calidad-web" | "gestion-datos" | "brechas";

const navItems: Array<{ id: AppSection; label: string; icon: typeof Gauge }> = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "proceso", label: "Proceso", icon: ClipboardList },
  { id: "cpat", label: "CPAT", icon: FileStack },
  { id: "calidad-web", label: "Calidad Web", icon: BarChart3 },
  { id: "gestion-datos", label: "Gestion de Datos", icon: Database },
  { id: "brechas", label: "Brechas", icon: Layers }
];

interface SidebarProps {
  activeSection: AppSection;
  onChange: (section: AppSection) => void;
}

export function Sidebar({ activeSection, onChange }: SidebarProps) {
  return (
    <aside className="border-r border-slate-200 bg-white lg:min-h-screen lg:w-72">
      <div className="border-b border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-civic">Ley 21.180</p>
        <h1 className="mt-1 text-xl font-bold text-ink">Diagnostico TD Municipal</h1>
      </div>
      <nav className="flex gap-2 overflow-x-auto p-3 lg:block lg:space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={clsx(
                "flex min-w-fit items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition lg:w-full",
                active
                  ? "bg-civic text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-ink"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
