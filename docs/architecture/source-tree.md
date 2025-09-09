---
title: "Aluna AI — Source Tree"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview

Esta guía describe la estructura de carpetas y archivos del proyecto Aluna AI, alineada con el PRD y la arquitectura técnica. Sirve como referencia para navegación, onboarding y mantenibilidad.

## Estructura Principal

```text
app/
  (auth)/login/
  (dashboard)/assessment/initial/
  (dashboard)/assessment/micro/
  (dashboard)/assessment/results/
  (dashboard)/profile/
  (dashboard)/reports/
  (admin)/dashboard/
  (admin)/organizations/
  (admin)/users/
  (admin)/reports/
  (admin)/settings/
  api/auth/
  api/assessment/
  api/micro-assessment/
  api/reports/
  api/ai/
components/
  ui/
  assessment/
  admin/
  common/
lib/
  domains/assessment/
  domains/micro-assessment/
  domains/reports/
  domains/organizations/
  domains/users/
  domains/cultural/
  shared/ai/
  shared/auth/
  shared/email/
  shared/utils/
  db/schema/
  db/migrations/
  db/seeds/
  db/queries/
hooks/
types/
config/
docs/
  api/
  deployment/
  cultural/
  architecture/
```

## Principios de Organización

- **Por dominio de negocio:** Cada dominio (assessment, reports, users, etc.) tiene su propia carpeta con tipos, servicios y validaciones.
- **Colocation:** Componentes, lógica y tipos relacionados están cerca entre sí.
- **Escalabilidad:** Estructura preparada para crecimiento sin refactorización mayor.
- **Mantenibilidad:** Fácil localización de código por contexto de negocio.
- **Reutilización:** Componentes y utilidades compartidas claramente identificadas.

## Notas

- Actualiza este documento si la estructura cambia o se agregan nuevos dominios.
- Mantén la estructura alineada con los estándares definidos en coding-standards.md y tech-stack.md.

## Referencias

- [docs/architecture/coding-standards.md](./coding-standards.md)
- [docs/architecture/tech-stack.md](./tech-stack.md)
- [docs/architecture.md](../architecture.md)
