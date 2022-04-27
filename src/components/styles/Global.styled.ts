import { createGlobalStyle } from 'styled-components';
import { themeProps } from './Theme.styled';

export const GlobalStyles = createGlobalStyle<themeProps>`
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.colors.dark};
        height: 100%;
    }

    html {
        font-size: 16px;
    }

    body {
        padding-top: ${({ theme }) => theme.heights.header};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        margin-top: 0;
        margin-bottom: 1em;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
        }
    }

    p {
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 1em;
    }
`;
