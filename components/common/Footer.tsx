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
    speed: -50,
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
      pt={["4.8rem", '12.8rem', null, 'calc(6.4rem * 2)']}
      pb={'5.6rem'}
      bg={theme.colors.footerBackground}
      sx={{
        position: "relative",
        flexDirection: 'column',
        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
          pt: '26rem'
        },
      }}
    >
      <Box 
        sx={{
          ...theme.boxSizes.expandedBox,
          position: 'absolute',
          height: ['calc(2.4rem * 5)', '28.7rem', null, 'calc(6.4rem * 6)'], 
          top: ["2.8rem", "7rem", null, "calc(6.4rem * 1)"], 
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            height: "calc(6.4rem * 7)",
            top: '6.4rem',
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            height: "calc(6.4rem * 8)",
            top: '6.4rem',
          },

        }}
        >
        <GridBackground color={theme.colors.gray9} sx={{
          backgroundImage: theme.misc.footerPatternImage,
          backgroundPosition: 'top center'
        }}/>
      </Box>

      <Fade sx={{
        ...theme.boxSizes.defaultBox,
        }}
      >
        <Logo 
          color={theme.colors.orange6} 
          height={['auto', '15.5rem', null, 'auto']} 
          width={['auto', 'auto', null, '100%']} 
          mb={["4.8rem", "12.2rem", null, "12.3rem"]} 
          sx={{ 
              zIndex: 1,
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
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
              <Flex flexDirection="column" width={[1/2, 1/4, null, '15.2rem']} mb={['4.8rem', '4.8rem', null, 0]} fontFamily={'IBM Plex Mono'} key={i} fontWeight={300}>
                <Text 
                  fontSize={'1.4rem'} 
                  mb={['0.8rem', '2.4rem']} 
                  letterSpacing={'0.08em'} 
                  color={invert(theme.colors.textColor)}
                  sx={{
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
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
                      color: invert(theme.colors.textColor),
                      transition: '0.15s ease-in-out all',
                      '&:hover': {
                        opacity: 0.7
                      },
                      [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
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
            mt: 'auto'
          }}>CARROT DAPP</Button>
        </Flex>
      </Flex>
      
      <Box className="footer-decoration">
        <Image
          ref={goldParallax.ref}
          src={"misc/gold-curve.png"}
          sx={{
            position: "absolute",
            top: ["75rem", "28rem"],
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
            width: ["8rem"],
            height: ["8rem"],
            left: ["4%", null, "12%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block'],
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: "10rem",
              width: '10rem'
            },
          }}
        />
        <Image
          ref={hexagonParallax.ref}
          src={"hexagon.png"}
          sx={{
            position: "absolute",
            top: ["24rem", "8rem"],
            width: ["8rem", "11rem"],
            height: ["8rem", '13rem'],
            right: ["4%", null, "12%"],
            zIndex: "100000000",
            filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
            display: ['none', 'block']
          }}
        />
      </Box>
    </Flex>
  );
};

export default Footer;
