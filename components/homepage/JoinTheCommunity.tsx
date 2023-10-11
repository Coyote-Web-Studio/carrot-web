import { Button, Typography } from "@carrot-kpi/ui";
import AnimatedText from "../AnimatedText";
import { useParallax, useParallaxController } from "react-scroll-parallax";
import { useCallback } from "react";
import { COMMUNITY_DATA } from "../../constants";

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
            className="w-full flex flex-col justify-center xl:flex-row relative mb-16 pt-36"
        >
            <div className="bg-orange w-full max-w-screen-2xl flex justify-center rounded-2xl border border-black p-14">
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
                <div className="flex flex-col items-center gap-10 bg-orange bg-grid-light !bg-center w-fit p-9">
                    <Typography
                        variant="h4"
                        className={{
                            root: "text-[2.5rem] md:text-[4.5rem] lg:text-[4.5rem] text-center",
                        }}
                    >
                        <AnimatedText speed={20} text="Join the community!" />
                    </Typography>
                    <div className="flex md:flex-row justify-center gap-8 md:gap-14 flex-wrap">
                        {COMMUNITY_DATA.map((social) => (
                            <div
                                key={social.buttonLabel}
                                className="flex flex-col items-center gap-4"
                            >
                                <Button
                                    variant="primary"
                                    href={social.buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={{
                                        root: "rounded-full w-20 h-20",
                                    }}
                                >
                                    {social.img}
                                </Button>
                                <Typography uppercase>
                                    {social.buttonLabel}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinTheCommunity;
