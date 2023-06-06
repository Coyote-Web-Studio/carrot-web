import { CARROT_DOMAIN } from "../../constants";
import { Typography, Button } from "@carrot-kpi/ui";

const Hero = () => {
    return (
        <div className="pb-6 flex justify-center">
            <div className="flex flex-col md:flex-row md:items-center gap-32 px-6 pb-16 md:px-14 lg:px-36 pt-7 md:pt-24 md:pb-32">
                <div className="flex flex-col gap-10 w-full max-w-xl">
                    <Typography
                        variant="h1"
                        className={{ root: "text-[4.8rem] lg:text-[6.9rem]" }}
                    >
                        Reach your goals with a Carrot
                    </Typography>
                    <div className="flex flex-col gap-20">
                        <Typography variant="lg">
                            Increase your TVL, volume, price, engagement and
                            more. Yes, on any campaign. Carrot does it all.
                        </Typography>
                        <a
                            href={`https://app.${CARROT_DOMAIN}/#/create`}
                            target="_blank"
                            rel="noopener noreferred"
                            className="dark"
                        >
                            <Button>CREATE YOUR CAMPAIGN</Button>
                        </a>
                    </div>
                </div>
                <video
                    className="w-full md:w-1/2 aspect-video border border-black rounded-xl bg-gray-500"
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
    );
};

export default Hero;
