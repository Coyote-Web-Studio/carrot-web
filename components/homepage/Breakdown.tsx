import Fade from "../common/Fade";
import AnimatedText from "../common/AnimatedText";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { MAIN_CONTENT } from "../../constants";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";

const sectionStyles = cva(
    ["flex flex-col md:flex-row md:justify-center gap-16"],
    {
        variants: {
            reverseRow: {
                true: ["md:flex-row-reverse"],
            },
        },
    }
);

const Breakdown = () => {
    const { ref: sphereRef } = useParallax<HTMLImageElement>({
        speed: -10,
    });

    return (
        <div id="about" className="relative flex flex-col gap-40 my-40">
            <div className="absolute right-12 lg:right-40 hidden md:block z-10 md:w-16 md:h-16 lg:w-40 lg:h-40 md:top-40">
                <Image
                    alt="Sphere"
                    fill
                    src="/misc/sphere.png"
                    ref={sphereRef}
                />
            </div>
            {MAIN_CONTENT.map((contentBlock, index: number) => {
                return (
                    <Fade
                        key={index}
                        sx={{
                            mb: ["4.8rem", null, null, "6.4rem"],
                            position: "relative",
                            "&:last-child": {
                                mb: "0",
                            },
                        }}
                    >
                        <div
                            className={sectionStyles({
                                reverseRow: index % 2 !== 0,
                            })}
                        >
                            <picture>
                                <img
                                    src={contentBlock.image}
                                    alt="img"
                                    className="border border-black rounded-2xl w-full h-[19.2rem] md:w-[33.125rem] md:h-[24rem] lg:w-[44rem] lg:h-[24rem]"
                                />
                            </picture>
                            <div className="flex flex-col max-w-3xl justify-center">
                                <Typography
                                    variant="h2"
                                    className={{ root: "text-[4.3rem] mb-8" }}
                                >
                                    <AnimatedText speed={20}>
                                        {contentBlock.heading}
                                    </AnimatedText>
                                </Typography>
                                <Typography variant="lg">
                                    <AnimatedText speed={5}>
                                        {contentBlock.content}
                                    </AnimatedText>
                                </Typography>
                            </div>
                        </div>
                    </Fade>
                );
            })}
        </div>
    );
};

export default Breakdown;
