import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StatsAI - Intelligent Analytics Platform",
  description: "AI-driven analytics and sales platform for modern businesses. Get intelligent insights that matter without the complexity.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.2223 0.0060 271.1393)" },
    { media: "(prefers-color-scheme: light)", color: "oklch(0.9940 0 0)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" style={{ backgroundColor: 'oklch(0.2223 0.0060 271.1393)', color: 'oklch(0.9551 0 0)' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
        style={{
          backgroundColor: 'oklch(0.2223 0.0060 271.1393)',
          color: 'oklch(0.9551 0 0)',
          margin: 0,
          padding: 0,
        }}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const theme = savedTheme || 'dark';
                  const html = document.documentElement;
                  if (theme === 'dark') {
                    html.classList.add('dark');
                    html.style.backgroundColor = 'oklch(0.2223 0.0060 271.1393)';
                    html.style.color = 'oklch(0.9551 0 0)';
                    if (document.body) {
                      document.body.style.backgroundColor = 'oklch(0.2223 0.0060 271.1393)';
                      document.body.style.color = 'oklch(0.9551 0 0)';
                    }
                  } else {
                    html.classList.remove('dark');
                    html.style.backgroundColor = 'oklch(0.9940 0 0)';
                    html.style.color = 'oklch(0 0 0)';
                    if (document.body) {
                      document.body.style.backgroundColor = 'oklch(0.9940 0 0)';
                      document.body.style.color = 'oklch(0 0 0)';
                    }
                  }
                } catch (e) {
                  const html = document.documentElement;
                  html.classList.add('dark');
                  html.style.backgroundColor = 'oklch(0.2223 0.0060 271.1393)';
                  html.style.color = 'oklch(0.9551 0 0)';
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
