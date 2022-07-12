import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Button from "./../common/Button";
import CampaignCard from "./../common/CampaignCard";

const SuccesfulCampaigns = () => {
  const theme: any = useTheme();
  return (
    <Flex
      flexDirection={"column"}
      sx={{
        ...theme.boxSizes.defaultBox,
        zIndex: 1,
        mb: "9.6rem",
      }}
    >
      <Text as={"h2"} mb={["3.6rem", "11.2rem"]}>
        Succesful Campaigns
      </Text>
      {/* TABLET / DESKTOP VIEW */}
      <Flex
        as={"ul"}
        flexDirection={["column", "row"]}
        mb={"1.6rem"}
        sx={{
          display: ["none !important", "block !important", "block !important"],
        }}
      >
        <Splide
          options={{
            width: "100%",
            pagination: false,
            breakpoints: {
              360: {
                perPage: 1,
              },
              768: {
                perPage: 2,
                gap: "2rem",
              },
              1680: {
                perPage: 3,
                gap: "6.2rem",
              },
              1920: {
                perPage: 4,
                gap: "1rem",
              },
            },
          }}
        >
          {SuccesfullCampaigns.map((campaign, index) => (
            <SplideSlide key={index}>
              <CampaignCard
                campaign={campaign}
                sx={{
                  width: ["100%", "100%", "37.3rem", "35.2rem"],
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Flex>
      {/* MOBILE VIEW (NO SLIDE) */}
      <Flex
        as={"ul"}
        sx={{ display: ["block", "none", "none"] }}
        flexDirection={["column", "row"]}
        mb={"1.6rem"}
      >
        {SuccesfullCampaigns.map(
          (campaign, index) =>
            index < 2 && (
              <CampaignCard
                campaign={campaign}
                sx={{
                  width: ["100%", "100%", "37.3rem", "35.2rem"],
                }}
                key={index}
              />
            )
        )}
      </Flex>
      <Button>SEE ALL CAMPAIGNS</Button>
    </Flex>
  );
};

const SuccesfullCampaigns = [
  {
    heading: "DXDAO",
    content:
      "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
    rewards: "$3,000.93",
    timeLeft: "01D 02H 54M",
  },
  {
    heading: "DXDAO",
    content:
      "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
    rewards: "$3,000.93",
    timeLeft: "01D 02H 54M",
  },
  {
    heading: "DXDAO",
    content:
      "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
    rewards: "$3,000.93",
    timeLeft: "01D 02H 54M",
  },
  {
    heading: "DXDAO",
    content:
      "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
    rewards: "$3,000.93",
    timeLeft: "01D 02H 54M",
  },
  {
    heading: "DXDAO",
    content:
      "Did the Atlantis World team complete deliverables #1, #2 and #3 outlined in the DXdao Atlantis World.",
    rewards: "$3,000.93",
    timeLeft: "01D 02H 54M",
  },
];

export default SuccesfulCampaigns;
