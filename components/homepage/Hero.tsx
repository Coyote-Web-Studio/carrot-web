import { useRef } from "react";
import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";

import Fade from "../common/Fade";
import AnimatedText from "../common/AnimatedText";

import PlayVideoButton from "../common/PlayVideoButton";
import Button3D from "../common/Button3D";

const Hero = () => {
    const heroContentRef = useRef(null);

    const theme: any = useTheme();

    return (
        <Flex
            className="hero"
            sx={{
                position: "relative",
                pb: ["4.2rem", "4.8rem", null, "6.4rem"],
                [`@media screen and (min-width: 2800px)`]: {
                    mb: "50rem",
                },
            }}
        >
            {/* HERO CONTENT */}
            <SideText />
            <Flex
                flexDirection={["column", "row"]}
                justifyContent={["auto", "space-between"]}
                sx={{
                    ...theme.boxSizes.defaultBox,
                    zIndex: 1,
                    transformOrigin: "top center",
                    [`@media screen and (min-width: 2800px)`]: {
                        transform: "scale(1.5) translateY(4rem)",
                    },
                }}
                ref={heroContentRef}
            >
                {/* COPY CONTENT */}
                <Flex
                    flexDirection={"column"}
                    width={["100%", "32rem", null, "calc(50vw - 30rem)", "50%"]}
                    sx={{
                        position: "relative",
                        pr: "1rem",
                        pt: ["3rem", "7.6rem", "9rem", "12.8rem"],
                        flexGrow: 1,
                        maxWidth: [null, "36rem", "42rem", "60rem"],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                pt: "10.4rem",
                                maxWidth: "64rem",
                            },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                            {
                                pt: "14.6rem",
                                maxWidth: "68rem",
                            },
                    }}
                >
                    <Text
                        as="h1"
                        sx={{
                            fontSize: ["4.8rem", null, null, "6.9rem"],
                            lineHeight: "100%",
                            mb: ["1.6rem", "1.6rem", "1.8rem", "1rem"],
                            letterSpacing: "-0.04em",
                            pr: ["2rem"],
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                {
                                    fontSize: "9.9rem",
                                    mb: "2.4rem",
                                },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                {
                                    fontSize: "11.9rem",
                                },
                        }}
                    >
                        <AnimatedText speed={20} initialDelay={150}>
                            Reach your goals with a Carrot
                        </AnimatedText>
                    </Text>
                    <Fade>
                        <Text
                            sx={{
                                mb: ["2.9rem", "3.2rem", null, "2.6rem"],
                                fontSize: ["1.4rem", null, null, "1.6rem"],
                                lineHeight: ["2.2rem", null, null, "2.4rem"],
                                color: theme.colors.textColor,
                                fontFamily: "IBM Plex Mono",
                                fontWeight: 300,
                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                    {
                                        fontSize: "1.9rem",
                                        mb: "2.8rem !important",
                                        lineHeight: "2.85rem",
                                    },
                                [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                    {
                                        mb: "3.2rem !important",
                                    },
                            }}
                        >
                            <AnimatedText speed={5} initialDelay={700}>
                                Increase your TVL, volume, price, engagement and
                                more. Yes, on any campaign. Carrot does it all.
                            </AnimatedText>
                        </Text>
                        <Button3D
                            buttonWrapperStyles={{
                                mb: "2.4rem",
                                position: "relative",
                                top: [0, "-0.4rem", "0.25rem"],
                                minWidth: "unset",
                            }}
                        >
                            CREATE YOUR CAMPAIGN
                        </Button3D>
                    </Fade>
                </Flex>
                {/* IMAGE / VIDEO */}
                <Box
                    sx={{
                        ml: [
                            null,
                            null,
                            // '4.2rem'
                        ],
                        position: "relative",
                        top: [0, "2.4rem"],
                    }}
                >
                    <Fade sx={{ position: "relative" }}>
                        <Box
                            sx={{
                                backgroundImage: `url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657847734/carrot/Header-image_big_auuteh.png)`,
                                width: [
                                    "100%",
                                    "calc(2.4rem * 11)",
                                    "31.2rem",
                                    "40.8rem",
                                ],
                                height: [
                                    "120vw",
                                    "calc(2.4rem * 16)",
                                    "43.66rem",
                                    "57rem",
                                ],
                                borderRadius: ["0.85rem", null, "1.3rem"],
                                border: `0.1rem solid ${theme.colors.imageBorder}`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                top: [null, null, null, "-2.4rem"],
                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                    {
                                        width: "50rem",
                                        height: "69.9rem",
                                    },
                                [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                    {
                                        width: "70rem",
                                        height: "82.1rem",
                                    },
                            }}
                        >
                            <PlayVideoButton
                                label={"HOW IT WORKS"}
                                sx={{
                                    position: "absolute",
                                    bottom: ["3rem", "4rem"],
                                    zIndex: 1,
                                    ml: ["4rem"],
                                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                        {
                                            bottom: "4rem",
                                        },
                                }}
                            />
                        </Box>
                    </Fade>
                </Box>
            </Flex>
        </Flex>
    );
};

const SideLink = (props: any) => {
    const theme: any = useTheme();

    return (
        <Text
            target="_blank"
            className={"int-cursor"}
            sx={{
                // position: 'absolute',
                // top: props.top,
                display: "flex",
                left: ["2rem"],
                alignItems: "center",
                writingMode: "vertical-rl",
                transform: `rotate(180deg)`,
                fontSize: "1.4rem",
                fontFamily: theme.fonts.monospace,
                opacity: "0.7",
                transition: "0.15s ease-in-out opacity",
                "&:hover": {
                    opacity: 1,
                },
            }}
        >
            <Box
                as={"div"}
                sx={{
                    width: "0.8rem",
                    height: "0.8rem",
                    background: theme.colors.textColor,
                    mb: "1rem",
                    borderRadius: "1rem",
                }}
            />
            {props.children}
        </Text>
    );
};

const SideText = () => {
    const theme: any = useTheme();

    return (
        <Flex
            className="side-text"
            sx={{
                width: ["6.4rem"],
                position: "absolute",
                top: [null, null, null, "-5.2rem"],
                left: 0,
                height: "calc(100% - 18rem)",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 100,
                fontWeight: 300,
                // background: 'blue',
                display: ["none !important", null, null, "flex !important"],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    top: "5.2rem",
                },
            }}
        >
            <SideLink top="42.1rem">100% DECENTRALIZED</SideLink>
        </Flex>
    );
};

export default Hero;
