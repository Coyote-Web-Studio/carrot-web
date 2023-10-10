import { Button, Typography } from "@carrot-kpi/ui";
import { COMMUNITY_DATA } from "../../constants";
import { cva } from "class-variance-authority";
import AnimatedText from "../AnimatedText";
import { useParallax, useParallaxController } from "react-scroll-parallax";
import { useCallback } from "react";

const socialsSectionStyles = cva(
    "flex flex-col lg:flex-row flex-1 w-full px-10 md:px-14 py-8 border-black",
    {
        variants: {
            borderBottom: {
                true: "border-b",
                false: "border-b-0",
            },
        },
    },
);

const JoinTheCommunity = () => {
    const parallaxController = useParallaxController();
    const { ref: chainRef } = useParallax<HTMLDivElement>({
        speed: -20,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div
            id="community"
            className="w-full flex flex-col xl:flex-row bg-orange relative"
        >
            <div
                className="absolute md:right-[5%] lg:right-[10%] hidden md:block z-10 md:w-48 md:h-48 lg:w-72 lg:h-72 md:top-[70%]"
                ref={chainRef}
            >
                <picture>
                    <img
                        alt="Carrot Chain"
                        src="/parallax/chain.png"
                        onLoad={handleParallaxImageLoading}
                        className="object-cover"
                    />
                </picture>
            </div>
            <div
                className="w-full flex justify-center px-4 md:px-10 lg:px-14 xl:px-40 py-4 md:py-6 lg:py-12 xl:py-20"
                data-aos="fade-up"
            >
                <div className="w-full max-w-screen-2xl py-10">
                    <Typography
                        variant="h2"
                        className={{
                            root: "text-[3rem] md:text-[3.5rem] lg:text-[4rem] px-6 pt-6 pb-10 border border-black border-b-0 max-w-xl",
                        }}
                    >
                        <AnimatedText speed={20} text="Join the community" />
                    </Typography>
                    <div className="border border-black flex">
                        <div className="w-16 border-r border-black flex flex-col justify-between">
                            <div className="flex items-center whitespace-nowrap transform -rotate-90 translate-y-28">
                                <Typography>• GET UPDATES</Typography>
                            </div>
                            <div className="flex items-center whitespace-nowrap transform -rotate-90 -translate-y-10">
                                <Typography>• DON&apos;T BE SHY</Typography>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            {COMMUNITY_DATA.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={socialsSectionStyles({
                                            borderBottom:
                                                index !==
                                                COMMUNITY_DATA.length - 1,
                                        })}
                                    >
                                        <picture className="flex items-center mr-10">
                                            <img
                                                src={data.img}
                                                alt="discord"
                                                className="w-40 object-cover"
                                            />
                                        </picture>
                                        <div className="flex flex-col justify-center gap-4 max-w-sm lg:mt-20">
                                            <Typography>
                                                {data.detail}
                                            </Typography>
                                            <div className="flex justify-start lg:justify-end dark">
                                                <Button
                                                    variant="primary"
                                                    href={data.buttonLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {data.buttonLabel}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hidden md:block md:relative xl:w-1/2 justify-center items-center">
                <picture className="w-full h-full">
                    <img
                        src="/community-background.png"
                        alt="footer-img"
                        className="object-cover w-full h-full"
                    />
                </picture>
                <picture className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44">
                    <img
                        src="/carrot_logo.svg"
                        alt="footer-logo"
                        className="object-cover w-full h-full"
                    />
                </picture>
            </div> */}
        </div>
    );
};

export default JoinTheCommunity;
