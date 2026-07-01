# AgentClinic Tech Stack

## Runtime & Language

- **Runtime:** Node.js (v18+)
- **Language:** TypeScript with strict mode (`strict: true`)
- **Module System:** ESM (ECMAScript Modules)

## Framework & Server

- **Framework:** Hono
  - Lightweight, TypeScript-first
  - Built-in support for server-side JSX rendering
  - Middleware ecosystem for extensibility
  - Excellent developer experience with strong typing

## Development Tools

- **Package Manager:** npm
- **TypeScript Compiler:** tsc
  - Target: ES2020
  - Strict mode enabled
  - Full source maps for debugging

- **Dev Server Runner:** tsx
  - Direct TypeScript execution for development
  - No build step required during development
  - Hot reload support

## Testing & Validation

- **Test Framework:** Vitest
  - Unit and integration test runner
  - Compatible with Jest API for ease of migration
  - Fast test execution
  - Built-in coverage reporting
  - ESM-first design

- **Test Scripts:**
  - `npm run test` - Run all tests
  - `npm run test:watch` - Run tests in watch mode
  - `npm run test:coverage` - Generate coverage reports

## Styling & Responsive Design

### CSS Strategy
- **CSS:** Plain CSS (no preprocessor)
  - Maintainable and framework-agnostic
  - No build step required for CSS
  - Served as external file for performance
  - Full semantic HTML for accessibility

### Responsive Design Principles
- **Mobile-First Approach:**
  - Base styles optimized for mobile devices (< 480px width)
  - Progressive enhancement for larger screens
  - Touch-friendly interface (minimum 44px tap targets)
  
- **Breakpoints:**
  - **Mobile:** 0px - 479px (base styles, vertical layout)
  - **Tablet:** 480px - 767px (medium adjustments, transitional layout)
  - **Desktop:** 768px+ (full layout, horizontal arrangements)
  - **Large Desktop:** 1024px+ (extended layouts, max-width constraints)

- **Responsive Features:**
  - Flexible layouts using Flexbox
  - Fluid typography with rem units (scales with base font-size)
  - Responsive spacing using relative units
  - CSS media queries for targeted adjustments
  - Flexible images and SVGs
  - Viewport meta tag for mobile browsers

- **CSS Units:**
  - `rem` for typography and spacing (relative to root font-size)
  - `%` for widths and flexible layouts
  - `vh`/`vw` for viewport-relative sizing
  - Avoid fixed pixel widths where possible

- **Layout Techniques:**
  - Flexbox for component layouts
  - CSS Grid for complex layouts (future phases)
  - Box-sizing: border-box for predictable sizing
  - Max-width containers for content constraint

## Build & Production

- **Production Build:** TypeScript Compiler (tsc)
  - Compiles to JavaScript in `dist/` directory
  - Generates declaration files (.d.ts) for type exports
  - Source maps included for production debugging

## Database (Planned - Phase 3)

- **Database:** SQLite with better-sqlite3
  - Lightweight, file-based SQL database
  - Synchronous API for simplicity
  - No external database server required
  - Perfect for MVP and small-scale applications

## Code Quality

- **Code Formatter:** Prettier
  - Enforces consistent code style
  - Opinionated defaults for quick setup
  - Configuration in `.prettierrc`

- **Version Control:** Git
  - Full commit history with meaningful messages
  - Remote repository on GitHub
  - Feature branch workflow support

## Project Structure

```
src/
├── index.ts              # Application entry point, HTTP server setup
├── pages/                # Page components
│   └── Home.tsx         # Home page JSX component
├── components/           # Reusable components
│   ├── Layout.tsx       # Master layout wrapper
│   ├── Header.tsx       # Header component
│   ├── Main.tsx         # Main content wrapper
│   └── Footer.tsx       # Footer component
├── styles/               # Global styles
│   └── global.css       # CSS reset and base styles
└── __tests__/            # Test files (Vitest)
    ├── components.test.ts
    └── pages.test.ts

dist/                    # Compiled output (build artifact)
specs/                   # Project specifications
├── roadmap.md          # Phase tracking and status
├── tech-stack.md       # This file
└── 2026-07-01-hello-hono/
    ├── plan.md
    ├── requirements.md
    └── validation.md
```

## Development Workflow

1. **Development:** `npm run dev`
   - Runs `tsx src/index.ts`
   - Hot reload on file changes
   - TypeScript errors caught immediately

2. **Testing:** `npm run test`
   - Run all Vitest test suites
   - Watch mode: `npm run test:watch`
   - Coverage: `npm run test:coverage`

3. **Build:** `npm run build`
   - Compiles TypeScript to JavaScript
   - Output in `dist/` directory
   - Ready for production deployment

4. **Type Checking:** `npm run type-check`
   - Verify types without emitting files
   - Useful for CI/CD pipelines

## Design Principles

- **Spec-Driven Development:** All features start with detailed specifications
- **Type Safety:** TypeScript strict mode ensures compile-time safety
- **Simplicity:** Choose tools and libraries that are simple and maintainable
- **Progressive Enhancement:** Build features incrementally with clear phases
- **Code Quality:** Consistent style, meaningful tests, and clear documentation

## Future Considerations

- **Logging:** Winston or Pino for structured logging
- **API Documentation:** OpenAPI/Swagger for auto-generated API docs
- **Performance Monitoring:** Metrics and observability
- **Deployment:** Docker containerization and CI/CD automation
