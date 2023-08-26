import { Typography } from "@carrot-kpi/ui";
import React, { FunctionComponent, ReactNode } from "react";
import AnimatedText from "../components/AnimatedText";

export const CARROT_DOMAIN =
    process.env.NEXT_PUBLIC_DEV === "true" ? "carrot-kpi.dev" : "carrot-kpi.io";

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

export const MAIN_CONTENT: ContentBlock[] = [
    {
        heading: "Incentivize with purpose",
        content:
            "Design incentives that resonate with your community, ensuring actions are aligned with your project's goals.",
        image: "/main-content/measure.png",
    },
    {
        heading: "Incentivize with efficiency",
        content:
            "Distribute rewards only when objectives are achieved. This ensures that every token spent is an investment towards progress, resulting in better financial prudence and token utility.",

        image: "/main-content/incentivize.png",
    },
    {
        heading: "Incentivize with flexibility",
        content:
            "Whether you're a DeFi project or a DAO running grants programs, Carrot's flexible platform can be tailored to suit your unique incentivization requirements. From goal setting to reward distribution, adapt Carrot to work best for you.",
        image: "/main-content/reward.png",
    },
];

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
    img: string;
    detail: string;
    buttonLabel: string;
    buttonLink: string;
}

export const COMMUNITY_DATA: CommunityData[] = [
    {
        img: "/community/discord.svg",
        detail: "Join in on community discussion on the Carrot Discord.",
        buttonLabel: "JOIN DISCORD",
        buttonLink: "https://discord.gg/uRer2D4Pdf",
    },
    {
        img: "/community/github.svg",
        detail: "Contribute to the Carrot repositories on Github.",
        buttonLabel: "JOIN GITHUB",
        buttonLink: "https://github.com/carrot-kpi",
    },
    {
        img: "/community/twitter.svg",
        detail: "Get the latest Carrot announcements on Twitter.",
        buttonLabel: "JOIN TWITTER",
        buttonLink: "https://twitter.com/CarrotEth",
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
                title: "Documentation",
                to: `https://docs.${CARROT_DOMAIN}`,
            },
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
            // TODO: add link back once we have it
            // {
            //     label: "Brand Forum",
            //     href: "#",
            // },
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
