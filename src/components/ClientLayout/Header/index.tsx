"use client";

import { usePathname } from "next/navigation";
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

  return (
    <Styled.Container>
      <Styled.Logo>JHG</Styled.Logo>

      <Styled.Menu>
        {NAV_ITEMS.map(({ label, href }) => (
          <Styled.MenuItem key={href} href={href} $active={pathname === href}>
            {label}
          </Styled.MenuItem>
        ))}

        <Styled.ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </Styled.ThemeToggle>
      </Styled.Menu>
    </Styled.Container>
  );
}
