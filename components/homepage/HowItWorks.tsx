import { Flex, Text, Box, Image } from "rebass";
import { useTheme } from "styled-components";
import AnimatedText from "../common/AnimatedText";

import Fade from "../common/Fade";
import HowItWorksBlock from "./HowItWorksBlock";

const HowItWorks = () => {
    const theme: any = useTheme();

    const HowItWorksContent = [
        {
            heading: "Create your campaign",
            triggerLabel: "Set conditions and collateral",
            content: (
                <>
                    <Text as={"p"}>
                        <AnimatedText speed={5}>
                            Use the campaign creation interface to set your
                            campaign&apos;s goal, collateral, duration, and
                            more. Once established, Carrot campaign tokens are
                            minted and sent to your wallet. This is usually at a
                            1:1 ratio for simplicity, but can be any specified
                            amount!
                        </AnimatedText>
                    </Text>
                    <Box
                        className={"content-image"}
                        mt={"3.2rem"}
                        sx={{
                            borderRadius: "2rem",
                            border: `1px solid ${theme.colors.imageBorder}`,
                            backgroundImage:
                                "url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850167/carrot/main-content/Incentivize-your-community_svcdu3.png)",
                            height: "31.8rem",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </>
            ),
        },
        {
            heading: "Distribute KPI tokens",
            triggerLabel: "Issue reward tokens to your community",
            content: (
                <>
                    <Text as={"p"} mb={"2rem"}>
                        <AnimatedText speed={5}>
                            Distribute your KPI tokens to your community. This
                            could be liquidity mining stakers, in-person event
                            attendees, or anyone else relevant to your campaign!
                        </AnimatedText>
                    </Text>
                    <Text as={"p"}>
                        <AnimatedText initialDelay={650} speed={5}>
                            These tokens will later be redeemable by users for
                            the underlying collateral depending on how much of
                            the condition was met.
                        </AnimatedText>
                    </Text>
                    <Box
                        className={"content-image"}
                        mt={"3.2rem"}
                        sx={{
                            borderRadius: "2rem",
                            border: `1px solid ${theme.colors.imageBorder}`,
                            backgroundImage:
                                "url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850167/carrot/main-content/Incentivize-your-community_svcdu3.png)",
                            height: "31.8rem",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </>
            ),
        },
        {
            heading: "Finalize and Redeem",
            triggerLabel:
                "Distribute rewards and claim collateral saved by Carrot",
            content: (
                <>
                    <Text as={"p"} mb={"2rem"}>
                        <AnimatedText speed={5}>
                            At the end of the campaign, finalization will occur
                            through the selected oracle. KPI token holders can
                            then convert to the collateral at the settled rate.
                        </AnimatedText>
                    </Text>
                    <Text as={"p"}>
                        <AnimatedText initialDelay={650} speed={5}>
                            If 50% of the target is met, 50% of the rewards will
                            be claimable by your community with the remaining
                            50% accessible to you!
                        </AnimatedText>
                    </Text>
                    <Box
                        className={"content-image"}
                        mt={"3.2rem"}
                        sx={{
                            borderRadius: "2rem",
                            border: `1px solid ${theme.colors.imageBorder}`,
                            backgroundImage:
                                "url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850167/carrot/main-content/Incentivize-your-community_svcdu3.png)",
                            height: "31.8rem",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </>
            ),
        },
    ];

    return (
        <Box
            sx={{
                mb: ["8.6rem", null, null, "16.4rem"],
                zIndex: 1,
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    mb: "16.6rem",
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    mb: "14.8rem",
                },
            }}
        >
            <Flex
                flexDirection={"column"}
                sx={{
                    ...theme.boxSizes.defaultBox,
                }}
            >
                <Fade>
                    <Text
                        as={"h2"}
                        lineHeight={["5.6rem", null, null, "8rem"]}
                        sx={{
                            mb: ["3.6rem", null, null, "5.1rem !important"],
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                {
                                    mb: "6.5rem !important",
                                },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                {
                                    mb: "7.1rem !important",
                                },
                        }}
                    >
                        <AnimatedText>How it works</AnimatedText>
                    </Text>
                </Fade>
                <Flex
                    as={"ul"}
                    flexDirection={"column"}
                    width={"100%"}
                    sx={{ position: "relative" }}
                >
                    <Fade>
                        <>
                            <Box
                                sx={{
                                    width: "0.46rem",
                                    height: "0.46rem",
                                    background: theme.colors.protocolCardLine,
                                    position: "absolute",
                                    top: "-0.25rem",
                                    right: "-0.25rem",
                                    display: ["block", "none"],
                                    zIndex: 10,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "0.46rem",
                                    height: "0.46rem",
                                    background: theme.colors.protocolCardLine,
                                    position: "absolute",
                                    top: "-0.25rem",
                                    left: "-0.25rem",
                                    display: ["block", "none"],
                                    zIndex: 10,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "0.46rem",
                                    height: "0.46rem",
                                    background: theme.colors.protocolCardLine,
                                    position: "absolute",
                                    bottom: "-0.25rem",
                                    left: "-0.25rem",
                                    display: ["block", "none"],
                                    zIndex: 10,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "0.46rem",
                                    height: "0.46rem",
                                    background: theme.colors.protocolCardLine,
                                    position: "absolute",
                                    bottom: "-0.25rem",
                                    right: "-0.25rem",
                                    display: ["block", "none"],
                                    zIndex: 10,
                                }}
                            />
                        </>
                        {HowItWorksContent.map((contentBlock, index, array) => (
                            <Fade key={index}>
                                <HowItWorksBlock
                                    content={contentBlock}
                                    key={index}
                                    index={index}
                                    totalElements={array.length}
                                />
                            </Fade>
                        ))}
                    </Fade>
                </Flex>
            </Flex>
        </Box>
    );
};

export default HowItWorks;
