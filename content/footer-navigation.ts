import { CARROT_DOMAIN } from "../constants";

const NAVIGATION = [
    {
        heading: "ABOUT",
        links: [
            // TODO: add link to faq once we have them
            // {
            //     label: "Faq",
            //     href: "#",
            // },
            {
                label: "Documentation",
                href: `https://docs.${CARROT_DOMAIN}`,
            },
            {
                label: "Audits",
                href: "https://github.com/carrot-kpi/v1-contracts/tree/main/audits",
            },
            // TODO: add link to brand assets
            // {
            //     label: "Brand Assets",
            //     href: "#",
            // },
        ],
    },
    {
        heading: "COMMUNITY",
        links: [
            {
                label: "Discord",
                href: "https://discord.gg/vssJce4H",
            },
            {
                label: "Twitter",
                href: "https://twitter.com/CarrotEth",
            },
            // TODO: add link back once we have it
            // {
            //     label: "Brand Forum",
            //     href: "#",
            // },
        ],
    },
    // TODO: add back this section once analytics are developed
    // {
    //     heading: "ANALYTICS",
    //     links: [
    //         {
    //             label: "FIY Liq. Mining",
    //             href: "#",
    //         },
    //     ],
    // },
];

export default NAVIGATION;
