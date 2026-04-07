"use client";

import { AnimatePresence, motion } from "framer-motion";
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Styled.Detail>{children}</Styled.Detail>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
