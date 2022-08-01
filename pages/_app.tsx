import 'aos/dist/aos.css'
import '@splidejs/react-splide/css'
import '../styles/nprogress.css';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import ThemeContext from './../context/theme';
import GlobalStyle from '../styles/global.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Loading from '../components/common/Loading';
import Rellax from 'rellax';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let rellax = new Rellax('.rellax');
    AOS.init({
      once: true
    });

    // Helper function
  let domReady = (cb : any) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
    };

    domReady(() => {
      // Display body when DOM is loaded
      document.body.style.visibility = 'visible';
    });
  }, []);

  return (
      <ThemeContext>
        <GlobalStyle />
        <ParallaxProvider>
          <Loading />
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeContext>
  )
}

export default MyApp;

