# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Aluna AI** is a B2B platform that helps organizations optimize team composition and performance through progressive strength assessment integrated with respectful elements from Kogui ancestral wisdom. This repository is currently a Next.js Enterprise Boilerplate that will be enhanced to become the Aluna AI MVP.

**Current State**: Next.js 15 Enterprise Boilerplate with solid foundation
**Target State**: Full-featured progressive strength assessment platform with AI-powered reporting

## Common Development Commands

### Development & Build
```bash
# Start development server with Turbo
pnpm dev

# Build production version
pnpm build

# Start production server
pnpm start

# Analyze bundle size (with ANALYZE=true flag)
pnpm analyze
```

### Code Quality & Formatting
```bash
# Lint code with Next.js ESLint rules
pnpm lint

# Fix linting issues automatically
pnpm lint:fix

# Check code formatting with Prettier
pnpm prettier

# Fix formatting issues automatically
pnpm prettier:fix

# Format TypeScript, TSX, and Markdown files
pnpm format
```

### Testing
```bash
# Run unit tests with Vitest
pnpm test

# Run tests in watch mode for development
pnpm test:watch

# Open Vitest UI for interactive testing
pnpm test:ui

# Generate test coverage report
pnpm test:coverage

# Run end-to-end tests with Playwright (headless)
pnpm e2e:headless

# Run E2E tests with Playwright UI
pnpm e2e:ui
```

### Storybook Component Development
```bash
# Start Storybook development server on port 6006
pnpm storybook

# Build static Storybook for deployment
pnpm build-storybook

# Run Storybook tests
pnpm test-storybook
```

### Database Operations (Future Implementation)
```bash
# Generate database migration files
pnpm db:generate

# Push database schema changes to development
pnpm db:push

# Run database migrations
pnpm db:migrate

# Reset and seed development database
pnpm db:seed
```

### Analysis & Documentation
```bash
# Generate component coupling graph as SVG
pnpm coupling-graph

# View dependency relationships and complexity
madge --extensions js,jsx,ts,tsx ./ --image graph.svg
```

## High-Level Architecture

### Technology Stack
- **Framework**: Next.js 15 with App Router (Server Components by default)
- **Language**: TypeScript (strict mode) 
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI primitives
- **Database**: PostgreSQL with Drizzle ORM (planned)
- **AI Integration**: Vercel AI SDK + OpenAI (planned)
- **Testing**: Vitest + Playwright + React Testing Library
- **Infrastructure**: Vercel (serverless deployment)
- **Package Manager**: pnpm with Corepack

### Project Structure (Domain-Driven Design)

The project follows a domain-driven organization pattern where related functionality is grouped together:

```
app/                              # Next.js App Router
├── (auth)/                       # Authentication routes
├── (dashboard)/                  # Protected user routes
│   ├── assessment/               # Assessment domain
│   ├── profile/                  # User profiles
│   └── reports/                  # Individual reporting
├── (admin)/                      # Admin panel routes
├── api/                          # API routes and webhooks
└── layout.tsx, page.tsx          # Root layout and home

components/                       # Reusable UI components
├── ui/                          # Base shadcn/ui components
├── assessment/                  # Assessment-specific components
├── admin/                       # Admin-specific components
└── common/                      # Cross-domain components

lib/                             # Business logic and utilities
├── domains/                     # Domain-specific business logic
│   ├── assessment/              # Assessment engine
│   ├── micro-assessment/        # Progressive refinement
│   ├── reports/                 # AI-powered reporting
│   ├── organizations/           # Multi-tenant management
│   └── cultural/                # Kogui cultural integration
├── shared/                      # Cross-domain utilities
│   ├── ai/                      # AI integration layer
│   ├── auth/                    # Authentication helpers
│   └── utils/                   # General utilities
└── db/                          # Database layer (planned)
    ├── schema/                  # Drizzle schemas by domain
    ├── migrations/              # Database migrations
    └── queries/                 # Complex queries
```

### Key Architectural Patterns

**Server-First Architecture**: Leverages Next.js App Router with Server Components for optimal performance. Client Components (`'use client'`) are used only when necessary for interactivity.

**Domain Boundaries**: Clear separation between assessment logic, reporting, user management, and cultural integration to maintain clean architecture as the platform grows.

**Progressive Enhancement**: The assessment system is designed to work with an initial 40-item test that gets refined through weekly micro-assessments powered by AI.

**Multi-Tenant B2B**: Architecture supports organization-level data isolation while maintaining efficient queries for team analytics.

