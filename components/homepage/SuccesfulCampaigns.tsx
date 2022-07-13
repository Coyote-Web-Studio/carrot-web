import { useRef } from "react";
import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Button from "./../common/Button";
import CampaignCard from "./../common/CampaignCard";

const SuccesfulCampaigns = () => {
  const theme: any = useTheme();
  const highlightRef = useRef();
  const sliderRef = useRef();

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
        mb={"1.6rem"}
        ref={sliderRef}
        sx={{
          display: ["none !important", "block !important", "block !important"],
          position: 'relative',
          ['&:hover .highlight-box']: {
            opacity: 1,
            clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)',
          }
        }}
      >
        <Box className="highlight-box" ref={highlightRef} sx={{
          zIndex: 0,
          position: 'absolute',
          top: '-2rem',
          left: '-2rem',
          width: 'calc(100% + 4rem)',
          height: 'calc(100% + 4rem)',
          pointerEvents: 'none',
          transition: '0.25s cubic-bezier(0,.68,.71,1.32) all',
          // opacity: 0,
          clipPath: 'polygon(0 100% ,0 100%, 0 100%, 0 100%)',
          background: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 6.4rem,
            ${theme.colors.green5} 6.4rem,
            ${theme.colors.green5} 12.8rem
          )`
        }}>

        </Box>
        <Splide
          style={{zIndex: 2}}
          options={{
            width: "100%",
            pagination: false,
            type: 'loop',
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
            <SplideSlide key={index} onMouseEnter={(e) => {
              e.stopPropagation();
              e.preventDefault();

              let cardWidth = e.currentTarget.getBoundingClientRect().width;
              let cardHeight = e.currentTarget.getBoundingClientRect().height;

              let highlighterExtraWidth = 138;

              console.log(e.currentTarget.getBoundingClientRect())
              console.log(sliderRef.current.offsetLeft);

              if (highlightRef.current !== undefined && sliderRef.current !== undefined) {
                highlightRef.current.style.width = cardWidth + highlighterExtraWidth + 'px';

                highlightRef.current.style.left = e.currentTarget.getBoundingClientRect().left - sliderRef.current.offsetLeft + - highlighterExtraWidth / 2 + 'px';

                highlightRef.current.style.top = - (highlighterExtraWidth / 4) + 'px';
              }
            }}>
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
