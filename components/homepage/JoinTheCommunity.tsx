import { Button, Typography } from "@carrot-kpi/ui";
import { COMMUNITY_DATA } from "../../constants";
import { cva } from "class-variance-authority";
import AnimatedText from "../AnimatedText";

const socialsSectionStyles = cva("flex flex-1 w-full px-14 py-8 border-black", {
    variants: {
        borderBottom: {
            true: "border-b",
            false: "border-b-0",
        },
    },
});

const JoinTheCommunity = () => (
    <div id="community" className="w-full flex bg-orange">
        <div className="w-1/2" data-aos="fade-up">
            <div className="p-20">
                <Typography
                    variant="h2"
                    className={{
                        root: "text-[6rem] px-6 pt-6 pb-10 border border-black border-b-0 max-w-xl",
                    }}
                >
                    <AnimatedText speed={20} text="Join the community!" />
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
                                            index !== COMMUNITY_DATA.length - 1,
                                    })}
                                >
                                    <picture className="flex items-center mr-20">
                                        <img
                                            src={data.img}
                                            alt="discord"
                                            className="h-40 w-40"
                                        />
                                    </picture>
                                    <div className="flex flex-col justify-center gap-4 max-w-sm mt-20">
                                        <Typography>{data.detail}</Typography>
                                        <div className="flex justify-end dark">
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
        <div className="w-1/2">
            <picture>
                <img src="/footer-background.png" alt="footer-img" />
            </picture>
        </div>
    </div>
);

export default JoinTheCommunity;
