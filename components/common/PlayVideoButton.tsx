import { Flex, Box } from "rebass";
import { useTheme } from "styled-components";
import { transparentize } from "polished";

const PlayVideoButton = (props: any) => {
    const theme: any = useTheme();
    return (
        <Flex
            className={"int-cursor"}
            sx={{
                height: ["4.8rem", null, null, "6.4rem"],
                alignItems: "center",
                cursor: "pointer",
                fontWeight: 300,
                border: `0.1rem solid ${theme.colors.gray10}`,
                borderRadius: "4.8rem",
                width: ["4.8rem", null, null, "6.4rem"],
                bg: transparentize(0.5, theme.colors.black),
                transition: "0.15s ease-in-out all",
                "*": {
                    transition: "0.15s ease-in-out all",
                },
                ".play-icon-wrapper": {
                    path: {
                        fill: theme.colors.orange6,
                    },
                },
                "&:hover": {
                    bg: theme.colors.gray10,
                    borderColor: theme.colors.orange6,
                    width: ["19.2rem", "19.2rem", "22.2rem", "25.6rem"],
                    ".play-icon-wrapper": {
                        bg: theme.colors.orange6,
                        path: {
                            fill: theme.colors.gray10,
                        },
                    },
                    ".label": {
                        color: theme.colors.orange6,
                        opacity: "1",
                    },
                },
                ...props.sx,
            }}
        >
            <Flex
                className={"play-icon-wrapper"}
                sx={{
                    background: theme.colors.gray10,
                    height: ["4.8rem", null, null, "6.4rem"],
                    minWidth: ["4.8rem", null, null, "6.4rem"],
                    borderRadius: "inherit",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    pointerEvents: "none",
                }}
            >
                <svg
                    width="26"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.0422 7.95493C18.3379 8.66718 18.3379 10.5289 17.0422 11.2411L3.29435 18.7984C2.04476 19.4853 0.516133 18.5812 0.516133 17.1553L0.516134 2.0408C0.516134 0.614861 2.04477 -0.28921 3.29436 0.397695L17.0422 7.95493Z" />
                </svg>
            </Flex>
            <Box
                className={"label"}
                sx={{
                    color: theme.colors.white,
                    fontFamily: theme.fonts.monospace,
                    letterSpacing: "0.05rem",
                    fontSize: ["1.2rem", null, "1.6rem"],
                    pointerEvents: "none",
                    position: "absolute",
                    opacity: 0,
                    left: "8rem",
                    whiteSpace: "nowrap",
                }}
            >
                {props.label}
            </Box>
        </Flex>
    );
};

export default PlayVideoButton;
