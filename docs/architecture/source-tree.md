---
title: "Aluna AI — Source Tree"
author: Andres (Tech)
date: 2025-09-09
version: v1.0
---

## Overview

Esta guía describe la estructura de carpetas y archivos del proyecto Aluna AI, siguiendo las mejores prácticas de Next.js 2025 y organización por dominios. Sirve como referencia para navegación, onboarding y mantenibilidad.

## Estructura Principal (Next.js 2025)

```text
app/                              # App Router (obligatorio)
  (auth)/                         # Route Group - agrupación sin URL
    login/
      page.tsx                    # Página de login
      loading.tsx                 # Loading UI
  (dashboard)/                    # Route Group protegido
    assessment/
      initial/
        page.tsx                  # Assessment inicial
      micro/
        page.tsx                  # Micro-assessments
      results/
        page.tsx                  # Resultados
    profile/
      page.tsx                    # Perfil de usuario
    reports/
      page.tsx                    # Reportes individuales
  (admin)/                        # Route Group admin
    dashboard/
      page.tsx                    # Dashboard admin
    organizations/
      page.tsx                    # Gestión org
    users/
      page.tsx                    # Gestión usuarios
    reports/
      page.tsx                    # Reportes admin
    settings/
      page.tsx                    # Configuración
  api/                            # Route Handlers
    auth/
      route.ts                    # Auth endpoints
    assessment/
      route.ts                    # Assessment API
    micro-assessment/
      route.ts                    # Micro-assessment API
    reports/
      route.ts                    # Reports API
    ai/
      route.ts                    # AI integration API
  layout.tsx                      # Root layout
  page.tsx                        # Home page
  loading.tsx                     # Global loading
  error.tsx                       # Global error
  not-found.tsx                   # 404 page

public/                           # Static assets
  images/
  icons/
  fonts/

components/                       # Shared UI components
  ui/                            # shadcn/ui base components
    button.tsx
    card.tsx
    input.tsx
    dialog.tsx
  assessment/                     # Assessment domain components
    question-card.tsx
    progress-indicator.tsx
    strength-display.tsx
    results-chart.tsx
  admin/                         # Admin domain components
    user-table.tsx
    analytics-chart.tsx
    invite-modal.tsx
    export-button.tsx
  common/                        # Cross-domain components
    header.tsx
    sidebar.tsx
    loading-spinner.tsx

lib/                             # Business logic & utilities
  domains/                       # Domain-specific logic
    assessment/
      types.ts                   # Assessment types & interfaces
      services.ts                # Assessment business logic
      scoring.ts                 # Scoring algorithms
      validations.ts             # Assessment validations
    micro-assessment/
      types.ts
      generator.ts               # AI-powered question generation
      scheduler.ts               # Weekly scheduling logic
      refinement.ts              # Profile refinement algorithms
    reports/
      types.ts
      generator.ts               # AI report generation
      exporters.ts               # PDF/CSV/MD export logic
      templates.ts               # Report templates
    organizations/
      types.ts
      services.ts                # Org management logic
      permissions.ts             # Role-based permissions
    users/
      types.ts
      services.ts                # User management
      profile.ts                 # Profile management
    cultural/
      types.ts
      narratives.ts              # Cultural narratives
      validation.ts              # Cultural validation helpers
  shared/                        # Cross-domain utilities
    ai/
      client.ts                  # Vercel AI SDK setup
      prompts.ts                 # AI prompts & templates
      providers.ts               # OpenAI provider config
    auth/
      config.ts                  # NextAuth config
      middleware.ts              # Auth middleware
      permissions.ts             # Permission helpers
    email/
      client.ts
      templates.ts
    utils/
      cn.ts                      # Tailwind class merger
      date.ts                    # Date utilities
      validation.ts              # Zod schemas
  db/                           # Database layer
    schema/                     # Drizzle schemas by domain
      users.ts                  # User & auth tables
      organizations.ts          # Organization tables
      assessments.ts            # Assessment data tables
      micro-assessments.ts      # Micro-assessment tables
      reports.ts                # Reports & exports tables
      index.ts                  # Schema exports
    migrations/                 # Database migrations
    seeds/                      # Development seed data
    connection.ts               # DB connection setup
    queries/                    # Complex queries by domain
      assessment.ts
      analytics.ts
      reports.ts

hooks/                          # Custom React hooks
  use-assessment.ts             # Assessment state management
  use-micro-assessment.ts       # Micro-assessment hooks
  use-reports.ts                # Reports data hooks
  use-auth.ts                   # Authentication hooks

types/                          # Global TypeScript types
  api.ts                        # API response types
  auth.ts                       # Authentication types
  global.ts                     # Global type definitions

config/                         # Configuration files
  constants.ts                  # App constants
  features.ts                   # Feature flags
  env.ts                        # Environment validation (T3 Env)

styles/                         # Global stylesheets
  globals.css                   # Global styles
  tailwind.css                  # Tailwind imports

docs/                          # Project documentation
  api/                         # API documentation
  deployment/                  # Deployment guides
  cultural/                    # Cultural integration docs
  architecture/                # Technical architecture
```

