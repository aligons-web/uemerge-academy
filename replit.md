# U eMerge Academy Website

## Overview

U eMerge Academy is a purpose-driven online learning platform focused on personal transformation and spiritual growth. The website serves as the primary marketing and information hub for the Life Transformation Network (LTN) program, educational workbooks, and community resources. The platform features a modern, purple-branded design with video-enhanced hero sections and promotional content for books and programs available on Amazon and external learning platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express serves built frontend assets in production
- **Development**: Vite dev server with HMR proxied through Express

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Drizzle Kit for schema management (`drizzle-kit push`)
- **Development Fallback**: In-memory storage (`MemStorage`) when database unavailable

### Project Structure
```
├── client/src/          # React frontend application
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and query client
├── server/              # Express backend
├── shared/              # Shared types and schemas
├── attached_assets/     # Static media (videos, images)
└── migrations/          # Database migrations
```

### Design System
- **Primary Color**: Purple (HSL 270° base)
- **Typography**: Playfair Display (headings), Open Sans (body), Poppins (accent)
- **Spacing**: Tailwind units 3, 6, 8, 12, 16, 20, 24
- **Components**: Cards, buttons, badges with elevation effects (`hover-elevate`)

### Key Pages
- **Home**: Hero video slider, transformation messaging, program showcase
- **About**: Vision, mission, founder information
- **Products**: LT Workbook and Understanding Your Path book promotions
- **Resources**: Links to external platforms and tools

## External Dependencies

### Third-Party Platforms
- **Skool**: LTN Community classroom (`skool.com/life-transformation-network-2320`)
- **Transformation Builder**: External tool (`transformationbuilder.com`)
- **Amazon**: Book purchases for LT Workbook and Understanding Your Path

### Social Media Integration
- Facebook, Instagram, LinkedIn, X (Twitter), TikTok, YouTube
- Icons via `react-icons` (Simple Icons set)

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Session storage via `connect-pg-simple`

### Development Tools
- Replit-specific plugins: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`
- TypeScript for type safety across frontend and backend

## Recent Changes

### December 24, 2025
- Initial implementation of U eMerge Academy website
- Created Home page with video slider, transformation section, program showcase, and Why U eMerge sections
- Created About page with Vision, Mission, and Founder sections with smooth scroll navigation
- Created Products page showcasing LT Workbook and Understanding Your Path
- Created Resources page with links to external platforms
- Implemented purple branding per design guidelines
- Added social media integration in header and footer
- All pages responsive with mobile navigation support