import { Flex, Box, Text } from 'rebass';
import { useTheme } from 'styled-components';

import Fade from '../common/Fade';

const CarrotInNumbers = () => {
  
  const theme : any = useTheme();

  return (
    <Flex sx={{
      zIndex: 1, 
      position: 'relative', 
      bg: theme.colors.orange6, 
      borderRadius: ['1.6rem', null, '5rem'], 
      pb: '3.6rem',
    }}
    >
      <Flex sx={{
        ...theme.boxSizes.defaultBox,
        pt: ['2.4rem', '2.4rem', '10rem'],
        flexDirection: 'column',
      }}>
        <Fade>
          <Text as="h2" mb={'2.4rem'} sx={{color: theme.colors.gray10}}>
            Carrot in<Box as="br" sx={{display: ['block', 'none', 'none']}}/> numbers
          </Text>
        </Fade>
        <Fade as={'ul'} flexDirection={'column'} sx={{
          flexWrap: 'wrap',
          width: ['100%'],
          mx: [0, '-2.4rem', '-6.4rem'],
          height: ['auto', '30rem', '60rem'],
          alignItems: ['auto', 'center', 'center']
        }}>
          {CarrotInNumbersData.map((item, index) => (
            <Flex as={'li'} flexDirection={'column'} key={index} sx={{
              borderTop: `0.1rem solid ${theme.colors.gray10}`,
              py: '1.2rem',
              mx: ['0', '2.4rem', '6.4rem'],
              width: ['100%', 'calc(50% - 2.4rem)', 'calc(50% - 6.4rem)'],
              '&:last-child': {
                borderBottom: [`0.1rem solid ${theme.colors.gray10}`],
              },
              '&:nth-of-type(3)': {
                borderBottom: ['none', `0.1rem solid ${theme.colors.gray10}`],
              },
            }}>
              <Text fontSize={['4rem', '4rem', '9.9rem']} fontWeight={700} sx={{color: theme.colors.gray10}}>
                {item.value}
              </Text>
              <Text sx={{color: theme.colors.gray10}} as={'p'}>
                {item.label}
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
    value: 24
  },
  {
    label: 'Total Historic Campaign Issuers',
    value: 9,
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