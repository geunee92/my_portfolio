import { Global, css } from "@emotion/react";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --bg: #ffffff;
          --text: #000000;
        }

        [data-theme="dark"] {
          --bg: #121212;
          --text: #ffffff;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          font-family: "Pretendard", sans-serif;
          background-color: var(--bg);
          color: var(--text);
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
}
