import { Box } from "rebass";
import { useTheme } from "styled-components";

const GridBackground = (props: any) => {
    const theme: any = useTheme();

    return (
        <Box
            sx={{
                position: "absolute",
                top: props.top || 0,
                zIndex: 0,
                width: "100%",
                height: [
                    "calc(100% + 1px)",
                    "calc(100% + 0.5px)",
                    null,
                    "calc(100% + 2px)",
                ],
                backgroundImage: theme.misc.patternImage,
                backgroundSize: ["2.4rem", null, null, "6.4rem"],
                ...props.sx,
            }}
        ></Box>
    );
};

export default GridBackground;
