import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  body,
  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }   

  ul {
    padding: 0;
  }

  h2 {
    font-size: 4rem;
    line-height: 4.8rem;
    letter-spacing: -0.02rem;
  }

  h3 {
    font-size: 3.3rem;
    line-height: 3.36rem;
    letter-spacing: -0.02rem;
  }

  p {
    font-family: 'IBM Plex Mono';
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  button {
    font-family: 'IBM Plex Mono'
  }
`;

export default GlobalStyle;
