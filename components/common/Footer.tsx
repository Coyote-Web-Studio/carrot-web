import { Flex, Link, Text, Box, Image } from "rebass";
import styled, { useTheme } from "styled-components";
import Logo from './Logo';
import GridBackground from './GridBackground';
import Fade from './Fade';
import Button from "./Button";
import { invert, transparentize } from "polished";
import { useParallax } from 'react-scroll-parallax';


const Footer = (props: any) => {
  const theme: any = useTheme();

  const goldParallax = useParallax({
    speed: -10,
  });

  const sphereParallax = useParallax({
    speed: -12.5,
  });

  const hexagonParallax = useParallax({
    speed: -15,
  });

  const FooterLinks = [
    {
      heading: 'ABOUT',
      links: [
        {
          label: 'Faq',
          href: '#'
        },
        {
          label: 'Blog',
          href: '#'
        },
        {
          label: 'Audits',
          href: '#'
        },
        {
          label: 'Brand Assets',
          href: '#'
        },
      ]
    },
    {
      heading: 'COMMUNITY',
      links: [
        {
          label: 'Discord',
          href: '#'
        },
        {
          label: 'Twitter',
          href: '#'
        },
        {
          label: 'Keybase',
          href: '#'
        },
        {
          label: 'Brand Forum',
          href: '#'
        },
      ]
    },
    {
      heading: 'DOCUMENTATION',
      links: [
        {
          label: 'FIY Liq. Mining',
          href: '#'
        },
        {
          label: 'Roadmap',
          href: '#'
        },
        {
          label: 'We\'re hiring ',
          href: '#'
        },
        {
          label: 'Token',
          href: '#'
        },
      ]
    },
    {
      heading: 'ANALYTICS',
      links: [
        {
          label: 'FIY Liq. Mining',
          href: '#'
        },
      ]
    },
  ];

  return (
    <Flex
      as="footer"
      pt={["4.8rem", '12.8rem', null, '26rem']}
      pb={'5.6rem'}
      bg={theme.colors.footerBackground}
      sx={{
        position: "relative",
        flexDirection: 'column'
      }}
    >
      <Image
        ref={goldParallax.ref}
        src={"misc/gold-curve.png"}
        sx={{
          position: "absolute",
          top: ["75rem", "28rem"],
          width: ["8rem", null, "13rem"],
          height: ["8rem", null, '13rem'],
          right: ["4%", "45%"],
          zIndex: "100000000",
          filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
          display: ['none', 'block']
        }}
      />
      <Image
        ref={sphereParallax.ref}
        src={"misc/sphere.png"}
        sx={{
          position: "absolute",
          top: ["10rem", "5rem"],
          width: ["8rem", null, "10rem"],
          height: ["8rem", null, '10rem'],
          left: ["4%", null, "12%"],
          zIndex: "100000000",
          filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
          display: ['none', 'block']
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
      <Box 
        sx={{
          ...theme.boxSizes.expandedBox,
          position: 'absolute',
          height: ['14.24rem', '28.7rem', null, '51.1rem'], 
          top: ["2.8rem", "7rem", null, "12.6rem"], 
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            height: "70.4rem",
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
          mb={["4.8rem", "12.2rem", null, "34rem"]} 
          sx={{ zIndex: 1 }} 
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
    </Flex>
  );
};

const StyledFooter = styled(Flex)``;

export default Footer;
