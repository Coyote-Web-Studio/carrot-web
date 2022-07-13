import { Flex, Box, Image, Text } from 'rebass';
import '@splidejs/react-splide/css'
import { useTheme } from 'styled-components';

import GridBackground from './../common/GridBackground';
import Fade from './../common/Fade';

import Breakdown from './Breakdown';
import HowItWorks from './HowItWorks';
import HowItWorksBlock from './HowItWorksBlock';
import SuccesfulCampaigns from './SuccesfulCampaigns';

const MainContent = (props : any) => {

  const CarrotInNumbers = [
    {
      label: 'Open Campaignes',
      value: 23
    },
    {
      label: 'Locked in Campaigns',
      value: '$17M+',
    },
    {
      label: 'Companies Created',
      value: '1,425'
    },
    {
      label: 'Community Members',
      value: '98,732'
    },
    {
      label: 'Bounties Claimed',
      value: 731
    },
    {
      label: 'Community Members',
      value: '98,732'
    },
  ];

  const Protocols = [
    {
      label: 'GNOSIS CHAIN',
      logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/gnosis_lyysrk.svg',
      url: '#'
    },
    {
      label: 'AGAVE',
      logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/agave_ch8rxi.svg',
      url: '#'
    },
    {
      label: 'COW PROTOCOL',
      logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow_e8h1lh.svg',
      url: '#'
    },
    {
      label: 'COWSWAP',
      logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow-swap_sgdmka.svg',
      url: '#'
    },
  ]

  const theme : any = useTheme();

  return (
    <Flex flexDirection={"column"} sx={{ position: "relative" }} mt={["2.4rem", "2.4rem", "6.4rem"]}>
      <Box sx={{
        ...theme.boxSizes.expandedBox, 
        position: 'absolute',
        height: '100%'
      }}>
        <GridBackground />
      </Box>
      {/* BREAKDOWN */}
      <Breakdown />
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* SUCCESFUL CAMPAIGNS */}
      <SuccesfulCampaigns />
      {/* CARROT IN NUMBERS */}
      <Flex sx={{
        zIndex: 1, 
        position: 'relative', 
        bg: theme.colors.orange6, 
        borderRadius: '1.6rem', 
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
            {CarrotInNumbers.map((item, index) => (
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
      {/* TRUSTING PROTOCOLS */}
      <Flex flexDirection={"column"} sx={{ position: "relative", zIndex: 1 }} mt={["8.2rem","5.8rem"]} pb={'9.6rem'}>
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            pt: ['2.4rem', '0'],
            flexDirection: 'column'
          }}>
            <Text as="h2" mb={['2.4rem', '3.85rem', '9.6rem']}>
              Trusted by Some of <Box as="br" sx={{display: ['none', 'block']}}/>Your Favorite Protocols
            </Text>
            <Flex as={'ul'} flexWrap={['wrap', 'nowrap']} width={'100%'}>
              {Protocols.map((protocol, index) => (
                <Flex as={'li'}  key={index} 
                  width={['calc(50vw - 2rem)', 'calc(25vw - 11.5rem)']}
                  height={[
                    'calc(50vw - 2rem)', 
                    '17rem', 
                    '10rem',
                    'calc(25vw - 11.5rem)',
                  ]} 
                  alignItems={'center'} 
                  justifyContent={'center'}
                  sx={{
                    position: 'relative',
                    mt: [
                      0, 
                      index % 2 == 0 ? 0 : '17rem', 
                      index % 2 == 0 ? 0 : '10rem',
                      index % 2 == 0 ? 0 : 'calc(25vw - 11.5rem)',
                    ],
                  }}
                >
                  <Flex 
                    className={'protocol-card protocol-card-front'}
                    width={'100%'}
                    height={'100%'}
                    alignItems={'center'} justifyContent={'center'}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      boxShadow: `0 0 0 1px ${theme.colors.textColor}`,
                      backgroundColor: theme.colors.protocolCardBackground,
                      transition: '0.35s cubic-bezier(0,1.19,.62,1.44) all',
                    }}>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      top: '-0.25rem',
                      left: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      top: '-0.25rem',
                      right: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      bottom: '-0.25rem',
                      right: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      bottom: '-0.25rem',
                      left: '-0.25rem'
                    }}/>
                    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                      <Image src={protocol.logo} sx={{
                        filter: theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset',
                        width: [null, null, '17.2rem']
                      }}/>
                      <Text as={'p'}>{protocol.label}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
        </Flex>
      </Flex>
      {/* CUSTOMER REVIEW */}
      <Flex sx={{zIndex: 1, position: 'relative', bg: theme.colors.customerCommentBackground, borderRadius: '1.6rem', pb: ['6.4rem', '6.4rem', '14.4rem'], pt: ['8.7rem'], mb: ['4.8rem']}}>
        <Box sx={{
          ...theme.boxSizes.expandedBox, 
          position: 'absolute',
          height: '100%',
          top: '6.4rem'
        }}>
          <GridBackground trimRows={3} color={theme.colors.customerCommentGrid} />
        </Box>
        <Fade sx={{
          ...theme.boxSizes.defaultBox,
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1
        }}>
          <Text fontSize={['2.8rem', '3.3em', '6.9rem']} mb={['3.8rem', '3.8rem', '12rem']} fontWeight={700} lineHeight={['3.8rem', '3.36rem', '6.969rem']} color={theme.colors.customerCommentText}>
            “Carrot was the best project on xDAI that allowed us to deploy KPI options in the Agave incentives program. This allows us to optimize our rewards towards specific goals rather than just throw them away.”
          </Text>
          <Text fontSize={['1.4rem', '1.4rem', '2.8rem']} color={theme.colors.customerCommentText}>
            — Luigi Lemon, Agave Core Contributor
          </Text>
        </Fade>
      </Flex>
    </Flex>
  );
};

export default MainContent;
