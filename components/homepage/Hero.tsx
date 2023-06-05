import Fade from "../common/Fade";
import AnimatedText from "../common/AnimatedText";
import { CARROT_DOMAIN } from "../../constants";
import { Typography, Button } from "@carrot-kpi/ui";

const Hero = () => {
    return (
        <div className="pb-6 flex justify-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pb-16 md:px-14 lg:px-36 pt-7 md:pt-24 md:pb-32">
                <div className="flex flex-col gap-10 w-full max-w-2xl">
                    <Typography
                        variant="h1"
                        className={{ root: "text-[4.8rem] lg:text-[6.9rem]" }}
                    >
                        <AnimatedText speed={20}>
                            Reach your goals with a Carrot
                        </AnimatedText>
                    </Typography>
                    <Fade className="flex flex-col gap-10">
                        <Typography variant="lg">
                            <AnimatedText speed={5} initialDelay={500}>
                                Increase your TVL, volume, price, engagement and
                                more. Yes, on any campaign. Carrot does it all.
                            </AnimatedText>
                        </Typography>
                        <Fade>
                            <a
                                href={`https://app.${CARROT_DOMAIN}/#/create`}
                                target="_blank"
                                rel="noopener noreferred"
                                className="dark"
                            >
                                <Button>CREATE YOUR CAMPAIGN</Button>
                            </a>
                        </Fade>
                    </Fade>
                </div>
                <div className="w-full md:w-1/2">
                    <video
                        className="aspect-video rounded-xl bg-gray-500"
                        controls
                    >
                        <source
                            src="https://d2l3j8l4t44bvz.cloudfront.net"
                            type="video/webm"
                        />
                        Not supported
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Hero;
