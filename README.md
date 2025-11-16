# StatsAI - AI-Driven Website Analytics & Sales Platform

A modern, responsive SaaS landing page for **StatsAI**, an intelligent analytics and sales platform powered by artificial intelligence. This landing page showcases the platform's features, pricing, testimonials, and more with beautiful animations and a polished user experience.

![StatsAI Landing Page](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🚀 Overview

StatsAI is a cutting-edge platform that combines AI-powered analytics with real-time website performance tracking and sales insights. This landing page serves as the marketing front-end, designed to convert visitors into customers through compelling design, smooth animations, and clear value propositions.

### Key Features of the Landing Page

- **Hero Section** with animated headline and Lottie animations
- **Features Section** showcasing AI-powered insights, real-time analytics, and custom dashboards
- **Pricing Section** with flexible plans
- **Testimonials** with customer reviews and social proof
- **Integrations** section highlighting platform compatibility
- **About Section** with company information
- **Documentation** links
- **Dark/Light Theme Toggle** for better user experience
- **Fully Responsive** design optimized for all screen sizes
- **Smooth Animations** powered by GSAP

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type safety

### UI Components & Styling
- **[ShadCN UI](https://ui.shadcn.com/)** - Beautiful, accessible component library
  - Navigation Menu
  - Cards
  - Buttons
  - Badges
  - Avatars
  - Separators
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives

### Animations & Visuals
- **[GSAP 3.13.0](https://gsap.com/)** - Professional animation library
  - ScrollTrigger for scroll-based animations
  - Character-by-character text animations
  - Staggered card reveals
- **[DotLottie React](https://lottiefiles.com/)** - Lottie animation player
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Additional Libraries
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class name utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sliim-Bouzidi/statsai.git
   cd statsai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

## 🎨 Features

### 🎯 Hero Section
- Animated headline: "INTELLIGENT ANALYTICS, FINALLY."
- Character-by-character reveal animation using GSAP
- Interactive Lottie animation
- Call-to-action buttons
- Fully responsive layout

### ✨ Interactive Elements
- Smooth scroll-triggered animations
- Staggered testimonial card reveals
- Theme toggle (dark/light mode)
- Mobile-responsive navigation menu
- Hover effects and transitions

### 📱 Responsive Design
- Optimized for mobile, tablet, and desktop
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Adaptive typography and spacing

### 🎭 Theme Support
- Dark mode and light mode
- System preference detection
- Smooth theme transitions
- Persistent theme selection

## 📂 Project Structure

```
statsai/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles
│   └── favicon.ico          # Site favicon
├── components/
│   ├── ui/                  # ShadCN UI components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navigation-menu.tsx
│   │   └── separator.tsx
│   └── theme-toggle.tsx     # Dark/light theme switcher
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
└── package.json
```

## 🚀 Deployment

This project is configured for automatic deployment to Vercel:

1. **Git Integration**: Connected to GitHub repository
2. **Automatic Deployments**: Every push to `main` branch triggers a new deployment
3. **GitHub Actions**: Workflow configured to trigger Vercel deployments

### Manual Deployment

Deploy to Vercel using the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly in the [Vercel Dashboard](https://vercel.com/dashboard).

## 🎯 What is StatsAI?

StatsAI is an **AI-driven website analytics and sales platform** that helps businesses:

- 📊 **Track Performance**: Real-time website analytics and metrics
- 🤖 **AI Insights**: Get intelligent recommendations and predictions
- 💰 **Sales Analytics**: Monitor sales performance and conversion rates
- 📈 **Custom Dashboards**: Build personalized analytics views
- 🔗 **Integrations**: Connect with your favorite tools and platforms
- 📱 **Mobile Access**: Monitor your data anywhere, anytime

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier-friendly formatting
- Component-based architecture

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For questions or suggestions, please contact the repository owner.

## 🔗 Links

- **Live Site**: [Deployed on Vercel]
- **Repository**: [GitHub](https://github.com/Sliim-Bouzidi/statsai)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **ShadCN UI**: [Component Library](https://ui.shadcn.com/)

---

Built with ❤️ using Next.js, TypeScript, and ShadCN UI
