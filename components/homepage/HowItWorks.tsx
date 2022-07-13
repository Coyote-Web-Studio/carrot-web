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

export default HowItWorks;
