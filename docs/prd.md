# Aluna AI Brownfield Enhancement PRD

## Project Analysis and Context

### Existing Project Overview

**Fuente de Análisis**: Análisis fresco basado en IDE de tu Next.js Enterprise Boilerplate

**Estado Actual del Proyecto**: 
Tu proyecto es actualmente un Next.js Enterprise Boilerplate con una base sólida que incluye:
- Next.js 15 con estructura App Directory
- Configuración TypeScript con configuraciones estrictas
- Tailwind CSS v4 para estilos
- Suite de testing (Vitest, Playwright, React Testing Library)
- Workflows de GitHub Actions
- Storybook para desarrollo de componentes
- Endpoint de health check en `/api/health`

### Available Documentation Analysis

**Documentación Disponible**: ✅
- ✅ Documentación del Tech Stack (vía README.md)
- ⚠️ Source Tree/Arquitectura (estructura básica visible)
- ✅ Estándares de Código (ESLint, Prettier configurados)
- ⚠️ Documentación de API (mínima - solo endpoint health)
- ❌ Documentación de APIs Externas
- ❌ Guías de UX/UI  
- ❌ Documentación de Deuda Técnica
- ✅ Otros: Project Brief (requerimientos de negocio completos)

### Enhancement Scope Definition

**Tipo de Enhancement**: ✅ Adición de Nueva Funcionalidad (Mayor)
- Construcción completa del MVP de Aluna AI sobre el boilerplate existente
- Test inicial de fortalezas (40 ítems)
- Sistema de micro-assessments
- Reporting con IA
- Panel administrativo
- Autenticación y perfiles de usuario

**Descripción del Enhancement**: 
Transformar el Next.js Enterprise Boilerplate existente en el MVP de Aluna AI - una plataforma B2B que ayuda a empresas a optimizar la composición de equipos mediante assessments progresivos de fortalezas integrados con sabiduría ancestral Kogui e insights con IA.

**Evaluación de Impacto**: ✅ Impacto Mayor (cambios arquitectónicos requeridos)
- Implementación completa de lógica de aplicación
- Diseño e implementación de esquema de base de datos
- Integración de IA con OpenAI/Vercel AI SDK
- Sistema de autenticación
- Capacidades multi-usuario administrativas
- Nueva librería de componentes para assessments

### Goals and Background Context

**Objetivos**:
- Construir MVP funcional de la plataforma de assessment de fortalezas Aluna AI
- Implementar metodología de testing progresivo (test inicial + micro-assessments)
- Crear sistema de reporting personalizado con IA
- Desarrollar panel administrativo B2B para gestión de equipos
- Mantener estándares de calidad de código de nivel enterprise

**Contexto de Fondo**: 
Este enhancement transforma tu enterprise boilerplate en el MVP de Aluna AI descrito en tu comprehensive project brief. La plataforma aborda el problema crítico de composición aleatoria de equipos en organizaciones proporcionando descubrimiento científico de fortalezas integrado con elementos respetuosos de la cosmovisión Kogui. El MVP necesita validar el modelo de negocio con empresas piloto mientras mantiene la base técnica de alta calidad de tu boilerplate.

**Change Log**:
| Change | Date | Version | Description | Author |
|--------|------|---------|-------------|---------|
| Initial PRD Creation | 2025-09-08 | v1.0 | Brownfield enhancement PRD for Aluna AI MVP | John (PM) |
| Estructura ES/EN | 2025-09-08 | v1.1 | Títulos en inglés, descripciones en español | John (PM) |

## Requirements

### Functional Requirements

**FR1**: La plataforma implementará un assessment de fortalezas científicamente validado de 40 ítems que identifica las Top 3 fortalezas personales en ≤15 minutos, integrado con elementos narrativos culturales Kogui respetuosos.

**FR2**: El sistema proporcionará un dashboard de resultados personalizado que muestra las Top 3 fortalezas con descripciones, puntuaciones de confianza y recomendaciones iniciales generadas por IA basadas en perfiles individuales.

