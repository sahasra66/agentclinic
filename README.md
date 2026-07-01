# AgentClinic

A course project demonstrating spec-driven development with AI coding agents. Phases 1-2 establish a working Hono server with TypeScript configuration, layout components, styling, and comprehensive testing infrastructure.

## Tech Stack

- **Node.js** runtime with TypeScript (strict mode)
- **Hono** - lightweight TypeScript-first web framework with JSX support
- **tsx** - TypeScript execution for development (no build step)
- **Vitest** - Fast unit test framework with v8 coverage
- **CSS** - Plain CSS with responsive design
- **npm** for package management

## Project Structure

```
.
├── src/
│   ├── index.ts                 # Hono app entry point, HTTP server setup
│   ├── pages/
│   │   └── Home.tsx             # Home page JSX component
│   ├── components/
│   │   ├── Layout.tsx           # Master layout wrapper
│   │   ├── Header.tsx           # Header component
│   │   ├── Main.tsx             # Main content wrapper
│   │   └── Footer.tsx           # Footer component
│   ├── styles/
│   │   └── global.css           # Global CSS styling
│   └── __tests__/
│       └── components.test.ts   # Component tests (Vitest)
├── specs/
│   ├── roadmap.md               # Project phases and status
│   ├── tech-stack.md            # Technology choices and details
│   └── 2026-07-01-hello-hono/
│       ├── plan.md
│       ├── requirements.md
│       └── validation.md
├── dist/                        # Build output (generated)
├── package.json
├── tsconfig.json
├── vitest.config.ts             # Vitest configuration
├── .gitignore
├── .prettierrc
└── README.md
```

## Installation

```bash
npm install
```

## Development

Run the development server with:

```bash
npm run dev
```

The server will start on `http://localhost:3000`. The dev server automatically reloads when you make changes.

## Building for Production

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output is generated in the `dist/` directory.

## Type Checking

Verify types without emitting files:

```bash
npm run type-check
```

## Code Formatting

Format code with Prettier:

```bash
npm run format
```

## Testing

Run tests with Vitest:

```bash
npm run test              # Run all tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage reports
```

Tests are located in `src/__tests__/` and follow the `*.test.ts` naming convention. Sample tests for components are included.

**Test Results:**
- Test Framework: Vitest v1.0.0
- Environment: Node.js
- Coverage Provider: v8
- Sample Tests: 8 tests for Header, Footer, Layout, and CSS styling

## Available Routes

- `/` - Home page with "AgentClinic is open for business" message

## Features

- **Layout Architecture**: Reusable Header, Main, and Footer components
- **Semantic HTML**: Proper structure with `<header>`, `<main>`, `<footer>`, and `<title>` tags
- **Server-Side JSX**: Hono JSX components for dynamic page rendering
- **External CSS**: Global stylesheet with responsive design and mobile-first approach
- **TypeScript Strict Mode**: Full type safety end-to-end
- **Hot-Reload Development**: Instant feedback with `tsx` during development
- **Production Build**: Optimized compilation with `tsc` and source maps
- **Testing Framework**: Vitest with sample tests and coverage reporting
- **Development Scripts**: npm scripts for dev, build, test, and type-checking

## Project Status

- **Phase 1: Hello Hono** ✅ COMPLETE
  - Foundation with Hono, TypeScript, dev server
  
- **Phase 2: Layout & Styling** ✅ COMPLETE
  - Layout components and external CSS
  - Responsive design with mobile-first approach
  
- **Phase 3: Database Integration** 📋 PLANNED
  - SQLite with better-sqlite3
  - Data models and migrations

## Next Steps

Phase 3 will add database integration with better-sqlite3 for data persistence and API operations.
