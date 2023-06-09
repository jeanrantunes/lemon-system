import { createGlobalStyle } from 'styled-components'
import theme from './Theme'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    html, body {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        background: teal;
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    p {
        margin-bottom: ${theme.space[0]};
        font-size: ${theme.font.default};
        font-weight: 300;
        line-height: 24px;
    }
    .overflow-hidden {
        overflow: hidden;
    }
`
