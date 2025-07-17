# Codecademy Web Clone - Implementation Guide

## Project Overview
A pixel-perfect clone of the Codecademy website built with Next.js 15, TypeScript, and Tailwind CSS. Features responsive design, interactive components, and modern UI patterns.

## Prerequisites
- Node.js 18+ installed
- npm or bun package manager
- Basic knowledge of React, TypeScript, and Tailwind CSS

## Initial Setup

### 1. Create Next.js Project
```bash
npx create-next-app@latest codecademy-clone --typescript --tailwind --eslint --app
cd codecademy-clone
```

### 2. Install Dependencies
```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

npm install @tailwindcss/postcss@4.1.11 @tanstack/react-query@5.56.2 class-variance-authority clsx cmdk date-fns embla-carousel-react input-otp lucide-react next-themes react-hook-form react-icons react-resizable-panels recharts sonner tailwind-merge tailwindcss-animate vaul zod

npm install -D autoprefixer postcss tailwindcss typescript @types/node @types/react @types/react-dom
```

### 3. Configure Tailwind CSS
Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FFD43B",
        'yellow-primary': "#FFD43B",
        'yellow-text': "#000000",
        'text-primary': "#ffffff",
        'text-secondary': "#a3a3a3",
        'text-muted': "#737373",
        'surface-dark': "#1a1a1a",
        'navbar-blur': "rgba(0, 0, 0, 0.8)",
        border: "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 4. Setup CSS Variables
Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ffffff;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
}
```

## Project Structure Setup

### 1. Create Folder Structure
```
codecademy-clone/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (Radix UI components)
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── CompanyLogos.tsx
│   ├── CTASection.tsx
│   ├── TeamsTrainingSection.tsx
│   ├── SkillsSection.tsx
│   ├── CoursesSection.tsx
│   ├── ExperienceSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FinalCTASection.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── use-mobile.tsx
└── public/
    └── assets/
```

### 2. Install Shadcn/UI Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add navigation-menu
```

## Component Implementation Guide

### 1. Header Component (`components/Header.tsx`)
**Key Features:**
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Promotional banner
- Authentication buttons
- Search functionality

**Implementation Steps:**
1. Create state for menu open/close and scroll detection
2. Add useEffect for scroll listener
3. Implement responsive navigation items
4. Add mobile menu toggle functionality
5. Style with Tailwind classes for blur effects

**Code Structure:**
```typescript
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Component JSX...
};
```

### 2. Hero Section (`components/HeroSection.tsx`)
**Key Features:**
- Animated text cycling through skills
- Google sign-in button
- Hero image with animation controls
- Responsive layout

**Implementation Steps:**
1. Create state for current skill index
2. Add useEffect for skill rotation timer
3. Implement sign-up form section
4. Add hero image with overlay controls
5. Style with animations and responsive design

**Code Structure:**
```typescript
'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = ["/skills", "/career", "/team", "/potential", "/self"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Component JSX...
};
```

### 3. Skills Section (`components/SkillsSection.tsx`)
**Key Features:**
- Tabbed interface (Top subjects vs Certifications)
- Dynamic skill grid with icons
- Hover effects and interactions
- Responsive grid layout

**Implementation Steps:**
1. Create state for active tab
2. Define skills and certification arrays with icons
3. Implement tab switching functionality
4. Create reusable grid rendering function
5. Add hover effects and styling

**Code Structure:**
```typescript
'use client'
import { useState } from "react";
import { Code, Database, Globe, BarChart3 } from "lucide-react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'cert'>('top');
  
  const skills = [
    { name: "Code foundations", icon: Code },
    { name: "Python", icon: Code },
    // ... more skills
  ];

  const renderGrid = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-surface-dark border rounded-lg p-6 hover:border-yellow-primary">
          {/* Grid item content */}
        </div>
      ))}
    </div>
  );

  // Component JSX...
};
```

### 4. Footer Component (`components/Footer.tsx`)
**Key Features:**
- Multi-column layout with organized sections
- Social media links
- Mobile app download buttons
- Legal links and company info

**Implementation Steps:**
1. Define footer sections data structure
2. Create responsive grid layout
3. Add social media icons
4. Implement mobile app download section
5. Add legal links and company branding

## Advanced Features Implementation

### 1. Responsive Design
**Breakpoint Strategy:**
- Mobile: `sm:640px+`
- Tablet: `md:768px+`
- Desktop: `lg:1024px+`
- Large: `xl:1280px+`

**Implementation:**
```css
/* Mobile-first approach */
.nav-item {
  @apply flex flex-col;
}

@media (min-width: 1024px) {
  .nav-item {
    @apply flex-row;
  }
}
```

### 2. Animation System
**CSS Animations:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**React Animations:**
```typescript
const [currentSkill, setCurrentSkill] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);
```

### 3. State Management
**Local State Pattern:**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [activeTab, setActiveTab] = useState<'top' | 'cert'>('top');
```

**Effect Hooks:**
```typescript
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 8);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

## Styling Guidelines

### 1. Color System
- Primary: `#FFD43B` (Yellow)
- Background: `#0a0a0a` (Dark)
- Text Primary: `#ffffff`
- Text Secondary: `#a3a3a3`
- Surface Dark: `#1a1a1a`

### 2. Typography
- Font Family: Geist Sans (Primary), Geist Mono (Code)
- Headings: Bold, large sizes
- Body: Regular weight, readable sizes
- Code: Monospace font

### 3. Spacing
- Container: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8`
- Sections: `py-20` for major sections
- Components: `space-y-8`, `gap-4`

## Testing & Quality Assurance

### 1. Component Testing
```typescript
// Test component rendering
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

test('renders header navigation', () => {
  render(<Header />);
  expect(screen.getByText('Catalog')).toBeInTheDocument();
});
```

### 2. Accessibility
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers

### 3. Performance
- Optimize images (Next.js Image component)
- Lazy load components
- Minimize bundle size
- Use React.memo for expensive components

## Deployment

### 1. Build Process
```bash
npm run build
```

### 2. Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
```

### 3. Deployment Options
- **Vercel**: `vercel deploy`
- **Netlify**: Connect Git repository
- **AWS**: Use AWS Amplify or S3 + CloudFront

## Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

## Best Practices

### 1. Code Organization
- One component per file
- Group related components
- Use consistent naming conventions
- Implement proper TypeScript types

### 2. Performance
- Use React.memo for expensive components
- Implement lazy loading
- Optimize images and assets
- Minimize re-renders

### 3. Maintainability
- Write self-documenting code
- Use meaningful variable names
- Implement proper error handling
- Keep components small and focused

## Troubleshooting

### Common Issues:
1. **Hydration Errors**: Ensure server and client render the same content
2. **Styling Issues**: Check Tailwind CSS configuration
3. **Build Errors**: Verify all dependencies are installed
4. **Performance**: Use React DevTools Profiler

### Debug Commands:
```bash
# Check TypeScript errors
npm run type-check

# Lint code
npm run lint

# Analyze bundle
npm run build && npm run analyze
```

This implementation guide provides a comprehensive roadmap for building the Codecademy web clone from scratch, covering all major components, features, and best practices.