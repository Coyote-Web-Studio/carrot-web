import { Flex, Text, Image, Box } from "rebass";
import { useTheme } from "styled-components";
import AnimatedText from "../common/AnimatedText";

import { useParallax } from "react-scroll-parallax";
import { transparentize } from "polished";

import ProtocolCard from "./ProtocolCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const TrustingProtocols = () => {
    const theme: any = useTheme();

    const hexagonParallax = useParallax({
        speed: -15,
    });

    return (
        <Flex
            id="partners"
            flexDirection={"column"}
            sx={{
                position: "relative",
                zIndex: 1,
                mt: ["8.6rem", null, null, "19.4rem"],
                pb: ["9.6rem", null, null, "calc(6.4rem * 3)"],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    mt: "16.8rem",
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    mt: "14.6rem",
                },
                width: "100%",
                ".splide .splide__arrows": {
                    ".splide__arrow": {
                        width: "5.6rem",
                        height: "5.6rem",
                        top: "calc(50%)",
                        bg: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
            <Image
                alt="Hexagon"
                ref={hexagonParallax.ref}
                src={"hexagon.png"}
                sx={{
                    position: "absolute",
                    top: "24rem",
                    width: ["8rem", "9rem", null, "14rem"],
                    height: ["8rem", "10.9rem", null, "16rem"],
                    right: ["4%", null, "18%"],
                    zIndex: "100000000",
                    filter: `drop-shadow(-10px 10px 30px ${transparentize(
                        "0.4",
                        theme.colors.black
                    )})`,
                    display: ["none", "block"],
                }}
            />
            <Flex
                sx={{
                    ...theme.boxSizes.defaultBox,
                    flexDirection: "column",
                }}
            >
                <Text
                    as="h2"
                    sx={{
                        mb: ["3.6rem", "5rem", "9.6rem", "11.8rem"],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                mb: "8.2rem",
                            },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                            {
                                mb: "11rem",
                            },
                    }}
                >
                    <AnimatedText>
                        Trusted by Some of Your Favorite Protocols
                    </AnimatedText>
                </Text>
                <Flex as={"ul"} justifyContent={["center"]} width={"100%"}>
                    <Flex
                        sx={{
                            flexWrap: ["wrap", null, null, "nowrap"],
                            justifyContent: ["center", null, "unset"],
                            maxWidth: ["calc((2.4rem * 7) * 2)", "unset"],
                        }}
                    >
                        {Protocols.map((protocol, index) => (
                            <ProtocolCard
                                data={protocol}
                                index={index}
                                key={index}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

const Protocols = [
    {
        label: "GNOSIS CHAIN",
        logo: "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/gnosis_lyysrk.svg",
        url: "#",
    },
    {
        label: "AGAVE",
        logo: "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/agave_ch8rxi.svg",
        url: "#",
    },
    {
        label: "COW PROTOCOL",
        logo: "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow_e8h1lh.svg",
        url: "#",
    },
    {
        label: "COWSWAP",
        logo: "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow-swap_sgdmka.svg",
        url: "#",
    },
];

export default TrustingProtocols;
