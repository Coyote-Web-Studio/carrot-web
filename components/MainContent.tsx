import { Flex, Box, Image, Text, Button as RBButton } from 'rebass';
import styled, { useTheme } from 'styled-components';
import GridBackground from './GridBackground';
import Button from './Button';
import HowItWorksBlock from './HowItWorksBlock';
import CampaignCard from './CampaignCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { relative } from 'node:path/win32';
import Fade from './Fade';

const MainContent = (props : any) => {
  interface ContentBlock {
    heading: string,
    content: string,
    image: string
  }

  const MainContent = [
    {
      heading: 'Measure what matters',
      content: 'Carrot allows you to set precise goals and targets based on the needs of your project. Use strong cryptoeconomic incentives to bring your community together and achieve common goals.',
      image: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/1-mobile_njnkt7.png'
    },
    {
      heading: 'Incentivize your community',
      content: 'Encourage positive feedback through collective efforts by rewarding users when important milestones and goals are met. Carrot has helped distribute over $XX in rewards to date.',
      image: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/2-mobile_xlekiw.png'
    },
    {
      heading: 'Reward real value',
      content: 'Anyone who contributes to a goal will receive rewards directly proportional to their impact thanks to the magic of KPI tokens. Get real value in exchange for real value. ',
      image: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048106/carrot/main-content/3-mobile_yryzyt.png'
    },
  ];

  const HowItWorksContent = [
    {
      heading: 'Create your campaign',
      triggerLabel: 'Set conditions and collateral',
      content: 
        <>
          <Text as={'p'}>
            Use the campaign creation interface to set your campaign&apos;s goal, collateral, duration, and more.
          </Text>
          <Image src={'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/1-mobile_njnkt7.png'} my={'2rem'}/>
          <Text as={'p'}>
            Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount!
          </Text>
        </>
    },
    {
      heading: 'Distribute KPI tokens',
      triggerLabel: 'Issue reward tokens to your community',
      content: 
        <>
          <Text as={'p'}>
            Issue reward tokens to your community
          </Text>
          <Image src={'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/1-mobile_njnkt7.png'} my={'2rem'}/>
          <Text as={'p'}>
            Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount!
          </Text>
        </>
    },
    {
      heading: 'Finalize and Redeem',
      triggerLabel: 'Distribute rewards and claim collateral saved by Carrot',
      content: 
        <>
          <Text as={'p'}>
            Use the campaign creation interface to set your campaign&apos;s goal, collateral, duration, and more.
          </Text>
          <Image src={'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/1-mobile_njnkt7.png'} my={'2rem'}/>
          <Text as={'p'}>
            Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount!
          </Text>
        </>
    },
  ];

  const SuccesfullCampaigns = [
    {
      heading: 'DXDAO',
      content: 'Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.',
      rewards: '$3,000.93',
      timeLeft: '01D 02H 54M'
    },
    {
      heading: 'DXDAO',
      content: 'Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.',
      rewards: '$3,000.93',
      timeLeft: '01D 02H 54M'
    },
    {
      heading: 'DXDAO',
      content: 'Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.',
      rewards: '$3,000.93',
      timeLeft: '01D 02H 54M'
    },
    {
      heading: 'DXDAO',
      content: 'Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.',
      rewards: '$3,000.93',
      timeLeft: '01D 02H 54M'
    },
    {
      heading: 'DXDAO',
      content: 'Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.',
      rewards: '$3,000.93',
      timeLeft: '01D 02H 54M'
    },
  ];

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
      <GridBackground />
      {/* BREAKDOWN */}
      <Flex
        flexDirection={"column"}
        sx={{
          ...theme.boxSizes.reducedBox,
          zIndex: 1,
        }}
        pt={["2.4rem","5.2rem", "12.8rem"]}
        pb={"9.2rem"}
      >
        {MainContent.map((contentBlock: ContentBlock, index: number) => (
          <Fade key={index} sx={{
            mb: ["4.8rem", "4.8rem", "6.4rem"],
          }}>
            <Flex
              flexDirection={["column", index % 2 == 0 ? "row" : "row-reverse"]}
              justifyContent={['auto', 'space-between']}
              alignItems={['auto', 'center']}
              sx={{
                "&:last-child": {
                  mb: 0,
                },
              }}
            >
              <Image src={contentBlock.image} mb={["2rem", "0"]} width={['100%', 'calc(50% - 1rem)', '53rem']} />
              <Flex flexDirection={'column'} width={['100%', 'calc(50% - 1rem)', '53rem']}>
                <Text as="h3" mb={"1.8rem"}>
                  {contentBlock.heading}
                </Text>
                <Text as="p" sx={{ ...theme.text.paragraph }}>
                  {contentBlock.content}
                </Text>
              </Flex>
            </Flex>
          </Fade>
        ))}
      </Flex>
      {/* HOW IT WORKS */}
      <Flex
        flexDirection={"column"}
        sx={{
          ...theme.boxSizes.defaultBox,
          zIndex: 1,
          mb: '8.2rem'
        }}
      >
        <Fade>
          <Text as={"h2"} mb={["1.4rem", '4.8rem']}>
            How it works
          </Text>
        </Fade>
        <Flex as={"ul"} flexDirection={"column"} width={"100%"}>
          <Fade>
            {HowItWorksContent.map((contentBlock, index) => (
              <HowItWorksBlock content={contentBlock} key={index} index={index}/>
            ))}
          </Fade>
        </Flex>
      </Flex>
      {/* SUCCESFUL CAMPAIGNS */}
      <Flex flexDirection={'column'} sx={{
        ...theme.boxSizes.defaultBox,
        zIndex: 1,
        mb: '9.6rem'
      }}>
        <Text as={'h2'} mb={['3.6rem', '11.2rem']}>
          Succesful Campaigns
        </Text>
        {/* TABLET / DESKTOP VIEW */}
        <Flex as={'ul'} flexDirection={['column', 'row']} mb={'1.6rem'} sx={{display: ['none !important', 'block !important', 'block !important']}}>
          <Splide options={{
            width: '100%',
            pagination: false,
            breakpoints: {
              360: {
                perPage: 1
              },
              768: {
                perPage: 2,
                gap: '2rem'
              },
              1680: {
                perPage: 3,
                gap: '6.2rem'
              },
              1920: {
                perPage: 4,
                gap: '1rem'
              }
            }}
          }>
            {SuccesfullCampaigns.map((campaign, index) => (
              <SplideSlide key={index}>
                <CampaignCard campaign={campaign} sx={{
                  width: ['100%', '100%', '37.3rem', '35.2rem'],
                }} />
              </SplideSlide>
            ))}
          </Splide>
        </Flex>
        {/* MOBILE VIEW (NO SLIDE) */}
        <Flex as={'ul'} sx={{display: ['block', 'none', 'none']}}flexDirection={['column', 'row']} mb={'1.6rem'}>
            {SuccesfullCampaigns.map((campaign, index) => (
              index < 2 && (
                <CampaignCard campaign={campaign} sx={{
                  width: ['100%', '100%', '37.3rem', '35.2rem'],
                }} key={index} />
              )
            ))}
        </Flex>
        <Button>
          SEE ALL CAMPAIGNS
        </Button>
      </Flex>
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
                <Flex as={'li'} width={[1/2, 1/4]} key={index} height={[
                  'calc(50vw - 2rem)', 
                  '17rem', 
                  '10rem',
                  '30rem',
                  ]} alignItems={'center'} justifyContent={'center'}
                  sx={{
                    mt: [
                      0, 
                      index % 2 == 0 ? 0 : '17rem', 
                      index % 2 == 0 ? 0 : '10rem',
                      index % 2 == 0 ? 0 : '30rem',
                    ],
                    position: 'relative',
                    '&:hover .protocol-card-front': {
                      transform: ['none', 'none', 'rotate3d(0, 1, 0, -90deg) !important'],
                    },
                    '&:hover .protocol-card-back': {
                      transform: ['none', 'none', 'rotate3d(0, 1, 0, 0deg) !important'],
                    },
                    '&:nth-of-type(2), &:last-child .protocol-card-front': {
                      borderRight: [`0.1rem solid ${theme.colors.protocolCardLine}`],
                    },
                    '&:nth-of-type(3), &:last-child .protocol-card-front': {
                      borderBottom: [`0.1rem solid ${theme.colors.protocolCardLine}`, `0.1rem solid ${theme.colors.protocolCardLine}`],
                    },
                    '&:nth-of-type(2) .protocol-card-front': {
                      borderRight: ['none', 'none', `0.1rem solid ${theme.colors.protocolCardLine}`],
                    },
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
                      border: `0.1rem solid ${theme.colors.protocolCardLine}`,
                      borderRight: ['none', `0.1rem solid ${theme.colors.protocolCardLine}`],
                      borderBottom: ['none', `0.1rem solid ${theme.colors.protocolCardLine}`],
                      backgroundColor: theme.colors.protocolCardBackground,
                      transition: '0.35s cubic-bezier(0,1.19,.62,1.44) all',
                      transformOrigin: 'center',
                      transform: ['none','none', 'scale(1.0065) rotate3d(0,1,0,0deg)'],
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
                        filter: theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset'
                      }}/>
                      <Text as={'p'}>{protocol.label}</Text>
                    </Flex>
                  </Flex>
                  <Flex 
                    className={'protocol-card protocol-card-back'}
                    width={'100%'}
                    height={'100%'}
                    alignItems={'center'} justifyContent={'center'}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      border: `0.1rem solid ${theme.colors.protocolCardLine}`,
                      borderRight: ['none', `0.1rem solid ${theme.colors.protocolCardLine}`],
                      borderBottom: ['none', `0.1rem solid ${theme.colors.protocolCardLine}`],
                      background: theme.colors.protocolCardLine,
                      transition: '0.35s cubic-bezier(0,1.19,.62,1.44) all',
                      transformOrigin: 'center',
                      transform: ['none', 'none', 'scale(1.0065) rotate3d(0,1,0, 90deg)'],
                      '&:nth-of-type(2), &:last-child': {
                        borderRight: [`0.1rem solid ${theme.colors.protocolCardLine}`],
                      },
                      '&:nth-of-type(3), &:last-child': {
                        borderBottom: [`0.1rem solid ${theme.colors.protocolCardLine}`],
                      },
                      '&:nth-of-type(2)': {
                        borderRight: [`0.1rem solid ${theme.colors.protocolCardLine}`],
                      },
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
                        filter: !theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset'
                      }}/>
                      <Text as={'p'} color={theme.colors.protocolCardBackground}>{protocol.label}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
        </Flex>
      </Flex>
      {/* CUSTOMER REVIEW */}
      <Flex sx={{zIndex: 1, position: 'relative', bg: theme.colors.customerCommentBackground, borderRadius: '1.6rem', pb: ['6.4rem', '6.4rem', '14.4rem'], pt: ['8.7rem'], mb: ['4.8rem']}}>
        <GridBackground trimRows={3} color={theme.colors.customerCommentGrid} top={'6.4rem'} />
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
