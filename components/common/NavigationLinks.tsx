import { Flex, Link, Box, Text } from "rebass";
import { useTheme } from "styled-components";
import NavLinks from "../../content/navigation";

const NavigationLinks = () => {
    const theme: any = useTheme();

    return (
        <Flex as="nav">
            <Flex as="ul" alignItems={"center"}>
                {NavLinks.map((link, index) => (
                    <Link
                        fontFamily={"IBM Plex Mono"}
                        href={"#"}
                        key={index}
                        className={"int-cursor"}
                        onClick={() => {
                            let element = document.getElementById(
                                link.scrollTo
                            );
                            if (element) {
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: element?.getBoundingClientRect().y
                                            ? element?.getBoundingClientRect()
                                                  .y - 180
                                            : 0,
                                        behavior: "smooth",
                                    });
                                }, 100);
                            }
                        }}
                        sx={{
                            ml: ["1.2rem", null, null, "2.4rem"],
                            fontWeight: 300,
                            position: "relative",
                            whiteSpace: "nowrap",
                            transition: "0.1s ease-in-out all",
                            fontSize: ["1rem", null, null, "1.2rem"],
                            "&:first-of-type": {
                                ml: 0,
                            },
                            "&:hover": {
                                ".underline": {
                                    width: "100%",
                                },
                                span: {
                                    opacity: 1,
                                },
                            },
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                                {
                                    ml: "3.2rem",
                                    fontSize: "1.6rem",
                                },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                                {
                                    ml: "6.4rem",
                                    fontSize: "1.6rem",
                                },
                        }}
                    >
                        <Box
                            className="underline"
                            sx={{
                                height: "0.1rem",
                                width: "0",
                                position: "absolute",
                                bottom: "-1rem",
                                background: theme.colors.orange6,
                                transition: "0.15s ease-in-out all",
                            }}
                        />
                        <Text
                            as="span"
                            sx={{
                                opacity: "0.5",
                                transition: "0.15s ease-in-out opacity",
                            }}
                        >
                            ↳
                        </Text>{" "}
                        {link.label}
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
};

export default NavigationLinks;
