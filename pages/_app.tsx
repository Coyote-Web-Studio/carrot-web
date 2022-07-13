import 'aos/dist/aos.css'
import '@splidejs/react-splide/css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import ThemeContext from './../context/theme';
import GlobalStyle from '../styles/global.css';

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

