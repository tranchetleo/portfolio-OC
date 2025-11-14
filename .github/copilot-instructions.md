# GitHub Copilot Instructions for SaniTemplate

## Project Overview

SaniTemplate is a modern Next.js template designed for freelance web developers to create showcase and e-commerce websites quickly. It uses Next.js 14+ with App Router, TypeScript, Tailwind CSS, and custom UI components.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/         # Reusable React components
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── meta/          # SEO and metadata components
│   ├── tracking/      # Analytics tracking components
│   └── ui/            # UI components (Button, Section, etc.)
├── config/            # Configuration files
├── hooks/             # Custom React hooks
└── styles/            # Global styles and CSS
```

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono from next/font/google
- **Image Optimization**: Next.js Image component

## Coding Standards

### TypeScript
- Use strict TypeScript with proper typing
- Define interfaces for all props and data structures
- Use `type` for unions and primitives, `interface` for objects
- Export types/interfaces when they might be reused

### Components
- Use functional components with hooks
- Follow the naming convention: PascalCase for components
- Use `"use client"` directive only when necessary (client-side features)
- Prefer server components by default

### Styling
- Use Tailwind CSS classes exclusively
- Follow the design system color variables:
  - `text-primary` for primary text color
  - `text-foreground` for main text
  - `bg-background` for backgrounds
  - `bg-truebase` for base backgrounds
- Use responsive design: `sm:`, `md:`, `lg:`, `xl:` prefixes
- Prefer semantic HTML elements

### File Organization
- Components should be in their appropriate subdirectory
- Export components from index files when grouping related components
- Use descriptive file names that match component names

## Component Patterns

### UI Components
```tsx
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  // other specific props
}

export function Component({ children, className = "", ...props }: ComponentProps) {
  return (
    <div className={`base-classes ${className}`} {...props}>
      {children}
    </div>
  );
}
```

### Layout Components
- Use `Container` component for consistent spacing
- Use `Section` component for page sections with proper spacing
- Follow the established grid system: `grid2`, `grid3`, `grid4`

## Configuration

### Site Configuration (`src/config/site.config.ts`)
- All site-wide settings are centralized in this file
- Include proper SEO metadata, company information, and navigation
- Update social links and business information as needed

### Environment Variables
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Keep sensitive data in server-side environment variables
- Example: `NEXT_PUBLIC_TRACKER_URL`, `NEXT_PUBLIC_TRACKER_API_KEY`

## SEO and Performance

### Meta Tags
- Use the `Meta` component for consistent SEO optimization
- Include proper Open Graph and Twitter Card metadata
- Use structured data (JSON-LD) for better search engine understanding

### Images
- Always use Next.js `Image` component
- Provide proper `alt` attributes for accessibility
- Use WebP format when possible
- Include `priority` prop for above-the-fold images

### Loading and Performance
- Use `Suspense` with custom loading components
- Implement proper error boundaries
- Use the custom `LoadingScreen` component for consistent loading states

## Tracking and Analytics

### Event Tracking
- Use the `useTracking` hook for consistent event tracking
- Track important user interactions: page views, CTA clicks, form submissions
- Include contextual data: screen size, page path, custom properties

```tsx
const { trackEvent } = useTracking();
const path = usePath();
const screenSize = useScreenSize();

// Track an event
trackEvent("cta_click", path, screenSize, "hero_cta_click", {
  action: "demander_devis",
  label: "Demandez un devis gratuit",
});
```

## Accessibility

- Use semantic HTML elements
- Provide proper ARIA labels and descriptions
- Ensure keyboard navigation works properly
- Test with screen readers when possible
- Use sufficient color contrast ratios

## Development Workflow

### Component Creation
1. Create component file in appropriate directory
2. Define TypeScript interfaces for props
3. Implement component with proper styling
4. Add to index file if part of a component group
5. Test responsive behavior and accessibility

### Page Creation
1. Use Next.js App Router conventions
2. Include proper metadata export
3. Use server components by default
4. Add client directive only when needed
5. Implement proper error handling

## Common Patterns to Follow

### Form Handling
- Use controlled components with React state
- Implement proper validation
- Provide clear error messages
- Include loading states for submissions

### API Routes
- Use proper HTTP status codes
- Include error handling and logging
- Validate request data
- Return consistent response formats

### Error Handling
- Use error boundaries for component-level errors
- Provide user-friendly error messages
- Log errors for debugging
- Implement fallback UI when appropriate

## Business Context

This template is designed for:
- Freelance web developers
- Small business websites
- Showcase/portfolio sites
- Simple e-commerce solutions
- French market (default locale: fr-FR)

Focus on creating professional, performant, and SEO-optimized websites that can be easily customized for different clients and use cases.

## Suggestions Welcome

When suggesting code improvements:
- Follow the established patterns and conventions
- Consider performance and SEO implications
- Maintain consistency with existing design system
- Provide TypeScript types for new functionality
- Include proper documentation for complex features