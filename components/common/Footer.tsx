import { Flex, Link, Text, Box } from "rebass";
import { useTheme } from "styled-components";
import Logo from "./Logo";
import GridBackground from "./GridBackground";
import Fade from "./Fade";
import Button3D from "./Button3D";

import FooterLinks from "./../../content/footer-navigation";

const Footer = () => {
    const theme: any = useTheme();

    return (
        <Flex
            as="footer"
            sx={{
                bg: theme.colors.gray10,
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                flexDirection: "column",
                pt: ["4.8rem", "12.8rem", null, "calc(6.4rem * 2)"],
                pb: "5.6rem",
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    pt: "calc(6.4rem * 4 - 1.4rem)",
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    pt: "calc(6.4rem * 4)",
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    height: [
                        "calc(2.4rem * 5)",
                        "calc(2.4rem * 12)",
                        null,
                        "calc(6.4rem * 6)",
                    ],
                    top: ["2.8rem", "7rem", null, "calc(6.4rem * 1)"],
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                        {
                            height: "calc(6.4rem * 10)",
                            top: "calc(6.4rem * 2)",
                        },
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                        {
                            height: "calc(6.4rem * 10)",
                            top: "calc(6.4rem * 2)",
                        },
                }}
            >
                <Box
                    sx={{
                        ...theme.boxSizes.expandedBox,
                    }}
                >
                    <GridBackground
                        color={theme.colors.gray9}
                        sx={{
                            backgroundImage: "url(./Pattern.svg)",
                            backgroundPosition: "top center",
                        }}
                    />
                </Box>
            </Box>

            <Fade sx={{ ...theme.boxSizes.defaultBox }}>
                <Logo
                    color={theme.colors.orange6}
                    sx={{
                        zIndex: 1,
                        height: ["auto", "15.5rem", null, "auto"],
                        width: ["30rem", "auto", null, "100%"],
                        mx: ["auto"],
                        mb: ["4.8rem", "12.2rem", null, "12.3rem"],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                mb: "34rem",
                                width: "108rem",
                            },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                            {
                                mb: "34rem",
                            },
                    }}
                />
            </Fade>

            <Flex
                sx={{
                    ...theme.boxSizes.navbarBox,
                    position: "relative",
                    flexDirection: "column",
                }}
            >
                <Flex
                    flexDirection={["column", "column", null, "row"]}
                    justifyContent={["auto", null, null, "space-between"]}
                >
                    <Flex as="ul" flexWrap="wrap">
                        {FooterLinks.map((footerColumn, i) => (
                            <Flex
                                key={i}
                                sx={{
                                    flexDirection: "column",
                                    width: ["50%", "25%", null, "12rem"],
                                    mb: ["4.8rem", "4.8rem", null, 0],
                                    mr: [null, null, null, "3.2rem"],
                                    fontFamily: "IBM Plex Mono",
                                    fontWeight: 300,
                                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                        {
                                            width: "15.2rem",
                                        },
                                }}
                            >
                                <Text
                                    fontSize={"1.4rem"}
                                    mb={["0.8rem", "2.4rem"]}
                                    color={theme.colors.gray1}
                                    sx={{
                                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                            {
                                                fontSize: "1.6rem",
                                            },
                                    }}
                                >
                                    {footerColumn.heading}
                                </Text>
                                {footerColumn.links.map((link, j) => (
                                    <Link
                                        className={"int-cursor"}
                                        href={link.href}
                                        mb={["0.4rem", "0.8rem"]}
                                        fontSize={"1.2rem"}
                                        key={j}
                                        sx={{
                                            color: theme.colors.gray1,
                                            transition: "0.15s ease-in-out all",
                                            "&:hover": {
                                                opacity: 0.7,
                                            },
                                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                                {
                                                    fontSize: "1.4rem",
                                                },
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Flex>
                        ))}
                    </Flex>
                    <Button3D
                        buttonWrapperStyles={{
                            mt: "auto",
                            bg: theme.colors.gray10,
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                {
                                    color: theme.colors.orange6,
                                },
                            "&:hover .button": {
                                background: theme.colors.gray10,
                                boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBackground}`,
                                span: {
                                    color: theme.colors.orange6,
                                },
                            },
                        }}
                    >
                        CARROT DAPP
                    </Button3D>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;
