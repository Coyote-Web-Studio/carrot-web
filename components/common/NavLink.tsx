import { Typography } from "@carrot-kpi/ui";
import { useCallback } from "react";
import { type NavLink as NavLinkType } from "../../constants";

const NavLink = ({ to, label }: NavLinkType) => {
    const handleClick = useCallback(() => {
        let element = document.getElementById(to);
        if (!element) return;
        window.scrollTo({
            top: element.getBoundingClientRect().y
                ? element.getBoundingClientRect().y - 180
                : 0,
            behavior: "smooth",
        });
    }, [to]);

    return (
        <a href="#" onClick={handleClick}>
            <Typography>↳ {label}</Typography>
        </a>
    );
};

export default NavLink;
