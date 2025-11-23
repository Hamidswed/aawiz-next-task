# Project Structure

This document explains the structure and organization of the Portfolio Dashboard project.

## 📁 Root Directory

```
portfolio-project/
├── src/                    # Source code
├── public/                 # Static assets
├── .next/                  # Next.js build output (generated)
├── node_modules/           # Dependencies (generated)
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── DEPLOYMENT.md          # Deployment instructions
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration
```

## 📁 Source Directory (`src/`)

```
src/
├── app/                   # Next.js 14 App Router
│   ├── contact/          # Contact page route
│   │   └── page.tsx      # Contact page component
│   ├── dashboard/        # Protected dashboard page route
│   │   └── page.tsx      # Dashboard page component
│   ├── login/            # Authentication page route
│   │   └── page.tsx      # Login page component
│   ├── fonts/            # Custom fonts
│   │   ├── GeistVF.woff
│   │   └── GeistMonoVF.woff
│   ├── favicon.ico       # Site favicon
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # Reusable React components
│   ├── auth/            # Authentication components
│   │   ├── auth-guard.tsx
│   │   └── login-form.tsx
│   ├── contact/         # Contact-specific components
│   │   └── contact-form.tsx
│   ├── dashboard/       # Dashboard-specific components
│   │   └── dashboard-content.tsx
│   ├── providers/       # Context providers
│   │   └── theme-provider.tsx
│   ├── ui/              # Base UI components
│   │   ├── alert.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── navigation.tsx   # Main navigation component
│   └── theme-toggle.tsx # Dark/light mode toggle
├── lib/                 # Utility functions and configurations
│   └── utils.ts         # Common utility functions
└── middleware.ts        # Next.js middleware for route protection
```

## 🎯 Component Architecture

### UI Components (`src/components/ui/`)

Base components following a design system approach:

- **Button**: Versatile button with variants and sizes
- **Card**: Container component with header, content, footer
- **Input**: Form input with validation states
- **Textarea**: Multi-line text input
- **Label**: Accessible form labels
- **Alert**: Status messages and notifications

### Feature Components

- **Navigation**: Responsive navigation with theme toggle and auth status
- **LoginForm**: Authentication form with validation using React Hook Form + Zod
- **AuthGuard**: Route protection component for authenticated pages
- **ContactForm**: Contact form with validation using React Hook Form + Zod
- **DashboardContent**: Data visualization with API integration
- **ThemeProvider**: Dark/light mode context provider

## 🛠️ Technology Stack

### Core Framework

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **React 18**: UI library with latest features

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Custom Properties**: Theme variables for dark/light mode
- **Responsive Design**: Mobile-first approach

### Form Handling

- **React Hook Form**: Performant form library
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between RHF and Zod

### UI Enhancement

- **Lucide React**: Modern icon library
- **next-themes**: Theme switching with system preference
- **clsx + tailwind-merge**: Conditional class names

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 🎨 Design System

### Colors

- **Primary**: Main brand color
- **Secondary**: Supporting color
- **Muted**: Subtle backgrounds and text
- **Accent**: Highlight color
- **Destructive**: Error states
- **Border**: Component borders
- **Input**: Form input borders
- **Ring**: Focus rings

### Typography

- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Font Sizes**: Tailwind's default scale (text-xs to text-9xl)
- **Font Weights**: 100-900 variable font weights

### Spacing

- **Container**: Centered with responsive padding
- **Grid**: CSS Grid for layouts
- **Flexbox**: For component alignment
- **Spacing Scale**: Tailwind's default (0.5rem increments)

## 🔧 Configuration Files

### `next.config.mjs`

Next.js configuration for build optimization and features.

### `tailwind.config.ts`

Tailwind CSS configuration with:

- Custom color palette
- Container settings
- Dark mode configuration
- Extended theme values

### `tsconfig.json`

TypeScript configuration with:

- Strict type checking
- Path aliases (@/_ for src/_)
- Modern ES features
- Next.js optimizations

### `package.json`

Project metadata and dependencies with scripts:

- `dev`: Development server
- `build`: Production build
- `start`: Production server
- `lint`: Code linting

## 🚀 Build Process

1. **TypeScript Compilation**: Type checking and compilation
2. **CSS Processing**: Tailwind CSS compilation and optimization
3. **Bundle Optimization**: Code splitting and tree shaking
4. **Static Generation**: Pre-rendering static pages
5. **Asset Optimization**: Image and font optimization

## 📊 Performance Optimizations

- **Static Generation**: Pages pre-rendered at build time
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Local font loading
- **CSS Optimization**: Unused CSS removal
- **Bundle Analysis**: Size monitoring and optimization

## 🔒 Type Safety

- **Strict TypeScript**: Full type coverage
- **Zod Schemas**: Runtime type validation
- **Component Props**: Fully typed interfaces
- **API Responses**: Typed data structures

This structure ensures maintainability, scalability, and developer experience while following modern React and Next.js best practices.
