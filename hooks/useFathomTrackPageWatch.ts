import { trackPageview } from "use-fathom-client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useFathomTrackPageWatch = () => {
    const { pathname } = useRouter();

    useEffect(() => {
        trackPageview({ url: pathname });
    }, [pathname]);

    return null;
};
