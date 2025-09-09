---
title: "Aluna AI — Coding Standards"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview


Este documento define los estándares y prácticas de codificación para los proyectos de Aluna AI. Todo el equipo debe adherirse a estas guías para mantener calidad, consistencia y mantenibilidad.


## Core Requirements

### Development Environment
- Habilitar TypeScript strict mode en todos los proyectos
- Configurar ESLint y Prettier con hooks de pre-commit
- Usar Conventional Commits para los mensajes de commit

### Naming Conventions
- `camelCase` para variables y funciones
- `kebab-case` para componentes React y archivos
- `snake_case` para campos y tablas de base de datos
- `UPPER_SNAKE_CASE` para constantes globales

### Code Organization
- Estructura por dominio de negocio (ver source-tree.md)
- Colocar tipos, servicios y validaciones cerca de la lógica relacionada
- Componentes UI genéricos en `components/ui/`
- Componentes específicos de dominio en su carpeta respectiva

### Code Quality
- Mantener funciones puras y enfocadas
- Preferir composición sobre herencia
- Validar entradas con Zod o validadores equivalentes
- Manejar errores explícitamente, nunca silenciar
- Usar async/await para operaciones asíncronas
- Eliminar código muerto y comentarios obsoletos
- Mantener documentación técnica actualizada

### Testing
- Incluir tests unitarios para código nuevo
- Añadir tests E2E para rutas críticas
- Mantener un estándar mínimo de cobertura de tests (especificar %)

### Documentation
- Añadir comentarios JSDoc en funciones, clases y lógica compleja
- Documentar en Markdown
- Documentar decisiones de arquitectura y actualizaciones

## Ejemplo de Nomenclatura

```typescript
// Variables y funciones
const userName = "user123";
function calculateTotal() {}

// Componente React y archivo
// user-profile-card.tsx
export function UserProfileCard() {}

// Campo de base de datos
table.string('user_id')

// Constante global
const MAX_RETRY_ATTEMPTS = 3;
```

## Project Structure
- Seguir la especificación de árbol fuente en `docs/architecture/source-tree.md`
- Usar imports absolutos desde la raíz del proyecto
- Separar lógica de negocio de componentes de presentación
- Organizar utilidades compartidas en carpetas dedicadas

## Referencias
- Arquitectura: [docs/architecture/tech-stack.md](./tech-stack.md)
- Estructura del proyecto: [docs/architecture/source-tree.md](./source-tree.md)
- Guía de testing: [docs/testing/standards.md]

Revisar y actualizar este documento trimestralmente o al introducir cambios significativos en las prácticas de desarrollo.
