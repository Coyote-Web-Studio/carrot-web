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
        maxHeight: ['auto', isOpen ? 'auto' : '1000rem', isOpen ? 'auto' : '1000rem'],
        border: [`0.1rem solid ${theme.colors.cardLine}`, 'none'],
        borderBottom: "none",
        transition: '0.25s ease-in-out max-height',
        "&:last-child": {
          borderBottom: [`0.1rem solid ${theme.colors.cardLine}`, 'none'],
          '.block-index': {
            borderBottom: ['none', `0.1rem solid ${theme.colors.cardLine}`],
          },
          '.block-title': {
            borderBottom: ['none', `0.1rem solid ${theme.colors.cardLine} !important`],
          },
          '.hiw-body': {
            borderBottom: ['none', `0.1rem solid ${theme.colors.cardLine} !important`],
          },
        },
      }}
    >
      <Flex
        className={"hiw-heading"}
        sx={{
          height: ['9.6rem', isOpen ? 'auto' : '9.6rem', isOpen ? 'auto' : '19.2rem'],
          transition: '0.25s ease-in-out height',
          borderBottom: [
            `0.1rem solid ${theme.colors.cardLine}`,
            'none'
          ],
        }}
      >
        <Flex
          className={'block-index'}
          minWidth={["6.4rem", '6.4rem', '19.2rem']}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={["4.8rem", "4.8rem", "11.9rem"]}
          height={['auto', '9.6rem', '19.2rem']}
          fontWeight={700}
          bg={theme.colors.cardBackground}
          sx={{
            border: ['none', `0.1rem solid ${theme.colors.cardLine}`],
            borderBottom: ['none', isOpen ? `0.1rem solid ${theme.colors.cardLine}` : 'none'],
            borderRight: 'none !important',
          }}
        >
          {props.index + 1}.
        </Flex>
        <Flex
          className="block-title"
          alignItems={"center"}
          fontSize={["2.8rem", "2.8rem", "4.8rem"]}
          lineHeight={['3rem', '3rem', '4.88rem']}
          fontWeight={700}
          bg={theme.colors.cardBackground}
          paddingLeft={"3.2rem"}
          width={['auto', '24.8rem', '41.6rem']}
          height={['auto', isOpen ? '14.4rem' : 'auto', isOpen ? '32rem' : '19.2rem']}
          sx={{
            border: ['none', `0.1rem solid ${theme.colors.cardLine}`],
            borderLeft: [`0.1rem solid ${theme.colors.cardLine}`],
            borderRight: [`none`, 'none'],
            borderBottom: [`none !important`, isOpen ? `0.1rem solid ${theme.colors.cardLine} !important` : 'none'],
            transition: '0.25s ease-in-out all'
          }}
        >
          {props.content.heading}
        </Flex>
      </Flex>
      <Flex className={"hiw-body"} width={['auto', '36rem', '64rem']} bg={theme.colors.cardBackground} sx={{
        border: ['none', `0.1rem solid ${theme.colors.cardLine}`],
        borderBottom: ['none !important'],
        borderLeft: ['none', `0.1rem solid ${theme.colors.cardLine}`],
        flexDirection: 'column',
        transition: '0.25s ease-in-out all',
        maxHeight: isOpen ? '1000px' : '19.2rem'
      }}>
        <Flex
          className={"hiw-trigger"}
          p={["2.4rem", "0 2.4rem"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          minHeight={['9.6rem', '9.6rem', '19.2rem'] }
        >
          <Text 
            fontSize={["1.6rem", "1.6rem", "2.2rem"]} 
            lineHeight={["2.4rem", "2.4rem", '3.3rem']} 
            as={"p"}
            maxWidth={'40rem'}
            width={['auto', 'auto', '100%']}
          >
            {props.content.triggerLabel}
          </Text>
          <Button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            buttonWrapperStyles={{
              borderRadius: "10rem",
              width: ["4rem", '4rem', '8rem'],
              height: ["4rem", '4rem', '8rem'],
              minWidth: ['4rem', '4rem', '8rem'],
              position: "relative",
              ml: ["1.6rem", "1.6rem", "2.4rem"],
              '&:hover': {
                '&.button': {
                  background: ['auto', 'auto', `${theme.colors.orange6} !important`],
                },
                '.plus-line': {
                  height: '0.2rem'
                }
              },
              '.plus-line:nth-of-type(2)': {
                transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)'
              },
            }}
            sx={{
              backgroundColor: [
                theme.colors.orange6, 
                theme.colors.orange6, 
                theme.colors.cardBackground
              ],
            }}
          >
            <Box
              className="plus-line"
              sx={{
                position: "absolute",
                left: ["calc(50% - 0.7rem)", "calc(50% - 0.7rem)", "calc(50% - 2.6rem)"],
                width: ["1.4rem", "1.4rem", '5.2rem'],
                height: "0.1rem",
                background: theme.colors.cardLine,
                borderRadius: '100px'
              }}
            />
            <Box
              className="plus-line"
              sx={{
                position: "absolute",
                left: ["calc(50% - 0.7rem)", "calc(50% - 0.7rem)", "calc(50% - 2.6rem)"],
                width: ["1.4rem", "1.4rem", '5.2rem'],
                height: "0.1rem",
                background: theme.colors.cardLine,
                transform: "rotate(90deg)",
                transition: '0.15s ease-in-out transform',
                borderRadius: '100px'
              }}
            />
          </Button>
        </Flex>
        <Flex 
          className={"hiw-content"} 
          flexDirection={'column'} 
          sx={{
            maxHeight: isOpen ? '1000px' : '0',
            overflowY: 'hidden',
            transition: '0.25s ease-in-out max-height, padding',
            p: isOpen ? '2.4rem 2.4rem' : '0rem 2.4rem'
          }}
        >
          <Box sx={{'opacity': isOpen ? '1' : '0', transition: '0.25s ease-in-out all',}} >
            {props.content.content}
          </Box>
        </Flex> 
      </Flex>
    </Flex>
  );
};

export default HowItWorksBlock;