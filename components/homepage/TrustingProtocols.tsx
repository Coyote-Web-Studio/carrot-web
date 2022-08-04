import { Flex, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';

import { useParallax } from 'react-scroll-parallax';
import { transparentize } from "polished";

import ProtocolCard from './ProtocolCard';

const TrustingProtocols = () => {

  const theme : any = useTheme();

  const hexagonParallax = useParallax({
    speed: -15,
  });

  return (
    <Flex 
      flexDirection={"column"} 
      sx={{
        position: "relative", zIndex: 1,
        mt: ["8.2rem","8.4rem", null, "19.4rem"] ,
        pb: ['9.6rem', null, null, 'calc(6.4rem * 3)']
      }}
    >
      <Image
        ref={hexagonParallax.ref}
        src={"hexagon.png"}
        sx={{
          position: "absolute",
          top: "24rem",
          width: ["8rem", "9rem"],
          height: ["8rem", '10.9rem'],
          right: ["4%", null, "18%"],
          zIndex: "100000000",
          filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
          display: ['none', 'block']
        }}
      />
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            flexDirection: 'column',
          }}>
            <Text as="h2" sx={{
                mb: ['2.4rem', '5rem', '9.6rem', '11.8rem'],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  mb: '8.6rem'
                },
                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                  mb: '10.6rem'
                }
              }}
            >
              <AnimatedText>
                Trusted by Some of 
                Your Favorite Protocols
              </AnimatedText>
            </Text>
            <Flex 
              as={'ul'} 
              justifyContent={['center']}
              width={'100%'}
              >
              <Flex sx={{
                flexWrap: [
                  'wrap', 
                  null, 
                  null, 
                  'nowrap'
                ],
                justifyContent: ['center', null, 'unset'],
                maxWidth:['calc((2.4rem * 7) * 2)', 'unset']
              }}>
                {Protocols.map((protocol, index) => (
                  <ProtocolCard data={protocol} index={index} key={index}/>
                ))}
              </Flex>
            </Flex>
        </Flex>
      </Flex>
  )
};

const Protocols = [
  {
    label: 'GNOSIS CHAIN',
    logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/gnosis_lyysrk.svg',
    url: '#'
  },
  {
    label: 'AGAVE',
    logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/agave_ch8rxi.svg',
    url: '#'
  },
  {
    label: 'COW PROTOCOL',
    logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow_e8h1lh.svg',
    url: '#'
  },
  {
    label: 'COWSWAP',
    logo: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657054886/carrot/protocols/cow-swap_sgdmka.svg',
    url: '#'
  },
];

export default TrustingProtocols;