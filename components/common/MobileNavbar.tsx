import React, { MouseEventHandler, ReactElement } from "react";
import Logo from "../../icons/logo";
import { NAV_LINKS } from "../../constants";
import X from "../../icons/x";

interface MobileNavbarProps {
    onClose: MouseEventHandler;
}

const MobileNavbar = ({ onClose }: MobileNavbarProps): ReactElement => {
    return (
        <div className="fixed top-0 left-0 w-full z-10">
            <div className="flex h-screen justify-between bg-white bg-grid-light px-6 py-8">
                <div className="w-full flex flex-col gap-10">
                    <div className="w-full mt-2 flex justify-between items-center">
                        <Logo className="w-32 h-8 text-black" />
                        <X
                            className="cursor-pointer w-7 h-7"
                            onClick={onClose}
                        />
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => {
                                return (
                                    <li key={link.to}>
                                        <a
                                            className="flex items-start space-x-2 cursor-pointer"
                                            href={`#${link.to}`}
                                            onClick={onClose}
                                        >
                                            <span className="font-mono text-2xl xl:text-base">
                                                ↳
                                            </span>
                                            <p className="font-mono text-black text-2xl hover:underline xl:text-base uppercase underline-offset-[12px]">
                                                {link.label}
                                            </p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
