import { useState } from 'react';
import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";
import AnimatedText from '../common/AnimatedText';
import SeeMoreButton from '../common/SeeMoreButton';

const HowItWorksBlock = (props: any) => {
  const theme : any = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const cornerBoxesSize = 4;
  const cornerBoxesOffset = -2;

  const offsetStyles = [
    `${(cornerBoxesOffset) / 10}rem`, 
    null,
    null,
    `${(cornerBoxesOffset * 2) / 10}rem`
  ];

  return (
    <Box>
      <Flex
        as={"li"}
        flexDirection={["column", "row"]}
        sx={{
          position: 'relative',
          rowGap: '1px',
          columnGap: '1px',
          maxHeight: [
            'auto', 
            isOpen ? 'auto' : '1000rem', 
          ],
          transition: '0.25s ease-in-out max-height',
          width: ['100%'],
          '.bordered': {
            boxShadow: `0 0 0 1px ${theme.colors.textColor}`
          },
          '.corner-square': {
            width: [
              `${(cornerBoxesSize) / 10}rem`, 
              null,
              null,
              `${(cornerBoxesSize * 2) / 10}rem`], 
            height: [
              `${(cornerBoxesSize) / 10}rem`, 
              null,
              null,
              `${(cornerBoxesSize * 2) / 10}rem`], 
            background: theme.colors.protocolCardLine,
            position: 'absolute',
            zIndex: 100,
          },
        }}
      >
        <Flex
          className={"hiw-heading"}
          sx={{
            height: [
              '9.6rem', 
              isOpen ? 'auto' : '9.6rem', 
              null,
              isOpen ? 'auto' : '19.2rem'],
            transition: '0.25s ease-in-out height',
            rowGap: '1px',
            columnGap: '1px',
          }}
        >
          <Flex
            className={'block-index bordered'}
            minWidth={["6.4rem", '6.4rem', null, '19.2rem']}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={["4.8rem", "4.8rem", null, "11.9rem"]}
            height={['auto', '9.6rem', null, '19.2rem']}
            fontWeight={700}
            bg={theme.colors.cardBackground}
            sx={{position: 'relative'}}
          >
            {props.index == 0 && (
              <>
                <Box className={'corner-square'} sx={{
                  top: offsetStyles,
                  left: offsetStyles,
                }}/>
              </>
            )}
            {props.index + 1 == props.totalElements && (
              <>
                <Box className={'corner-square'} sx={{
                  bottom:offsetStyles,
                  left: offsetStyles,
                }}/>
              </>
            )}
            {props.index + 1 + '.'}
          </Flex>
          <Flex
            className="block-title bordered"
            alignItems={"center"}
            lineHeight={['3rem', '3rem', null, '4.88rem']}
            fontWeight={700}
            bg={theme.colors.cardBackground}
            paddingLeft={"3.2rem"}
            width={['100%', '24.8rem', '41.6rem', '57.6rem']}
            height={[
              'auto', 
              isOpen ? '14.4rem' : 'auto', 
              null,
              isOpen ? '32rem' : '19.2rem']}
            sx={{
              transition: '0.25s ease-in-out all',
              position: 'relative',
              fontSize: ["2.8rem", "2.8rem", "2.8", '3.2rem'],
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                fontSize: '4.8rem !important'
              }
            }}
          >
            {props.content.heading}
          </Flex>
        </Flex>
        <Flex 
          className={"hiw-body bordered"} 
          width={['auto', '36rem', '']} 
          bg={theme.colors.cardBackground} 
          sx={{
            flexDirection: 'column',
            transition: '0.25s ease-in-out all',
            maxHeight: isOpen ? '1000px' : '19.2rem',
            position: 'relative',
            flexGrow: [null, null, null, 1]
          }}
        >
          {props.index + 1 == props.totalElements && (
              <Box className={'corner-square'} sx={{
                background: theme.colors.protocolCardLine,
                bottom: offsetStyles,
                right: offsetStyles,
                position: 'absolute',
                display: ['none', 'block']
              }}/>
          )}
          <Flex
            className={"hiw-trigger"}
            p={["2.4rem", "0 2.4rem", null, '0 3.2rem']}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            minHeight={['9.6rem', '9.6rem', null, '19.2rem'] }
            sx={{
              position: 'relative',
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                p: '0.64rem'
              }
            }}
          >
            {props.index == 0 && (
              <Box className={'corner-square'} sx={{
                background: theme.colors.protocolCardLine,
                top: offsetStyles,
                right: offsetStyles,
              }}/>
            )}
            <Text 
              fontSize={["1.6rem", null, null, "2.2rem"]} 
              lineHeight={["2.4rem", null, null, '3.3rem']} 
              as={"p"}
              maxWidth={'40rem'}
              width={['auto', 'auto', null, '100%']}
            >
              {props.content.triggerLabel}
            </Text>
            <SeeMoreButton isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}/>
          </Flex>
          <Flex 
            className={"hiw-content"} 
            flexDirection={'column'} 
            sx={{
              display: 'inline-block',
              maxHeight: isOpen ? '1000px' : '0',
              overflowY: 'hidden',
              transition: '0.25s ease-in-out all, padding',
              p: [
                isOpen ? '0 2.4rem' : '0 2.4rem', 
                isOpen ? '0 2.4rem' : '0 2.4rem', 
                null,
                '0 6.4rem 13.3rem']
            }}
          >
            <Box sx={{overflowY: 'hidden', 'img': { width: '100%'}}} my={['2.4rem', '2.4rem', '6.4rem 13.3rem']}>
              {props.content.content}
            </Box>
          </Flex> 
        </Flex>
      </Flex>
    </Box>
  );
};

export default HowItWorksBlock;