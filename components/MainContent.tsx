import { Flex, Box, Image, Text, Button as RBButton } from 'rebass';
import styled, { useTheme } from 'styled-components';
import GridBackground from './GridBackground';
import Button from './Button';
import HowItWorksBlock from './HowItWorksBlock';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

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
            Use the campaign creation interface to set your campaign's goal, collateral, duration, and more.
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
            Use the campaign creation interface to set your campaign's goal, collateral, duration, and more.
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
    <Flex flexDirection={"column"} sx={{ position: "relative" }} mt={"2.4rem"}>
      <GridBackground />
      {/* BREAKDOWN */}
      <Flex
        flexDirection={"column"}
        sx={{
          ...theme.boxSizes.defaultBox,
          zIndex: 1,
        }}
        pt={"5.2rem"}
        pb={"9.2rem"}
      >
        {MainContent.map((contentBlock: ContentBlock, index: number) => (
          <Flex
            flexDirection={["column", index % 2 == 0 ? "row" : "row-reverse"]}
            justifyContent={['auto', 'space-between']}
            alignItems={['auto', 'center']}
            sx={{
              mb: "4.8rem",
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <Image src={contentBlock.image} mb={["2rem", "0"]} width={['100%', 'calc(50% - 1rem)']} />
            <Flex flexDirection={'column'} width={['100%', 'calc(50% - 1rem)']}>
              <Text as="h3" mb={"1.8rem"}>
                {contentBlock.heading}
              </Text>
              <Text as="p" sx={{ ...theme.text.paragraph }}>
                {contentBlock.content}
              </Text>
            </Flex>
          </Flex>
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
        <Text as={"h2"} mb={"1.4rem"}>
          How it works
        </Text>
        <Flex as={"ul"} flexDirection={"column"}>
          {HowItWorksContent.map((contentBlock, index) => (
            <HowItWorksBlock content={contentBlock} key={index} index={index}/>
          ))}
        </Flex>
      </Flex>
      {/* SUCCESFUL CAMPAIGNS */}
      <Flex flexDirection={'column'} sx={{
        ...theme.boxSizes.defaultBox,
        zIndex: 1,
        mb: '9.6rem'
      }}>
        <Text as={'h2'} mb={'3.6rem'}>
          Succesful Campaigns
        </Text>
        <Flex as={'ul'} flexDirection={['column', 'row']} mb={'1.6rem'}>
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
              1440: {
                perPage: 3,
                gap: '2rem'
              }
            }}
          }>
            {SuccesfullCampaigns.map((campaign, index) => (
              <SplideSlide>
                <Flex flexDirection={['column']} bg={theme.colors.cardBackground} sx={{
                  border: `1px solid ${theme.colors.cardLine}`,
                  borderRadius: '1.6rem',
                  overflow: 'hidden',
                  width: ['100%', '100%'],
                  mb: ['2.4rem', '4.8rem'],
                }}>
                  <Flex className={'campaign-header'} 
                    sx={{
                      borderBottom: `0.1rem solid ${theme.colors.cardLine}`,
                      height: '6.4rem'
                    }}
                  >
                    <Flex sx={{justifyContent: 'center', alignItems: 'center', borderRight: `0.1rem solid ${theme.colors.gray10}`, width: '7rem'}}>
                      <Box sx={{bg: theme.colors.blue6, width: '2.4rem', height: '2.4rem', borderRadius: '2.4rem'}}
                      />
                    </Flex>
                    <Flex alignItems='center' pl='2rem'>
                      <Text as={'p'}>
                        {campaign.heading}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex className={'campaign-body'} p={'2.4rem'} flexDirection={'column'}>
                    <Text as={'p'} mb={'2.4rem'}>
                      {campaign.content}
                    </Text>
                    <Flex flexDirection={'column'}>
                      <Flex justifyContent={'space-between'}>
                        <Text as={'p'} fontSize={'1.2rem'}>REWARDS</Text>
                        <Text as={'p'} fontSize={'1.2rem'}>{campaign.rewards}</Text>
                      </Flex>
                      <Flex justifyContent={'space-between'}>
                        <Text as={'p'} fontSize={'1.2rem'}>TIME LEFT</Text>
                        <Text as={'p'} fontSize={'1.2rem'}>{campaign.timeLeft}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <RBButton sx={{
                    height: '6.4rem', 
                    borderTop: `0.1rem solid ${theme.colors.cardLine}`, 
                    bg: theme.colors.cardBackground, 
                    borderRadius: 0, 
                    fontSize: '1.6rem', 
                    color: theme.colors.cardText,
                    '&:hover': {
                      background: theme.colors.cardButtonHover
                    }
                  }}
                  >
                    ↳ see campaign
                  </RBButton>
                </Flex>
              </SplideSlide>
            ))}
          </Splide>
        </Flex>
        <Button>
          SEE ALL CAMPAIGNS
        </Button>
      </Flex>
      {/* CARROT IN NUMBERS */}
      <Flex sx={{zIndex: 1, position: 'relative', bg: theme.colors.orange6, borderRadius: '1.6rem', pb: '3.6rem'}}>
        <Flex sx={{
          ...theme.boxSizes.defaultBox,
          pt: '2.4rem',
          flexDirection: 'column'
        }}>
          <Text as="h2" mb={'2.4rem'} sx={{color: theme.colors.gray10}}>
            Carrot in<br/> numbers
          </Text>
          <Flex as={'ul'} flexDirection={'column'}>
            {CarrotInNumbers.map((item, index) => (
              <Flex as={'li'} flexDirection={'column'} sx={{
                borderTop: `0.1rem solid ${theme.colors.gray10}`,
                py: '1.2rem',
                '&:last-child': {
                  borderBottom: `0.1rem solid ${theme.colors.gray10}`,
                }
              }}>
                <Text fontSize={'4rem'} fontWeight={700} sx={{color: theme.colors.gray10}}>{item.value}</Text>
                <Text sx={{color: theme.colors.gray10}} as={'p'}>{item.label}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
      {/* TRUSTING PROTOCOLS */}
      <Flex flexDirection={"column"} sx={{ position: "relative", zIndex: 1 }} mt={"8.2rem"} pb={'9.6rem'}>
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            pt: '2.4rem',
            flexDirection: 'column'
          }}>
            <Text as="h2" mb={'2.4rem'}>
              Trusted by Some of Your Favorite Protocols
            </Text>
            <Flex as={'ul'} flexWrap={'wrap'}>
              {Protocols.map((protocol, index) => (
                <Flex as={'li'} width={[1/2]} height={'calc(50vw - 2rem)'} alignItems={'center'} justifyContent={'center'}
                  sx={{
                    border: `0.1rem solid ${theme.colors.protocolCardLine}`,
                    borderRight: 'none',
                    borderBottom: 'none',
                    background: theme.colors.protocolCardBackground,
                    '&:nth-of-type(2), &:last-child': {
                      borderRight: `0.1rem solid ${theme.colors.protocolCardLine}`,
                    },
                    '&:nth-of-type(3), &:last-child': {
                      borderBottom: `0.1rem solid ${theme.colors.protocolCardLine}`,
                    }
                  }}>
                  <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={protocol.logo} sx={{
                      filter: theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset'
                    }}/>
                    <Text as={'p'}>{protocol.label}</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
        </Flex>
      </Flex>
      {/* CUSTOMER REVIEW */}
      <Flex sx={{zIndex: 1, position: 'relative', bg: theme.colors.customerCommentBackground, borderRadius: '1.6rem', pb: '6.4rem', pt: '8.7rem', mb: '4.8rem'}}>
        <GridBackground trimRows={3} color={theme.colors.customerCommentGrid} top={'6.4rem'} />
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1
        }}>
          <Text fontSize={'2.8rem'} mb={'3.8rem'} fontWeight={700} lineHeight={'3.8rem'} color={theme.colors.customerCommentText}>
            “Carrot was the best project on xDAI that allowed us to deploy KPI options in the Agave incentives program. This allows us to optimize our rewards towards specific goals rather than just throw them away.”
          </Text>
          <Text fontSize={'1.4rem'} color={theme.colors.customerCommentText}>
            — Luigi Lemon, Agave Core Contributor
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainContent;
