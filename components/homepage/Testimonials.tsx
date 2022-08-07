import { Flex, Box, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';
import { transparentize } from 'polished';
import AnimatedText from '../common/AnimatedText';

const Testimonials = () => {
  const theme : any = useTheme();
  const goldParallax = useParallax({
    speed: -5,
  });

  const sphereParallax = useParallax({
    speed: -10,
  });

  return (
    <Box sx={{position: 'relative'}}>
      <Flex
        sx={{
          zIndex: 1,
          position: "relative",
          bg: theme.colors.customerCommentBackground,
          borderRadius: ['1.6rem'],
          pb: ["6.4rem", '6.8rem', null, "8.4rem"],
          pt: ["8.7rem" , '6.8rem', null, "8.4rem"],
          mb: ["4.8rem", null, "12.8rem", "calc(6.4rem * 2)"],
          height: ['calc(2.4rem * 22)', 'calc(2.4rem * 16)', null, 'calc(6.4rem * 9)'],
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            mb: 'calc(6.4rem * 2)',
            pb: '21.3rem',
            pt: '11.3rem',
            height: 'calc(6.4rem * 14)',
            borderRadius: '5rem'
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            height: "calc(6.4rem * 17)",
            mb: 'calc(6.4rem * 3)',
            pt: '17.7rem',
            pb: '0'
          },
        }}
        >
        <Box sx={{
          height: ["calc(2.4rem * 18)", "calc(2.4rem * 13)", "calc(2.4rem * 13)", "calc(6.4rem * 7)"],
          position: 'absolute',
          top: ['calc(2.4rem * 2.5)', 'calc(2.4rem * 2)', null, "6.4rem"],
          width: '100%',
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            height:  "calc(6.4rem * 12)",
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            height:  "calc(6.4rem * 15)",
          },
        }}>
          <Box
            sx={{
              ...theme.boxSizes.expandedBox,
              position: "absolute",
            }}
            >
            <GridBackground sx={{opacity: 0.1}}/>
          </Box>

        </Box>
        <Fade
          sx={{
            ...theme.boxSizes.defaultBox,
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Text
            fontSize={["2.8rem", "3.3rem", null, "4.8rem"]}
            mb={["3.8rem", "3.8rem", null, "5.3rem"]}
            fontWeight={700}
            lineHeight={"110%"}
            color={theme.colors.customerCommentText}
            sx={{
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                fontSize: "6.9rem !important",
                mb: '13.4rem !important'
              },
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                fontSize: "8.3rem !important",
              },
            }}
          >
            <AnimatedText color={theme.colors.customerCommentText} speed={10}>
              “Carrot was the best project on xDAI that allowed us to deploy KPI
              options in the Agave incentives program. This allows us to optimize
              our rewards towards specific goals rather than just throw them away.”
            </AnimatedText>
          </Text>
          <Text
            sx={{
              fontSize: ["1.4rem"],
              color: theme.colors.customerCommentText,
              fontWeight: 300,
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                fontSize: "2.8rem",
              },
            }}
          >
            — Luigi Lemon, Agave Core Contributor
          </Text>
        </Fade>
      </Flex>
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
    </Box>
  );
};

export default Testimonials;
