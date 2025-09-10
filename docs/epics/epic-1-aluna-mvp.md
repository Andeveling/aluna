---
title: "Epic 1: Aluna AI MVP - Progressive Strength Assessment Platform"
author: Product Owner (Sarah)
date: 2025-09-10
status: Draft
---

## Epic 1: Aluna AI MVP - Progressive Strength Assessment Platform

**Meta del Epic:**
Transformar el Next.js Enterprise Boilerplate existente en una plataforma funcional de assessment de fortalezas que permita a empresas piloto descubrir fortalezas de equipos mediante metodología progresiva y generar reportes accionables con IA, validando el product-market fit en el segmento B2B LATAM.

**Requerimientos de Integración:**
- Mantener integridad del sistema existente mientras se añaden capacidades de assessment
- Asegurar compatibilidad con pipeline de deployment de Vercel
- Preservar estándares de calidad de código enterprise-grade durante toda la implementación

### Historias de Usuario (Stories)

#### Story 1.1: Database Schema and Authentication Foundation
- Esquemas Drizzle ORM para users, organizations, assessments, micro_assessments, reports
- Autenticación (NextAuth.js/JWT) con roles y protección de rutas
- Middleware de autorización B2B
- Migraciones, seeds y logging de auditoría

#### Story 1.2: Initial Strength Assessment Engine
- Assessment de 40 preguntas con progress indicator
- Algoritmo de scoring para Top 3 fortalezas
- Integración de narrativa Kogui
- Guardado en tiempo real y resultados personalizados

#### Story 1.3: AI-Powered Micro-Assessments System
- Micro-assessments semanales generados por IA
- Refinamiento de scores y analytics de engagement
- Notificaciones y visualización de evolución

#### Story 1.4: AI Report Generation and Export System
- Reportes individuales/equipo generados por IA
- Exportación PDF/CSV/Markdown
- Analytics de equipo y plantillas customizables

#### Story 1.5: Administrative Dashboard and User Management
- Dashboard admin para gestión de usuarios y analytics
- Invitaciones, onboarding y asignación de roles
- Monitoreo de progreso, alertas y backup/export de datos

---

**Criterios de Éxito:**
- MVP funcional E2E: usuarios completan assessments, reciben insights, admins exportan reportes
- Validación de integración en cada story
- Sprints de 2 semanas por story, MVP en 6-8 semanas

**Stakeholders:**
- Product Owner: John (PM)
- Project Manager: John (PM)
- Desarrollador Lead: Andres (Tech)
- QA/Testing: (por asignar)
- UI/UX Designer: (por asignar)
- Stakeholder Piloto: Empresa Piloto LATAM
- Asesor Cultural: Kogui Advisor

---

> Este epic abarca todas las funcionalidades core del MVP de Aluna AI y debe ser entregado como sistema cohesivo para validación de mercado.
