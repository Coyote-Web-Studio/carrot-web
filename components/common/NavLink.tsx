import { Typography } from "@carrot-kpi/ui";
import React, { useCallback } from "react";
import { type NavLink as NavLinkType } from "../../constants";

const NavLink = ({ to, label }: NavLinkType) => {
    const handleClick = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            let element = document.getElementById(to);
            if (!element) return;
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        },
        [to]
    );

    return (
        <a href="" onClick={handleClick}>
            <Typography>↳ {label}</Typography>
        </a>
    );
};

export default NavLink;
