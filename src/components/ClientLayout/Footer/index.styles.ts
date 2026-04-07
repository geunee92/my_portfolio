import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  height: 40px;
`;

export const Text = styled.p`
  font-size: 0.85rem;
`;

export const IconLink = styled.a`
  color: var(--text);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
