# AgentClinic

A course project demonstrating spec-driven development with AI coding agents. Phase 1 establishes a working Hono server with TypeScript configuration.

## Project Setup

This project uses:
- **Node.js** runtime
- **TypeScript** with strict mode enabled
- **Hono** - lightweight TypeScript-first framework with server-side JSX support
- **tsx** - TypeScript execution for development (no build step needed)
- **npm** for package management

## Project Structure

```
.
├── src/
│   ├── index.ts              # Hono app entry point
│   └── pages/
│       └── Home.tsx          # Home page JSX component
├── dist/                     # Build output (generated)
├── package.json
├── tsconfig.json
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

## Available Routes

- `/` - Home page with "AgentClinic is open for business" message

## Features

- Hono JSX components for server-side rendering
- Semantic HTML structure with proper `<header>`, `<main>`, and `<title>` tags
- TypeScript strict mode for type safety
- Hot-reload development experience with `tsx`
- Production build tooling with `tsc`

## Next Steps

Phase 2 will focus on UI layout and styling. Phase 3 will add database integration.
