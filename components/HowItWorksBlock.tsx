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
      flexDirection={["column", "row"]}
      sx={{
        border: [`0.1rem solid ${theme.colors.cardLine}`, 'none'],
        borderBottom: "none",
        "&:last-child": {
          borderBottom: [`0.1rem solid ${theme.colors.cardLine}`, 'none'],
        },
      }}
    >
      <Flex
        className={"hiw-heading"}
        sx={{
          height: ['9.6rem', isOpen ? 'auto' : '9.6rem'],
          borderBottom: [
            `0.1rem solid ${theme.colors.cardLine}`,
            'none'
          ],
        }}
      >
        <Flex
          minWidth={"6.4rem"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"4.8rem"}
          height={['auto', '9.6rem']}
          fontWeight={700}
          bg={theme.colors.cardBackground}
          sx={{
            border: ['none', `0.1rem solid ${theme.colors.cardLine}`],
            borderBottom: ['none', isOpen ? `0.1rem solid ${theme.colors.cardLine}` : 'none'],
            borderRight: 'none !important'
          }}
        >
          {props.index + 1}.
        </Flex>
        <Flex
          alignItems={"center"}
          fontSize={"2.8rem"}
          fontWeight={700}
          bg={theme.colors.cardBackground}
          paddingLeft={"3.2rem"}
          width={['auto', '24.8rem']}
          height={['auto', isOpen ? '14.4rem' : 'auto']}
          sx={{
            border: ['none', `0.1rem solid ${theme.colors.cardLine}`],
            borderLeft: [`0.1rem solid ${theme.colors.cardLine}`, `0.1rem solid ${theme.colors.cardLine}`]
          }}
        >
          {props.content.heading}
        </Flex>
      </Flex>
      <Flex className={"hiw-body"} width={['auto', '36rem']} bg={theme.colors.cardBackground} sx={{
        borderLeft: ['none', `0.1rem solid ${theme.colors.cardLine}`],
        flexDirection: 'column'
      }}>
        <Flex
          className={"hiw-trigger"}
          p={["2.4rem", "0 2.4rem"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          height={'9.6rem'}
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
              '.plus-line:nth-of-type(2)': {
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
        <Flex 
          className={"hiw-content"} 
          flexDirection={'column'} 
          sx={{
            maxHeight: isOpen ? 'auto' : '0',
            overflowY: 'hidden',
            p: isOpen ? '2.4rem' : '0'
          }}
        >
          {props.content.content}
        </Flex> 
      </Flex>
    </Flex>
  );
};

export default HowItWorksBlock;