import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const Detail = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;

  ul {
    list-style-type: square;
    padding-left: 1.25rem;
    margin-top: 0.5rem;
  }

  ol {
    list-style-type: disc;
    padding-left: 1.75rem;
    margin-top: 0.25rem;
  }

  li {
    margin-bottom: 0.3rem;
  }
`;
