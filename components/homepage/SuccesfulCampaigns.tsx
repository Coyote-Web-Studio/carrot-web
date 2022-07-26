import { useRef, useEffect, useState } from "react";
import { Flex, Box, Text } from "rebass";
import { useTheme } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { debounce } from "../../utils/utils";

import Button from "./../common/Button";
import CampaignCard from "./../common/CampaignCard";
import Fade from "../common/Fade";
import AnimatedText from "../common/AnimatedText";

const SuccesfulCampaigns = () => {
  const theme: any = useTheme();
  const highlightRef = useRef<HTMLInputElement>();
  const sliderRef = useRef<HTMLInputElement>();

  const [cardNumber, setCardNumber] = useState(4);

  const updateDimensions = debounce(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 500 && windowWidth <= 1140 ) {
      setCardNumber(2);
    } else if (windowWidth > 1140 && windowWidth < 1680 ){
      setCardNumber(2);
    } else if (windowWidth >= 1680) {
      setCardNumber(3)
    } else {
      setCardNumber(4)
    }
  }, 200);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
  }, []); 

  return (
    <Flex
      flexDirection={"column"}
      sx={{
        ...theme.boxSizes.defaultBox,
        zIndex: 1,
        mb: ["9.6rem", null, null, "18rem"],
        maxWidth: [null, '67.2rem', null, 'unset'],
      }}
    >
      <Text as={"h2"} mb={["3.6rem", "3.8rem", null, "11.2rem"]}>
        <AnimatedText>
          Succesful Campaigns
        </AnimatedText>
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
            filter: 'blur(0px)',
            transform: 'scale(1)',
          },
          '.splide .splide__arrows': {
            '.splide__arrow': {
              top: 'calc(50% - 5rem)',
              bg: 'transparent',
              transform: 'scale(1.5)',
              'svg': {
                fill: theme.colors.textColor
              }
            },
            '.splide__arrow--prev': {
              left: '-4rem'
            },
            '.splide__arrow--next': {
              right: '-4rem'
            },
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
          transition: '0.15s ease-in-out all',
          opacity: 0,
          clipPath: 'polygon(0 100% ,0 100%, 0 100%, 0 100%)',
          transform: 'scale(0.5)',
          background: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 6.4rem,
            ${theme.colors.green5} 6.4rem,
            ${theme.colors.green5} 12.8rem
          )`
        }}>

        </Box>
        <Fade sx={{display: ['none', 'flex']}}>
          <Flex ref={sliderRef} justifyContent={'space-between'} mx={[null, '-3.2rem', '-2.4rem']}>
            {SuccesfullCampaigns.map((campaign, index) => (
              index < cardNumber && (
                <CampaignCard
                  campaign={campaign}
                  sx={{
                    width: ["100%"],
                    mx: [null, '3.2rem', '2.4rem']
                  }}
                  key={index} onMouseEnter={(e : any) => {
                    e.stopPropagation();
                    e.preventDefault();
      
                    let cardWidth = e.currentTarget.getBoundingClientRect().width;
      
                    let highlighterExtraWidth = 138;
      
                    if ( highlightRef.current && sliderRef.current ) {
                      highlightRef.current.style.width = cardWidth + highlighterExtraWidth + 'px';
      
                      highlightRef.current.style.left = e.currentTarget.getBoundingClientRect().left - sliderRef.current.offsetLeft + - highlighterExtraWidth / 2 + 'px';
      
                      highlightRef.current.style.top = - (highlighterExtraWidth / 4) + 'px';
                    }
                  }}
                />
              )))
            }
          </Flex>
        </Fade>
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
            index < 3 && (
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
      <Button sx={{px: [null, '3.2rem', null, '4.8rem']}}>
        SEE ALL CAMPAIGNS
      </Button>
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
