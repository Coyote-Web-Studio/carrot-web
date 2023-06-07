import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@carrot-kpi/switzer-font/400.css";
import "@carrot-kpi/switzer-font/500.css";
import "@carrot-kpi/switzer-font/700.css";
import "@carrot-kpi/ui/styles.css";

import "../styles/global.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { initialize as initializeFathom } from "use-fathom-client";
import { useFathomTrackPageWatch } from "../hooks/useFathomTrackPageWatch";
import ParallaxControllerUpdater from "../components/ParallaxControllerUpdater";

function App({ Component, pageProps }: AppProps) {
    useFathomTrackPageWatch();

    useEffect(() => {
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
    }, []);

    return (
        <ParallaxProvider>
            <ParallaxControllerUpdater />
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default App;
