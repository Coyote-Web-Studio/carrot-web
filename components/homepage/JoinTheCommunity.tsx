import { Box, Flex, Text, Image } from 'rebass';
import Button from '../common/Button';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import Fade from '../common/Fade';
import AnimatedText from '../common/AnimatedText';
import { useParallax } from 'react-scroll-parallax';
import { transparentize } from "polished";



const JoinTheCommunity = () => {


    const theme : any = useTheme();

    const goldParallax = useParallax({
        speed: -18,
      });
    
      const sphereParallax = useParallax({
        speed: -15.5,
      });
    
      const hexagonParallax = useParallax({
        speed: -30,
      });

    const CommunityCard = (props : any) => {

        const [isButtonHovered, setIsButtonHovered] = useState(false);

        return (
            <Flex 
                as={'li'} 
                id="community"
                sx={{
                    height: ['auto'], 
                    width: '100%',
                    fontWeight: 300,
                    borderBottom: [`0.1rem solid ${theme.colors.gray10}`],
                    p: [
                        '2.6rem 1rem', 
                        null, 
                        '2.4rem',
                        null,
                    ],
                    alignItems: 'center',
                    '&:last-of-type': {
                        border: 'none'
                    },
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                        p: ['3.2rem 3.2rem 3.2rem 6.4rem'],
                        borderBottom: 'none',
                        height: '25.6rem',
                        boxShadow: `0 0 0 1px ${theme.colors.gray10}`, 
                    }
                }} 
            >
                <Box 
                    onMouseEnter={() => {setIsButtonHovered(true)}}
                    onMouseLeave={() => {setIsButtonHovered(false)}}
                    sx={{
                        maxWidth: [
                            '5.4rem',
                            '8rem', null,
                            '10rem'
                        ],
                        minWidth: [null, null, null, '12rem'],
                        width: ['100%', null, null, '12rem'],
                        height: ['5.4rem', null, '12.6rem'],
                        mr: ['4.6rem', '2rem', null, '3.2rem'],
                        backgroundSize: 'contain',
                        position: 'relative',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${props.data.img})`,
                        cursor: 'pointer',
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            minWidth: '12rem',
                            maxWidth: 'unset'
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            minWidth: '13.2rem',
                            maxWidth: 'unset'
                        },
                    }}
                >
                    <Box className={'hovered-image'} sx={{
                        width: 'inherit', 
                        height: 'inherit',
                        minWidth: 'inherit',
                        maxWidth: 'inherit', 
                        backgroundSize: 'contain',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        transition: '0.15s ease-in-out all',
                        zIndex: 1,
                        opacity:  isButtonHovered ? 1 : 0,
                        pointerEvents: 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        // background: 'black',
                        backgroundImage: `url(${props.data.imgHover})`
                    }}/>
                </Box>
                <Flex flexDirection={['column']} sx={{
                    ml: ['auto'],
                    width: ['100%'],
                    alignItems: ['start', null, null, 'end'],
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                        ml: ['2rem'],
                        maxWidth: '34.6rem'
                    },
                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                        ml: ['auto'],
                        mt: 'auto'
                    },
                }}>
                    <Text
                        sx={{
                            fontSize: ['1.2rem', null, null, '1.6rem'],
                            lineHeight: ['1.8rem', null, null, '2.4rem'],
                            mb: ['1.6rem', '2.4rem'],
                            fontFamily: theme.fonts.monospace
                        }}
                    >
                        {props.data.detail}
                    </Text>
                    <Box>
                        <Button
                            className={isButtonHovered ? 'hovered' : ''}
                            onMouseEnter={() => {setIsButtonHovered(true)}}
                            onMouseLeave={() => {setIsButtonHovered(false)}}
                            buttonWrapperStyles={{
                                width:['12.5rem', null, null, '20rem'],
                                fontWeight: 400,
                                '&:hover': {
                                    '.button': {
                                        backgroundColor: theme.colors.gray10
                                    }
                                }
                            }}
                        >
                            {props.data.buttonLabel}
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex 
            sx={{
                bg: theme.colors.orange6, 
                position: 'relative',
                '*': {
                    color: theme.colors.gray10
                }
            }} 
            flexDirection={'row'}
        >
            <Flex sx={{
                p: [
                    '2.4rem', 
                    '6.1rem 2.4rem 6.1rem 2.4rem', 
                    '6.1rem 4.8rem', 
                    null],
                width: [
                    "100vw",
                    '50vw',
                ],
                mx: "auto",
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    p: '12.6rem 6.4rem 12.6rem 9.6rem',
                },

            }}>
                <Fade width={'100%'}>
                    <Flex 
                        flexDirection={'column'} 
                        sx={{
                            rowGap: '0.1rem', 
                            columnGap: '0.1rem',
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                minWidth: '90rem',
                                ml: 'auto'
                            },
                        }}
                    >
                        <Box 
                            className="section-title"
                            sx={{
                                
                                borderBottom: [
                                    `0.1rem solid ${theme.colors.gray10}`, 
                                    null, 
                                    'none', 
                                    'none'
                                ],
                                p: ['0 0 2.4rem'],
                                width: ['100%'],
                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                    p: '3.2rem',
                                    width: '51.5rem',
                                    boxShadow: `0 0 0 1px ${theme.colors.gray10}`,
                                },
                                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                    width: '64rem',
                                },
                                maxWidth: [null, null, null,'95%'],
                                position: 'relative'
                            }}
                        >
                            <Fade>
                                <Flex 
                                    className={'vertical-copy'}
                                    sx={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        flexDirection: 'column',
                                        transform: 
                                            [
                                                'rotate(-90deg) translateX(-2.6rem) translateY(3.2rem)',
                                                'rotate(-90deg) translateX(-2rem) translateY(3.2rem)',
                                            ],
                                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                            display: 'none !important'
                                        },
                                        [`@media screen and (max-width: 330px)`]: {
                                            display: 'none',
                                        },
                                    }}
                                >
                                    <Text 
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: ['1rem'],
                                            fontFamily: theme.fonts.monospace,
                                            mb: '0.8rem',
                                        }}
                                    >
                                        <Box as={'div'} sx={{
                                            width: '0.8rem', 
                                            height: '0.8rem', 
                                            background: theme.colors.gray10, 
                                            mr: '1rem', 
                                            borderRadius: '1rem',
                                            fontWeight: '300 !important',
                                            }}
                                        /> 
                                        GET UPDATES
                                    </Text>
                                    <Text 
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            fontSize: ['1rem'],
                                            fontFamily: theme.fonts.monospace
                                        }}
                                    >   
                                        <Box as={'div'} sx={{width: '0.8rem', height: '0.8rem', background: theme.colors.gray10, mr: '1rem', borderRadius: '1rem'}}/> 
                                        DON&apos;T BE SHY
                                    </Text>
                                </Flex>
                            </Fade>
                            <Text 
                                as={'h2'} 
                                sx={{
                                    fontSize: [null,  '4rem !important', null, '5.2rem !important'],
                                    lineHeight: '100%',
                                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                        fontSize: '6.9rem !important',
                                    },
                                    pr: ['4rem'],
                                    [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                        fontSize: "9.9rem !important",
                                    },
                                }}
                            >
                                <AnimatedText>
                                    Join the 
                                </AnimatedText>
                                <br/>
                                <AnimatedText initialDelay={300}>
                                    Community!
                                </AnimatedText>
                            </Text>
                        </Box>
                        <Flex sx={{
                            rowGap: '0.1rem', 
                            columnGap: '0.1rem',
                            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                boxShadow: `0 0 0 1px ${theme.colors.gray10}`
                            },
                        }}>
                            <Flex 
                                sx={{ 
                                    minWidth: ['6.4rem'],
                                    position: 'relative',
                                    display: ['none !important'],
                                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                        display: 'flex !important',
                                        boxShadow: `0 0 0 1px ${theme.colors.gray10}`
                                    }
                                }}
                            >
                                <Text 
                                    sx={{
                                        position: 'absolute', 
                                        top: '2rem', 
                                        display: 'flex',
                                        left: ['2.2rem'],
                                        alignItems: 'center',
                                        writingMode: 'vertical-rl',
                                        transform: `rotate(180deg)`,
                                        fontSize: '1.6rem',
                                        fontFamily: theme.fonts.monospace
                                    }}
                                >
                                    <Box as={'div'} sx={{width: '0.8rem', height: '0.8rem', background: theme.colors.gray10, mb: '1rem', borderRadius: '1rem'}}/> 
                                    GET UPDATES
                                </Text>
                                <Text 
                                    sx={{
                                        position: 'absolute', 
                                        bottom: '2rem', 
                                        left: ['2.2rem'],
                                        alignItems: 'center',
                                        display: 'flex',
                                        writingMode: 'vertical-rl',
                                        transform: `rotate(180deg)`,
                                        fontSize: '1.6rem',
                                        fontFamily: theme.fonts.monospace
                                    }}
                                >   
                                    <Box as={'div'} sx={{width: '0.8rem', height: '0.8rem', background: theme.colors.gray10, mb: '1rem', borderRadius: '1rem'}}/> 
                                    DON&apos;T BE SHY
                                </Text>
                            </Flex>
                            <Flex flexDirection={'column'} flexGrow={1}>
                                <Flex as={'ul'} flexDirection={'column'} width={'100%'} sx={{
                                    rowGap: '0.1rem', columnGap: '0.1rem'
                                }}>
                                    {CommunityData.map((item : any, index : any) => (
                                        <CommunityCard data={item} key={index}/>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Fade>
            </Flex>
            <Flex width={[null, 1/2, 1/2]}
                sx={{
                    backgroundImage: `url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657822465/carrot/antonitudisco_272455743_5068059243228334_3680368816274666884_n_4_vzorvz.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: ['none', 'flex', 'flex']
                }}
            >

            </Flex>
            <Box className="footer-decoration" sx={{
                position: 'absolute',
                top: '100%',
                width: '100%',
                // height: '30rem',
                zIndex: 4
            }}>
                <Image
                ref={goldParallax.ref}
                src={"misc/gold-curve.png"}
                sx={{
                    position: "absolute",
                    top: ["75rem", "28rem", "28rem", "40rem"],
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
                    width: ["3.7rem"],
                    height: ["3.7rem"],
                    left: ["4%", null, "12%"],
                    zIndex: "100000000",
                    filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
                    display: ['none', 'block'],
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: "7.4rem",
                    width: '7.4rem'
                    },
                }}
                />
                <Image
                ref={hexagonParallax.ref}
                src={"hexagon.png"}
                sx={{
                    position: "absolute",
                    top: ["24rem", "8rem"],
                    width: ["7.2rem", "9rem"],
                    height: ['8.7rem', '10.9rem'],
                    right: ["4%", null, "12%"],
                    zIndex: "100000000",
                    filter: `drop-shadow(-10px 10px 30px ${transparentize('0.4', theme.colors.black)})`,
                    display: ['none', 'block'],
                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: "21.9rem",
                    width: '18.1rem'
                    },
                }}
                />
            </Box>
        </Flex>
    );
}

const CommunityData = [
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos_oylwyq.svg',
        imgHover: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1660236544/carrot/community/SocialMedia_Logos-2_akp599.svg',
        detail: 'Join in on community discussion on the Carrot Discord.',
        buttonLabel: 'JOIN DISCORD',
        buttonLink: '#'
    },
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos-1_torz3r.svg',
        imgHover: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1660236543/carrot/community/SocialMedia_Logos-1_kkyh6t.svg',
        detail: 'Contribute to the Carrot repositories on Github.',
        buttonLabel: 'JOIN GITHUB',
        buttonLink: '#'
    },
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos-2_dp4zz3.svg',
        imgHover: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1660236543/carrot/community/SocialMedia_Logos_rtolaw.svg',
        detail: 'Get the latest Carrot announcements on the Swapr Twitter.',
        buttonLabel: 'JOIN TWITTER',
        buttonLink: '#'
    },
];

export default JoinTheCommunity;