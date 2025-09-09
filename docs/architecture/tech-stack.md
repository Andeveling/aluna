---
title: "Aluna AI — Tech Stack"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview

El stack tecnológico de Aluna AI está optimizado para velocidad, escalabilidad y mantenibilidad, siguiendo las mejores prácticas de Next.js 2025 y estándares enterprise.

## Core Stack

### Frontend & Framework
- **Next.js 15** con App Router (obligatorio para nuevos proyectos)
- **React 19+** como librería de UI
- **TypeScript** en modo strict (obligatorio)
- **Tailwind CSS v4** para estilos
- **shadcn/ui** para componentes de UI

### Development & Testing
- **Vitest** para tests unitarios
- **Playwright** para tests E2E
- **React Testing Library** para tests de componentes
- **Storybook** para desarrollo y documentación de componentes
- **ESLint & Prettier** para linting y formateo

### Backend & Data
- **PostgreSQL** como base de datos (Docker en desarrollo)
- **Drizzle ORM** para modelado type-safe de datos
- **Vercel** para infraestructura serverless
- **OpenTelemetry** para observabilidad

### AI & Authentication
- **Vercel AI SDK** para integración de IA
- **OpenAI API** como proveedor principal de LLM
- **NextAuth.js** para autenticación y autorización

### DevOps & Deployment
- **GitHub Actions** para CI/CD
- **Vercel** para deployment y edge functions
- **pnpm** para gestión de dependencias

## Arquitectura Next.js 2025

### App Router (Obligatorio)
- Usar directorio `app/` para todas las rutas
- Server Components por defecto
- Client Components solo cuando sea necesario (`'use client'`)
- **NUNCA** usar `next/dynamic` con `{ ssr: false }` en Server Components

### Componentes Best Practices
- **Server Components:** Para data fetching, lógica pesada, UI no-interactiva
- **Client Components:** Para interactividad, estado, APIs del navegador
- **Naming:** PascalCase para componentes, camelCase para hooks
- **Location:** Componentes compartidos en `components/`, específicos en rutas

### API Routes (Route Handlers)
- Ubicar en `app/api/` (ej: `app/api/users/route.ts`)
- Exportar funciones async nombradas por verbo HTTP (`GET`, `POST`, etc.)
- Usar Web `Request`/`Response` APIs
- Validar siempre input con `zod` o similar

### Performance & Security
- Optimización built-in de Image y Font
- Usar Suspense y loading states para datos async
- Mantener lógica en Server Components
- Sanitizar input de usuario
- Headers HTTP seguros en producción

## Herramientas de Desarrollo

- **VS Code** (recomendado) con extensiones Next.js
- **Markdown All in One** y **Markdown Preview Mermaid Support**
- **Docker** para PostgreSQL en desarrollo
- **pnpm** para gestión de dependencias (más rápido que npm)

## Convenciones de Nombres (Next.js 2025)

### Archivos y Carpetas
- **Carpetas:** `kebab-case` (ej: `user-profile/`)
- **Componentes:** `PascalCase` (ej: `UserCard.tsx`)
- **Utilities/Hooks:** `camelCase` (ej: `useUser.ts`)
- **Assets:** `kebab-case` (ej: `logo-dark.svg`)

### Variables y Tipos
- **Variables/Funciones:** `camelCase`
- **Tipos/Interfaces:** `PascalCase`
- **Constantes:** `UPPER_SNAKE_CASE`
- **DB Fields:** `snake_case`

### Route Groups y Private Folders
- **Route Groups:** `(auth)`, `(dashboard)` - agrupan sin afectar URL
- **Private Folders:** `_internal` - excluidos del routing

## Reglas Críticas

### ❌ Evitar
```typescript
// NUNCA en Server Components
const dynamic = require('next/dynamic');
const ClientComponent = dynamic(() => import('./Client'), { ssr: false });
```

### ✅ Correcto
```typescript
// Server Component
import ClientComponent from './client-component';

export default function ServerPage() {
  return <ClientComponent />; // Client Component importado directamente
}
```

## Referencias

- [docs/architecture.md](./architecture.md)
- [docs/prd.md](../prd.md)

Actualiza este documento si el stack evoluciona o se integran nuevas tecnologías clave.
