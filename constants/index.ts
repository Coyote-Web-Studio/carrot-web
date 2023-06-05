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
