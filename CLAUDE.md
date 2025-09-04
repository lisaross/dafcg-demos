# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a DAFCG (David A. Fields Consulting Group) demos project migrating from static HTML to Astro + Tailwind + shadcn/ui. The project contains **mockup** survey pages, participant journey flows, and data visualizations - no actual form submissions or backend functionality required.

## Development Commands

### Setup Commands (Run in Order)

```bash
# 1. Initialize Astro project with Tailwind
pnpx create-astro@latest . --template minimal --yes
pnpm add @astrojs/tailwind tailwindcss

# 2. Add shadcn-ui components
pnpx shadcn@latest init
pnpx shadcn@latest add card button progress badge

# 3. Install additional dependencies
pnpm add @astrojs/check typescript zod lucide-astro
```

### Development Commands

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Type checking
pnpx astro check

# Lint (if configured)
pnpm run lint
```

## Architecture & Structure

### Core Framework

- **TypeScript**: Primary language - TypeScript-first approach for all components
- **Astro**: Static site generator with component islands
- **Tailwind CSS**: Primary styling solution - utility-first CSS framework
- **shadcn/ui**: Component library for consistent UI patterns

### Brand Configuration

- **Primary Color**: #391892 (DAFCG purple)
- **Success Color**: #18DD89 (DAFCG green)
- **Border Radius**: 10px (global standard)
- **Typography**: Cooper Hewitt + Inter fonts
- **Icons**: Lucide icons only
- **Design Rules**: No gradients, no emojis, no colored borders on cards

### Component Architecture

```text
src/
├── components/
│   ├── Layout.astro          # Main wrapper with header
│   ├── Card.astro            # Consistent card styling
│   ├── Button.astro          # Primary/secondary variants
│   ├── ProgressBar.astro     # For surveys/checklists
│   └── StatusBadge.astro     # Live/demo/interactive badges
├── pages/
│   ├── index.astro           # Main landing page
│   ├── participant-journey.astro
│   └── surveys/              # Survey form pages
└── styles/
    └── global.css            # Global styles and Tailwind imports
```

### Migration Strategy

Pages should be migrated in complexity order:

1. `index.html` → `src/pages/index.astro` (simplest)
2. `participant-journey.html` → components + page structure  
3. Survey pages → mockup form components (display only)
4. Complex visualizations (most complex)

### Mockup Components

- Create realistic-looking form interfaces (no actual submission logic)
- Build reusable survey display components
- Use static data for demonstrations
- Implement proper TypeScript interfaces for all mock data

## Development Guidelines

### TypeScript-First Development

- All components must use TypeScript with proper type definitions
- Define interfaces for all props, data structures, and mock data
- Use strict TypeScript configuration
- Type all component props explicitly

### Tailwind-Centric Styling

- **Primary approach**: Tailwind utilities for ALL styling
- Avoid custom CSS unless absolutely necessary
- Use Tailwind's design tokens for consistency
- Leverage Tailwind's responsive utilities
- Maintain 10px border-radius consistently (`rounded-[10px]`)
- No gradients or decorative elements
- Cards should use clean Tailwind classes only

### Mock Data Management

- Static demo data in JSON files under `src/data/`
- TypeScript interfaces for all data structures
- No actual data persistence or loading - static mockups only

### Deployment

- Target: Cloudflare Pages (static deployment)
- Build artifacts in `dist/`
- Preserve existing URL structure and navigation
- Ensure all functionality from original HTML is maintained

## Critical Setup Notes

- **IMPORTANT**: Have user run each init command IN ORDER to ensure proper setup
- Source designs and pages from `/Developer/Projects/dafcg-benchmark/dafcg-mockups`
- Maintain all current functionality during migration
- Focus on infrastructure setup before content migration
- Test each phase thoroughly before proceeding to next

## Enhancement Opportunities

Once basic migration is complete:

- Add view transitions between pages using Astro's view transitions
- Implement print stylesheets for reports
- Optimize bundle size (targeting 50-70% CSS reduction)
- Add visual interactions for mockup demonstrations