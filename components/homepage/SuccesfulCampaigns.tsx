import { useRef } from "react";
import { Flex, Box, Text, Image } from "rebass";
import { useTheme } from "styled-components";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import Button3D from "./../common/Button3D";
import CampaignCard from "./../common/CampaignCard";
import Fade from "../common/Fade";
import AnimatedText from "../common/AnimatedText";
import { keyframes } from "@emotion/react";

const SuccesfulCampaigns = () => {
    const theme: any = useTheme();
    const highlightRef = useRef<HTMLInputElement>();
    const sliderRef = useRef<HTMLInputElement>();

    const highlightAnimation = keyframes`
        0% {
        background-position: 44%;
        };
        100% {
        background-position: 0%;
        };
    `;

    return (
        <Flex
            id="campaigns"
            flexDirection={"column"}
            sx={{
                ...theme.boxSizes.defaultBox,
                zIndex: 1,
                mb: ["9.6rem", null, null, "calc(6.4rem * 3)"],
            }}
        >
            <Text
                as={"h2"}
                sx={{
                    mb: ["5rem", "4.2rem", null, "5.4rem"],
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                        {
                            mb: "11.8rem",
                        },
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                        {
                            mb: "11rem",
                        },
                }}
            >
                <AnimatedText>Succesful Campaigns</AnimatedText>
            </Text>
            {/* TABLET / DESKTOP VIEW */}
            <Flex
                as={"ul"}
                mb={["1.6rem", "4.9rem", null]}
                ref={sliderRef}
                sx={{
                    display: [
                        "none !important",
                        "block !important",
                        "block !important",
                    ],
                    position: "relative",
                    mb: [null, null, null, "6.4rem !important"],
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                        {
                            mb: "6.5rem !important",
                        },
                    ".splide .splide__arrows": {
                        ".splide__arrow": {
                            width: "5.6rem",
                            height: "5.6rem",
                            top: "calc(50%)",
                            bg: "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "&:hover": {
                                backgroundColor: `${theme.colors.orange6}`,
                            },
                        },
                        ".splide__arrow--prev": {
                            left: "-8rem",
                        },
                        ".splide__arrow--next": {
                            img: {
                                transform: "rotate(180deg)",
                            },
                            right: "-8rem",
                        },
                    },
                }}
            >
                <Box
                    className="highlight-box"
                    ref={highlightRef}
                    sx={{
                        zIndex: 0,
                        display: ["none", null, null, "block"],
                        position: "absolute",
                        top: "-6.4rem",
                        left: "-6.4rem",
                        width: "calc(100% + 4rem)",
                        height: "calc(100% + (6.4rem * 2))",
                        pointerEvents: "none",
                        transition: "0.15s ease-in-out all",
                        opacity: 0,
                        clipPath: "polygon(0 100% ,0 100%, 0 100%, 0 100%)",
                        transform: "scale(0.5)",
                        animation: `${highlightAnimation} 3s linear forwards infinite`,
                        backgroundImage: "url(back.svg)",
                    }}
                ></Box>
                <Fade sx={{ display: ["none", "flex"] }}>
                    <Flex ref={sliderRef} justifyContent={"space-between"}>
                        <Splide
                            hasTrack={false}
                            options={{
                                width: "100%",
                                gap: 48,
                                perPage: 4,
                                pagination: false,
                                breakpoints: {
                                    1918: {
                                        perPage: 3,
                                    },
                                    1440: {
                                        perPage: 3,
                                    },
                                    1024: {
                                        perPage: 2,
                                    },
                                },
                            }}
                        >
                            <SplideTrack>
                                {SuccesfullCampaigns.map((campaign, index) => (
                                    <SplideSlide key={index}>
                                        <CampaignCard
                                            key={index}
                                            campaign={campaign}
                                            sx={{ width: ["100%"] }}
                                            onMouseEnter={(e: any) => {
                                                e.stopPropagation();
                                                e.preventDefault();

                                                let cardWidth =
                                                    e.currentTarget.getBoundingClientRect()
                                                        .width;

                                                let highlighterExtraWidth = 128;

                                                if (
                                                    highlightRef.current &&
                                                    sliderRef.current
                                                ) {
                                                    highlightRef.current.style.width =
                                                        cardWidth +
                                                        highlighterExtraWidth +
                                                        "px";

                                                    highlightRef.current.style.transform =
                                                        "scale(1)";
                                                    highlightRef.current.style.clipPath =
                                                        "polygon(0 0 ,100% 0, 100% 100%, 0 100%)";
                                                    highlightRef.current.style.filter = `blur(0px)`;
                                                    highlightRef.current.style.opacity =
                                                        "1";
                                                    highlightRef.current.style.left =
                                                        e.currentTarget.getBoundingClientRect()
                                                            .left -
                                                        sliderRef.current
                                                            .offsetLeft +
                                                        -highlighterExtraWidth /
                                                            2 +
                                                        "px";

                                                    highlightRef.current.style.top =
                                                        -64 + "px";
                                                }
                                            }}
                                            onMouseLeave={(e: any) => {
                                                e.stopPropagation();
                                                e.preventDefault();

                                                let cardWidth =
                                                    e.currentTarget.getBoundingClientRect()
                                                        .width;

                                                let highlighterExtraWidth = 128;

                                                if (
                                                    highlightRef.current &&
                                                    sliderRef.current
                                                ) {
                                                    highlightRef.current.style.width =
                                                        cardWidth +
                                                        highlighterExtraWidth +
                                                        "px";

                                                    highlightRef.current.style.transform =
                                                        "scale(0)";
                                                    highlightRef.current.style.clipPath =
                                                        "polygon(0 0 ,0 0, 0 0, 0 0)";
                                                    highlightRef.current.style.filter = `blur(1px)`;
                                                    highlightRef.current.style.opacity =
                                                        "0";
                                                }
                                            }}
                                        />
                                    </SplideSlide>
                                ))}
                            </SplideTrack>
                            <Box as="div" className="splide__arrows">
                                <Box
                                    as={"button"}
                                    className="splide__arrow splide__arrow--prev int-cursor"
                                    sx={{
                                        width: "5.6rem !important",
                                        height: "5.6rem !important",
                                        border: `0.1rem solid ${theme.colors.textColor}`,
                                        "&:hover": {
                                            backgroundColor:
                                                theme.colors.orange,
                                        },
                                    }}
                                >
                                    <Image
                                        alt={"arrow"}
                                        src={
                                            theme.name == "light"
                                                ? "/arrow.svg"
                                                : "/arrow-dark.svg"
                                        }
                                        sx={{
                                            pointerEvents: "none",
                                        }}
                                    />
                                </Box>
                                <Box
                                    as={"button"}
                                    sx={{
                                        width: "5.6rem !important",
                                        height: "5.6rem !important",
                                        border: `0.1rem solid ${theme.colors.textColor}`,
                                        "&:hover": {
                                            backgroundColor: "white",
                                        },
                                    }}
                                    className="splide__arrow splide__arrow--next int-cursor"
                                >
                                    <Image
                                        alt={"arrow"}
                                        src={
                                            theme.name == "light"
                                                ? "/arrow.svg"
                                                : "/arrow-dark.svg"
                                        }
                                        sx={{
                                            pointerEvents: "none",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Splide>
                    </Flex>
                </Fade>
            </Flex>

            {/* MOBILE VIEW (NO SLIDE) */}

            <Flex
                as={"ul"}
                sx={{ display: ["block", "none", "none"] }}
                flexDirection={["column", "row"]}
                mb={["2.4rem"]}
            >
                {SuccesfullCampaigns.map(
                    (campaign, index) =>
                        index < 3 && (
                            <CampaignCard
                                campaign={campaign}
                                sx={{
                                    width: [
                                        "100%",
                                        "100%",
                                        "37.3rem",
                                        "35.2rem",
                                    ],
                                    mb: ["2.4rem", "0"],
                                    "&:last-child": {
                                        mb: 0,
                                    },
                                }}
                                key={index}
                            />
                        )
                )}
            </Flex>
            <Button3D
                sx={{
                    px: [null, "3.2rem", null],
                }}
            >
                SEE ALL CAMPAIGNS
            </Button3D>
        </Flex>
    );
};

const SuccesfullCampaigns = [
    {
        heading: "DXDAO",
        content:
            "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
        rewards: "$3,000.93",
        timeLeft: "01D 02H 54M",
    },
    {
        heading: "DXDAO",
        content:
            "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
        rewards: "$3,000.93",
        timeLeft: "01D 02H 54M",
    },
    {
        heading: "DXDAO",
        content:
            "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
        rewards: "$3,000.93",
        timeLeft: "01D 02H 54M",
    },
    {
        heading: "DXDAO",
        content:
            "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
        rewards: "$3,000.93",
        timeLeft: "01D 02H 54M",
    },
    {
        heading: "DXDAO",
        content:
            "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
        rewards: "$3,000.93",
        timeLeft: "01D 02H 54M",
    },
];

export default SuccesfulCampaigns;
