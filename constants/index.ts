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
        label: "PARTNER",
        to: "partners",
    },
    {
        label: "CAMPAIGNS",
        to: "campaigns",
    },
    {
        label: "COMMUNITY",
        to: "community",
    },
];

interface ContentBlock {
    heading: string;
    content: string;
    image: string;
}

export const MAIN_CONTENT: ContentBlock[] = [
    {
        heading: "Measure what matters",
        content:
            "Carrot allows you to set precise goals and targets based on the needs of your project. Use strong cryptoeconomic incentives to bring your community together and achieve common goals.",
        image: "/main-content/measure.png",
    },
    {
        heading: "Incentivize your community",
        content:
            "Encourage positive feedback through collective efforts by rewarding users when important milestones and goals are met. Carrot has helped distribute over $XX in rewards to date.",
        image: "/main-content/incentivize.png",
    },
    {
        heading: "Reward real value",
        content:
            "Anyone who contributes to a goal will receive rewards directly proportional to their impact thanks to the magic of KPI tokens. Get real value in exchange for real value. ",
        image: "/main-content/reward.png",
    },
];
