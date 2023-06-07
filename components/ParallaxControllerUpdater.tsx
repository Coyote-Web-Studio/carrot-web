import { useRouter } from "next/router";
import { useEffect } from "react";
import { useParallaxController } from "react-scroll-parallax";

const ParallaxControllerUpdater = () => {
    const router = useRouter();
    const parallaxController = useParallaxController();

    useEffect(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController, router.pathname]);

    return null;
};

export default ParallaxControllerUpdater;
