# Requirements: Phase 1 & 2 — Hello Hono with Responsive Design

## Scope

This phase establishes the foundation for AgentClinic: a working Hono server with TypeScript configuration and fully responsive web design that can be extended through later phases.

### In Scope
- Node.js + TypeScript + Hono project skeleton
- Single `/` route with a minimal home page (semantic HTML, "AgentClinic is open for business" message)
- Hono JSX component for the home page layout
- Development and production build tooling
- Type safety verification end-to-end
- Testing framework setup (Vitest) with sample tests
- Test scripts and CI/CD ready test commands
- Layout components (Header, Main, Footer) with Hono JSX
- External CSS file for styling with **mobile-first responsive design**
- **Responsive Design Requirements:**
  - Mobile-first approach (base styles optimized for mobile)
  - Media queries for tablet (480px+) and desktop (768px+) breakpoints
  - Flexible layouts using Flexbox
  - Fluid typography with rem units
  - Touch-friendly interface (44px+ minimum tap targets)
  - Responsive spacing and padding
  - Viewport meta tag for mobile browsers

### Out of Scope
- Database setup (Phase 3)
- Advanced testing (fixtures, mocking, integration tests beyond samples)
- End-to-end testing or Selenium tests
- Any business logic beyond the single route

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
│   ├── index.ts                 # Hono app entry point
│   ├── pages/
│   │   └── Home.tsx             # Home page JSX component
│   ├── components/
│   │   ├── Layout.tsx           # Master layout component
│   │   ├── Header.tsx           # Header component
│   │   ├── Main.tsx             # Main content wrapper
│   │   └── Footer.tsx           # Footer component
│   ├── styles/
│   │   └── global.css           # Global CSS styling
│   └── __tests__/
│       └── components.test.ts   # Component tests
├── dist/                         # Build output
├── package.json
├── tsconfig.json
├── vitest.config.ts             # Vitest configuration
├── .gitignore
├── .prettierrc                   # Code formatter config
└── README.md                     # Project documentation
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
