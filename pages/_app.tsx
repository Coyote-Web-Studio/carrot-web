// import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import ThemeContext from './../context/theme';
import GlobalStyle from '../styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Loading from './../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <ThemeContext>
        <GlobalStyle />
        <Loading />
        <Component {...pageProps} />
      </ThemeContext>
  )
}

export default MyApp;

