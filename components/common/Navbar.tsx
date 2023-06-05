import { useEffect, useState } from "react";
import Logo from "./Logo";
import HamburgerIcon from "./HamburgerIcon";
import { Button } from "@carrot-kpi/ui";
import MobileNavbar from "./MobileNavbar";
import NavigationLink from "./NavLink";
import { CARROT_DOMAIN, NAV_LINKS } from "../../constants";

const Navbar = () => {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

    useEffect(() => {
        let body = document.querySelector("html");
        if (body !== null) {
            body.style.overflow = isMobileNavbarOpen ? "hidden" : "auto";
        }
    }, [isMobileNavbarOpen]);

    return (
        <div className="flex w-full px-6 xl:px-32 py-8 xl:py-11">
            <div className="w-full flex items-center justify-between">
                <Logo className="w-32 h-auto xl:w-[188px] text-black" />
                <div className="hidden sm:block">
                    <nav className="flex space-x-8">
                        {NAV_LINKS.map((link, index) => {
                            return <NavigationLink key={index} {...link} />;
                        })}
                    </nav>
                    {/* <StyleSwitch
                        sx={{
                            ml: ["2.4rem", "1.2rem", null, "3.2rem"],
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                {
                                    ml: "4.8rem",
                                },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                {
                                    ml: "6.4rem",
                                },
                        }}
                    /> */}
                </div>
                <a
                    href={`https://app.${CARROT_DOMAIN}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark"
                >
                    <Button>CARROT DAPP</Button>
                </a>
                <div className="mobile-controls inline-block sm:hidden ml-auto">
                    <HamburgerIcon
                        isOpen={isMobileNavbarOpen}
                        onClick={() => {
                            setIsMobileNavbarOpen(!isMobileNavbarOpen);
                        }}
                    />
                </div>
            </div>
            <MobileNavbar
                isOpen={isMobileNavbarOpen}
                setIsOpen={setIsMobileNavbarOpen}
            />
        </div>
    );
};

export default Navbar;
