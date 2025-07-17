# Codecademy Web Clone - Architecture Diagram

## Project Structure
```mermaid
graph TD
    A[Next.js 15 App Router] --> B[app/]
    B --> C[layout.tsx]
    B --> D[page.tsx]
    B --> E[globals.css]
    B --> F[favicon.ico]
    
    G[components/] --> H[UI Components]
    G --> I[Page Sections]
    G --> J[Layout Components]
    
    H --> K[Button, Input, Card...]
    I --> L[Hero, Skills, Footer...]
    J --> M[Header, Navigation...]
```

## Component Hierarchy
```mermaid
graph TD
    A[Home Page - page.tsx] --> B[Header.tsx]
    A --> C[Main Content]
    A --> D[Footer.tsx]
    
    C --> E[HeroSection.tsx]
    C --> F[CompanyLogos.tsx]
    C --> G[CTASection.tsx]
    C --> H[TeamsTrainingSection.tsx]
    C --> I[SkillsSection.tsx]
    C --> J[CoursesSection.tsx]
    C --> K[ExperienceSection.tsx]
    C --> L[TestimonialsSection.tsx]
    C --> M[FinalCTASection.tsx]
    
    B --> N[Navigation Menu]
    B --> O[Auth Buttons]
    B --> P[Search]
    B --> Q[Mobile Menu]
    
    I --> R[Top Skills Tab]
    I --> S[Certification Tab]
    I --> T[Skills Grid]
    
    E --> U[Animated Headlines]
    E --> V[CTA Forms]
    E --> W[Hero Image]
```

## Data Flow Architecture
```mermaid
flowchart TD
    A[User Interaction] --> B[Event Handler]
    B --> C{State Type}
    
    C -->|Local| D[useState Hook]
    C -->|Side Effects| E[useEffect Hook]
    C -->|Navigation| F[Next.js Router]
    
    D --> G[Component Re-render]
    E --> G
    F --> H[Route Change]
    
    G --> I[UI Update]
    H --> J[Page Navigation]
    
    I --> K[DOM Manipulation]
    J --> L[Component Mount/Unmount]
    
    K --> M[Visual Changes]
    L --> N[New Page Load]
```

## Styling System Architecture
```mermaid
graph TD
    A[Tailwind CSS 4.1.11] --> B[Global Styles]
    A --> C[Component Styles]
    A --> D[Utility Classes]
    
    B --> E[CSS Variables]
    B --> F[Base Styles]
    
    E --> G[Colors - yellow, background, text]
    E --> H[Spacing & Typography]
    E --> I[Animation Classes]
    
    J[Radix UI] --> K[Base Components]
    K --> L[Accessible Primitives]
    K --> M[Unstyled Components]
    
    N[Custom UI Components] --> O[Button Variants]
    N --> P[Form Elements]
    N --> Q[Layout Components]
    
    C --> R[Component-specific Classes]
    D --> S[Responsive Utilities]
    
    O --> T[Primary, Secondary, Ghost...]
    P --> U[Input, Select, Checkbox...]
    Q --> V[Card, Container, Grid...]
```

## Technical Stack Flow
```mermaid
graph LR
    A[TypeScript] --> B[Next.js 15]
    B --> C[React 18]
    C --> D[Tailwind CSS]
    D --> E[Radix UI]
    E --> F[Lucide Icons]
    
    G[Development] --> H[Hot Reload]
    H --> I[TypeScript Check]
    I --> J[Tailwind Processing]
    J --> K[Bundle Creation]
    
    L[Build Process] --> M[Static Generation]
    M --> N[Bundle Optimization]
    N --> O[Asset Minification]
    O --> P[Production Bundle]
    
    Q[Runtime] --> R[Client Hydration]
    R --> S[Interactive Components]
    S --> T[State Management]
    T --> U[Event Handling]
```

## User Interaction Flow
```mermaid
sequenceDiagram
    participant U as User
    participant H as Header
    participant HS as HeroSection
    participant SS as SkillsSection
    participant F as Footer
    
    U->>H: Page Load
    H->>H: Initialize scroll listener
    H->>H: Setup mobile menu state
    
    U->>HS: View hero section
    HS->>HS: Start text animation
    HS->>HS: Cycle through skills
    
    U->>SS: Click skills tab
    SS->>SS: Switch active tab
    SS->>SS: Render new skill grid
    
    U->>H: Scroll page
    H->>H: Update scroll state
    H->>H: Apply blur effect
    
    U->>F: Navigate to footer
    F->>F: Display social links
    F->>F: Show mobile app downloads
```

## Responsive Design Breakpoints
```mermaid
graph TD
    A[Screen Size Detection] --> B{Breakpoint}
    
    B -->|sm: 640px+| C[Mobile Layout]
    B -->|md: 768px+| D[Tablet Layout]
    B -->|lg: 1024px+| E[Desktop Layout]
    B -->|xl: 1280px+| F[Large Desktop]
    
    C --> G[Hamburger Menu]
    C --> H[Stacked Components]
    C --> I[Single Column]
    
    D --> J[Hybrid Navigation]
    D --> K[2-Column Grid]
    D --> L[Collapsible Sections]
    
    E --> M[Full Navigation]
    E --> N[Multi-Column Layout]
    E --> O[Hover Effects]
    
    F --> P[Maximum Container]
    F --> Q[Enhanced Spacing]
    F --> R[Rich Interactions]
```

## Component State Management
```mermaid
stateDiagram-v2
    [*] --> HeaderState
    HeaderState --> MenuOpen
    HeaderState --> MenuClosed
    HeaderState --> Scrolled
    HeaderState --> NotScrolled
    
    MenuOpen --> MenuClosed: Click outside
    MenuClosed --> MenuOpen: Click menu button
    
    NotScrolled --> Scrolled: Scroll > 8px
    Scrolled --> NotScrolled: Scroll <= 8px
    
    [*] --> HeroState
    HeroState --> SkillCycle
    SkillCycle --> NextSkill: Timer (3s)
    NextSkill --> SkillCycle
    
    [*] --> SkillsState
    SkillsState --> TopSkills
    SkillsState --> Certifications
    
    TopSkills --> Certifications: Click cert tab
    Certifications --> TopSkills: Click top tab
```