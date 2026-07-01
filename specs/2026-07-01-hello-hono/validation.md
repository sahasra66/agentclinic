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

### 6. Git Repository is Initialized
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
4. **Hot-reload**: Edit the home page message in `src/pages/home.tsx`, save, refresh browser — confirm change appears
5. **Build**: Run `npm run build`, verify `dist/` is populated with `.js` files
6. **Types**: Open `src/pages/home.tsx`, hover over JSX element — confirm type hints are visible (component props, children type, etc.)

## Artifacts to Check

- `package.json` — lists `hono`, `tsx`, `typescript` dependencies
- `tsconfig.json` — `strict: true`, sensible compiler options
- `src/index.ts` — defines `/` route that renders the home page component, no obvious errors
- `src/pages/home.tsx` — Hono JSX component with proper semantic HTML structure (`<header>`, `<main>`, `<title>`, etc.)
- `.gitignore` — excludes `node_modules/`, `dist/`, `.DS_Store`, etc.

## Definition of Done

All six test cases above pass without manual workarounds. Code can be deployed or handed off for the next phase with confidence.
