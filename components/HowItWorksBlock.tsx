import { useState } from 'react';
import { Flex, Box, Text } from "rebass";
import styeld, { useTheme } from "styled-components";
import Button from "./Button";

const HowItWorksBlock = (props: any) => {
  const theme : any = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      as={"li"}
      flexDirection={"column"}
      bg={theme.colors.gray1}
      sx={{
        border: `0.1rem solid ${theme.colors.gray10}`,
        borderBottom: "none",
        "&:last-child": {
          borderBottom: `0.1rem solid ${theme.colors.gray10}`,
        },
      }}
    >
      <Flex
        className={"hiw-heading"}
        sx={{
          height: "9.6rem",
          borderBottom: `0.1rem solid ${theme.colors.gray10}`,
        }}
      >
        <Flex
          minWidth={"6.4rem"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"4.8rem"}
          fontWeight={700}
          sx={{
            borderRight: `0.1rem solid ${theme.colors.gray10}`,
          }}
        >
          {props.index + 1}.
        </Flex>
        <Flex
          alignItems={"center"}
          fontSize={"2.8rem"}
          fontWeight={700}
          paddingLeft={"3.2rem"}
        >
          {props.content.heading}
        </Flex>
      </Flex>
      <Flex className={"hiw-body"}>
        <Flex
          className={"hiw-trigger"}
          p={"2.4rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Text fontSize={"1.6rem"} lineHeight={"2.4rem"} as={"p"}>
            {props.content.triggerLabel}
          </Text>
          <Button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            sx={{
              height: "4rem",
              minWidth: 0,
              width: "4rem",
              border: `0.1rem solid ${theme.colors.gray10}`,
              background: theme.colors.orange6,
              position: "relative",
              borderRadius: "10rem",
              ml: "1.6rem",
              '.plus-line:nth-child(2)': {
                transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)'
              }
            }}
          >
            <Box
              className="plus-line"
              sx={{
                position: "absolute",
                left: "calc(50% - 0.7rem)",
                width: "1.4rem",
                height: "0.1rem",
                background: theme.colors.gray10,
              }}
            />
            <Box
              className="plus-line"
              sx={{
                position: "absolute",
                left: "calc(50% - 0.7rem)",
                width: "1.4rem",
                height: "0.1rem",
                background: theme.colors.gray10,
                transform: "rotate(90deg)",
                transition: '0.15s ease-in-out transform'
              }}
            />
          </Button>
        </Flex>
        <Flex className={"hiw-content"}></Flex>
      </Flex>
    </Flex>
  );
};

export default HowItWorksBlock;