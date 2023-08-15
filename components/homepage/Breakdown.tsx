import { useParallax, useParallaxController } from "react-scroll-parallax";
import {
    ContentBlock as ContentBlockType,
    MAIN_CONTENT_MEASURE,
    MAIN_CONTENT_INCENTIVIZE,
    MAIN_CONTENT_REWARD,
} from "../../constants";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";
import { ReactElement, useCallback, useRef } from "react";
import AnimatedText from "../AnimatedText";

const sectionStyles = cva(
    [
        "relative",
        "fit-content",
        "flex",
        "flex-col",
        "lg:flex-row",
        "lg:justify-center",
        "gap-8",
        "md:gap-12",
        "lg:gap-16",
        "px-4",
        "md:px-8",
        "lg:px-12",
    ],
    {
        variants: {
            reverseRow: {
                true: ["lg:flex-row-reverse"],
            },
        },
    },
);

const Breakdown = () => {
    const parallaxTarget = useRef(null);
    const parallaxController = useParallaxController();

    const { ref: springRef } = useParallax<HTMLDivElement>({
        speed: -9,
    });
    const { ref: coin1Ref } = useParallax<HTMLDivElement>({
        speed: -15,
    });
    const { ref: sphere1Ref } = useParallax<HTMLDivElement>({
        speed: -12,
    });
    const { ref: coin2Ref } = useParallax<HTMLDivElement>({
        speed: -3,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div
            id="about"
            className="relative flex flex-col gap-20 md:gap-40 pt-10 md:pt-40"
            ref={parallaxTarget}
        >
            <ContentBlock {...MAIN_CONTENT_MEASURE}>
                <div
                    className="absolute -left-5 top-5 translate hidden lg:block z-10 lg:w-56 lg:h-56"
                    ref={springRef}
                >
                    <picture>
                        <img
                            alt="Spring"
                            src="/parallax/spring.png"
                            onLoad={handleParallaxImageLoading}
                            className="object-cover"
                        />
                    </picture>
                </div>
            </ContentBlock>
            <ContentBlock {...MAIN_CONTENT_INCENTIVIZE} reverseRow>
                <div
                    className="absolute -right-16 hidden lg:block z-10 lg:w-40 lg:h-40 lg:top-30"
                    ref={coin1Ref}
                >
                    <picture>
                        <img
                            alt="Coin 1"
                            src="/parallax/coin1.png"
                            onLoad={handleParallaxImageLoading}
                            className="object-cover"
                        />
                    </picture>
                </div>
            </ContentBlock>
            <ContentBlock {...MAIN_CONTENT_REWARD}>
                <>
                    <div
                        className="absolute left-[10%] -top-5 hidden lg:block z-10 lg:w-32 lg:h-32 lg:top-30"
                        ref={sphere1Ref}
                    >
                        <picture>
                            <img
                                alt="Coin 1"
                                src="/parallax/sphere1.png"
                                onLoad={handleParallaxImageLoading}
                                className="object-cover"
                            />
                        </picture>
                    </div>
                    <div
                        className="absolute left-1/3 -bottom-0 hidden lg:block z-10 lg:w-32 lg:h-32 lg:top-30"
                        ref={coin2Ref}
                    >
                        <picture>
                            <img
                                alt="Coin 2"
                                src="/parallax/coin2.png"
                                onLoad={handleParallaxImageLoading}
                                className="object-cover"
                            />
                        </picture>
                    </div>
                </>
            </ContentBlock>
        </div>
    );
};

interface ContentBlockProps extends ContentBlockType {
    reverseRow?: boolean;
    children?: ReactElement;
}

const ContentBlock = ({
    reverseRow,
    image,
    heading,
    content,
    children,
}: ContentBlockProps) => {
    return (
        <div className="flex justify-center">
            <div className={sectionStyles({ reverseRow })} data-aos="fade-up">
                <picture>
                    <img
                        src={image}
                        alt="img"
                        className="border border-black rounded-2xl w-full h-[19.2rem] md:w-[33.125rem] md:h-[24rem] lg:w-[44rem] lg:h-[24rem] object-cover"
                    />
                </picture>
                <div className="flex flex-col max-w-3xl justify-center">
                    <Typography
                        variant="h2"
                        className={{
                            root: "text-[3rem] md:text-[4.3rem] mb-8",
                        }}
                    >
                        <AnimatedText speed={20} text={heading} />
                    </Typography>
                    <Typography variant="lg">
                        <AnimatedText speed={5} text={content} />
                    </Typography>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Breakdown;