## Principios de Organización (Next.js 2025)

### App Router Structure
- **Route Groups:** `(auth)`, `(dashboard)`, `(admin)` agrupan rutas sin afectar URLs
- **Special Files:** `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- **Colocation:** Componentes específicos de ruta pueden ir dentro de carpetas de app
- **Private Folders:** Usar `_` para carpetas internas (ej: `_components`)

### Domain-Driven Design
- **Por dominio de negocio:** assessment, reports, users, organizations
- **Colocation:** Tipos, servicios y validaciones cerca de la lógica que los usa
- **Shared vs Specific:** Distinguir entre código compartido y específico de dominio
- **Boundaries:** Límites claros entre dominios para mantenibilidad

### Component Organization
- **UI Components:** Componentes base en `components/ui/` (shadcn/ui)
- **Domain Components:** Componentes específicos en `components/{domain}/`
- **Page Components:** Componentes grandes específicos de página en carpeta de ruta
- **Shared Components:** Componentes transversales en `components/common/`

### File Naming Conventions
- **Components File:** `kebab-case.tsx` (ej: `user-profile-card.tsx`)
- **Components:** `PascalCase` (ej: `export const UserProfileCard`)
- **Pages:** Siempre `page.tsx` en App Router
- **APIs:** Siempre `route.ts` para Route Handlers
- **Hooks:** `use-{name}.ts` (ej: `use-assessment.ts`)
- **Types:** `{domain}.ts` o `types.ts`
- **Configs:** `{purpose}.config.ts`

### Data Layer Organization
- **Schema:** Por dominio en `lib/db/schema/`
- **Queries:** Queries complejas en `lib/db/queries/`
- **Services:** Lógica de negocio en `lib/domains/{domain}/services.ts`
- **Validations:** Esquemas Zod en `lib/domains/{domain}/validations.ts`

## Mejores Prácticas Específicas

### Server vs Client Components
```typescript
// ✅ Server Component (por defecto)
// app/dashboard/page.tsx
export default async function DashboardPage() {
  const data = await fetchData(); // Server-side data fetching
  return <DashboardView data={data} />;
}

// ✅ Client Component (cuando necesario)
// components/assessment/question-card.tsx
'use client';
import { useState } from 'react';
export function QuestionCard() {
  const [answer, setAnswer] = useState('');
  // Interactividad del cliente
}
```

### API Route Handlers
```typescript
// ✅ app/api/assessment/route.ts
export async function GET(request: Request) {
  return Response.json({ data: 'assessment data' });
}

export async function POST(request: Request) {
  const body = await request.json();
  // Validar con Zod
  return Response.json({ success: true });
}
```

### Barrel Exports (index.ts)
```typescript
// ✅ lib/domains/assessment/index.ts
export * from './types';
export * from './services';
export * from './validations';

// ✅ components/ui/index.ts
export { Button } from './button';
export { Card } from './card';
export { Input } from './input';
```

## Reglas de Importación

### Absolute Imports
```typescript
// ✅ Usar paths absolutos configurados en tsconfig.json
import { Button } from '@/components/ui/button';
import { AssessmentService } from '@/lib/domains/assessment';
import { cn } from '@/lib/shared/utils';

// ❌ Evitar imports relativos largos
import { Button } from '../../../components/ui/button';
```

### Import Organization
```typescript
// ✅ Orden recomendado
// 1. React/Next imports
import { useState } from 'react';
import { NextRequest } from 'next/server';

// 2. External libraries
import { z } from 'zod';
import { clsx } from 'clsx';

// 3. Internal absolute imports
import { Button } from '@/components/ui/button';
import { AssessmentService } from '@/lib/domains/assessment';

// 4. Relative imports (solo cuando necesario)
import './styles.css';
```

## Referencias

- [docs/architecture/coding-standards.md](./coding-standards.md)
- [docs/architecture/tech-stack.md](./tech-stack.md)
- [docs/architecture.md](../architecture.md)