**FR3**: La plataforma mantendrá perfiles de usuario que rastreen el historial de assessments, progreso de micro-assessments y evolución de puntuaciones de confianza para cada fortaleza a lo largo del tiempo.

**FR4**: El sistema implementará un motor de micro-assessments progresivos que presenta 3-6 preguntas contextuales semanales para refinar perfiles de fortalezas usando selección de preguntas con IA.

**FR5**: La plataforma generará reportes personalizados usando IA (Vercel AI SDK + OpenAI) que proporcionen insights individuales y recomendaciones de optimización de equipos.

**FR6**: El sistema habilitará funcionalidad de exportación de reportes (PDF/CSV/Markdown) para administradores empresariales para acceder a datos individuales y agregados de equipos con métricas accionables.

**FR7**: La plataforma proporcionará un panel administrativo completo para gestión de pilotos, invitación de usuarios, monitoreo de progreso y exportación de analytics de equipos.

**FR8**: El sistema integrará autenticación y autorización segura protegiendo datos sensibles de assessment mientras habilita patrones de acceso B2B multi-tenant.

### Non-Functional Requirements

**NFR1**: El enhancement debe mantener las características de performance existentes de Next.js 15 con tiempos de carga de página ≤3 segundos para todas las pantallas principales de assessment y resultados.

**NFR2**: El sistema mantendrá ≥80% de cobertura de tests a través de toda la nueva funcionalidad usando la infraestructura de testing existente de Vitest y Playwright.

**NFR3**: La plataforma debe manejar uso concurrente de ≥150 usuarios durante la fase piloto sin degradar performance, aprovechando las capacidades de escalado serverless de Vercel.

**NFR4**: El sistema asegurará cumplimiento de privacidad de datos (GDPR/LGPD) con encriptación AES-256 para datos sensibles de assessment y logging de auditoría para cuentas empresariales.

**NFR5**: La plataforma debe mantener compatibilidad con el pipeline de deployment existente del enterprise boilerplate y workflows CI/CD en Vercel.

**NFR6**: El enhancement preservará la configuración existente de TypeScript strict mode y estándares de calidad de código ESLint/Prettier a través de todas las nuevas implementaciones.

### Compatibility Requirements

**CR1**: **Compatibilidad de API Existente**: Nuevas API routes y server actions deben seguir los patrones establecidos en el endpoint `/api/health` existente y mantener convenciones RESTful.

**CR2**: **Compatibilidad de Esquema de Base de Datos**: Todas las nuevas tablas de base de datos deben implementarse usando los patrones existentes de Drizzle ORM con migraciones apropiadas y type safety.

**CR3**: **Consistencia UI/UX**: Nuevos componentes de assessment deben integrarse con la configuración existente de Tailwind CSS v4 y seguir patrones de componentes establecidos de los ejemplos Button/Tooltip.

**CR4**: **Compatibilidad de Integración**: La integración de IA debe utilizar Vercel AI SDK siguiendo patrones serverless establecidos y mantener compatibilidad con procesos de build y deployment existentes.

## Technical Constraints and Integration Requirements

### Existing Technology Stack

**Lenguajes**: TypeScript (strict mode), JavaScript ES2022+  
**Frameworks**: Next.js 15 (App Router), React 19+  
**Base de Datos**: PostgreSQL con Drizzle ORM  
**Infraestructura**: Vercel (serverless, edge functions)  
**Dependencias Externas**: Vercel AI SDK, OpenAI provider, TailwindCSS v4, Shadcn/ui
**Docker**: Usar Docker para la db de PostgreSQL en desarrollo.

### Integration Approach

**Estrategia de Integración de Base de Datos**: Usar Drizzle ORM para nuevas tablas (users, assessments, micro_assessments, reports, organizations) con migraciones tipo-seguras y relaciones optimizadas para queries de analytics.

**Estrategia de Integración de API**: Implementar server actions para operaciones complejas de assessment y API routes para endpoints públicos, manteniendo patrones RESTful establecidos y middleware de autenticación.

**Estrategia de Integración de Frontend**: Extender componentes existentes (Button, Tooltip) con nueva librería de assessment components, utilizando Tailwind CSS v4 y siguiendo patrones de accesibilidad establecidos.

