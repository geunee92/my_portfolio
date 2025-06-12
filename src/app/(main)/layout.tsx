"use client";

import Image from "next/image";
import { ReactNode } from "react";
import * as Styled from "./layout.styles";

export default function LeftRightLayout({ children }: { children: ReactNode }) {
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image src="/assets/hero.webp" alt="Profile" fill priority />
      </Styled.ImageWrapper>

      <Styled.TextWrapper>{children}</Styled.TextWrapper>
    </Styled.Container>
  );
}
