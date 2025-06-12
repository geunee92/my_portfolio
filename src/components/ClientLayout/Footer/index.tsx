"use client";

import { FaGithub } from "react-icons/fa";
import * as Styled from "./index.styles";

export default function Footer() {
  return (
    <Styled.Container>
      <Styled.Text>© 2025 JHG. All rights reserved.</Styled.Text>
      <Styled.IconLink
        href="https://github.com/geunee92/my_portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
      </Styled.IconLink>
    </Styled.Container>
  );
}
