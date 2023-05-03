import { Flex, Box, Text, Image } from "rebass";
import { useTheme } from "styled-components";

const ProtocolCard = (props: any) => {
    const theme: any = useTheme();

    const cornerBoxesSize = 4;
    const cornerBoxesOffset = -2;

    const offsetStyles = [
        `${cornerBoxesOffset / 10}rem`,
        null,
        null,
        `${(cornerBoxesOffset * 2) / 10}rem`,
    ];

    return (
        <Flex
            as={"li"}
            key={props.index}
            data-aos={"flip-left"}
            maxWidth={["unset"]}
            width={[
                "calc(2.4rem * 7)",
                "calc(2.4rem * 6)",
                null,
                "calc(6.4rem * 3.5)",
            ]}
            height={[
                "calc(2.4rem * 7)",
                "calc(2.4rem * 6)",
                null,
                "calc(6.4rem * 3.5)",
            ]}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                bg: theme.colors.cardBackground,
                position: "relative",
                boxShadow: `0 0 0 1px ${theme.colors.textColor}`,
                mt: [
                    null,
                    props.index % 2 == 0 ? 0 : "calc(2.4rem * 6)",
                    null,
                    props.index % 2 == 0 ? 0 : "calc(6.4rem * 3.5)",
                ],
                [`@media screen and (max-width: 420px)`]: {
                    width: "calc(2.4rem * 5.5)",
                    height: "calc(2.4rem * 5.5)",
                },
                [`@media screen and (max-width: 330px)`]: {
                    width: "calc(2.4rem * 5)",
                    height: "calc(2.4rem * 5)",
                },
                [`@media screen and (max-width: 280px)`]: {
                    width: "calc(2.4rem * 4)",
                    height: "calc(2.4rem * 4)",
                },
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    width: "calc(6.4rem * 5) !important",
                    height: "calc(6.4rem * 5) !important",
                    mt:
                        props.index % 2 == 0
                            ? 0
                            : "calc(6.4rem * 5) !important",
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    width: "calc(6.4rem * 6) !important",
                    height: "calc(6.4rem * 6) !important",
                    mt:
                        props.index % 2 == 0
                            ? 0
                            : "calc(6.4rem * 6) !important",
                },
                ".corner-square": {
                    width: [
                        `${cornerBoxesSize / 10}rem`,
                        null,
                        null,
                        `${(cornerBoxesSize * 2) / 10}rem`,
                    ],
                    height: [
                        `${cornerBoxesSize / 10}rem`,
                        null,
                        null,
                        `${(cornerBoxesSize * 2) / 10}rem`,
                    ],
                    background: theme.colors.protocolCardLine,
                    position: "absolute",
                    zIndex: 100,
                },
            }}
        >
            <Box
                className="corner-square"
                sx={{
                    top: offsetStyles,
                    left: offsetStyles,
                }}
            />
            <Box
                className="corner-square"
                sx={{
                    top: offsetStyles,
                    right: offsetStyles,
                }}
            />
            <Box
                className="corner-square"
                sx={{
                    bottom: offsetStyles,
                    right: offsetStyles,
                }}
            />
            <Box
                className="corner-square"
                sx={{
                    bottom: offsetStyles,
                    left: offsetStyles,
                }}
            />
            <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    alt={props.data.label}
                    src={props.data.logo}
                    sx={{
                        filter: theme.misc.invertedProtocolLogo
                            ? "invert(1)"
                            : "unset",
                        width: ["6.4rem", null, null, "9.9rem"],
                        height: ["6.4rem", null, null, "9.9rem"],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                width: "19.2rem",
                                height: "19.2rem",
                            },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                            {
                                width: "24rem",
                                height: "24rem",
                            },
                    }}
                />
                <Text
                    as={"p"}
                    sx={{
                        fontSize: ["1.2rem"],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                            {
                                fontSize: "1.9rem",
                            },
                    }}
                >
                    {props.data.label}
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProtocolCard;
