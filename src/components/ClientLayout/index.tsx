"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "@/styles/globalStyles";
import Footer from "./Footer";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(stored === "dark" || (!stored && prefersDark) ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />

      <Header theme={theme} toggleTheme={toggleTheme} />

      {children}

      <Footer />
    </QueryClientProvider>
  );
}
