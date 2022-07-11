import { useEffect, useRef } from 'react';
import { Flex, Box, Text, Image } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Button from './Button';
import GridBackground from './GridBackground';
import Fade from './Fade';

const Hero = (props : any) => {

    const heroContentRef = useRef(null);

    const theme : any = useTheme();
    return (
        <StyledHero className="hero" sx={{position: 'relative', pb: '5.2rem'}}>
            <GridBackground top={['0', '0', '4rem']} trimRows={1} />
            <Flex 
                flexDirection={['column', 'row']} 
                justifyContent={['auto', 'space-between']}
                sx={{
                    ...theme.boxSizes.defaultBox,
                    zIndex: 1
                    }} 
                pt={['5.2rem', '2.4rem']}
                ref={heroContentRef}
            >
                <Flex flexDirection={'column'} width={['100%', '32rem', '68.4rem']} justifyContent={['auto', 'center']} sx={{position: 'relative', top: [0,0,'-1.6rem']}}>
                    <Fade>
                        <Text as="h1" sx={{
                            fontSize: ['4.8rem', '4.8rem', '9.9rem'], 
                            lineHeight: ['4.88rem', '4.88rem', '9.9rem'] ,
                            mb: ['1.6rem', '1.6rem', '5.2rem']
                        }}>
                            Reach your goals with a Carrot
                        </Text>
                        <Text mb={['2.4rem', '2.4rem', '7.3rem']} sx={{
                            fontSize: ['1.4rem', '1.4rem', '1.9rem'],
                            lineHeight: ['2.2rem', '2.2rem', '2.85rem'],
                            color: theme.colors.textColor,
                            fontFamily: 'IBM Plex Mono'
                        }}>
                            Increase your TVL, volume, price, engagement and more. <br/> Yes, on any campaign. Carrot does it all.
                        </Text>
                        <Button buttonWrapperStyles={{
                            mb: '2.4rem',
                            position: 'relative',
                            top: [0,0,'0.25rem'],
                            minWidth: 'unset'
                        }}>
                            CREATE YOUR CAMPAIGN
                        </Button>
                    </Fade>
                </Flex>
                <Box>
                    <Fade>
                        <Image 
                            src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657037016/carrot/hero_small_kyeynt.png" 
                            width={['100%', '31.2rem', '50rem']}
                            sx={{
                                display: ['block', 'block', 'none'],
                                position: 'relative',
                                top: [0,0,'-4rem']
                            }}  
                        />
                        <Image 
                            src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657037016/carrot/hero_large_ozaddv.png" 
                            width={['100%', '31.2rem', '50rem']}
                            sx={{
                                position: 'relative',
                                display: ['none', 'none', 'block'],
                                top: [0,0,'-4rem']
                            }}
                        />
                    </Fade>
                </Box>
            </Flex>
        </StyledHero>
    )
}

const StyledHero = styled(Flex)``;

export default Hero;