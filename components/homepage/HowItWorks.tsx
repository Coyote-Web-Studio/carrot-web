import { Flex, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';

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
          How it works
        </Text>
      </Fade>
      <Flex as={"ul"} flexDirection={"column"} width={"100%"}>
        <Fade>
          {HowItWorksContent.map((contentBlock, index) => (
            <HowItWorksBlock content={contentBlock} key={index} index={index} />
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
        Use the campaign creation interface to set your campaign's goal, collateral, duration, and more. Once established, Carrot campaign tokens are minted and sent to your wallet. This is usually at a 1:1 ratio for simplicity, but can be any specified amount!
      </Text>
  },
  {
    heading: 'Distribute KPI tokens',
    triggerLabel: 'Issue reward tokens to your community',
    content: 
      <>
        <Text as={'p'}>
          Distribute your KPI tokens to your community. This could be liquidity mining stakers, in-person event attendees, or anyone else relevant to your campaign!
        </Text>
        <Text as={'p'}>
          These tokens will later be redeemable by users for the underlying collateral depending on how much of the condition was met.
        </Text>
      </>
  },
  {
    heading: 'Finalize and Redeem',
    triggerLabel: 'Distribute rewards and claim collateral saved by Carrot',
    content: 
      <>
        <Text as={'p'}>
          At the end of the campaign, finalization will occur through the selected oracle. KPI token holders can then convert to the collateral at the settled rate.
        </Text>
        <Text as={'p'}>
          If 50% of the target is met, 50% of the rewards will be claimable by your community with the remaining 50% accessible to you!
        </Text>
      </>
  },
];

export default HowItWorks;
