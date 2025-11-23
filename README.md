# Portfolio Dashboard

A modern, responsive portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases modern web development practices including form validation, API integration, dark mode, and responsive design.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Authentication**: Login system with form validation and route protection
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Beautiful theme switching with smooth transitions
- **Form Validation**: React Hook Form with Zod schema validation (Login & Contact forms)
- **API Integration**: Real-time data fetching from JSONPlaceholder API
- **Route Protection**: Protected dashboard with authentication guard
- **Reusable Components**: Custom UI component library
- **SEO Optimized**: Proper metadata and OpenGraph tags
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── contact/           # Contact page with form
│   ├── dashboard/         # Dashboard with API data
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── contact/          # Contact form components
│   ├── dashboard/        # Dashboard components
│   ├── providers/        # Theme provider
│   ├── ui/              # Reusable UI components
│   ├── navigation.tsx    # Main navigation
│   └── theme-toggle.tsx  # Dark mode toggle
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Components

### UI Components
- **Button**: Versatile button with multiple variants
- **Card**: Flexible card component with header, content, footer
- **Input**: Styled input with validation states
- **Textarea**: Multi-line text input
- **Label**: Accessible form labels
- **Alert**: Status messages and notifications

### Features
- **Navigation**: Responsive navigation with active states
- **Theme Toggle**: Dark/light mode switcher
- **Dashboard**: Real-time data visualization
- **Contact Form**: Validated contact form with error handling

## 🌐 Pages

1. **Home** (`/`): Landing page with feature showcase
2. **Login** (`/login`): Authentication page with demo credentials
3. **Dashboard** (`/dashboard`): Protected interactive dashboard with API data
4. **Contact** (`/contact`): Contact form with validation

## 🔐 Demo Authentication

For testing purposes, use these credentials:
- **Email**: `demo@portfolio.com`
- **Password**: `demo123`

The login form includes a "Click to fill" button for convenience.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Form Validation

Both Login and Contact forms include comprehensive validation:

### Login Form
- Email format validation
- Password minimum length (6 characters)
- Real-time error display
- Loading states during authentication
- Demo credentials helper

### Contact Form
- Required field validation
- Email format validation
- Minimum length requirements
- Real-time error display
- Success/error states

## 🔌 API Integration

Dashboard fetches data from JSONPlaceholder API:
- Posts endpoint for recent articles
- Users endpoint for user management
- Error handling and loading states
- Refresh functionality

## 🌙 Dark Mode

Implemented with next-themes:
- System preference detection
- Smooth transitions
- Persistent theme selection
- CSS custom properties

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or feedback, please use the contact form in the application or reach out directly.

---

Built with ❤️ using Next.js 14 and modern web technologies.