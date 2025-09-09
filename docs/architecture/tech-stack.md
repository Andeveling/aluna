---
title: "Aluna AI — Tech Stack"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview

El stack tecnológico de Aluna AI está optimizado para velocidad, escalabilidad y mantenibilidad, alineado con los requerimientos del PRD y las mejores prácticas enterprise.

## Core Stack

- **Frontend Framework:** Next.js 15 (App Router, React 19+)
- **Lenguaje:** TypeScript (strict mode), JavaScript ES2022+
- **UI:** Tailwind CSS v4, shadcn/ui
- **Testing:** Vitest, Playwright, React Testing Library
- **Storybook:** Para desarrollo y documentación de componentes
- **Base de Datos:** PostgreSQL (Docker en desarrollo), Drizzle ORM
- **Infraestructura:** Vercel (serverless, edge functions)
- **AI:** Vercel AI SDK, OpenAI (API)
- **Autenticación:** NextAuth.js (o JWT, según decisión final)
- **Observabilidad:** OpenTelemetry
- **Linting/Formatting:** ESLint, Prettier
- **CI/CD:** GitHub Actions, Vercel pipeline

## Integraciones Clave

- **Vercel AI SDK:** Integración serverless para generación de prompts y reportes IA
- **OpenAI:** Proveedor principal de modelos de lenguaje
- **Drizzle ORM:** ORM type-safe para PostgreSQL, migraciones y seeds
- **NextAuth.js:** Autenticación y autorización con soporte multi-rol
- **OpenTelemetry:** Trazabilidad y monitoreo de performance

## Herramientas de Desarrollo

- **VS Code** (recomendado)
- **Markdown All in One** y **Markdown Preview Mermaid Support** para documentación
- **Docker** para entorno de base de datos local
- **pnpm** para gestión de dependencias

## Estándares y Convenciones

- TypeScript strict mode obligatorio
- ESLint y Prettier para todo el código
- Convenciones de nomenclatura: Interfaces and Types PascalCase,  camelCase (variables), kebab-case (componentes), snake_case (DB), UPPER_SNAKE_CASE (constantes)
- Documentación con JSDoc y Markdown

## Referencias

- [docs/architecture.md](./architecture.md)
- [docs/prd.md](../prd.md)

Actualiza este documento si el stack evoluciona o se integran nuevas tecnologías clave.
