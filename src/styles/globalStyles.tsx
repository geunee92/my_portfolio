// styles/globalStyles.ts
import { Global, css } from "@emotion/react";

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Pretendard", sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: all 0.2s ease-in-out;
  }
`;

export function GlobalStyles() {
  return <Global styles={style} />;
}
