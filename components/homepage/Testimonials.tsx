import { Flex, Box, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';
import { useParallax } from 'react-scroll-parallax';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';
import { transparentize } from 'polished';
import AnimatedText from '../common/AnimatedText';
import Testimonial from './Testimonial';
import { SplideSlide, Splide, SplideTrack } from '@splidejs/react-splide';


const testimonials = [
  {
    text: `“Carrot was the best project on xDAI that allowed us to deploy KPI options in the Agave incentives program. This allows us to optimize our rewards towards specific goals rather than just throw them away.”`,
    author: 'Luigi Lemon, Agave Core Contributor'
  },
  {
    text: `“Carrot was the best project on xDAI that allowed us to deploy KPI options in the Agave incentives program. This allows us to optimize our rewards towards specific goals rather than just throw them away.”
    `,
    author: 'Luigi Lemon, Agave Core Contributor'
  },
  {
    text: `“Carrot was the best project on xDAI that allowed us to deploy KPI options in the Agave incentives program. This allows us to optimize our rewards towards specific goals rather than just throw them away.”
    `,
    author: 'Luigi Lemon, Agave Core Contributor'
  },
];

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
          pt: ["8.7rem" , '6.8rem', null, "12.4rem"],
          mb: ["4.8rem", null, "12.8rem", "calc(6.4rem * 2)"],
          height: ['calc(2.4rem * 22)', 'calc(2.4rem * 16)', null, 'calc(6.4rem * 9)'],
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            mb: 'calc(6.4rem * 2)',
            pb: '21.3rem',
            pt: '19.5rem',
            height: 'calc(6.4rem * 14)',
            borderRadius: '5rem'
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            height: "calc(6.4rem * 17)",
            mb: 'calc(6.4rem * 3)',
            pt: '24.7rem',
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
            <GridBackground sx={{
              opacity: 0.1,
              backgroundPosition: 'top center'
            }}/>
          </Box>

        </Box>
        <Fade
          sx={{
            ...theme.boxSizes.defaultBox,
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            '.splide .splide__arrows': {
              '.splide__arrow': {
                width: '5.6rem',
                height: '5.6rem',
                top: 'calc(50% - 1.2rem)',
                bg: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              '.splide__arrow--prev': {
                left: '-6rem',
                'img': {
                  filter: 'invert(1)'
                }
              },
              '.splide__arrow--next': {
                'img': {
                  transform: 'rotate(180deg)',
                    filter: 'invert(1)'
                },
                right: '-6rem'
              },
            }
          }}
        >
          <Splide options={{width: '100%', pagination: false}} hasTrack={false}>
            <SplideTrack>
              {testimonials.map((testimonial : any, index : any) => (
                <SplideSlide key={index}>
                  <Testimonial data={testimonial} />
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows">
              <Box as={'button'} sx={{bg: 'white', width: '1rem', height: '1rem'}} className="splide__arrow splide__arrow--prev">
                <Image src={theme.name == 'light' ? '/arrow.svg' : '/arrow-dark.svg'} />
              </Box>
              <Box as={'button'} sx={{bg: 'white', width: '1rem', height: '1rem'}} className="splide__arrow splide__arrow--next">
                <Image src={theme.name == 'light' ? '/arrow.svg' : '/arrow-dark.svg'} />
              </Box>
            </div>
          </Splide>
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
