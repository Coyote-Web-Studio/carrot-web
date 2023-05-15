import "../styles/nprogress.css";

import "aos/dist/aos.css";
import "@splidejs/react-splide/css";

import "@fontsource/inter/700.css";

import "@fontsource/ibm-plex-mono/300.css";
import "@fontsource/ibm-plex-mono/400.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import ThemeContext from "./../context/theme";
import GlobalStyle from "../styles/global.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Loading from "../components/common/Loading";
import { initialize as initializeFathom } from "use-fathom-client";
import { useFathomTrackPageWatch } from "../hooks/useFathomTrackPageWatch";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({ once: true });

        // Helper function
        let domReady = (cb: any) => {
            document.readyState === "interactive" ||
            document.readyState === "complete"
                ? cb()
                : document.addEventListener("DOMContentLoaded", cb);
        };

        domReady(() => {
            // Display body when DOM is loaded
            document.body.style.visibility = "visible";

            if (
                process.env.NODE_ENV === "production" &&
                process.env.NEXT_PUBLIC_FATHOM_SITE_ID
            ) {
                initializeFathom(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
                    src: "https://cdn.usefathom.com/script.js",
                    "data-auto": false,
                    "data-spa": "auto",
                })
                    .then(() => {
                        console.log("fathom initialized successfully");
                    })
                    .catch((error) => {
                        console.error("could not initialize fathom", error);
                    });
            }
        });
    }, []);

    useFathomTrackPageWatch();

    return (
        <ThemeContext>
            <GlobalStyle />
            <ParallaxProvider>
                <Loading />
                <Component {...pageProps} />
            </ParallaxProvider>
        </ThemeContext>
    );
}

export default MyApp;
