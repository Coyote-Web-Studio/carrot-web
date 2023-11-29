import { Typography } from "@carrot-kpi/ui";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";
import X from "../icons/x";
import Discord from "../icons/discord";
import Medium from "../icons/medium";
import Github from "../icons/github";

export const CARROT_DOMAIN = `${
    process.env.NEXT_PUBLIC_STAGING === "true" ? "staging." : ""
}carrot.community`;

export interface NavLink {
    label: string;
    to: string;
}

export const NAV_LINKS: NavLink[] = [
    {
        label: "ABOUT",
        to: "about",
    },
    {
        label: "HOW IT WORKS",
        to: "how-it-works",
    },
    // {
    //     label: "PARTNER",
    //     to: "partners",
    // },
    // {
    //     label: "CAMPAIGNS",
    //     to: "campaigns",
    // },
    {
        label: "COMMUNITY",
        to: "community",
    },
];

export interface ContentBlock {
    heading: string;
    content: string;
    image: string;
}

export const MAIN_CONTENT_MEASURE: ContentBlock = {
    heading: "Incentivize with purpose",
    content:
        "Design your incentives that resonate with your community, ensuring actions are aligned with your project's goals.",
    image: "/main-content/measure.png",
};

export const MAIN_CONTENT_INCENTIVIZE: ContentBlock = {
    heading: "Incentivize with efficiency",
    content:
        "Distribute rewards only when objectives are achieved. This ensures that every token spent is an investment towards progress, resulting in better financial prudence and token utility.",
    image: "/main-content/incentivize.png",
};

export const MAIN_CONTENT_REWARD: ContentBlock = {
    heading: "Incentivize with flexibility",
    content:
        "Whether you're a DeFi project or a DAO running grants programs, Carrot's flexible platform can be tailored to suit your unique incentivization requirements. From goal setting to reward distribution, adapt Carrot to work best for you.",
    image: "/main-content/reward.png",
};

export interface HowItWorks {
    heading: string;
    triggerLabel: string;
    content: ReactNode;
}

export const HOW_IT_WORKS_CONTENT: HowItWorks[] = [
    {
        heading: "Create your campaign",
        triggerLabel: "Set conditions and collateral",
        content: (
            <div className="flex flex-col gap-10">
                <Typography variant="lg">
                    <AnimatedText
                        speed={5}
                        text="Use the campaign creation interface to set your campaign's goal, collateral, duration, and more. Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount."
                    />
                </Typography>
                <picture>
                    <img
                        src="/main-content/measure.png"
                        alt="create"
                        className="w-full h-72 border border-black rounded-2xl object-cover"
                    />
                </picture>
            </div>
        ),
    },
    {
        heading: "Distribute KPI tokens",
        triggerLabel: "Issue reward tokens to your community",
        content: (
            <div className="flex flex-col gap-10">
                <Typography variant="lg">
                    <AnimatedText
                        speed={5}
                        text="Distribute your KPI tokens to your community. This could be liquidity mining stakers, in-person event attendees, or anyone else relevant to your campaign. These tokens will later be redeemable by users for the underlying collateral depending on how much of the condition was met."
                    />
                </Typography>
                <picture>
                    <img
                        src="/main-content/incentivize.png"
                        alt="create"
                        className="w-full h-72 border border-black rounded-2xl object-cover"
                    />
                </picture>
            </div>
        ),
    },
    {
        heading: "Finalize and Redeem",
        triggerLabel: "Distribute rewards and claim collateral saved by Carrot",
        content: (
            <div className="flex flex-col gap-10">
                <Typography variant="lg">
                    <AnimatedText
                        speed={5}
                        text="At the end of the campaign, finalization will occur through the selected oracle. KPI token holders can then convert to the collateral at the settled rate. If 50% of the target is met, 50% of the rewards will be claimable by your community with the remaining 50% accessible to you."
                    />
                </Typography>
                <picture>
                    <img
                        src="/main-content/reward.png"
                        alt="create"
                        className="w-full h-72 border border-black rounded-2xl object-cover"
                    />
                </picture>
            </div>
        ),
    },
];

export interface CommunityData {
    img: ReactElement;
    buttonLabel: string;
    buttonLink: string;
}

export const COMMUNITY_DATA: CommunityData[] = [
    {
        img: <X className="stroke-white fill-white w-6 h-6" />,
        buttonLabel: "X",
        buttonLink: "https://twitter.com/CarrotEth",
    },
    {
        img: <Discord className="stroke-white fill-white w-8 h-8" />,
        buttonLabel: "Discord",
        buttonLink: "https://discord.gg/uRer2D4Pdf",
    },
    {
        img: <Medium className="stroke-white fill-white w-9 h-8" />,
        buttonLabel: "Medium",
        buttonLink: "https://medium.com/carrot-eth",
    },
    {
        img: <Github className="stroke-white fill-white w-9 h-9" />,
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/carrot-kpi",
    },
];

export interface FooterLink {
    Component?: FunctionComponent<any>;
    title: string;
    links: {
        Component?: FunctionComponent<any>;
        title: string;
        to: string;
    }[];
}

export const FOOTER_LINKS: FooterLink[] = [
    {
        title: "About",
        links: [
            // TODO: add link to faq once we have them
            // {
            //     Component: Link,
            //     title: "Faq",
            //     to: "/faq",
            // },
            {
                title: "Audits",
                to: "https://github.com/carrot-kpi/v1-contracts/tree/main/audits",
            },
            // TODO: add link to brand assets
            // {
            //     label: "Brand Assets",
            //     href: "#",
            // },
        ],
    },
    {
        title: "Community",
        links: [
            {
                title: "Discord",
                to: "https://discord.gg/uRer2D4Pdf",
            },
            {
                title: "Twitter",
                to: "https://twitter.com/CarrotEth",
            },
            { title: "Medium", to: "https://medium.com/carrot-eth" },
            // TODO: add link back once we have it
            // {
            //     label: "Brand Forum",
            //     href: "#",
            // },
        ],
    },
    {
        title: "Documentation",
        links: [
            {
                title: "Documentation Portal",
                to: `https://docs.${CARROT_DOMAIN}`,
            },
        ],
    },
    // TODO: add back this section once analytics are developed
    // {
    //     title: "Analytics",
    //     links: [
    //         {
    //             title: "Dune",
    //             to: "https://dune.com/hagaetc/dxdao",
    //         },
    //     ],
    // },
];
