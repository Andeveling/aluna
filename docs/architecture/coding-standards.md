---
title: "Aluna AI — Coding Standards"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview

Estos estándares de codificación aseguran calidad, consistencia y mantenibilidad en todo el código de Aluna AI. Todos los colaboradores deben seguir estas reglas y buenas prácticas.

## Reglas Generales

- **TypeScript strict mode** obligatorio en todo el proyecto
- **ESLint** y **Prettier** deben ejecutarse antes de cada commit
- **Convenciones de nombres**:
  - camelCase para variables y funciones
  - kebab-case para nombres de componentes y archivos React
  - snake_case para campos y tablas de base de datos
  - UPPER_SNAKE_CASE para constantes globales
- **Documentación**:
  - JSDoc en funciones, clases y lógica compleja
  - Markdown para documentación técnica y de producto
- **Commits**: Usar Conventional Commits
- **Tests**: Todo código nuevo debe tener tests unitarios y/o E2E
- **Imports**: Usar imports absolutos desde la raíz del proyecto
- **Evitar lógica en componentes de presentación**: Mantener lógica en hooks o servicios

## Estructura de Archivos

- Organizar por dominio de negocio (ver source-tree.md)
- Colocar tipos, servicios y validaciones cerca de la lógica que los usa
- Componentes UI genéricos en `components/ui/`, específicos por dominio en su carpeta

## Buenas Prácticas

- Mantener funciones puras y pequeñas
- Preferir composición sobre herencia
- Validar datos de entrada con Zod o validadores equivalentes
- Manejar errores explícitamente, nunca silenciar
- Usar async/await para código asíncrono
- No dejar código muerto ni comentarios obsoletos
- Revisar y actualizar la documentación técnica frecuentemente

## Ejemplo de Nomenclatura

```typescript
// Variable
const userName = "Andres";

// Componente React
export function UserProfileCard() { ... }
// Component FileName: user-profile-card.tsx

// Campo de base de datos
table.string('user_id')

// Constante global
const DEFAULT_TIMEOUT = 5000;
```

## Referencias

- [docs/architecture/tech-stack.md](./tech-stack.md)
- [docs/architecture/source-tree.md](./source-tree.md)

Actualiza este documento si cambian los estándares o se detectan nuevas mejores prácticas.
