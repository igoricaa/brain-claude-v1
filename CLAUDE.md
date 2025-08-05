# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for **brAIN** - an investment deal analysis platform for AIN Ventures. The application provides modern dashboards for managing and analyzing startup investment opportunities.

## Development Commands

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # TypeScript compilation + Vite production build  
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Architecture & Key Technologies

### Frontend Stack
- **React 19** with TypeScript and strict mode
- **Vite 7** for build tooling and development server
- **@tailwindcss/vite** plugin for Tailwind CSS 4.0 integration
- **shadcn/ui** component library built on Radix UI primitives
- **Recharts** for data visualization
- **Lucide React** for icons

### TypeScript Configuration
- **`verbatimModuleSyntax: true`** - Requires `import type { ... }` for interface/type imports
- **Path aliases**: `@/*` maps to `./src/*`
- **Strict mode** enabled with unused variable/parameter detection

### Styling System
- **Tailwind CSS 4.0** with CSS-based configuration (no config file)
- **Custom theme variables** in `src/index.css` using `@theme` directive
- **Professional color palette**: Neural blues (`--color-neural-*`) for investment platform aesthetic
- **Custom utility classes**: `.animate-fade-in`, `.animate-slide-up`, `.hover-lift`

## Component Architecture

### Layout Structure
- **App.tsx**: Main routing logic with state-based navigation
- **Layout.tsx**: Wrapper with header and sidebar navigation
- **Navigation.tsx**: Sidebar with dynamic tab switching
- **Header.tsx**: Top navigation with search and user actions

### Deal Management Pages
- **FreshDeals**: Card-based view of new deal submissions
- **Dashboard**: Analytics with interactive charts (metrics, trends, funding stages)  
- **PastDeals**: Historical deals with search/filtering
- **DealDetails**: Comprehensive deal analysis page with 7 sections

### Deal Details Components (`src/components/deals/deal-sections/`)
- **DealHeader**: Company info and action buttons (download, refresh, delete)
- **BasicDataCard**: Funding details, location, dates
- **IndustriesSection**: Industry tags and dual-use signal panels with color coding
- **FoundersTable**: Founder profiles with experience/education details
- **DataTables**: Grants, clinical trials, patent applications with empty states
- **InvestmentFacts**: Editable problem/solution analysis grid
- **AssessmentSection**: AI scoring with pros/cons and analyst final assessment

### UI Components (`src/components/ui/`)
- **shadcn/ui** components: Button, Card, Badge, Input
- **Custom variants**: Industry-specific badge colors, neural theme integration
- **NeuralBackground**: SVG pattern overlay for visual consistency

## Data Architecture

### Type System (`src/types/`)
- **Deal interface**: Central data structure for investment opportunities
- **Founder, Grant, Patent, ClinicalTrial**: Related entity types
- **Assessment interface**: AI analysis and analyst evaluation structure
- **Centralized exports**: `src/types/index.ts` re-exports all types

### Mock Data
- **`src/data/mockDeal.ts`**: Complete Senira deal example matching v1 app structure
- **Realistic data**: Founder profiles, dual-use signals, investment facts, AI assessment

## Important Implementation Notes

### TypeScript Imports
Due to `verbatimModuleSyntax: true`, always use:
```typescript
import type { InterfaceName } from "@/types"  // For types/interfaces
import { ComponentName } from "@/components"   // For runtime values
```

### Color System
The neural color palette uses professional blues instead of bright cyan:
- Primary: `#1e3a8a` (dark royal blue)
- Accent: `#2563eb` (professional blue)  
- Neural variants: 50-900 scale for consistent theming

### Component Patterns
- **Responsive layouts**: CSS Grid with `lg:grid-cols-*` breakpoints
- **Animation system**: Staggered loading with `animate-slide-up` and `style={{ animationDelay }}`
- **Hover effects**: Consistent `.hover-lift` class for interactive elements
- **Card-based design**: All data sections use Card components with consistent spacing

### State Management
- **Simple state**: React useState for navigation and selected deals
- **No external state management**: Component-level state with prop drilling
- **Mock data integration**: Currently uses static data, structured for future API integration

## Navigation Flow
The app uses tab-based navigation in `App.tsx`:
- `activeTab` controls main content switching
- `selectedDealId` enables drill-down to deal details
- Navigation items defined in `Navigation.tsx` with icons and descriptions