import { Flex, Image, Text, Box } from "rebass";
import Fade from "../common/Fade";
import { useTheme } from "styled-components";
import AnimatedText from "../common/AnimatedText";
import { useParallax } from 'react-scroll-parallax';


const Breakdown = (props: any) => {
  const theme: any = useTheme();

  const sphereParallax = useParallax({
    speed: -10,
  });

  return (
    <Box
      sx={{
        pt: ["4.8rem", "calc(2.4rem * 2)", null, "12.8rem"],
        pb: ["calc(2.4rem * 4 - 0.4rem)", 'calc(2.4rem * 3 + 0.3rem)', null, "19rem"],
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          pb: '17.6rem'
        },
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          pb: '17rem'
        }
      }}
    >
      <Flex
        flexDirection={"column"}
        sx={{
          ...theme.boxSizes.reducedBox,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Image
          ref={sphereParallax.ref}
          src={"misc/sphere.png"}
          sx={{
            position: "absolute",
            top: ["-5rem", "10rem"],
            width: [null, "6rem", "10rem"],
            height:  [null, "6rem", "10rem"],
            right: ["3rem", null, null, "-5rem"],
            zIndex: "100000",
            display: ['none', 'block']
          }}
        />
        {MainContent.map((contentBlock: ContentBlock, index: number) => (
          <Fade
            key={index}
            sx={{
              mb: ["4.8rem", null, null, "6.4rem"],
              position: "relative",
              '&:last-child': {
                mb: '0'
              }
            }}
          >
            <Flex
              flexDirection={["column", index % 2 == 0 ? "row" : "row-reverse"]}
              justifyContent={["auto", "center"]}
              alignItems={["auto"]}
              sx={{
                columnGap: '4rem',
                "&:last-child": {
                  mb: 0,
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                  justifyContent: 'space-between !important',
                },
              }}
            >
              <Box
                mb={["2.4rem", "0"]}
                sx={{
                  width: ["100%", "31.2rem", null, "40.8rem"],
                  height: ['19.2rem', '24rem', null, "32rem"],
                  backgroundImage: `url(${contentBlock.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: `0.1rem solid ${theme.colors.textColor}`,
                  borderRadius: ['0.85rem', null, '1.3rem'],
                  [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    width: '53rem',
                    height: '38.4rem'
                  },
                  [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    width: '70.4rem',
                    height: '38.4rem'
                  },
                }}
              />
              <Flex
                flexDirection={"column"}
                width={["100%", "calc(50% - 1rem)", null, "53rem"]}
                sx={{
                  justifyContent: [ 'center'],
                  [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                    width: '70.4rem !important'
                  },
                }}
              >
                <Text as="h3" mb={["2rem", "1.6rem", null, "2.4rem"]}>
                  <AnimatedText speed={20}>
                    {contentBlock.heading}
                  </AnimatedText>
                </Text>
                <Text as="p">
                  <AnimatedText speed={5}>
                    {contentBlock.content}
                  </AnimatedText>
                </Text>
              </Flex>
            </Flex>
          </Fade>
        ))}
      </Flex>
    </Box>
  );
};

interface ContentBlock {
  heading: string,
  content: string,
  image: string
}

const MainContent = [
  {
    heading: "Measure what matters",
    content:
      "Carrot allows you to set precise goals and targets based on the needs of your project. Use strong cryptoeconomic incentives to bring your community together and achieve common goals.",
    image:
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850185/carrot/main-content/Measure-what-matters_dnay2p.png",
  },
  {
    heading: "Incentivize your community",
    content:
      "Encourage positive feedback through collective efforts by rewarding users when important milestones and goals are met. Carrot has helped distribute over $XX in rewards to date.",
    image:
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850167/carrot/main-content/Incentivize-your-community_svcdu3.png",
  },
  {
    heading: "Reward real value",
    content:
      "Anyone who contributes to a goal will receive rewards directly proportional to their impact thanks to the magic of KPI tokens. Get real value in exchange for real value. ",
    image:
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657850191/carrot/main-content/Reward-real-value_souwan.png",
  },
];

export default Breakdown;
