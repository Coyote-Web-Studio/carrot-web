import { Flex, Image, Text } from "rebass";
import Fade from "../common/Fade";
import { useTheme } from "styled-components";

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
          top: "0rem",
          width: "10rem",
          right: "-5rem",
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
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <Image
              src={contentBlock.image}
              mb={["2rem", "0"]}
              width={["100%", "calc(50% - 1rem)", "53rem"]}
            />
            <Flex
              flexDirection={"column"}
              width={["100%", "calc(50% - 1rem)", "53rem"]}
            >
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
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/1-mobile_njnkt7.png",
  },
  {
    heading: "Incentivize your community",
    content:
      "Encourage positive feedback through collective efforts by rewarding users when important milestones and goals are met. Carrot has helped distribute over $XX in rewards to date.",
    image:
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048107/carrot/main-content/2-mobile_xlekiw.png",
  },
  {
    heading: "Reward real value",
    content:
      "Anyone who contributes to a goal will receive rewards directly proportional to their impact thanks to the magic of KPI tokens. Get real value in exchange for real value. ",
    image:
      "https://res.cloudinary.com/guido-la-rosa/image/upload/v1657048106/carrot/main-content/3-mobile_yryzyt.png",
  },
];

export default Breakdown;
