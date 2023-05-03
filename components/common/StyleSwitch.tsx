import { useState, useEffect } from "react";
import { Flex, Image } from "rebass";
import { Switch } from "@rebass/forms";
import { useThemeContext } from "../../context/theme";

import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

const StyleSwitch = (props: any) => {
    const [darkThemeActive, setDarkThemeActive] = useState(false);
    const [theme, setTheme]: any = useThemeContext();

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setDarkThemeActive(true);
        }
    }, []);

    return (
        <Flex
            {...props}
            alignItems={"center"}
            sx={{
                position: "relative",
                height: ["2.2rem", "1.32rem"],
                width: ["4.4rem", "2.6rem"],
                // opacity: '0.7',
                ...props.sx,
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: "2.2rem",
                    width: "4.4rem",
                },
            }}
        >
            <Switch
                checked={darkThemeActive}
                color={
                    darkThemeActive ? theme.colors.gray3 : theme.colors.gray4
                }
                onClick={() => {
                    setDarkThemeActive(!darkThemeActive);
                    setTheme(darkThemeActive ? lightTheme : darkTheme);
                }}
                sx={{
                    height: ["2.2rem", "1.32rem"],
                    width: ["4.4rem", "2.6rem"],
                    cursor: "pointer",
                    bg: darkThemeActive
                        ? theme.colors.gray3
                        : theme.colors.gray4,
                    position: "inherit",
                    "&[aria-checked=true] div": {
                        transform: [
                            `translateX(23px) translateY(0.5px) !important`,
                            `translateX(13px) translateY(0px) !important`,
                        ],
                    },
                    "&:focus": {
                        boxShadow: "none",
                    },
                    div: {
                        boxShadow: "none",
                        width: ["2rem", "1.32rem"],
                        height: ["2rem", "1.32rem"],
                        borderColor: darkThemeActive
                            ? theme.colors.gray3
                            : theme.colors.gray4,
                        bg: theme.colors.background,
                        top: "0.1rem",
                        zIndex: "100",
                        transform: "translate(0px, 0px) !important",
                    },
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                        {
                            height: "2.2rem",
                            width: "4.4rem",
                            "&[aria-checked=true] div": {
                                transform: `translateX(23px) translateY(0.5px) !important`,
                            },
                            div: {
                                width: "2rem",
                                height: "2rem",
                                transform: `translateX(0px) translateY(0.5px) !important`,
                            },
                        },
                }}
            />
            <Flex
                className={"icons"}
                width={"100%"}
                height={"100%"}
                sx={{
                    position: "absolute",
                    pointerEvents: "none",
                    zIndex: 1,
                    top: 0,
                }}
            >
                <Image
                    alt="light"
                    sx={{
                        position: "absolute",
                        top: ["0.5rem", "0.30rem", "0.25rem"],
                        left: ["0.5rem", "0.5rem", "0.3rem"],
                        zIndex: "4",
                        width: ["1.2rem", "0.8rem"],
                        height: ["1.2rem", "0.8rem"],
                        opacity: darkThemeActive ? 1 : 0,
                        filter: theme.name == "dark" ? "none" : "invert(1)",
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                top: "0.5rem",
                                left: "0.5rem",
                                width: "1.2rem",
                                height: "1.2rem",
                            },
                    }}
                    src={"/icons/light-icon.svg"}
                />
                <Image
                    alt="dark"
                    sx={{
                        position: "absolute",
                        top: ["0.5rem", "0.30rem", "0.25rem"],
                        right: ["0.5rem", "0.3rem"],
                        zIndex: "4",
                        width: ["1.2rem", "0.8rem"],
                        height: ["1.2rem", "0.8rem"],
                        opacity: darkThemeActive ? 0 : 1,
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                top: "0.5rem",
                                right: "0.5rem",
                                width: "1.2rem",
                                height: "1.2rem",
                            },
                    }}
                    src={"/icons/dark-icon.svg"}
                />
            </Flex>
        </Flex>
    );
};

export default StyleSwitch;
