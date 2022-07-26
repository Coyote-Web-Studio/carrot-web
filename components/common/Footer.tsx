import { Flex, Link, Text, Box } from "rebass";
import styled, { useTheme } from "styled-components";
import Logo from './Logo';
import GridBackground from './GridBackground';
import Fade from './Fade';
import Button from "./Button";

const Footer = (props: any) => {
  const theme: any = useTheme();

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
      bg={theme.colors.background}
      sx={{
        position: "relative",
        flexDirection: 'column'
      }}
    >
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
          // backgroundImage: 'url(./Pattern.svg)'
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
        <Flex flexDirection={['column', 'column', null, 'row']} justifyContent={['auto', null, null, 'space-between']}>
          <Flex as="ul" flexWrap="wrap">
            {FooterLinks.map((footerColumn, i) => (
              <Flex flexDirection="column" width={[1/2, 1/4, null, '15.2rem']} mb={['4.8rem', '4.8rem', null, 0]} fontFamily={'IBM Plex Mono'} key={i} fontWeight={300}>
                <Text fontSize={'1.4rem'} mb={['0.8rem', '2.4rem']} letterSpacing={'0.08em'}>
                  {footerColumn.heading}
                </Text>
                {footerColumn.links.map((link, j) => (
                  <Link 
                    href={link.href} 
                    mb={['0.4rem', '0.8rem']} 
                    fontSize={'1.2rem'}
                    key={j}
                    sx={{
                      transition: '0.15s ease-in-out all',
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            ))}
          </Flex>
          <Button buttonWrapperStyles={{
            mt: 'auto'
          }}>CARROT DAPP</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const StyledFooter = styled(Flex)``;

export default Footer;
