import { Flex, Box, Text, Image } from 'rebass';
import { useTheme } from 'styled-components';

import Fade from '../common/Fade';

const TrustingProtocols = () => {

  const theme : any = useTheme();

  return (
    <Flex flexDirection={"column"} sx={{ position: "relative", zIndex: 1 }} mt={["8.2rem","5.8rem", "15.1rem"]} pb={['9.6rem', null, '22.4rem']}>
        <Flex sx={{
            ...theme.boxSizes.defaultBox,
            pt: ['2.4rem', '0'],
            flexDirection: 'column'
          }}>
            <Text as="h2" mb={['2.4rem', '3.85rem', '9.6rem']}>
              Trusted by Some of <Box as="br" sx={{display: ['none', 'block']}}/>Your Favorite Protocols
            </Text>
            <Flex as={'ul'} flexWrap={['wrap', 'nowrap']} width={'100%'}>
              {Protocols.map((protocol, index) => (
                <Flex as={'li'} 
                  key={index} 
                  data-aos={'flip-left'} 
                  data-aos-offset={index % 2 ? 200 : 500}
                  width={['calc(50vw - 2rem)', 'calc(25vw - 11.5rem)']}
                  height={[
                    'calc(50vw - 2rem)', 
                    '17rem', 
                    '10rem',
                    'calc(25vw - 11.5rem)',
                  ]} 
                  alignItems={'center'} 
                  justifyContent={'center'}
                  sx={{
                    position: 'relative',
                    mt: [
                      0, 
                      index % 2 == 0 ? 0 : '17rem', 
                      index % 2 == 0 ? 0 : '10rem',
                      index % 2 == 0 ? 0 : 'calc(25vw - 11.5rem)',
                    ],
                  }}
                >
                  <Flex 
                    className={'protocol-card protocol-card-front'}
                    width={'100%'}
                    height={'100%'}
                    alignItems={'center'} justifyContent={'center'}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      boxShadow: `0 0 0 1px ${theme.colors.textColor}`,
                      backgroundColor: theme.colors.protocolCardBackground,
                      transition: '0.35s cubic-bezier(0,1.19,.62,1.44) all',
                    }}>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      top: '-0.25rem',
                      left: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      top: '-0.25rem',
                      right: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      bottom: '-0.25rem',
                      right: '-0.25rem'
                    }}/>
                    <Box sx={{
                      width: '0.46rem', 
                      height: '0.46rem', 
                      background: theme.colors.protocolCardLine,
                      position: 'absolute',
                      bottom: '-0.25rem',
                      left: '-0.25rem'
                    }}/>
                    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                      <Image src={protocol.logo} sx={{
                        filter: theme.misc.invertedProtocolLogo ? 'invert(1)' : 'unset',
                        width: [null, null, '17.2rem']
                      }}/>
                      <Text as={'p'}>{protocol.label}</Text>
                    </Flex>
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