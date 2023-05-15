import { initialize as initializeFathom } from "use-fathom-client";
import { registeredEventsResolver } from "../../out/fathom/utilities";

const FATHOM_SITE_ID = process.env.NEXT_PUBLIC_FATHOM_SITE_ID;

if (!FATHOM_SITE_ID) console.warn("Fathom tracking is disabled");

const Fathom = () => {
    if (FATHOM_SITE_ID)
        initializeFathom(
            FATHOM_SITE_ID,
            {
                src: "https://cdn.usefathom.com/script.js",
                "data-auto": false,
                "data-spa": "auto",
            },
            registeredEventsResolver
        )
            .then(() => {
                console.log("fathom initialized successfully");
            })
            .catch((error) => {
                console.error("could not initialize fathom", error);
            });

    return null;
};

export default Fathom;
