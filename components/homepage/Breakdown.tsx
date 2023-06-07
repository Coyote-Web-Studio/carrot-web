import { useParallax, useParallaxController } from "react-scroll-parallax";
import {
    MAIN_CONTENT,
    ContentBlock as ContentBlockType,
} from "../../constants";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";
import { useCallback, useRef } from "react";

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
    const parallaxTarget = useRef(null);
    const parallaxController = useParallaxController();

    const { ref: sphereRef } = useParallax<HTMLDivElement>({
        speed: -10,
    });

    const handleParallaxImageLoading = useCallback(() => {
        if (!parallaxController) return;
        parallaxController.update();
    }, [parallaxController]);

    return (
        <div
            id="about"
            className="relative flex flex-col gap-40 py-40"
            ref={parallaxTarget}
        >
            <div
                className="absolute right-12 lg:right-32 hidden md:block z-10 md:w-16 md:h-16 lg:w-24 lg:h-24 md:top-30"
                ref={sphereRef}
            >
                <picture>
                    <img
                        alt="Sphere"
                        src="/parallax/sphere.png"
                        onLoad={handleParallaxImageLoading}
                    />
                </picture>
            </div>
            {MAIN_CONTENT.map((contentBlock, index: number) => {
                return (
                    <ContentBlock
                        key={index}
                        {...contentBlock}
                        reverseRow={index % 2 !== 0}
                    />
                );
            })}
        </div>
    );
};

interface ContentBlockProps extends ContentBlockType {
    reverseRow: boolean;
}

const ContentBlock = ({
    reverseRow,
    image,
    heading,
    content,
}: ContentBlockProps) => {
    return (
        <div className={sectionStyles({ reverseRow })}>
            <picture>
                <img
                    src={image}
                    alt="img"
                    className="border border-black rounded-2xl w-full h-[19.2rem] md:w-[33.125rem] md:h-[24rem] lg:w-[44rem] lg:h-[24rem]"
                />
            </picture>
            <div className="flex flex-col max-w-3xl justify-center">
                <Typography
                    variant="h2"
                    className={{ root: "text-[4.3rem] mb-8" }}
                >
                    {heading}
                </Typography>
                <Typography variant="lg">{content}</Typography>
            </div>
        </div>
    );
};

export default Breakdown;
