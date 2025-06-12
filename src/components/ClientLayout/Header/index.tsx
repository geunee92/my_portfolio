// components/Header/index.tsx
"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import * as Styled from "./index.styles";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Board", href: "/board" },
];

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Container>
      <Styled.Logo>JHG</Styled.Logo>

      <Styled.DesktopMenu>
        {NAV_ITEMS.map(({ label, href }) => (
          <Styled.MenuItem key={href} href={href} $active={pathname === href}>
            {label}
          </Styled.MenuItem>
        ))}

        <Styled.ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </Styled.ThemeToggle>
      </Styled.DesktopMenu>

      <Styled.MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </Styled.MobileMenuButton>

      {isOpen && (
        <Styled.MobileMenu>
          {NAV_ITEMS.map(({ label, href }) => (
            <Styled.MenuItem key={href} href={href} $active={pathname === href}>
              {label}
            </Styled.MenuItem>
          ))}

          <Styled.ThemeToggle onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </Styled.ThemeToggle>
        </Styled.MobileMenu>
      )}
    </Styled.Container>
  );
}
