import { useRef } from 'react';
import { Flex, Box, Text, Image } from 'rebass';
import { transparentize } from 'polished';
import styled, { useTheme } from 'styled-components';

import Button from '../common/Button';
import GridBackground from '../common/GridBackground';
import Fade from '../common/Fade';
import AnimatedText from '../common/AnimatedText';

import PlayVideoButton from '../common/PlayVideoButton';

const Hero = (props : any) => {

    const heroContentRef = useRef(null);

    const theme : any = useTheme();

    return (
        <Flex className="hero" sx={{
            position: 'relative', 
            pb: ['4.2rem', '2.4rem', null, '6.4rem']
        }}>
            {/* BACKGROUND DECORATION */}
            <Box sx={{
                ...theme.boxSizes.heroGridBox, 
                }}
            >
                <GridBackground 
                    sx={{
                        backgroundPosition: [null, null, null, 'top center'],
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            backgroundPosition: 'unset'
                        },
                    }}
                />
            </Box>
            {/* HERO CONTENT */}
            <SideText />
            <Flex 
                flexDirection={['column', 'row']} 
                justifyContent={['auto', 'space-between']}
                sx={{
                    ...theme.boxSizes.defaultBox,
                    zIndex: 1,
                }} 
                ref={heroContentRef}
                >
                {/* COPY CONTENT */}
                <Flex 
                    flexDirection={'column'} 
                    width={[
                        '100%', 
                        '32rem', 
                        null,
                        'calc(50vw - 30rem)', '50%']} 
                    sx={{
                        position: 'relative', 
                        pr: '1rem',
                        pt: ['3rem', '7.6rem', '9rem', '12.8rem'],
                        flexGrow: 1,
                        maxWidth: [null, '36rem', '42rem', '60rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            pt: '10.4rem',
                            maxWidth: '64rem',
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            pt: '14.6rem',
                            maxWidth: '68rem',
                        }
                    }}
                >
                    <Text as="h1" sx={{
                        fontSize: ['4.8rem', null, null, '6.9rem'], 
                        lineHeight: ['4.88rem', '4.88rem', '4.8rem', '6.99rem'] ,
                        mb: ['1.6rem', '1.6rem', '1.8rem', '1rem'],
                        letterSpacing: '-0.02em',
                        pr: ['2rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            fontSize: '9.9rem',
                            lineHeight: '9.9rem',
                            mb: '4.6rem'
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            mb: '5.2rem',
                            fontSize: '11.9rem',
                            lineHeight: '12.7rem'
                        },
                    }}>
                        <AnimatedText speed={20} initialDelay={150}>
                            Reach your goals with a Carrot
                        </AnimatedText>
                    </Text>
                    <Fade>
                        <Text mb={['2.9rem', '3.7rem', null, '2.6rem']} sx={{
                            fontSize: ['1.4rem', null, null, '1.6rem'],
                            lineHeight: ['2.2rem', null, null, '2.4rem'],
                            color: theme.colors.textColor,
                            fontFamily: 'IBM Plex Mono',
                            fontWeight: 300,
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                fontSize: '1.9rem',
                                mb: '6.7rem !important',
                                lineHeight: '2.85rem'
                            },
                        }}>
                            <AnimatedText speed={5} initialDelay={700}>
                                Increase your TVL, volume, price, engagement and more.
                                Yes, on any campaign. Carrot does it all.
                            </AnimatedText>
                        </Text>
                        <Button buttonWrapperStyles={{
                            mb: '2.4rem',
                            position: 'relative',
                            top: [0,'-0.4rem','0.25rem'],
                            minWidth: 'unset'
                        }}>
                            CREATE YOUR CAMPAIGN
                        </Button>
                    </Fade>
                </Flex>
                {/* IMAGE / VIDEO */}
                <Box sx={{
                    ml: [
                        null,
                        null,
                        '4.2rem'
                    ],
                    position: 'relative',
                    top: [0, '2.4rem']
                }}>
                    <Fade sx={{position: 'relative'}}>
                        <PlayVideoButton label={'HOW IT WORKS'} sx={{
                            position: 'absolute',
                            bottom: ['3rem', '2.4rem', '7.6rem'],
                            zIndex: 1,
                            ml: [
                                '2.4rem',
                                'calc(50% - 9.6rem)',
                                'calc(50% - 11.1rem)'
                            ],
                            [`@media screen and (min-width: 600px)`]: {
                                ml: 'calc(50% - 12rem)'
                            },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                bottom: '18rem'
                            }
                        }}/>
                        <Box sx={{
                            backgroundImage: `url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657847734/carrot/Header-image_big_auuteh.png)`,
                            width: ['100%', 'calc(2.4rem * 11)', '31.2rem', '40.8rem'],
                            height: ['120vw', 'calc(2.4rem * 16)', '43.66rem', '57rem'],
                            borderRadius: ['0.85rem', null, '1.3rem'],
                            border: `0.1rem solid ${theme.colors.textColor}`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            top: [null, null, null, '-2.4rem'],
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                width: "50rem",
                                height: '69.9rem'
                            },
                            [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                width: "70rem",
                                height: '82.1rem'
                            }
,                        }} />
                    </Fade>
                </Box>
            </Flex>
        </Flex>
    )
};

const SideText = (props : any) => {

    const theme : any = useTheme();

    return (
        <Flex className="side-text"
            sx={{
                minWidth: ['6.4rem'],
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                zIndex: 100,
                fontWeight: 300,
                display: ['none !important'],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    display: 'flex !important'
                },
            }}
        >
            <Text 
                sx={{
                    position: 'absolute', 
                    top: '10.9rem', 
                    display: 'flex',
                    left: ['2rem'],
                    alignItems: 'center',
                    writingMode: 'vertical-rl',
                    transform: `rotate(180deg)`,
                    fontSize: '1.4rem',
                    fontFamily: theme.fonts.monospace
                }}
            >
                <Box as={'div'} sx={{width: '0.8rem', height: '0.8rem', background: theme.colors.textColor, mb: '1rem', borderRadius: '1rem'}}/> 
                BY DXDAO
            </Text>
            <Text 
                sx={{
                    position: 'absolute', 
                    top: '42.1rem', 
                    left: ['2.2rem'],
                    alignItems: 'center',
                    display: 'flex',
                    writingMode: 'vertical-rl',
                    transform: `rotate(180deg)`,
                    fontSize: '1.4rem',
                    fontFamily: theme.fonts.monospace
                }}
            >   
                <Box as={'div'} sx={{width: '0.8rem', height: '0.8rem', background: theme.colors.textColor, mb: '1rem', borderRadius: '1rem'}}/> 
                100% DECENTRALISED
            </Text>
        </Flex>
    )
}

export default Hero;