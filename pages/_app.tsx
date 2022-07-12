// import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import ThemeContext from './../context/theme';
import GlobalStyle from '../styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Loading from '../components/common/Loading';
import Rellax from 'rellax';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let rellax = new Rellax('.rellax');
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

