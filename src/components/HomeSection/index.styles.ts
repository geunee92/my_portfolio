import styled from "@emotion/styled";
import Link from "next/link";

export const TextWrapper = styled.div`
  flex: 1.8;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
`;

export const Line = styled.div`
  width: 3rem;
  height: 3px;
  background-color: var(--text);
  margin: 1rem 0;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const AnimateWord = styled.span`
  font-weight: 700;
  margin-left: 0.5rem;
  display: inline-block;
  min-width: 100px;
`;

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: var(--text);
  color: var(--bg);
  font-weight: 500;
  border: none;
  border-radius: 4px;
  width: fit-content;
  min-width: 140px;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
