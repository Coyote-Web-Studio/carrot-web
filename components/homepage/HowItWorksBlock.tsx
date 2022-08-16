import { useState } from 'react';
import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";
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
              isOpen ? 'auto' : '9.6rem'],
            transition: '0.25s ease-in-out height',
            rowGap: '1px',
            columnGap: '1px',
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: isOpen ? 'auto !important' : 'calc(6.4rem * 3) !important'
            },
            
          }}
        >
          <Flex
            className={'block-index bordered'}
            minWidth={["6.4rem", '6.4rem']}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={["4.8rem", "4rem"]}
            height={['auto', '9.6rem', null, '9.6rem']}
            fontWeight={700}
            bg={theme.colors.cardBackground}
            sx={{
              position: 'relative',
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                fontSize: '11.9rem !important',
                minWidth: 'calc(6.4rem * 3) !important',
                height: 'calc(6.4rem * 3) !important'
              },
            }}
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
                  bottom: offsetStyles,
                  left: offsetStyles,
                  display: ['none', 'unset']
                }}/>
              </>
            )}
            {props.index + 1 + '.'}
          </Flex>
          <Flex
            className="block-title bordered"
            lineHeight={['90%']}
            fontWeight={700}
            alignItems={['center', 'unset']}
            bg={theme.colors.cardBackground}
            px={["1.8rem", null, "2.4rem", "3.2rem"]}
            py={['1.8rem', null, null, '1.8rem']}
            width={['100%', '24.8rem', null, '41.6rem']}
            height={[
              'auto', 
              isOpen ? '14.2rem' : '9.6rem', 
              null,
              isOpen ? '12.6rem' : '9.6rem']}
            sx={{
              transition: '0.15s ease-in-out all',
              position: 'relative',
              maxWidth: [null, null, null, '30rem'],
              fontSize: ["2.8rem", "2.8rem", "2.8rem"],
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                fontSize: '4.8rem !important',
                width: '54rem !important',
                maxWidth: 'unset',
                height: isOpen ? '32rem !important' : 'calc(6.4rem * 3) !important',
                py: '5.4rem !important'
              },
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                width: '57.6rem !important',
                py: '7.4rem !important'
              },
              
            }}
          >
            {props.content.heading}
          </Flex>
        </Flex>
        <Flex 
          className={"hiw-body bordered"} 
          width={['auto', '36rem', null, null]} 
          bg={theme.colors.cardBackground} 
          sx={{
            flexDirection: 'column',
            transition: '0.25s ease-in-out all',
            maxHeight: isOpen ? '1000px' : 'calc(6.4rem * 3)',
            position: 'relative',
            flexGrow: [null, null, 1],
          }}
        >
          {props.index + 1 == props.totalElements && (
              <Box className={'corner-square'} sx={{
                background: theme.colors.protocolCardLine,
                bottom: offsetStyles,
                right: offsetStyles,
                position: 'absolute',
                display: ['none', 'block'],
              }}/>
          )}
          <Flex
            className={"hiw-trigger"}
            p={["2.4rem", "0 2.4rem"]}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            minHeight={['9.6rem', null, null, '9.6rem'] }
            sx={{
              position: 'relative',
              p: ["2.4rem", "0 2.4rem"],
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                minHeight: 'calc(6.4rem * 3) !important',
                p: '0 6.4rem !important',
              }
            }}
          >
            {props.index == 0 && (
              <Box className={'corner-square'} sx={{
                background: theme.colors.protocolCardLine,
                top: offsetStyles,
                right: offsetStyles,
                display: ['none', 'unset']
              }}/>
            )}
            <Text 
              fontSize={["1.6rem"]} 
              lineHeight={["2.4rem"]} 
              as={"p"}
              maxWidth={'40rem'}
              width={['auto', 'auto', null, '100%']}
              sx={{
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  fontSize: '2.2rem',
                  lineHeight: '3.3rem'
                }
              }}
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
              maxHeight: isOpen ? '100rem' : '0',
              height: [
                null,
                isOpen ? 'calc(6.4rem * 7) !important' : 'auto',
                null,
                isOpen ? 'calc(6.4rem * 9 + 3.2rem) !important' : 'auto'
              ],
              overflowY: 'hidden',
              transition: '0.25s ease-in-out all',
              p: [
                isOpen ? '0 2.2rem 0' : '0 2.2rem 0',
              ],
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                p: isOpen ? '0 6.4rem 0' : '0 6.4rem 0' 
              },
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                height:  isOpen ? 'calc(6.4rem * 10) !important' : 'auto'
              },
            }}
          >
            <Box 
              sx={{
                overflowY: 'hidden', 
                '.content-image': { 
                  height: [null, '14.8rem'],
                  minHeight: ['14.8rem'],
                  [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    minHeight: '31.8rem'
                  },
                },
                'p': {
                  fontSize: [null, null, null, '1.6rem !important'],
                },
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  'p': {
                    fontSize: '1.9rem !important'
                  }
                },
              }} 
              my={['2.4rem', '2.4rem', '6.4rem 13.3rem']}
            >
              {props.content.content}
            </Box>
          </Flex> 
        </Flex>
      </Flex>
    </Box>
  );
};

export default HowItWorksBlock;