import { Flex, Box, Link, Text } from "rebass";
import Button from "./Button";
import { useTheme } from "styled-components";
import NavLinks from "../../content/navigation";
import GridBackground from "./GridBackground";
import StyleSwitch from "./StyleSwitch";

const MobileNavbar = (props: any) => {
    const theme: any = useTheme();
    return (
        <Flex
            sx={{
                display: ["block", "none"],
                position: "absolute",
                pointerEvents: props.isOpen ? "auto" : "none",
                opacity: props.isOpen ? 1 : 0,
                top: ["8rem", "14rem"],
                left: 0,
                width: "100vw",
                height: "calc(100vh - 7rem)",
                background: theme.colors.background,
                zIndex: 4,
                flexDirection: "column",
                maxWidth: "100%",
                transition: "0.25s ease-in-out opacity",
                overflow: "hidden",
            }}
        >
            <Flex
                className={"grid-container"}
                sx={{
                    ...theme.boxSizes.defaultBox,
                    left: 0,
                    maxWidth: "unset",
                    height: "calc(100% - 2rem)",
                    width: "100vw !important",
                    position: "absolute",
                }}
            >
                <GridBackground
                    trimRows={2}
                    sx={{ backgroundPosition: "50% 1.8rem" }}
                />
            </Flex>
            <Flex
                className="navigation-container"
                sx={{
                    flexDirection: "column",
                    height: "100%",
                    pb: "12rem",
                    ...theme.boxSizes.defaultBox,
                    position: "relative",
                    top: props.isOpen ? "0" : "20rem",
                    transition: "0.3s ease-in-out all",
                }}
            >
                <Flex
                    as="nav"
                    sx={{
                        ...theme.boxSizes.defaultBox,
                        pt: "6.4rem",
                    }}
                >
                    <Flex
                        as="ul"
                        flexDirection={"column"}
                        sx={{
                            ...theme.boxSizes.defaultBox,
                            zIndex: 10,
                            pl: "1rem",
                        }}
                    >
                        {NavLinks.map((link, index) => (
                            <Link
                                fontFamily={"IBM Plex Mono"}
                                fontSize={["2.4rem"]}
                                fontWeight={400}
                                lineHeight={"3.6rem"}
                                key={index}
                                onClick={() => {
                                    props.setIsOpen(false);
                                    let element = document.getElementById(
                                        link.scrollTo
                                    );
                                    if (element) {
                                        setTimeout(() => {
                                            window.scrollTo({
                                                top: element?.getBoundingClientRect()
                                                    .y
                                                    ? element?.getBoundingClientRect()
                                                          .y - 180
                                                    : 0,
                                                behavior: "smooth",
                                            });
                                        }, 100);
                                    }
                                }}
                                sx={{
                                    whiteSpace: "nowrap",
                                    mb: "2.35rem",
                                    "&:last-child": {
                                        mb: 0,
                                    },
                                }}
                            >
                                <Text
                                    as="span"
                                    sx={{
                                        opacity: "0.5",
                                        transition: "0.15s ease-in-out opacity",
                                    }}
                                >
                                    ↳{" "}
                                </Text>{" "}
                                {link.label}
                            </Link>
                        ))}
                    </Flex>
                </Flex>
                <Flex
                    justifyContent={"space-between"}
                    sx={{
                        mt: "auto",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Button>CARROT DAPP</Button>
                    <StyleSwitch />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MobileNavbar;
