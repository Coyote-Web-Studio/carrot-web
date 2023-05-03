import Router from "next/router";
import NProgress from "nprogress";

import { useEffect } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Loading = () => {
    useEffect(() => {
        NProgress.start();

        let imgs = document.images,
            len = imgs.length,
            counter = 0;

        const incrementCounter = () => {
            counter++;
            if (counter === len) {
                NProgress.done();
            }
        };

        [].forEach.call(imgs, (img: any) => {
            if (img.complete) incrementCounter();
            else img.addEventListener("load", incrementCounter, false);
        });
    }, []);

    return <></>;
};

export default Loading;
