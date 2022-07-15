import { Flex, Image, Text, Box } from "rebass";
import Fade from "../common/Fade";
import { useTheme } from "styled-components";
import AnimatedText from "../common/AnimatedText";

const Breakdown = (props: any) => {
  const theme: any = useTheme();

  return (
    <Flex
      flexDirection={"column"}
      sx={{
        ...theme.boxSizes.reducedBox,
        position: "relative",
        zIndex: 1,
      }}
      pt={["2.4rem", "5.2rem", "12.8rem"]}
      pb={["9.2rem"]}
    >
      <Image
        className={"rellax"}
        src={"misc/sphere.png"}
        sx={{
          position: "absolute",
          top: ["-5rem", "0rem"],
          width: "10rem",
          right: ["-8rem", "-5rem"],
          zIndex: "3",
        }}
      />
      {MainContent.map((contentBlock: ContentBlock, index: number) => (
        <Fade
          key={index}
          sx={{
            mb: ["4.8rem", "4.8rem", "6.4rem"],
            position: "relative",
          }}
        >
          <Flex
            flexDirection={["column", index % 2 == 0 ? "row" : "row-reverse"]}
            justifyContent={["auto", "space-between"]}
            alignItems={["auto", "center"]}
            sx={{
              columnGap: '4rem',
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <Box
              mb={["2.4rem", "0"]}
              sx={{
                width: ["100%", "30vw", "32vw", "32vw"],
                height: ['55vw', '24vw', '18vw', "18vw"],
                backgroundImage: `url(${contentBlock.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: `0.1rem solid ${theme.colors.textColor}`,
                borderRadius: ['0.85rem', null, '1.3rem'],
              }}
            />
            <Flex
              flexDirection={"column"}
              width={["100%", "calc(50% - 1rem)", "53rem"]}
            >
              <Text as="h3" mb={"2rem"}>
                <AnimatedText speed={20}>
                  {contentBlock.heading}
                </AnimatedText>
              </Text>
              <Text as="p" sx={{ ...theme.text.paragraph }}>
                <AnimatedText speed={20}>
                  {contentBlock.content}
                </AnimatedText>
              </Text>
            </Flex>
          </Flex>
        </Fade>
      ))}
    </Flex>
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
