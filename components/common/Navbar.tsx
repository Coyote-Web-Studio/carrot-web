import { useCallback, useState } from "react";
import Logo from "../../icons/logo";
import { Button } from "@carrot-kpi/ui";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { CARROT_DOMAIN, NAV_LINKS } from "../../constants";
import Menu from "../../icons/menu";

const Navbar = () => {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

    const handleMobileNavbarOpen = useCallback(() => {
        setIsMobileNavbarOpen(true);
        document.body.style.overflow = "hidden";
    }, []);

    const handleMobileNavbarClose = useCallback(() => {
        setIsMobileNavbarOpen(false);
        document.body.style.overflow = "auto";
    }, []);

    return (
        <div className="flex w-full px-6 xl:px-32 py-8 xl:py-11">
            <div className="w-full flex items-center justify-between">
                <Logo className="w-32 h-auto xl:w-[188px] text-black" />
                <div className="hidden md:block">
                    <nav className="flex md:space-x-8 lg:space-x-12">
                        {NAV_LINKS.map((link, index) => {
                            return <NavLink key={index} {...link} />;
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
                <div className="flex gap-6">
                    <a
                        href={`https://app.${CARROT_DOMAIN}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark hidden md:block"
                    >
                        <Button size="small">CARROT APP</Button>
                    </a>
                    <div className="md:hidden flex items-center">
                        <Menu
                            className="cursor-pointer xl:hidden w-7 h-7"
                            onClick={handleMobileNavbarOpen}
                        />
                    </div>
                </div>
            </div>
            {isMobileNavbarOpen && (
                <MobileNavbar onClose={handleMobileNavbarClose} />
            )}
        </div>
    );
};

export default Navbar;
