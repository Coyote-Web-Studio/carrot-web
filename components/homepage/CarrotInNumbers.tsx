import { Flex, Box, Text } from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';
import CarrotInNumbersItem from './CarrotInNumbersItem';

const CarrotInNumbers = () => {
  
  const theme : any = useTheme();

  return (
    <Flex sx={{
      zIndex: 1, 
      position: 'relative', 
      bg: theme.colors.orange6, 
      borderRadius: ['1.6rem', null, null, '5rem'], 
      pb: [null, null, null, '4.8rem'],
      height: ['calc(2.4rem * 33)', 'calc(2.4rem * 20)', null, 'calc(6.4rem * 10)'],
      [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
        height: 'calc(6.4rem * 14)'
      },
      [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
        height: 'calc(6.4rem * 16)'
      },
    }}
    >
      <Box sx={{
        position: 'absolute',
        height: ['calc(2.4rem * 27)', 'calc(2.4rem * 14)', null, 'calc(6.4rem * 7)'],
        top: ['12.8rem', '8.8rem', null, '11.8rem',],
        mixBlendMode: 'color-burn',
        opacity: 0.1,
        width: '100%',
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          top: '15rem',
          height: 'calc(6.4rem * 11)'
        },
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          top: '26.5rem',
          height: 'calc(6.4rem * 11 - 0.1rem)'
        },
      }}
      >
        <GridBackground sx={{
          backgroundImage: 'url(/Pattern.svg)',
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            backgroundPosition: 'top center',
          }
        }}/>
      </Box>
      <Flex sx={{
        ...theme.boxSizes.defaultBox,
        pt: ['4.8rem', '4.8rem'],
        pb: [null, '4.8rem'],
        flexDirection: 'column',
        position: 'relative',
      }}>
        <Fade sx={{
          zIndexX: 1,
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            pt: '6.4rem'
          },
          }}
        >
          <Text as="h2"
            sx={{
              color: theme.colors.gray10,
              mb: ['4.8rem', null, null, '6.4rem'],
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                mb: '9rem'
              }
            }}
          >
            <AnimatedText color={theme.colors.gray10}>
              Carrot in
            </AnimatedText>
            <Box as="br" sx={{display: ['block', 'none', 'none']}}/>
            <AnimatedText color={theme.colors.gray10} initialDelay={100}>
              numbers
            </AnimatedText>
          </Text>
        </Fade>
        <Fade as={'ul'} flexDirection={'column'} sx={{
          flexWrap: 'wrap',
          width: ['100%'],
          mx: [0, '-2.4rem', '-2.4rem', '-6.4rem'],
          height: ['auto', '32rem', '31rem', '40rem'],
          position: 'relative',
          alignItems: ['auto', 'center', 'center'],
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            height: '60rem'
          },
        }}>
          {CarrotInNumbersData.map((item, index) => (
            <CarrotInNumbersItem key={index} data={item}/>
          ))}
        </Fade>
      </Flex>
    </Flex>
  )
};

const CarrotInNumbersData = [
  {
    label: 'Total Number Of Campaigns',
    value: 24,
    type: 'integer'
  },
  {
    label: 'Total Historic Campaign Issuers',
    value: 9,
    type: 'integer'
  },
  {
    label: 'Total Historic Carrot Token Owners',
    value: 2324,
    type: 'integer'
  },
  {
    label: 'Total Historic TVL',
    value: 17500000,
    type: 'currency'
  },
  {
    label: 'Historic Rewards Distributed',
    value: 1430000,
    type: 'currency'
  },
  {
    label: 'Historic Value “Saved”',
    value: 3200000,
    type: 'currency'
  },
];

export default CarrotInNumbers