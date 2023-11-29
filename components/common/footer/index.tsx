import React, { useCallback } from "react";
import { CARROT_DOMAIN, FooterLink } from "../../../constants";
import { FooterLinks } from "./footer-column";
import Logo from "../../../icons/logo";
import { useParallax, useParallaxController } from "react-scroll-parallax";

interface FooterProps {
    footerLinks: FooterLink[];
}

export const Footer = ({ footerLinks }: FooterProps) => {
    const parallaxController = useParallaxController();
    const { ref: coneRef } = useParallax<HTMLDivElement>({
        speed: -5,
    });
    const { ref: carrotRef } = useParallax<HTMLDivElement>({
        speed: -20,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div className="flex flex-col items-center w-full py-16 bg-black md:py-24 lg:py-32 relative px-6 md:px-24 xl:px-32 xxl:px-52">
            <div
                className="absolute left-[16%] lg:left-[20%] hidden md:block z-10 md:w-20 md:h-20 lg:w-44 lg:h-44 md:top-[0%]"
                ref={coneRef}
            >
                <picture>
                    <img
                        alt="Cone"
                        src="/parallax/cone.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            <div
                className="absolute hidden left-0 right-0 mx-auto md:block z-10 w-1/2 top-[5%]"
                ref={carrotRef}
            >
                <picture>
                    <img
                        alt="Carrot"
                        src="/parallax/carrot.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            <div className="relative h-full mx-auto w-full md:w-[80%] bg-grid-dark">
                <div className="mx-auto py-14 md:py-24 xl:py-32 w-[80%]">
                    <Logo className="relative w-full h-auto text-orange" />
                </div>
            </div>
            <div className="flex justify-center w-full max-w-screen-2xl pt-8 md:pt-24 lg:pt-32">
                <div className="w-full flex flex-col justify-between xl:flex-row space-y-24 xl:space-y-0">
                    <div className="grid grid-cols-2 gap-8 xs:gap-10 md:gap-0 md:flex xl:space-x-6">
                        {footerLinks.map(({ title, links }) => (
                            <FooterLinks
                                key={title}
                                title={title}
                                links={links}
                            />
                        ))}
                    </div>
                    <div className="flex items-end">
                        <a
                            href={`https://app.${CARROT_DOMAIN}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-5 font-mono text-black border border-black bg-orange rounded-xxl"
                        >
                            Carrot app
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
