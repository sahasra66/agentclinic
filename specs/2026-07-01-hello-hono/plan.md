# Plan: Phase 1 — Hello Hono

## 1. Project Setup
- Initialize Node.js project with `package.json`
- Add TypeScript and essential dev dependencies: `tsx`, `typescript`, `prettier`
- Set up `tsconfig.json` with strict mode enabled
- Create `.gitignore` for Node modules and build artifacts

## 2. Hono Framework Installation
- Add `hono` package as a core dependency
- Install `better-sqlite3` (prepared for Phase 3, not used yet)
- Verify package versions align with tech-stack recommendations

## 3. Development Server Configuration
- Create `src/` directory structure
- Set up `tsx` dev server entry point (`src/index.ts`)
- Configure Hono application instance
- Test hot-reload behavior during development

## 4. Root Route Implementation
- Create `/` route handler
- Return "AgentClinic is open for business" as plain text or HTML response
- Test route responds correctly with `tsx` dev server running

## 4a. Minimal Home Page
- Create a Hono JSX component for the home page layout (header with title, main content area)
- Render the home page at `/` with the "open for business" message prominently displayed
- Include basic semantic HTML: `<html>`, `<head>`, `<body>`, `<header>`, `<main>`
- Add a `<title>` tag with "AgentClinic"
- Prepare minimal inline CSS or CSS reset for Phase 2 polish
- Verify the page renders correctly in the browser (not just in console)

## 5. TypeScript Validation
- Confirm types work end-to-end from request to response
- Verify `tsc` compile without errors (production build check)
- Check IDE autocomplete and type hints are functional

## 6. Development Workflow
- Document how to run dev server (`npm run dev`)
- Document how to build for production (`npm run build`)
- Test commands work as documented

## 7. Git Foundation
- Initialize Git repository (if not already done)
- Create initial commit with project structure
- Create feature branch for next phase if applicable

## 8. Layout Component Architecture
- Create reusable `Layout.tsx` component that composes Header, Main, and Footer
- Break down layout into three sub-components:
  - `Header.tsx` - navigation and branding (dark background)
  - `Main.tsx` - content area (wraps page content)
  - `Footer.tsx` - footer section with links and info
- Each component should have proper TypeScript typing

## 9. Stylesheet Creation
- Create `src/styles/global.css` with semantic HTML styling
- Include base styles for `html`, `body`, `header`, `main`, `footer`
- Add responsive layout styles and typography
- Link stylesheet in the HTML `<head>` as an external file served from `public/` or inline

## 10. Home Page Integration
- Update `Home.tsx` to use the new `Layout` component
- Remove inline styles and import external CSS file
- Verify the page renders with external stylesheet
