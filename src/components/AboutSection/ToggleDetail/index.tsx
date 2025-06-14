"use client";

import { useState } from "react";
import * as Styled from "./index.styles";

interface ToggleDetailProps {
  summary: React.ReactNode;
  children: React.ReactNode;
}

export function ToggleDetail({ summary, children }: ToggleDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {summary}

      <Styled.ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "▲ 닫기" : "▼ 자세히 보기"}
      </Styled.ToggleButton>

      {isOpen && <Styled.Detail>{children}</Styled.Detail>}
    </div>
  );
}
