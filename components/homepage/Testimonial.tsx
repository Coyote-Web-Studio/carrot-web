import { Flex, Box, Text } from "rebass";
import AnimatedText from "../common/AnimatedText";
import { useTheme } from "styled-components";
import { filterProps } from "framer-motion";

const Testimonial = (props: any) => {
    const theme: any = useTheme();
    return (
        <>
            <Text
                fontSize={["2.8rem", "3.3rem", null, "4.8rem"]}
                mb={["3.8rem", "3.8rem", null, "5.3rem"]}
                fontWeight={700}
                lineHeight={"100%"}
                color={theme.colors.customerCommentText}
                sx={{
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                        {
                            fontSize: "6.9rem !important",
                            mb: "13.4rem !important",
                        },
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]:
                        {
                            fontSize: "8.3rem !important",
                        },
                }}
            >
                <AnimatedText
                    color={theme.colors.customerCommentText}
                    speed={10}
                >
                    {props.data.text}
                </AnimatedText>
            </Text>
            <Text
                sx={{
                    fontSize: ["1.4rem"],
                    color: theme.colors.customerCommentText,
                    fontWeight: 300,
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]:
                        {
                            fontSize: "2.8rem",
                        },
                }}
            >
                - {props.data.author}
            </Text>
        </>
    );
};

export default Testimonial;
