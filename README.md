# Diagnostico TD Municipal

Prototipo web fullstack-ready para acompanar el Diagnostico Estrategico Institucional de la Ley 21.180.

## Stack

- Next.js 14 App Router
- React
- TypeScript estricto
- Tailwind CSS
- Vitest para smoke tests de calculo

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicacion queda disponible en `http://localhost:3000`.

## Validacion

```bash
npm run lint
npm run test
npm run build
```

## Modulos incluidos

- Dashboard ejecutivo con avance CPAT, Calidad Web y Gestion de Datos.
- Proceso diagnostico con creacion de proceso vigente.
- CPAT con tabla, formulario por secciones y ficha completa.
- Calidad Web con instrumentos de Sitios Web y Servicios Digitales, 20 dimensiones y preguntas editables.
- Gestion de Datos con registro de madurez, brecha y prioridad.
- Consolidador de Brechas desde CPAT, Calidad Web y Gestion de Datos.

## Estructura

```text
src/
  app/
  components/
    layout/
    ui/
    modules/
  data/
  lib/
  types/
tests/
```

Los datos mock viven en `src/data` y estan estructurados para reemplazarse luego por servicios de backend.
