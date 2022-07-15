import { useRef } from 'react';
import { Flex, Box, Text, Image } from 'rebass';
import { transparentize } from 'polished';
import styled, { useTheme } from 'styled-components';

import Button from '../common/Button';
import GridBackground from '../common/GridBackground';
import Fade from '../common/Fade';
import AnimatedText from '../common/AnimatedText';

const Hero = (props : any) => {

    const heroContentRef = useRef(null);

    const theme : any = useTheme();

    return (
        <StyledHero className="hero" sx={{position: 'relative', pb: ['5.2rem', null, null, '11.3rem']}}>
            <Box sx={{
                ...theme.boxSizes.expandedBox, 
                position: 'absolute',
                height: '100%',
                top: ['0', '0', '0', '6.4rem']
            }}>
                <GridBackground trimRows={3} useAnimation/>
            </Box>
            <Flex 
                flexDirection={['column', 'row']} 
                justifyContent={['auto', 'space-between']}
                sx={{
                    ...theme.boxSizes.defaultBox,
                    zIndex: 1
                    }} 
                pt={['3.4rem', '5.2rem', '0rem',  null]}
                ref={heroContentRef}
            >
                <Flex flexDirection={'column'} width={['100%', '32rem', '68.4rem', '72rem']} justifyContent={['auto', 'center']} sx={{
                    position: 'relative', 
                    pr: '1rem',
                    top: [null, null, null, '6rem'],
                    '@media screen and (min-width: 1620px)': {
                        top: '-0.6rem'
                    }
                    }}>
                    <Text as="h1" sx={{
                        fontSize: ['4.8rem', '4.8rem', '4.8rem', '9.9rem', '12.8rem'], 
                        lineHeight: ['4.88rem', '4.88rem', '4.8rem', '10rem', '12.8rem'] ,
                        mb: ['1.6rem', '1.6rem', '5.2rem'],
                        letterSpacing: '-0.02em'
                    }}>
                        <AnimatedText speed={80} initialDelay={150}>
                            Reach your goals with a Carrot
                        </AnimatedText>
                    </Text>
                    <Fade>
                        <Text mb={['2.8rem', '2.4rem', '7.3rem']} sx={{
                            fontSize: ['1.4rem', '1.4rem', '1.9rem'],
                            lineHeight: ['2.2rem', '2.2rem', '2.85rem'],
                            color: theme.colors.textColor,
                            fontFamily: 'IBM Plex Mono'
                        }}>
                            <AnimatedText speed={30} initialDelay={1800}>
                                Increase your TVL, volume, price, engagement and more.
                            </AnimatedText>
                            <br/>
                            <AnimatedText speed={30} initialDelay={3200}>
                                Yes, on any campaign. Carrot does it all.
                            </AnimatedText>
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
                    <Fade sx={{position: 'relative'}}>
                        <Flex sx={{
                            position: 'absolute', 
                            bottom: '7.6rem', 
                            zIndex: 1,
                            height: '4.8rem',
                            alignItems: 'center',
                            ml: ['calc(50% - 9.6rem)','calc(50% - 9.6rem)','calc(50% - 11.1rem)'],
                            width: ['19.2rem', '19.2rem', '22.2rem'],
                            border: `0.1rem solid ${theme.colors.gray10}`,
                            borderRadius: '4.8rem',
                            bg: transparentize(0.5, theme.colors.black)
                        }}>
                            <Flex sx={{
                                background: theme.colors.gray10,
                                height: '4.8rem',
                                width: '4.8rem',
                                borderRadius: 'inherit',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: ['1.6rem']
                            }}>
                                <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657505776/carrot/icons/triangle_orange_yhixbu.svg" />
                            </Flex>
                            <Box sx={{
                                color: theme.colors.white,
                                fontFamily: theme.fonts.monospace,
                                letterSpacing: '0.05rem',
                                fontSize: ['1rem', '1.2rem', '1.6rem']
                            }}>
                                HOW IT WORKS
                            </Box>
                        </Flex>
                        <Box sx={{
                            backgroundImage: `url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657847734/carrot/Header-image_big_auuteh.png)`,
                            width: ['100%', '31.2rem', '50rem'],
                            height: ['120vw', '43rem', '70rem'],
                            borderRadius: ['0.85rem', null, '1.3rem'],
                            border: `0.1rem solid ${theme.colors.textColor}`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            '@media screen and (min-width: 1620px)': {
                                width: '58rem',
                                height: '78rem'
                            }
,                        }} />
                    </Fade>
                </Box>
            </Flex>
        </StyledHero>
    )
};

const StyledHero = styled(Flex)``;

export default Hero;