**Estrategia de Integración de Testing**: Extender suites de Vitest existentes para lógica de negocio y Playwright para flujos E2E de assessment, manteniendo ≥80% de cobertura.

### Code Organization and Standards

**Enfoque de Estructura de Archivos**: 
```
app/
  assessment/          # Rutas de assessment
  admin/              # Panel administrativo
  api/               # API routes existentes + nuevas
components/
  assessment/         # Componentes de assessment
  admin/             # Componentes de admin
lib/
  assessment/         # Lógica de negocio
  ai/                # Integración IA
  db/                # Esquemas Drizzle
```

**Convenciones de Nomenclatura**: Mantener camelCase para variables, kebab-case para componentes, snake_case para campos de base de datos siguiendo estándares existentes.

**Estándares de Código**: Preservar configuraciones existentes de ESLint/Prettier, TypeScript strict mode, y convenciones de server actions/API routes.

**Estándares de Documentación**: Documentar todas las nuevas APIs con JSDoc, mantener README actualizado, crear documentación específica de assessment en `/docs`.

### Deployment and Operations

**Integración de Proceso de Build**: Extender scripts de build existentes para incluir validaciones de esquema de IA y migración de base de datos pre-deployment.

**Estrategia de Deployment**: Utilizar pipeline de Vercel existente, implementar feature flags para funcionalidades de assessment durante piloto, rollback automatizado en caso de errores.

**Monitoreo y Logging**: Integrar con sistema de observabilidad existente (OpenTelemetry), añadir métricas específicas de assessment (completitud, tiempo, accuracy), logging de auditoría para datos B2B.

**Gestión de Configuración**: Usar variables de entorno existentes para configuración de IA (API keys), configuración de base de datos, feature flags de piloto.

### Risk Assessment and Mitigation

**Riesgos Técnicos**: 
- Latencia de IA en generación de reportes → Implementar caching y fallbacks
- Escalabilidad de queries complejos de analytics → Optimización de índices DB y queries
- Integración cultural Kogui → Validación con asesores culturales antes de implementación

**Riesgos de Integración**:
- Conflictos con infraestructura existente → Testing exhaustivo en staging environment
- Performance degradation → Monitoring continuo y optimización iterativa
- Compatibility issues con stack existente → Validación en cada sprint

**Riesgos de Deployment**:
- Data migration failures → Scripts de rollback y backup automatizado
- Production bugs en assessment crítico → Feature flags y rollback inmediato
- AI API downtime → Circuit breakers y modo degradado

**Estrategias de Mitigación**:
- CI/CD robusto con tests automatizados y validación de performance
- Monitoring en tiempo real con alertas para métricas críticas de assessment
- Backup y recovery procedures para datos de assessment empresarial
- Documentación completa de troubleshooting y runbooks operacionales

## Constraints and Assumptions

### Constraints

**Presupuesto**: Presupuesto bootstrap limitado para desarrollo inicial y piloto, optimización de costos de IA/infraestructura.

**Timeline**: MVP en 6-8 semanas, piloto operativo en 3 meses, desarrollo iterativo con sprints de 2 semanas.

**Recursos**: Equipo inicial de 1 desarrollador, posible apoyo en UI/UX y QA según disponibilidad.

**Técnico**: Dependencia de servicios cloud (Vercel, OpenAI) para escalabilidad, limitaciones de integración con sistemas legacy de empresas piloto.

### Key Assumptions

- Empresas en LATAM están dispuestas a invertir en herramientas de desarrollo organizacional durante período de prueba
- La diferenciación cultural será percibida como valor agregado, no como riesgo por empresas target
- Test progresivo generará mayor engagement que evaluaciones tradicionales estáticas
- Asesores culturales Kogui estarán disponibles para colaboración remunerada y validación
- Regulaciones de privacidad en LATAM permitirán el modelo de datos propuesto con consentimiento adecuado
- Mercado B2B tendrá mayor tracción inicial que B2C para validación y monetización
- Infrastructure de Vercel puede manejar carga de IA para 150+ usuarios concurrentes sin issues de performance

