import { Flex, Box, Text } from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';

const CarrotInNumbers = () => {
  
  const theme : any = useTheme();

  return (
    <Flex sx={{
      zIndex: 1, 
      position: 'relative', 
      bg: theme.colors.orange6, 
      borderRadius: ['1.6rem', null, null, '5rem'], 
      pb: ['3.6rem', null, null, '4.8rem'],
      height: ['calc(2.4rem * 34)', 'calc(2.4rem * 20)', null, 'calc(6.4rem * 10)'],
      [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
        height: 'calc(6.4rem * 16)'
      },
    }}
    >
      <Box sx={{
        position: 'absolute',
        height: ['61rem', 'calc(2.4rem * 12)', null, 'calc(6.4rem * 6)'],
        top: ['12.9rem', '12rem', null, '16.6rem',],
        mixBlendMode: 'color-burn',
        opacity: 0.1,
        width: '100%',
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          top: '21rem'
        },
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          top: '31.6rem'
        },
      }}
      >
        <GridBackground sx={{
          backgroundImage: 'url(/Pattern.svg)',
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            backgroundPosition: 'center',
          },
          
        }}/>
      </Box>
      <Flex sx={{
        ...theme.boxSizes.defaultBox,
        py: ['4.8rem'],
        flexDirection: 'column',
        position: 'relative',
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          pt: '10rem'
        },
      }}>
        <Flex flexDirection={'column'} sx={{
          ...theme.boxSizes.defaultBox,
        }}>
          <Fade sx={{
            zIndexX: 1 }}
          >
            <Text as="h2"
              sx={{
                color: theme.colors.gray10,
                mb: ['2.4rem', null, null, '4.8rem'],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  mb: '6.4rem'
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                  mb: '9rem'
                }
              }}
            >
              <AnimatedText color={theme.colors.gray10}>
                Carrot in
              </AnimatedText>
              <Box as="br" sx={{display: ['block', 'none', 'none']}}/>
              <AnimatedText color={theme.colors.gray10}>
                numbers
              </AnimatedText>
            </Text>
          </Fade>
          <Fade as={'ul'} flexDirection={'column'} sx={{
            flexWrap: 'wrap',
            width: ['100%'],
            mx: [0, '-2.4rem', '-6.4rem'],
            height: ['auto', '32rem', '31rem', '40rem'],
            position: 'relative',
            alignItems: ['auto', 'center', 'center'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: '60rem'
            },
          }}>
            {CarrotInNumbersData.map((item, index) => (
              <Flex 
                as={'li'} 
                flexDirection={'column'} 
                key={index} 
                sx={{
                  borderTop: `0.1rem solid ${theme.colors.gray10}`,
                  width: ['100%', 'calc(50% - 2.4rem)', 'calc(50% - 6.4rem)'],
                  mx: ['0', '2.4rem', '6.4rem'],
                  '&:last-child': {
                    borderBottom: [`0.1rem solid ${theme.colors.gray10}`],
                  },
                  '&:nth-of-type(3)': {
                    borderBottom: ['none', `0.1rem solid ${theme.colors.gray10}`],
                  },
                }}
              >
                <Flex flexDirection={'column'} sx={{
                  py: '1.2rem',
                  justifyContent: 'center',
                  height: [
                    '10rem', 
                    'calc(2.4rem * 4 - 1px)', 
                    null, 
                    'calc(6.4rem * 2 - 1px)'],
                  [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: 'calc(6.4rem * 3 - 1px)'
                  },
                }}>
                  <Text as={'h3'} fontSize={['4rem', '4rem', null, '7.2rem']} fontWeight={700} sx={{
                    color: theme.colors.gray10, 
                    mb: ['1rem', '1.4rem', null, '1.2rem'],
                    whiteSpace: 'nowrap',
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                      fontSize: '9.9rem !important'
                    }
                    }}
                  >
                    <AnimatedText color={theme.colors.gray10}>
                      {item.value}
                    </AnimatedText>
                  </Text>
                  <Text sx={{color: theme.colors.gray10, whiteSpace: 'nowrap'}} as={'p'}>
                    <AnimatedText color={theme.colors.gray10}>
                      {item.label}
                    </AnimatedText>
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Fade>
        </Flex>
      </Flex>
    </Flex>
  )
};

const CarrotInNumbersData = [
  {
    label: 'Total Number Of Campaigns',
    value: '24'
  },
  {
    label: 'Total Historic Campaign Issuers',
    value: '9',
  },
  {
    label: 'Total Historic Carrot Token Owners',
    value: '2,324'
  },
  {
    label: 'Total Historic TVL',
    value: '$17.5M'
  },
  {
    label: 'Historic Rewards Distributed',
    value: '$14.3M'
  },
  {
    label: 'Historic Value “Saved”',
    value: '$3.2M'
  },
];

export default CarrotInNumbers