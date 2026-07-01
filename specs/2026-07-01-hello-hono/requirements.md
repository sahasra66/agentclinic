# Requirements: Phase 1 — Hello Hono

## Scope

This phase establishes the foundation for AgentClinic: a working Hono server with TypeScript configuration that can be extended through later phases.

### In Scope
- Node.js + TypeScript + Hono project skeleton
- Single `/` route with a minimal home page (semantic HTML, "AgentClinic is open for business" message)
- Hono JSX component for the home page layout
- Development and production build tooling
- Type safety verification end-to-end

### Out of Scope
- Database setup (Phase 3)
- UI layout or styling (Phase 2)
- Any business logic beyond the single route
- Testing infrastructure (can come in hardening phase)

## Key Decisions

### Technology Choices
- **Framework**: Hono (lightweight, TypeScript-first, server-side JSX support for later phases)
- **Runtime**: Node.js with `tsx` for development (no build step needed, run TypeScript directly)
- **Language**: TypeScript with strict mode (`strict: true` in `tsconfig.json`)
- **Package Manager**: `npm` (standard, no strong opinion)

### Project Structure
```
.
├── src/
│   ├── index.ts              # Hono app entry point
│   └── pages/
│       └── home.tsx          # Home page JSX component
├── package.json
├── tsconfig.json
├── .gitignore
└── .prettierrc                # Optional: enforce consistent formatting
```

### Development Workflow
- **Dev**: `npm run dev` — runs `tsx src/index.ts` with hot-reload
- **Build**: `npm run build` — compiles TypeScript to JavaScript (output: `dist/`)
- **Type Check**: `tsc --noEmit` — verify types without emitting files

## Context & Rationale

AgentClinic is a course project demonstrating spec-driven development with AI coding agents. This first phase is intentionally minimal: a proof that the stack works, that TypeScript is configured correctly, and that the developer can run and modify the code confidently.

A minimal home page (not just a text response) serves multiple purposes:
- Demonstrates Hono JSX in action, the templating approach used throughout the project
- Creates a launchpad for future routes and navigation (Phase 2+)
- Shows the AgentClinic brand and purpose from the moment someone opens the app
- Proves the server can render semantic HTML with proper structure

Mary (stakeholder) requires TypeScript throughout; this phase confirms that requirement from day one.

Steve (stakeholder) wants modern browser support and clean code; the Hono JSX + plain CSS approach validates that vision.

## Success Criteria (Validation Covered Separately)

- The project compiles with `tsc` without errors
- The `/` route renders an HTML home page with semantic structure (`<html>`, `<head>`, `<body>`, `<header>`, `<main>`)
- The page displays "AgentClinic is open for business" prominently
- The page has a `<title>` tag set to "AgentClinic"
- The dev server runs without TypeScript errors
- Type checking works in the IDE (autocomplete, hover hints)
- Hono JSX component for the home page compiles and renders correctly