## Epic and Story Structure

### Epic Approach

**Decisión de Estructura de Epic**: Epic único comprensivo para el MVP de Aluna AI porque todas las funcionalidades están interconectadas y deben entregarse como sistema cohesivo para validación de mercado. La naturaleza del assessment progresivo requiere que todas las piezas (test inicial, micro-assessments, IA, reporting, admin) funcionen juntas desde el primer piloto.

**Rationale**: Un enfoque de epic único minimiza riesgos de integración y permite validación holística del value proposition con empresas piloto, mientras que múltiples epics fragmentarían la experiencia y retrasarían feedback crítico de mercado.

## Epic 1: Aluna AI MVP - Progressive Strength Assessment Platform

**Meta del Epic**: Transformar el Next.js Enterprise Boilerplate existente en una plataforma funcional de assessment de fortalezas que permita a empresas piloto descubrir fortalezas de equipos mediante metodología progresiva y generar reportes accionables con IA, validando el product-market fit en el segmento B2B LATAM.

**Requerimientos de Integración**: Mantener integridad del sistema existente mientras se añaden capacidades de assessment, asegurar compatibilidad con pipeline de deployment de Vercel, preservar estándares de calidad de código enterprise-grade durante toda la implementación.

### Story 1.1: Database Schema and Authentication Foundation

Como desarrollador del sistema,
Quiero establecer el esquema de base de datos y sistema de autenticación básico,
Para que los usuarios puedan registrarse de forma segura y sus datos de assessment se almacenen de manera estructurada.

#### Acceptance Criteria

1. **AC1**: Implementar esquemas de Drizzle ORM para tablas: users, organizations, assessments, micro_assessments, reports con relaciones apropiadas y constraints de integridad.

2. **AC2**: Configurar sistema de autenticación (NextAuth.js o JWT) con roles (user, admin, org_admin) y protección de rutas sensibles.

3. **AC3**: Crear middleware de autorización que valide permisos B2B (usuarios solo ven sus datos, admins ven datos de su organización).

4. **AC4**: Implementar migraciones de base de datos con rollback capability y scripts de seed para desarrollo.

5. **AC5**: Añadir logging de auditoría para operaciones sensibles (creación de usuarios, acceso a datos de assessment).

#### Integration Verification

**IV1**: Verificar que el endpoint `/api/health` existente sigue funcionando sin modificaciones.

**IV2**: Confirmar que el pipeline de deployment de Vercel maneja las migraciones de DB sin interrupciones.

**IV3**: Validar que las configuraciones de TypeScript strict mode se mantienen para todos los nuevos tipos de DB.

### Story 1.2: Initial Strength Assessment Engine

Como usuario de la plataforma,
Quiero completar un assessment inicial de fortalezas de 40 preguntas en menos de 15 minutos,
Para que pueda descubrir mis Top 3 fortalezas con narrativa cultural Kogui respetuosa.

#### Acceptance Criteria

1. **AC1**: Crear componente de assessment progresivo que presente 40 preguntas validadas con navegación fluida y progress indicator.

2. **AC2**: Implementar algoritmo de scoring que identifique Top 3 fortalezas con niveles de confianza basados en respuestas.

3. **AC3**: Integrar elementos narrativos culturales Kogui de manera respetuosa en descripciones de fortalezas (validado con asesores culturales).

4. **AC4**: Guardar respuestas de assessment en tiempo real para evitar pérdida de datos en caso de interrupción.

5. **AC5**: Generar resultados personalizados con descripciones detalladas de fortalezas y recomendaciones iniciales.

#### Integration Verification

**IV1**: Confirmar que el assessment funciona en componentes existentes de Storybook sin conflictos.

**IV2**: Verificar que el diseño es responsive y compatible con Tailwind CSS v4 configuration existente.

**IV3**: Validar que el tiempo de carga se mantiene ≤3 segundos siguiendo performance standards establecidos.

### Story 1.3: AI-Powered Micro-Assessments System

