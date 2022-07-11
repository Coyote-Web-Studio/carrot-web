import { useEffect, useRef } from 'react';
import { Flex, Box, Text, Image } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Button from './Button';
import GridBackground from './GridBackground';
import Fade from './Fade';
import { transparentize } from 'polished';
import { keyframes } from '@emotion/react';

const initialTextState = {
    transform: 'rotate3d(0,1,0, 90deg)',
    opacity: 0
};

const endTextState = {
    transform: 'rotate3d(0,1,0, 0deg)',
    opacity: 1
};

const Hero = (props : any) => {

    const heroContentRef = useRef(null);

    const generateAnimatedText = (text : string) => {
        let letterCounter = 0;
        return (
            text.split(' ').map((word : any, i : any) => (
                <>
                    <Text as={'span'} sx={{display: 'inline-block'}}>
                        {
                            word.split('').map((character : any, j : any) => (
                                <Text as={'span'} sx={{
                                    animation: `${textAnimation} 0.25s ease-out forwards`,
                                    animationDelay: `${(++letterCounter) * 30}ms`,
                                    display: 'inline-block',
                                    ...initialTextState
                                }} key={j}>
                                    {character}
                                </Text>
                            ))
                        }
                    </Text>
                    <Text as={'span'}>{' '}</Text>
                </>
            ))
        )
    }

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
                pt={['3.4rem', '5.2rem', '2.4rem']}
                ref={heroContentRef}
            >
                <Flex flexDirection={'column'} width={['100%', '32rem', '68.4rem']} justifyContent={['auto', 'center']} sx={{position: 'relative', top: [0,0,'-1.6rem']}}>
                    <Text as="h1" sx={{
                        fontSize: ['4.8rem', '4.8rem', '9.9rem'], 
                        lineHeight: ['4.88rem', '4.88rem', '9.9rem'] ,
                        mb: ['1.6rem', '1.6rem', '5.2rem']
                    }}>
                        {generateAnimatedText('Reach your goals with a Carrot')}
                    </Text>
                    <Fade>
                        <Text mb={['2.8rem', '2.4rem', '7.3rem']} sx={{
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
                    <Fade sx={{position: 'relative'}}>
                        <Flex sx={{
                            position: 'absolute', 
                            bottom: '7.6rem', 
                            zIndex: 1,
                            height: '4.8rem',
                            alignItems: 'center',
                            ml: 'calc(50% - 9.6rem)',
                            width: '19.2rem',
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
                                letterSpacing: '0.05rem'
                            }}>
                                HOW IT WORKS
                            </Box>
                        </Flex>
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
const textAnimation = keyframes({
    from: {
        ...initialTextState
    },
    to: {
        // opacity: 1,
        ...endTextState
    },
})

const StyledHero = styled(Flex)``;

export default Hero;