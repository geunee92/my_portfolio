import { Global, css } from "@emotion/react";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --bg: #ffffff;
          --text: #000000;
          --muted: #cccccc;
          --border: #e0e0e0;
          --sub-text: #666666;
          --tag-bg: #eeeeee;
          --tag-text: #333333;
        }

        [data-theme="dark"] {
          --bg: #121212;
          --text: #ffffff;
          --muted: #444444;
          --border: #333333;
          --sub-text: #aaaaaa;
          --tag-bg: #2a2a2a;
          --tag-text: #dddddd;
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
