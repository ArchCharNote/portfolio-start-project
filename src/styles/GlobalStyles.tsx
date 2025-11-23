import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        height: 6px;
        width: 4px;
    }

    *::-webkit-scrollbar-track {
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background: ${Theme.colors.active};
        border: 1px solid #5e83f6;
        border-radius: 10px;
    }

    *::selection {
        color: ${Theme.colors.text};
        background-color: ${Theme.colors.primaryBg};
    }

    *:visited {
        color: ${Theme.colors.text};
    }

    body {
        font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.text};

    }

    a {
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        color: ${Theme.colors.text};
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section {
        background-color: ${Theme.colors.primaryBg};
    }

    h2 {
        font-size: 32px;
    }
`;
