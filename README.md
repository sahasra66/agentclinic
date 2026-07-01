# AgentClinic

A course project demonstrating spec-driven development with AI coding agents. Phases 1-2 establish a working Hono server with TypeScript configuration, **fully responsive layout components**, mobile-first styling, and comprehensive testing infrastructure.

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

Tests are located in `src/__tests__/` and follow the `*.test.ts` naming convention.

**Test Results:**
- Test Framework: Vitest v1.0.0
- Environment: Node.js
- Coverage Provider: v8
- **Total Tests: 174** across 5 test suites
- **Test Coverage:**
  - Components: 8 tests
  - Layout: 30 tests
  - Pages: 31 tests
  - Styling & Responsive Design: 60 tests
  - Application & Server: 45 tests

### Testing Responsive Design

Tests include validation of:
- Media query breakpoints (480px, 768px, 1024px)
- Typography scaling across device sizes
- Touch-friendly tap target sizing (44px minimum)
- Flexbox layout responsiveness
- Mobile-first base styles

**Manual Testing:**
1. Open `http://localhost:3000` on your phone (< 480px width)
2. Resize browser to tablet size (480px - 767px)
3. Test on desktop (768px+)
4. Verify no horizontal scrolling at any size
5. Check that text remains readable at all sizes
6. Confirm links are easily tappable on mobile

## Available Routes

- `/` - Home page with "AgentClinic is open for business" message

## Features

### Core Features
- **Layout Architecture**: Reusable Header, Main, and Footer components
- **Semantic HTML**: Proper structure with `<header>`, `<main>`, `<footer>`, and `<title>` tags
- **Server-Side JSX**: Hono JSX components for dynamic page rendering
- **TypeScript Strict Mode**: Full type safety end-to-end
- **Hot-Reload Development**: Instant feedback with `tsx` during development
- **Production Build**: Optimized compilation with `tsc` and source maps
- **Testing Framework**: Vitest with 174+ tests and coverage reporting

### Responsive Design
- **Mobile-First Approach**: Base styles optimized for mobile devices
- **Multiple Breakpoints**:
  - Mobile: 0px - 479px (compact layout)
  - Tablet: 480px - 767px (medium layout)
  - Desktop: 768px+ (full layout)
  - Large Desktop: 1024px+ (extended layout)
- **Flexible Layouts**: Flexbox-based responsive components
- **Fluid Typography**: rem-based font sizing that scales with viewport
- **Touch-Friendly**: 44px+ minimum tap targets for mobile interaction
- **Responsive Spacing**: Dynamic padding and margins at different breakpoints
- **Viewport Configuration**: Proper meta tags for mobile browser scaling
- **External CSS**: Global stylesheet with responsive design patterns

### Development Features
- **Development Scripts**: npm scripts for dev, build, test, and type-checking
- **CSS Breakpoints**: Media queries for tablet and desktop optimization
- **Print Styles**: Optimized styles for printing

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
