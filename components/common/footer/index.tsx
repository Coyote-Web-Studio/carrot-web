import React, { useCallback } from "react";
import { CARROT_DOMAIN, FooterLink } from "../../../constants";
import { FooterLinks } from "./footer-column";
import Logo from "../../../icons/logo";
import { Button } from "@carrot-kpi/ui";
import { useParallax, useParallaxController } from "react-scroll-parallax";

interface FooterProps {
    footerLinks: FooterLink[];
}

export const Footer = ({ footerLinks }: FooterProps) => {
    const parallaxController = useParallaxController();
    const { ref: sphereRef } = useParallax<HTMLDivElement>({
        speed: -20,
    });
    const { ref: curveRef } = useParallax<HTMLDivElement>({
        speed: -30,
    });
    const { ref: hexagonRef } = useParallax<HTMLDivElement>({
        speed: -10,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div className="w-full py-16 bg-black md:py-24 lg:py-32 relative">
            <div
                className="absolute left-[6%] lg:left-[10%] hidden md:block z-10 md:w-16 md:h-16 lg:w-24 lg:h-24 md:top-[10%]"
                ref={sphereRef}
            >
                <picture>
                    <img
                        alt="Sphere"
                        src="/parallax/sphere.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            <div
                className="absolute right-[30%] lg:right-[40%] hidden md:block z-10 md:w-16 md:h-16 lg:w-24 lg:h-24 md:bottom-[30%]"
                ref={curveRef}
            >
                <picture>
                    <img
                        alt="Gold Curve"
                        src="/parallax/gold-curve.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            <div
                className="absolute right-[10%] lg:right-[15%] hidden md:block z-10 md:w-32 md:h-32 lg:w-40 lg:h-40 md:top-[20%]"
                ref={hexagonRef}
            >
                <picture>
                    <img
                        alt="Hexagon"
                        src="/parallax/hexagon.png"
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
            <div className="flex flex-col justify-between px-6 pt-8 space-y-24 md:pt-24 lg:pt-32 md:px-24 xl:px-32 xl:space-y-0 xl:flex-row xxl:px-52">
                <div className="grid grid-cols-2 gap-8 xs:gap-10 md:gap-0 md:flex xl:space-x-6">
                    {footerLinks.map(({ title, links }) => (
                        <FooterLinks key={title} title={title} links={links} />
                    ))}
                </div>
                <div className="flex items-end dark">
                    <Button
                        href={`https://app.${CARROT_DOMAIN}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Carrot app
                    </Button>
                </div>
            </div>
        </div>
    );
};
