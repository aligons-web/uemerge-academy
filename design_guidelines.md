# Design Guidelines: U eMerge Academy Website

## Design Approach
**Reference-Based Custom Design** - Following the provided reference images (referencepage1.jpg, referencepage2.jpg) with purple branding and video-enhanced user experience.

## Brand Identity
- **Primary Brand Color**: Purple (used for navigation bars, CTAs, interactive elements)
- **Logo Assets**: logoonweb.png, ltnlogopng.png prominently featured
- **Visual Style**: Inspirational, transformational, education-focused with modern sophistication

## Layout System
**Spacing Primitives**: Use Tailwind units of 3, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 for desktop, py-12 for mobile
- Component spacing: gap-6 to gap-8 for grids, mb-8 for section breaks
- Container: max-w-7xl for main content areas

## Navigation Structure

**Top Social Bar**: Purple background, horizontal layout with 6 social icons (Facebook, Instagram, LinkedIn, X, TikTok, YouTube) - right-aligned, subtle hover effects

**Main Navigation**: Clean, modern nav bar below social bar with links: About, Products, LTN Community, T Builder, Resources - sticky on scroll

## Homepage Components

### Hero Slider (Primary Feature)
- **3-Slide Auto-Playing Video Background Slider**
- Slide 1: "Enlightened and empowered with focus" (ladywriting.mp4)
- Slide 2: "Build upon a solid foundation for your future" (buildingfoundation.mp4)  
- Slide 3: "Start your journey now" (scenicforest.mp4)
- Transparent purple arrow controls for manual navigation
- Full-viewport height (90vh), centered white text overlay with semi-transparent dark backdrop for readability
- Auto-advance every 6 seconds with smooth fade transitions

### Transformation Statement Section
- Centered layout, max-w-4xl
- Headline: "You did everything right—yet something still feels missing"
- Supporting text with call-to-action messaging
- Bold pill-style tags: "Feeling stuck", "Desiring more", "Seeking direction"

### Program Showcase
- Two-column grid (lg:grid-cols-2) featuring:
  - Left: Life Transformation Network logo + description
  - Right: LT Workbook cover (ltwCover.jpg) with "Now Available!" badge
- Purple CTA buttons: "READ MORE", "Find out more"

### Book Promotion Card
- Featured card layout with Understanding Your Path cover (uypbkcvr2025.jpg)
- "Revised Edition Released!" badge with "Get your copy on Amazon" CTA
- Subtle elevation/shadow for prominence

### Vision Statement Footer Section
- Full-width, purple gradient background
- "2026 is the year you discover your true direction" headline
- "Why U eMerge?" with READ MORE link

## About Page Structure

**Jump Links Navigation**: Fixed or sticky internal navigation to Vision, Mission, Founder sections

**Content Sections**: 
- Introduction with educational approach details
- Vision section (with internal anchor)
- Mission section with 8-point numbered list (with internal anchor)
- Founder section (with internal anchor)
- Community link promotion to Skool platform

**Layout**: Single-column, max-w-4xl for optimal readability with generous spacing between sections

## Typography Hierarchy
- **Headings**: Bold, impactful serif or modern sans-serif
  - H1: 3xl to 5xl responsive
  - H2: 2xl to 4xl
  - H3: xl to 2xl
- **Body**: Clean sans-serif, 16-18px base, 1.6-1.8 line-height
- **Emphasis**: Purple text for key phrases, bold for "READ MORE" links

## Components

### Buttons
- Primary: Purple background, white text, rounded, px-8 py-3, with blur background when over images
- Secondary: Purple outline, purple text
- No custom hover states - rely on standard implementations

### Cards
- White background, subtle shadow (shadow-md)
- Rounded corners (rounded-lg)
- 6-8 unit padding internally
- Book covers and images maintain aspect ratio

### Badges
- Small, rounded-full, purple or accent color
- Uppercase text, bold weight, px-4 py-1

## Images
- **Hero**: Video backgrounds in slider (critical feature)
- **Product Images**: ltwCover.jpg (LT Workbook), uypbkcvr2025.jpg (Understanding Your Path book)
- **Logos**: ltnlogopng.png, logoonweb.png
- All images should be optimized and responsive with proper alt text

## Responsive Behavior
- Mobile: Single-column stacking, reduced padding (py-8 to py-12)
- Tablet: Begin introducing 2-column layouts
- Desktop: Full multi-column grids, expanded spacing
- Video slider maintains aspect ratio across devices

## Accessibility
- All links have descriptive text
- Video controls accessible via keyboard
- Sufficient color contrast on purple backgrounds (use white/light text)
- Focus states visible on all interactive elements

## Key UX Patterns
- Smooth scroll to anchor links on About page
- Auto-playing video slider with manual override
- External links (Skool, Amazon) open in new tabs
- Clear visual hierarchy guiding users from transformation message → programs → action