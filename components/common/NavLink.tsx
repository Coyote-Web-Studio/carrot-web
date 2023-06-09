import { Typography } from "@carrot-kpi/ui";
import React, { useCallback } from "react";
import { type NavLink as NavLinkType } from "../../constants";

interface NavLinkProps extends NavLinkType {
    onClick?: () => void;
}

const NavLink = ({ to, label, onClick }: NavLinkProps) => {
    const handleClick = useCallback(
        (event: React.MouseEvent) => {
            event.preventDefault();
            if (onClick) onClick();
            let element = document.getElementById(to);
            if (!element) return;
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        },
        [onClick, to]
    );

    return (
        <a href="" onClick={handleClick}>
            <Typography>↳ {label}</Typography>
        </a>
    );
};

export default NavLink;
