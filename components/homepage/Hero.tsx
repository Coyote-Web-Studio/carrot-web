import { CARROT_DOMAIN } from "../../constants";
import { Typography, Button } from "@carrot-kpi/ui";
import AnimatedText from "../AnimatedText";

const Hero = () => {
    return (
        <div className="px-4 md:px-8 lg:px-48 pb-6 w-full flex justify-center">
            <div className="w-full flex flex-col lg:items-center lg:justify-center gap-20 md:gap-36 pb-16 pt-7 md:pt-24 md:pb-32">
                <div className="flex flex-col gap-10 flex-1 w-full">
                    <Typography
                        variant="h1"
                        className={{
                            root: "text-[4rem] md:text-[4.8rem] lg:text-[6.9rem]",
                        }}
                    >
                        <AnimatedText text="Unlock the power of incentivization" />
                    </Typography>
                    <div className="flex flex-col gap-14">
                        <Typography variant="lg" data-aos="fade-up">
                            <AnimatedText
                                text="Reimagine the potential of your community with Carrot. Turn goals into actions and celebrate every milestone with tailored rewards."
                                speed={10}
                            ></AnimatedText>
                        </Typography>
                        <a
                            href={`https://app.${CARROT_DOMAIN}`}
                            target="_blank"
                            rel="noopener noreferred"
                            className="dark"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <Button>CREATE YOUR CAMPAIGN</Button>
                        </a>
                    </div>
                </div>
                <div className="w-full flex-1 lg:max-w-5xl" data-aos="fade-up">
                    <video
                        controls
                        preload="metadata"
                        poster="/video-poster.png"
                        className="aspect-video w-full border border-black rounded-xl bg-gray-500 overflow-hidden"
                    >
                        <source
                            src={`https://static.${CARROT_DOMAIN}/hero-video.webm`}
                            type="video/webm"
                        />
                        <source
                            src={`https://static.${CARROT_DOMAIN}/hero-video.mp4`}
                            type="video/mp4"
                        />
                        Not supported
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Hero;
