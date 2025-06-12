import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg);
  border-bottom: 1px solid #e0e0e0;
  position: relative;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
`;

export const DesktopMenu = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%;
  right: 1rem;
  background-color: var(--bg);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuItem = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "$active",
})<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  line-height: 1;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  background-color: ${({ $active }) =>
    $active ? "var(--text)" : "transparent"};
  color: ${({ $active }) => ($active ? "var(--bg)" : "var(--text)")};

  &:hover {
    opacity: 0.75;
  }
`;

export const ThemeToggle = styled.button`
  font-size: 1.25rem;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    opacity: 0.75;
  }
`;
