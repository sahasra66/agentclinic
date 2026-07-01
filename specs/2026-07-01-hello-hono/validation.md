# Validation: Phase 1 — Hello Hono

## How to Know This Phase Succeeded

### 1. Project Builds Successfully
**Test**: Run `npm run build`
- **Expected**: Compiles without errors; outputs to `dist/` or configured output directory
- **Failure**: TypeScript or missing dependency errors

### 2. Dev Server Runs
**Test**: Run `npm run dev`
- **Expected**: Server starts, listens on a port (typically 3000 or 5173), no errors in console
- **Failure**: Startup fails, port conflicts, or TypeScript errors during execution

### 3. Root Route Renders Home Page
**Test**: While dev server is running, make a GET request to `http://localhost:PORT/`
- **Expected**: HTTP 200 response with HTML containing:
  - Valid HTML structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
  - `<title>AgentClinic</title>` in the head
  - `<header>` and `<main>` semantic tags in the body
  - Text "AgentClinic is open for business" visible in the page
- **Failure**: 404, plain text response, malformed HTML, or missing content

### 3a. Home Page Content Verification
**Test**: Open `http://localhost:PORT/` in a browser
- **Expected**: Page displays cleanly with:
  - "AgentClinic" visible in the page title (browser tab) and header
  - "AgentClinic is open for business" message prominently displayed
  - Basic readability and proper HTML rendering (no raw HTML tags visible)
- **Failure**: Blank page, 404, or incorrect content

### 3b. Responsive Design Verification
**Test**: View `http://localhost:PORT/` at multiple device sizes
- **Expected - Mobile (< 480px):**
  - Page uses full width with padding
  - Header text is readable on small screen
  - Footer links are touch-friendly (44px+ tap targets)
  - No horizontal scrolling
- **Expected - Tablet (480px - 767px):**
  - Layout adjusts appropriately
  - Margins and padding increase from mobile
  - Font sizes scale up for readability
- **Expected - Desktop (768px+):**
  - Full layout with max-width constraint (1200px)
  - Proper spacing between header, main, footer
  - Content centered on wide screens
- **Failure**: Broken layout at any breakpoint, unreadable text, horizontal scrolling

### 4. Types Work End-to-End
**Test**: 
- Open `src/index.ts` in your IDE
- Hover over request/response objects — verify type hints appear
- Run `tsc --noEmit` from the command line
- **Expected**: No type errors; IDE shows autocomplete for Hono's Request/Response types
- **Failure**: Type errors in console; no autocomplete in editor

### 5. Code Formatting is Consistent
**Test**: Run `npx prettier --check .` (or configured command)
- **Expected**: No formatting errors (optional if Prettier config is strict)
- **Failure**: Files fail formatting check

### 6. Testing Framework Works
**Test**: Run `npm run test`
- **Expected**: Vitest runs all tests and reports results
  - Test files discovered in `src/__tests__/*.test.ts`
  - All tests pass (no failures)
  - Output shows test count and duration
- **Failure**: Tests fail, Vitest doesn't run, or test files not discovered

### 6a. Test Scripts Available
**Test**: Verify package.json has test scripts
- **Expected**: 
  - `npm run test` - Runs tests once
  - `npm run test:watch` - Runs in watch mode
  - `npm run test:coverage` - Generates coverage reports
- **Failure**: Scripts missing or incorrect

### 7. Git Repository is Initialized
**Test**: Run `git status`
- **Expected**: Project is a Git repo; `.gitignore` excludes `node_modules/` and build output
- **Failure**: Not a Git repo, or critical files are tracked when they shouldn't be

## Manual Smoke Test (Full Flow)

1. **Setup**: Clone/download the project, run `npm install`
2. **Dev**: Run `npm run dev`, see "Server listening on..." message
3. **Browser**: Navigate to `http://localhost:PORT/`
   - Verify page title in browser tab is "AgentClinic"
   - Verify page displays the header with "AgentClinic" branding
   - Verify "AgentClinic is open for business" message is visible
   - Verify HTML is properly rendered (no raw tags visible)
4. **Hot-reload**: Edit the home page message in `src/pages/Home.tsx`, save, refresh browser — confirm change appears
5. **Build**: Run `npm run build`, verify `dist/` is populated with `.js` files
6. **Types**: Open `src/pages/Home.tsx`, hover over JSX element — confirm type hints are visible (component props, children type, etc.)
7. **Tests**: Run `npm run test`, verify:
   - Vitest discovers and runs all test files
   - All tests pass (8/8 in components.test.ts)
   - No errors in output
8. **Coverage**: Run `npm run test:coverage`, verify coverage reports are generated
9. **Watch Mode**: Run `npm run test:watch`, modify a test file, verify Vitest re-runs automatically

## Artifacts to Check

- `package.json` — lists `hono`, `tsx`, `typescript`, `vitest` dependencies; includes test scripts
- `tsconfig.json` — `strict: true`, sensible compiler options
- `src/index.ts` — defines `/` route that renders the home page component, no obvious errors
- `src/pages/Home.tsx` — Hono JSX component using Layout wrapper
- `src/components/Layout.tsx` — Master layout composing Header, Main, Footer
- `src/components/Header.tsx`, `Main.tsx`, `Footer.tsx` — Sub-components with TypeScript typing
- `src/styles/global.css` — External CSS file with responsive design
- `src/__tests__/components.test.ts` — Test file with 8+ tests for components
- `vitest.config.ts` — Vitest configuration with Node environment and v8 coverage
- `.gitignore` — excludes `node_modules/`, `dist/`, `.DS_Store`, etc.

## Definition of Done

All six test cases above pass without manual workarounds. Code can be deployed or handed off for the next phase with confidence.