Como usuario que ha completado el assessment inicial,
Quiero recibir micro-assessments semanales de 3-6 preguntas contextualles,
Para que mi perfil de fortalezas se refine progresivamente y sea más preciso over time.

#### Acceptance Criteria

1. **AC1**: Implementar sistema que genere micro-assessments semanales usando Vercel AI SDK con prompts contextuales basados en perfil actual.

2. **AC2**: Crear algoritmo de refinamiento que actualice scores de confianza de fortalezas basado en respuestas de micro-assessments.

3. **AC3**: Desarrollar notificación system (email/in-app) para recordar micro-assessments pendientes.

4. **AC4**: Implementar analytics de engagement que rastree completion rates y tiempo de respuesta.

5. **AC5**: Añadir visualization de evolución de fortalezas over time en perfil de usuario.

#### Integration Verification

**IV1**: Verificar que las llamadas a IA no afectan performance de otras funcionalidades del sistema.

**IV2**: Confirmar que el scheduling de micro-assessments es compatible con infrastructure serverless de Vercel.

**IV3**: Validar que los datos generados por IA se almacenan correctamente usando esquemas de Drizzle existentes.

### Story 1.4: AI Report Generation and Export System

Como administrador de empresa piloto,
Quiero generar y exportar reportes individuales y de equipo con insights de IA,
Para que pueda tomar decisiones informadas sobre composición y optimización de equipos.

#### Acceptance Criteria

1. **AC1**: Crear sistema de generación de reportes que use IA para analizar datos de assessment y generar insights personalizados.

2. **AC2**: Implementar exportación en múltiples formatos (PDF, CSV, Markdown) con branding profesional.

3. **AC3**: Desarrollar analytics agregados de equipo que identifiquen complementariedades y gaps en fortalezas.

4. **AC4**: Añadir recomendaciones de IA para optimización de equipos basadas en profiles individuales.

5. **AC5**: Crear sistema de templates de reportes customizables para diferentes tipos de análisis organizacional.

#### Integration Verification

**IV1**: Confirmar que la generación de reportes no interfiere con proceso de build existente.

**IV2**: Verificar que los reportes exportados mantienen calidad visual consistent con branding del boilerplate.

**IV3**: Validar que el sistema de export funciona correctamente en production environment de Vercel.

### Story 1.5: Administrative Dashboard and User Management

Como administrador de organización,
Quiero gestionar usuarios, monitorear progreso de assessments y acceder a analytics de equipo,
Para que pueda administrar efectivamente el piloto y demostrar ROI a stakeholders.

#### Acceptance Criteria

1. **AC1**: Crear dashboard administrativo con overview de usuarios, completion rates, y engagement metrics.

2. **AC2**: Implementar sistema de invitación de usuarios con onboarding automático y role assignment.

3. **AC3**: Desarrollar herramientas de monitoreo de progreso con alerts para usuarios inactive o assessments incomplete.

4. **AC4**: Añadir analytics de equipo con visualizations de distribución de fortalezas y team composition insights.

5. **AC5**: Crear sistema de backup y export de todos los datos organizacionales para compliance y análisis.

#### Integration Verification

**IV1**: Verificar que el panel admin es accesible solo para usuarios autorizados y mantiene security standards.

**IV2**: Confirmar que las visualizations funcionan correctamente con data structures existentes.

**IV3**: Validar que el sistema de monitoreo no genera excessive server load o performance issues.

---

## 🎯 PRD COMPLETION SUMMARY

**Epic Structure**: Epic único comprensivo con 5 stories secuenciales que minimizan riesgo a sistema existente
**Timeline Estimado**: 6-8 semanas para MVP completo con sprints de 2 semanas por story
**Success Criteria**: Sistema E2E funcional donde usuarios completan assessments → reciben insights → admins exportan reportes
**Validation Checkpoint**: Cada story incluye integration verification para mantener integridad del boilerplate existente

Este PRD está diseñado específicamente para tu brownfield enhancement, respetando la arquitectura existente mientras añade las capacidades core de Aluna AI para validación con empresas piloto.
