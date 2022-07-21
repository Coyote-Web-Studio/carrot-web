import { Flex, Text, Box } from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';

import Fade from '../common/Fade';
import HowItWorksBlock from './HowItWorksBlock';

const HowItWorks = () => {

  const theme : any = useTheme();

  return (
    <Flex
      flexDirection={"column"}
      sx={{
        ...theme.boxSizes.defaultBox,
        zIndex: 1,
        mb: ["8.2rem", "8.2rem", "16.9rem"],
      }}
    >
      <Fade>
        <Text as={"h2"} mb={["1.4rem", "4.8rem"]}>
          <AnimatedText>
            How it works
          </AnimatedText>
        </Text>
      </Fade>
      <Flex as={"ul"} flexDirection={"column"} width={"100%"} sx={{position: 'relative'}}>
        <Fade>
        <>
          <Box sx={{
            width: '0.46rem', 
            height: '0.46rem', 
            background: theme.colors.protocolCardLine,
            position: 'absolute',
            top: '-0.25rem',
            right: '-0.25rem',
            display: ['block', 'none'],
            zIndex: 10
          }}/>
          <Box sx={{
            width: '0.46rem', 
            height: '0.46rem', 
            background: theme.colors.protocolCardLine,
            position: 'absolute',
            top: '-0.25rem',
            left: '-0.25rem',
            display: ['block', 'none'],
            zIndex: 10
          }}/>
          <Box sx={{
            width: '0.46rem', 
            height: '0.46rem', 
            background: theme.colors.protocolCardLine,
            position: 'absolute',
            bottom: '-0.25rem',
            left: '-0.25rem',
            display: ['block', 'none'],
            zIndex: 10
          }}/>
          <Box sx={{
            width: '0.46rem', 
            height: '0.46rem', 
            background: theme.colors.protocolCardLine,
            position: 'absolute',
            bottom: '-0.25rem',
            right: '-0.25rem',
            display: ['block', 'none'],
            zIndex: 10
          }}/>
        </>
          {HowItWorksContent.map((contentBlock, index, array) => (
            <HowItWorksBlock content={contentBlock} key={index} index={index} totalElements={array.length}/>
          ))}
        </Fade>
      </Flex>
    </Flex>
  );
};

const HowItWorksContent = [
  {
    heading: 'Create your campaign',
    triggerLabel: 'Set conditions and collateral',
    content: 
      <Text as={'p'}>
        <AnimatedText speed={5}>
          Use the campaign creation interface to set your campaign&apos;s goal, collateral, duration, and more. Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount!
        </AnimatedText>
      </Text>
  },
  {
    heading: 'Distribute KPI tokens',
    triggerLabel: 'Issue reward tokens to your community',
    content: 
      <>
        <Text as={'p'} mb={'2rem'}>
          <AnimatedText speed={5}>
            Distribute your KPI tokens to your community. This could be liquidity mining stakers, in-person event attendees, or anyone else relevant to your campaign!
          </AnimatedText>
        </Text>
        <Text as={'p'}>
          <AnimatedText initialDelay={650} speed={5}>
            These tokens will later be redeemable by users for the underlying collateral depending on how much of the condition was met.
          </AnimatedText>
        </Text>
      </>
  },
  {
    heading: 'Finalize and Redeem',
    triggerLabel: 'Distribute rewards and claim collateral saved by Carrot',
    content: 
      <>
        <Text as={'p'} mb={'2rem'}>
          <AnimatedText speed={5}>
            At the end of the campaign, finalization will occur through the selected oracle. KPI token holders can then convert to the collateral at the settled rate.
          </AnimatedText>
        </Text>
        <Text as={'p'}>
          <AnimatedText initialDelay={650} speed={5}>
            If 50% of the target is met, 50% of the rewards will be claimable by your community with the remaining 50% accessible to you!
          </AnimatedText>
        </Text>
      </>
  },
];

export default HowItWorks;
