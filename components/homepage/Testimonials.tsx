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
    <Box sx={{position: 'relative', maxWidth: '1920px',
    width: '100%',
    mx: 'auto',}}>
      <Flex
        sx={{
          zIndex: 1,
          position: "relative",
          bg: theme.colors.customerCommentBackground,
          borderRadius: ['1.6rem'],
          pb: ["6.4rem", '6.8rem', null, "8.4rem"],
          pt: ["8.7rem" , '6.8rem', null, "12.4rem"],
          mb: ["4.8rem", null, "12.8rem", "calc(6.4rem * 2)"],
          height: ['auto', 'calc(2.4rem * 16)', null, 'calc(6.4rem * 9)'],
          [`@media screen and (min-width: 500px) and (max-width: 640px)`]: { 
            maxHeight: [null, '38rem', 'unset']
          },
          [`@media screen and (min-width:${theme.breakpoints[3]})`]: {
            mb: 'calc(6.4rem * 2)',
            pb: '21.3rem',
            pt: '19.5rem',
            height: 'calc(6.4rem * 14)',
            borderRadius: '5rem'
          },
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
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                width: 'calc((6.4rem * 21) + 0.2rem)',
                m: '0 calc(50% - (6.4rem * (21 / 2)))',
                left: '0',
              },
              [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                width: 'calc((6.4rem * 27) + 0.2rem) !important',
                m: '0 calc(50% - (6.4rem * (27 / 2))) !important',
              },
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
            '&&&&': {
              maxWidth: '80% !important',
            },
            '.splide .splide__arrows': {
              '.splide__arrow': {
                width: '5.6rem',
                height: '5.6rem',
                top: ['16rem', '10rem', null, '15rem'],
                bg: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                'img': {
                  transform: ['scale(0.5)', 'scale(1)'],
                },
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  top: '20rem'
                },
              },
              '.splide__arrow--prev': {
                left: ['-3.8rem', '-6rem', null, '-8rem'],
                'img': {
                  filter: 'invert(1)'
                }
              },
              '.splide__arrow--next': {
                'img': {
                  transform: ['rotate(180deg) scale(0.5)', 'rotate(180deg) scale(1)'],
                    filter: 'invert(1)'
                },
                right: ['-3.8rem', '-6rem', null, '-8rem']
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
              <Box 
                as={'button'} 
                className="splide__arrow splide__arrow--prev"
                sx={{
                  width: '5.6rem !important', 
                  height: '5.6rem !important',
                  border: `0.1rem solid ${theme.colors.background}`
                }} 
              >
                <Image src={theme.name == 'light' ? '/arrow.svg' : '/arrow-dark.svg'} />
              </Box>
              <Box 
                as={'button'} 
                className="splide__arrow splide__arrow--next"
                sx={{
                  width: '5.6rem !important', 
                  height: '5.6rem !important',
                  border: `0.1rem solid ${theme.colors.background}`
                }} 
              >
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
