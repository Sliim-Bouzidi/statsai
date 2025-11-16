"use client"

import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This runs immediately on mount to ensure theme is synced
    try {
      const savedTheme = localStorage.getItem("theme")
      const theme = savedTheme || "dark"
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } catch (e) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return <>{children}</>
}

