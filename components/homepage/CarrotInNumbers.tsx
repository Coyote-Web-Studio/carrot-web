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
      pb: ['3.6rem', '4.8rem'],
    }}
    >
      <Flex sx={{
        ...theme.boxSizes.defaultBox,
        pt: ['2.4rem', null, '4.8rem', '10rem'],
        flexDirection: 'column',
        position: 'relative'
      }}>
        <Box sx={{
          ...theme.boxSizes.defaultBox,
          position: 'absolute',
          height: ['61rem', '30rem', null, 'calc(100% - 30rem)'],
          top: ['14.4rem', '9.7rem', null, '22.6rem']
          // background: 'blue',
          }}
        >
          <GridBackground color={theme.colors.carrotInNumbersGrid} />
        </Box>
        <Fade sx={{zIndexX: 1}}>
          <Text as="h2" mb={['2.4rem', null, null, '9rem']} sx={{color: theme.colors.gray10}}>
            Carrot in<Box as="br" sx={{display: ['block', 'none', 'none']}}/> numbers
          </Text>
        </Fade>
        <Fade as={'ul'} flexDirection={'column'} sx={{
          flexWrap: 'wrap',
          width: ['100%'],
          mx: [0, '-2.4rem', '-6.4rem'],
          height: ['auto', '30rem', null, '60rem'],
          position: 'relative',
          alignItems: ['auto', 'center', 'center'],
        }}>
          {CarrotInNumbersData.map((item, index) => (
            <Flex as={'li'} flexDirection={'column'} key={index} sx={{
              borderTop: `0.1rem solid ${theme.colors.gray10}`,
              py: '1.2rem',
              height: ['10rem', null, null, 'calc(6.5rem * 3)'],
              mx: ['0', '2.4rem', '6.4rem'],
              width: ['100%', 'calc(50% - 2.4rem)', 'calc(50% - 6.4rem)'],
              '&:last-child': {
                borderBottom: [`0.1rem solid ${theme.colors.gray10}`],
              },
              '&:nth-of-type(3)': {
                borderBottom: ['none', `0.1rem solid ${theme.colors.gray10}`],
              },
            }}>
              <Text fontSize={['4rem', '4rem', null, '9.9rem']} fontWeight={700} sx={{color: theme.colors.gray10, whiteSpace: 'nowrap'}}>
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
          ))}
        </Fade>
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