## Development Guidelines

### Code Organization
- **Domain-First**: Group related functionality together rather than by technical layer
- **Colocation**: Keep components, types, and business logic close to where they're used
- **TypeScript Strict**: All new code must pass strict TypeScript checks
- **Server Components**: Default to Server Components unless client-side interactivity is required

### Naming Conventions
- **Components**: PascalCase (`UserProfileCard`)
- **Files**: kebab-case (`user-profile-card.tsx`)
- **Variables/Functions**: camelCase (`calculateStrengths`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ASSESSMENT_TIME`)
- **Database Fields**: snake_case (`user_id`, `created_at`)

### Performance Standards
- Page load times must be ≤3 seconds for all major routes
- Maintain ≥80% test coverage for all new functionality
- Bundle size increases should be justified and monitored

### AI Integration Patterns
When implementing AI features:
- Use Vercel AI SDK with OpenAI provider
- Implement proper error handling and fallbacks
- Cache AI responses when possible to reduce costs
- Design prompts to be culturally sensitive and scientifically valid

### Cultural Integration Requirements
- All cultural elements must be validated with Kogui cultural advisors
- Respectful integration that adds value rather than appropriation
- Document cultural reasoning and validation process
- Maintain authenticity while ensuring accessibility

## Business Context

### MVP Goals
Transform the current enterprise boilerplate into a functioning strength assessment platform that enables:
1. 40-item initial strength assessment (≤15 minutes completion time)
2. AI-powered weekly micro-assessments for profile refinement  
3. Personalized reporting with Kogui cultural narratives
4. B2B admin dashboards for team optimization insights
5. Export capabilities (PDF/CSV/Markdown) for organizational use

### Success Metrics
- ≥60% completion rate for initial assessments
- ≥25% DAU/WAU retention during pilot phase
- ≥70% inter-rater reliability with strength assessment experts
- ≥40% NPS among pilot users
- ≥10% pilot-to-paid conversion rate within 90 days

### Target Users
- **Primary**: Startups and SMEs (10-200 employees) in LATAM
- **Secondary**: Organizational coaches and HR consultants
- **Use Case**: Reduce turnover, improve team composition, enhance workplace culture

## Deployment & Operations

### Environment Setup
```bash
# Install dependencies using pnpm (required)
pnpm install

# Set up environment variables (copy from .env.example)
cp .env.example .env.local

# Start PostgreSQL with Docker (planned)
docker-compose up -d postgres

# Run database migrations (planned)
pnpm db:migrate
```

### Production Deployment
- **Platform**: Vercel with serverless functions
- **Database**: Vercel Postgres or managed PostgreSQL
- **AI Services**: OpenAI API with appropriate rate limits
- **Monitoring**: Built-in OpenTelemetry integration
- **Performance**: Lighthouse score optimization maintained

### Feature Flags & Rollout
The platform will use feature flags to manage pilot rollouts and gradual feature releases:
- Assessment engine can be tested independently
- AI features can be enabled per organization
- Cultural elements can be A/B tested for effectiveness

## Security & Compliance

### Data Protection
- User assessment data is encrypted at rest (AES-256)
- GDPR/LGPD compliance for LATAM market
- Audit logging for all administrative actions
- Role-based access control for multi-tenant data

### API Security
- Rate limiting on assessment endpoints
- Input validation with Zod schemas
- CORS policies for cross-origin requests
- Secure headers and HTTPS enforcement

## Troubleshooting

### Common Issues
- **Build failures**: Ensure pnpm is used, not npm or yarn
- **Type errors**: Run `pnpm lint` to identify TypeScript issues
- **Test failures**: Check that test database is properly seeded
- **Slow performance**: Use bundle analyzer to identify large imports

### Development Tools
- **VS Code Extensions**: Next.js, TypeScript, Tailwind CSS, ESLint
- **Browser DevTools**: React Developer Tools, Redux DevTools (if used)
- **Database Tools**: Drizzle Studio for schema visualization (planned)

## Important Notes

- This codebase prioritizes **enterprise-grade quality** over rapid prototyping
- All AI integrations must include **cost monitoring and fallback strategies**
- Cultural elements require **ongoing validation** with Kogui advisors
- The assessment methodology must maintain **scientific rigor** while being culturally respectful
- **Data privacy** is paramount given the sensitive nature of psychological assessments

---

*This WARP.md file should be updated as the project evolves from boilerplate to full Aluna AI platform. Keep it current with architectural decisions and development patterns.*
