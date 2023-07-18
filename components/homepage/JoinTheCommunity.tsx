import { Button, Typography } from "@carrot-kpi/ui";
import { COMMUNITY_DATA } from "../../constants";
import { cva } from "class-variance-authority";
import AnimatedText from "../AnimatedText";

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

const JoinTheCommunity = () => (
    <div id="community" className="w-full flex flex-col xl:flex-row bg-orange">
        <div className="w-full xl:w-1/2" data-aos="fade-up">
            <div className="py-10 px-4 lg:p-20">
                <Typography
                    variant="h2"
                    className={{
                        root: "text-[3.5rem] md:text-[4.7rem] lg:text-[6rem] px-6 pt-6 pb-10 border border-black border-b-0 max-w-xl",
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
                                            index !== COMMUNITY_DATA.length - 1,
                                    })}
                                >
                                    <picture className="flex items-center mr-20">
                                        <img
                                            src={data.img}
                                            alt="discord"
                                            className="h-40 w-40 object-cover"
                                        />
                                    </picture>
                                    <div className="flex flex-col justify-center gap-4 max-w-sm lg:mt-20">
                                        <Typography>{data.detail}</Typography>
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
        <div className="hidden lg:block w-full h-full xl:w-1/2">
            <picture className="w-full h-full">
                <img
                    src="/footer-background.png"
                    alt="footer-img"
                    className="object-cover w-full h-full"
                />
            </picture>
        </div>
    </div>
);

export default JoinTheCommunity;
