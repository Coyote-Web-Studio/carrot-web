import { Flex, Box, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';
import { transparentize } from 'polished';
import AnimatedText from '../common/AnimatedText';

const CustomerReview = () => {
  const theme : any = useTheme();
  const goldParallax = useParallax({
    speed: -5,
  });

  const sphereParallax = useParallax({
    speed: -10,
  });

  return (
    <Box sx={{position: 'relative'}}>
      <Image
          ref={sphereParallax.ref}
          src={"misc/sphere.png"}
          sx={{
            position: "absolute",
            top: '-10rem',
            width: ["5rem", null, "10rem"],
            height: ["5rem", null, '10rem'],
            left: ["3%", null, "18%"],
            zIndex: "10",
            display: ['none', 'block']
          }}
        />
        <Image
          ref={goldParallax.ref}
          src={"misc/gold-curve.png"}
          sx={{
            position: "absolute",
            top: "50rem",
            width: ["8rem", null, "13rem"],
            height: ["8rem", null, '13rem'],
            right: ["4%", null, "15%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block']
          }}
        />
      <Fade>
        <Flex
          sx={{
            zIndex: 1,
            position: "relative",
            bg: theme.colors.customerCommentBackground,
            borderRadius: ['1.6rem', null, null, '5rem'],
            pb: ["6.4rem", "8.4rem", null, '21.3rem'],
            pt: ["8.7rem" , null, null, '18.3rem'],
            mb: ["4.8rem"],
          }}
          >
          <Box
            sx={{
              ...theme.boxSizes.expandedBox,
              position: "absolute",
              // bg: 'blue',
              height: ["82%", "80%", "calc(100% - 13.6rem)"],
              top: "6.4rem",
            }}
            >
            <GridBackground sx={{opacity: 0.2}}/>
          </Box>
          <Fade
            sx={{
              ...theme.boxSizes.defaultBox,
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                width: "124.8rem !important",
              },
            }}
          >
            <Text
              fontSize={["2.8rem", "3.3em", null, "6.9rem"]}
              mb={["3.8rem", "3.8rem", null, "12rem"]}
              fontWeight={700}
              lineHeight={["110%", "3.36rem", null, "6.969rem"]}
              color={theme.colors.customerCommentText}
            >
              <AnimatedText color={theme.colors.customerCommentText} speed={10}>
                “Carrot was the best project on xDAI that allowed us to deploy KPI
                options in the Agave incentives program. This allows us to optimize
                our rewards towards specific goals rather than just throw them away.”
              </AnimatedText>
            </Text>
            <Text
              fontSize={["1.4rem", "1.4rem", "2.8rem"]}
              color={theme.colors.customerCommentText}
            >
              — Luigi Lemon, Agave Core Contributor
            </Text>
          </Fade>
        </Flex>
      </Fade>
    </Box>
  );
};

export default CustomerReview;
