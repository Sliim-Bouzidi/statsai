"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Twitter, Linkedin, Github, Sparkles, Menu, X } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll(".char")
      
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.03,
        }
      )
    }
  }, [])

  useEffect(() => {
    if (testimonialsRef.current) {
      // Get all testimonial cards (excluding duplicates)
      const allCards = testimonialsRef.current.querySelectorAll(".testimonial-card")
      const cards = Array.from(allCards) as HTMLElement[]
      
      if (cards.length > 0) {
        // Set initial state for all cards immediately
        cards.forEach(card => {
          gsap.set(card, {
            y: 100,
            opacity: 0,
            force3D: true,
          })
        })
        
        // Animate all cards with stagger
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.8,
            from: "start",
          },
          force3D: true,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none none",
            markers: false,
          },
        })
      }
    }
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === testimonialsRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  const headlineText = "INTELLIGENT ANALYTICS, FINALLY."
  const words = headlineText.split(" ")

  return (
    <div className="min-h-screen w-full">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-lg sm:text-xl font-bold text-foreground">
              StatsAI
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="gap-1 lg:gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#integrations"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Integrations
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#docs"
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button variant="secondary" size="default" className="text-sm lg:text-base">
              Login
            </Button>
            <Button variant="default" size="default" className="text-sm lg:text-base">
              Join up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-background/98 backdrop-blur-lg border-b border-border/40 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto max-w-[1920px] px-4 py-6 space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              About
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Integrations
            </a>
            <a
              href="#docs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              Docs
            </a>
            <div className="pt-4 space-y-3 border-t border-border/40">
              <Button variant="secondary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Button>
              <Button variant="default" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Join up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[100vh] sm:min-h-[110vh] w-full items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 w-full pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 md:pt-28 md:pb-20 md:px-8 lg:pt-32 lg:pb-24 lg:px-12 xl:pt-36 xl:pb-28 xl:px-16 2xl:px-20">
          <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px]">
            <div className="flex flex-col items-center text-center gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:items-center lg:text-left lg:gap-4 xl:gap-6">
              {/* Text Content */}
              <div className="flex-1 w-full max-w-4xl 2xl:max-w-5xl order-2 lg:order-1">
                <h1 
                  ref={headlineRef}
                  className="mb-6 sm:mb-8 md:mb-10 flex flex-col justify-center lg:justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-none tracking-tight text-foreground title-1600"
                  style={{ lineHeight: "1.1" }}
                >
                  {words.map((word, wordIndex) => {
                    const isFinally = word === "FINALLY."
                    return (
                      <div
                        key={wordIndex}
                        className="overflow-hidden block"
                      >
                        {word.split("").map((char, charIndex) => (
                          <span
                            key={`${wordIndex}-${charIndex}`}
                            className={`char inline-block ${isFinally ? "text-violet-500" : ""}`}
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    )
                  })}
                </h1>
                <div className="flex justify-center lg:justify-start">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg w-full sm:w-auto px-8 sm:px-10">
                    Try it out
                  </Button>
                </div>
              </div>
              
              {/* Lottie Animation */}
              <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-start order-1 lg:order-2 mb-4 sm:mb-0">
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] lottie-1600">
                  <DotLottieReact
                    src="https://lottie.host/bf287802-0987-44b9-b9d1-b430ae2def6e/FzWeS0DLRz.lottie"
                    loop
                    autoplay
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section ref={testimonialsRef} className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mb-12 sm:mb-16 text-center">
            <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
              Testimonials
            </Badge>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              Loved by teams worldwide
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              See what our customers have to say about their experience with StatsAI.
            </p>
          </div>
        </div>

        {/* Top Row - Animate Left */}
        <div className="mb-6 sm:mb-8 flex gap-3 sm:gap-4">
          <div className="flex animate-marquee-left gap-3 sm:gap-4">
            {[
              { name: "Sarah Chen", quote: "StatsAI transformed our analytics. Incredible insights!", company: "TechFlow", initials: "SC" },
              { name: "Marcus Rodriguez", quote: "Real-time data that actually makes sense.", company: "GrowthCo", initials: "MR" },
              { name: "Emily Thompson", quote: "Best analytics platform we've ever used.", company: "InnovateLabs", initials: "ET" },
              { name: "David Kim", quote: "AI insights increased our conversions by 60%.", company: "DataDrive", initials: "DK" },
              { name: "Lisa Wang", quote: "Custom dashboards changed how we work.", company: "ScaleUp", initials: "LW" },
              { name: "James Miller", quote: "Outstanding support and powerful features.", company: "NextGen Analytics", initials: "JM" },
              { name: "Alex Patel", quote: "The AI recommendations are spot-on every time.", company: "CloudTech", initials: "AP" },
              { name: "Maria Garcia", quote: "Game-changing analytics for our team.", company: "StartupHub", initials: "MG" },
              { name: "Ryan Chen", quote: "Intuitive interface with deep insights.", company: "DataViz", initials: "RC" },
              { name: "Sophie Brown", quote: "StatsAI helped us double our revenue.", company: "GrowthMetrics", initials: "SB" },
            ].map((testimonial, idx) => (
              <Card key={`top-${idx}`} className="testimonial-card min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                <CardContent className="p-4 sm:p-6">
                  <CardDescription className="mb-3 sm:mb-4 text-xs sm:text-sm">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="size-8 sm:size-10">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { name: "Sarah Chen", quote: "StatsAI transformed our analytics. Incredible insights!", company: "TechFlow", initials: "SC" },
              { name: "Marcus Rodriguez", quote: "Real-time data that actually makes sense.", company: "GrowthCo", initials: "MR" },
              { name: "Emily Thompson", quote: "Best analytics platform we've ever used.", company: "InnovateLabs", initials: "ET" },
              { name: "David Kim", quote: "AI insights increased our conversions by 60%.", company: "DataDrive", initials: "DK" },
              { name: "Lisa Wang", quote: "Custom dashboards changed how we work.", company: "ScaleUp", initials: "LW" },
              { name: "James Miller", quote: "Outstanding support and powerful features.", company: "NextGen Analytics", initials: "JM" },
              { name: "Alex Patel", quote: "The AI recommendations are spot-on every time.", company: "CloudTech", initials: "AP" },
              { name: "Maria Garcia", quote: "Game-changing analytics for our team.", company: "StartupHub", initials: "MG" },
              { name: "Ryan Chen", quote: "Intuitive interface with deep insights.", company: "DataViz", initials: "RC" },
              { name: "Sophie Brown", quote: "StatsAI helped us double our revenue.", company: "GrowthMetrics", initials: "SB" },
            ].map((testimonial, idx) => (
              <Card key={`top-dup-${idx}`} className="min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                <CardContent className="p-4 sm:p-6">
                  <CardDescription className="mb-3 sm:mb-4 text-xs sm:text-sm">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="size-8 sm:size-10">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Row - Animate Right */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex animate-marquee-right gap-3 sm:gap-4">
            {[
              { name: "Tom Wilson", quote: "The insights are actionable and immediate.", company: "AnalyticsPro", initials: "TW" },
              { name: "Jessica Lee", quote: "Beautiful dashboards that tell a story.", company: "DataStory", initials: "JL" },
              { name: "Michael Zhang", quote: "StatsAI is the future of analytics.", company: "TechForward", initials: "MZ" },
              { name: "Rachel Green", quote: "Our team productivity increased 3x.", company: "ProductivityPlus", initials: "RG" },
              { name: "Chris Anderson", quote: "The AI predictions are incredibly accurate.", company: "PredictAI", initials: "CA" },
              { name: "Amanda White", quote: "Best investment we made this year.", company: "SmartInvest", initials: "AW" },
              { name: "Daniel Martinez", quote: "Real-time tracking revolutionized our workflow.", company: "WorkFlowPro", initials: "DM" },
              { name: "Olivia Taylor", quote: "Intuitive design meets powerful analytics.", company: "DesignData", initials: "OT" },
              { name: "Kevin Johnson", quote: "StatsAI gives us the edge we needed.", company: "CompetitiveEdge", initials: "KJ" },
              { name: "Nina Singh", quote: "The support team is exceptional.", company: "SupportFirst", initials: "NS" },
            ].map((testimonial, idx) => (
              <Card key={`bottom-${idx}`} className="testimonial-card min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                <CardContent className="p-4 sm:p-6">
                  <CardDescription className="mb-3 sm:mb-4 text-xs sm:text-sm">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="size-8 sm:size-10">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { name: "Tom Wilson", quote: "The insights are actionable and immediate.", company: "AnalyticsPro", initials: "TW" },
              { name: "Jessica Lee", quote: "Beautiful dashboards that tell a story.", company: "DataStory", initials: "JL" },
              { name: "Michael Zhang", quote: "StatsAI is the future of analytics.", company: "TechForward", initials: "MZ" },
              { name: "Rachel Green", quote: "Our team productivity increased 3x.", company: "ProductivityPlus", initials: "RG" },
              { name: "Chris Anderson", quote: "The AI predictions are incredibly accurate.", company: "PredictAI", initials: "CA" },
              { name: "Amanda White", quote: "Best investment we made this year.", company: "SmartInvest", initials: "AW" },
              { name: "Daniel Martinez", quote: "Real-time tracking revolutionized our workflow.", company: "WorkFlowPro", initials: "DM" },
              { name: "Olivia Taylor", quote: "Intuitive design meets powerful analytics.", company: "DesignData", initials: "OT" },
              { name: "Kevin Johnson", quote: "StatsAI gives us the edge we needed.", company: "CompetitiveEdge", initials: "KJ" },
              { name: "Nina Singh", quote: "The support team is exceptional.", company: "SupportFirst", initials: "NS" },
            ].map((testimonial, idx) => (
              <Card key={`bottom-dup-${idx}`} className="min-w-[280px] sm:min-w-[320px] flex-shrink-0">
                <CardContent className="p-4 sm:p-6">
                  <CardDescription className="mb-3 sm:mb-4 text-xs sm:text-sm">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="size-8 sm:size-10">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
              Features
            </Badge>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground px-4">
              Everything you need to understand your data
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Powered by AI, designed for simplicity. Get insights that matter
              without the complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
                <CardDescription>
                  Get intelligent recommendations and predictions from your data
                  using advanced machine learning algorithms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Real-Time Analytics</CardTitle>
                <CardDescription>
                  Monitor your website performance and sales metrics in
                  real-time with live dashboards and instant updates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Custom Dashboards</CardTitle>
                <CardDescription>
                  Build beautiful, customizable dashboards tailored to your
                  specific needs and business goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Sales Tracking</CardTitle>
                <CardDescription>
                  Track every sale, conversion, and revenue stream with
                  comprehensive sales analytics and reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">User Behavior Analysis</CardTitle>
                <CardDescription>
                  Understand how users interact with your site through detailed
                  heatmaps, session recordings, and behavior flows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Data Export</CardTitle>
                <CardDescription>
                  Export your data in multiple formats and integrate with your
                  existing tools and workflows seamlessly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative w-full bg-muted/30 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
              Pricing
            </Badge>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground px-4">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Choose the plan that fits your needs. All plans include a 14-day
              free trial.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Starter Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Starter</CardTitle>
                <CardDescription className="text-sm sm:text-base">Perfect for small businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">$29</span>
                  <span className="text-sm sm:text-base text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Up to 10,000 visitors/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Email support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">30-day data retention</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  Start free trial
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col border-primary shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl sm:text-2xl">Pro</CardTitle>
                  <Badge className="text-xs sm:text-sm">Popular</Badge>
                </div>
                <CardDescription className="text-sm sm:text-base">For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">$99</span>
                  <span className="text-sm sm:text-base text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Up to 100,000 visitors/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Advanced AI insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">1-year data retention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Custom integrations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Start free trial</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-sm sm:text-base">For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Unlimited visitors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Custom AI models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">Unlimited data retention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">White-label options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  Contact sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#252132]/80 p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 text-center backdrop-blur-xl">
            <div className="relative z-10 mx-auto max-w-4xl 2xl:max-w-5xl">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white px-4">
                Ready to unlock your data's potential?
              </h2>
              <p className="mx-auto mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 px-4">
                Join thousands of companies already using StatsAI to make smarter, data-driven decisions. Start your free trial today and see the difference intelligent analytics can make.
              </p>
              <div className="mb-6 sm:mb-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row sm:gap-6">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 w-full bg-primary px-6 sm:px-8 text-sm sm:text-base md:text-lg font-semibold text-white hover:bg-primary/90 sm:w-auto"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 w-full border-white/20 bg-white/5 px-6 sm:px-8 text-sm sm:text-base md:text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-white/70 px-4">
                No credit card required - 14-day free trial - Setup in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-border/50 bg-card/50 py-12 sm:py-16 md:py-20 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">StatsAI</h3>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                AI-driven analytics and sales platform for modern businesses.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
          </a>
          <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="text-muted-foreground transition-colors hover:text-foreground">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-muted-foreground transition-colors hover:text-foreground">
            Documentation
          </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 sm:my-10" />

          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 sm:flex-row text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} StatsAI. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
              Made with <Sparkles className="size-3 sm:size-4 text-primary animate-sparkle" /> By Slim Bouzidi
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
