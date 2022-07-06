// import '../styles/globals.css';
// import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from './../themes/light';
import darkTheme from './../themes/dark';
import GlobalStyle from '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
