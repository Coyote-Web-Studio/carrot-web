import { Flex, Link, Text, Box, Image } from "rebass";
import styled, { useTheme } from "styled-components";
import Logo from './Logo';
import GridBackground from './GridBackground';
import Fade from './Fade';
import Button from "./Button";
import { invert, transparentize } from "polished";
import { useParallax } from 'react-scroll-parallax';

import FooterLinks from './../../content/footer-navigation';

const Footer = (props: any) => {
  const theme: any = useTheme();

  const goldParallax = useParallax({
    speed: -18,
  });

  const sphereParallax = useParallax({
    speed: -12.5,
  });

  const hexagonParallax = useParallax({
    speed: -20,
  });

  return (
    <Flex
      as="footer"
      sx={{
        bg: theme.colors.gray10,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'column',
        pt:["4.8rem", '12.8rem', null, 'calc(6.4rem * 2)'],
        pb: '5.6rem',
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          pt: 'calc(6.4rem * 4 - 1.4rem)'
        },
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          pt: 'calc(6.4rem * 4)'
        },
      }}
    >
      <Box sx={{
        position: 'absolute',
        height: ['calc(2.4rem * 5)', 'calc(2.4rem * 12)', null, 'calc(6.4rem * 6)'], 
        top: ["2.8rem", "7rem", null, "calc(6.4rem * 1)"], 
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          height: "calc(6.4rem * 10)",
          top: 'calc(6.4rem * 2)',
        },
        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
          height: "calc(6.4rem * 10)",
          top: 'calc(6.4rem * 2)',
        },
      }}>
        <Box sx={{ 
            ...theme.boxSizes.expandedBox,
          }} >
          <GridBackground color={theme.colors.gray9} sx={{
            backgroundImage: theme.misc.footerPatternImage,
            backgroundPosition: 'top center'
          }}/>
        </Box>
      </Box>

      <Fade sx={{ ...theme.boxSizes.defaultBox }} >
        <Logo 
          color={theme.colors.orange6}
          sx={{ 
            zIndex: 1,
            height: ['auto', '15.5rem', null, 'auto'], 
            width: ['30rem', 'auto', null, '100%'], 
            mx: ['auto'],
            mb:["4.8rem", "12.2rem", null, "12.3rem"],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              mb: '34rem',
              width: '108rem'
            },
            [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
              mb: '34rem'
            },
          }} 
        />
      </Fade>

      <Flex sx={{ ...theme.boxSizes.defaultBox, position: "relative", flexDirection: 'column' }}>
        <Flex 
          flexDirection={['column', 'column', null, 'row']} 
          justifyContent={['auto', null, null, 'space-between']}
        >
          <Flex as="ul" flexWrap="wrap">
            {FooterLinks.map((footerColumn, i) => (
              <Flex 
                key={i} 
                sx={{
                  flexDirection: "column",
                  width: ['50%', '25%', null, '12rem'], 
                  mb: ['4.8rem', '4.8rem', null, 0],
                  mr: [null, null, null, '3.2rem'],
                  fontFamily: 'IBM Plex Mono',
                  fontWeight: 300,
                  [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    width: '15.2rem',
                  },
                }}
              >
                <Text 
                  fontSize={'1.4rem'} 
                  mb={['0.8rem', '2.4rem']} 
                  letterSpacing={'0.08em'} 
                  color={theme.colors.textColor}
                  sx={{
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                      fontSize: '1.6rem',
                    },
                  }}
                >
                  {footerColumn.heading}
                </Text>
                {footerColumn.links.map((link, j) => (
                  <Link 
                    href={link.href} 
                    mb={['0.4rem', '0.8rem']} 
                    fontSize={'1.2rem'}
                    key={j}
                    sx={{
                      color: theme.colors.textColor,
                      transition: '0.15s ease-in-out all',
                      '&:hover': {
                        opacity: 0.7
                      },
                      [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                        fontSize: '1.4rem',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            ))}
          </Flex>
          <Button inverted buttonWrapperStyles={{
            mt: 'auto',
            height: [null, null, null, '4.8rem'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: '6.4rem',
              width: '19.2rem',
              borderRadius: '1.6rem'
            },
          }}>
            CARROT DAPP
          </Button>
        </Flex>
      </Flex>
      
      <Box className="footer-decoration">
        <Image
          ref={goldParallax.ref}
          src={"misc/gold-curve.png"}
          sx={{
            position: "absolute",
            top: ["75rem", "28rem", "28rem", "90rem"],
            width: ["8rem", null, null, "9rem"],
            height: ["8rem", null, null, '9rem'],
            right: ["4%", "45%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: "13rem",
              width: '13rem'
            },
          }}
          />
        <Image
          ref={sphereParallax.ref}
          src={"misc/sphere.png"}
          sx={{
            position: "absolute",
            top: ["10rem", "5rem"],
            width: ["3.7rem"],
            height: ["3.7rem"],
            left: ["4%", null, "12%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: "7.4rem",
              width: '7.4rem'
            },
          }}
        />
        <Image
          ref={hexagonParallax.ref}
          src={"hexagon.png"}
          sx={{
            position: "absolute",
            top: ["24rem", "8rem"],
            width: ["7.2rem", "9rem"],
            height: ['8.7rem', '10.9rem'],
            right: ["4%", null, "12%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: "21.9rem",
              width: '18.1rem'
            },
          }}
        />
      </Box>
    </Flex>
  );
};

export default Footer;
