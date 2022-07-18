import { Flex, Box, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';

import Fade from '../common/Fade';

const TrustingProtocols = () => {

  const theme : any = useTheme();

  const cornerOffset = -0.23;

  return (
    <Flex flexDirection={"column"} sx={{ position: "relative", zIndex: 1 }} mt={["8.2rem","5.8rem", "15.1rem"]} pb={['9.6rem', null, '22.4rem']}>
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            pt: ['2.4rem', '0'],
            flexDirection: 'column'
          }}>
            <Text as="h2" mb={['2.4rem', '3.85rem', '9.6rem']}>
              <AnimatedText>Trusted by Some of </AnimatedText><Box as="br" sx={{display: ['none', 'block']}}/><AnimatedText initialDelay={600}>Your Favorite Protocols</AnimatedText>
            </Text>
            <Flex as={'ul'} flexWrap={['wrap', null, null, 'nowrap']} width={'100%'}>
              {Protocols.map((protocol, index) => (
                <Flex as={'li'} 
                  key={index} 
                  data-aos={'flip-left'} 
                  data-aos-offset={index % 2 ? 200 : 500}
                  width={['46vw', '21.3vw', '19.9vw', '21.5vw']}
                  height={['46vw', '21.3vw', '19.9vw', '21.5vw']}
                  alignItems={'center'} 
                  justifyContent={'center'}
                  sx={{
                    bg: theme.colors.cardBackground,
                    position: 'relative',
                    boxShadow: `0 0 0 1px ${theme.colors.textColor}`,
                    mt: [
                      null,
                      index % 2 == 0 ? 0 : '21.3vw',
                      index % 2 == 0 ? 0 : '19.9vw',
                      index % 2 == 0 ? 0 : '21.5vw',
                    ],
                    '.corner-square': {
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      zIndex: 100,
                    }
                  }}
                >
                  <Box className="corner-square" sx={{
                    top: `${cornerOffset}rem`,
                    left: `${cornerOffset}rem`
                  }}/>
                  <Box className="corner-square" sx={{
                    top: `${cornerOffset}rem`,
                    right: `${cornerOffset}rem`
                  }}/>
                  <Box className="corner-square" sx={{
                    bottom: `${cornerOffset}rem`,
                    right: `${cornerOffset}rem`
                  }}/>
                  <Box className="corner-square" sx={{
                    bottom: `${cornerOffset}rem`,
                    left: `${cornerOffset}rem`
                  }}/>
                  <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={protocol.logo} sx={{
                      filter: theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset',
                      width: ['20vw', '10vw'],
                      height: ['20vw', '10vw']
                    }}/>
                    <Text as={'p'}>{protocol.label}</Text>
                  </Flex>
                </Flex>
              ))}
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