import { Box, Flex, Text, Image } from 'rebass';
import Button from '../common/Button';
import { useTheme } from 'styled-components';
import Fade from '../common/Fade';
import AnimatedText from '../common/AnimatedText';

const JoinTheCommunity = () => {
    const theme : any = useTheme();
    return (
        <Flex 
            sx={{
                bg: theme.colors.orange6, 
                '*': {
                    color: theme.colors.gray10
                }
            }} 
            flexDirection={'row'}
        >
            <Flex sx={{
                p: [
                    '2.4rem', 
                    '6.1rem 2.4rem 6.1rem 4.8rem', 
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
                    <Flex flexDirection={'column'} sx={{rowGap: '0.1rem', columnGap: '0.1rem'}}>
                        <Box 
                            className="section-title"
                            sx={{
                                boxShadow: [null, null,  `0 0 0 1px ${theme.colors.gray10}`],
                                borderBottom: [
                                    `0.1rem solid ${theme.colors.gray10}`, 
                                    null, 
                                    'none', 
                                    'none'
                                ],
                                p: ['0 0 2.4rem', null, '3.2rem'],
                                width: [null, null, null, '51.5rem'],
                                [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                    width: '64rem',
                                },
                                maxWidth: '95%',
                                position: 'relative'
                            }}
                        >
                            <Fade>
                                <Flex 
                                    className={'vertical-copy'}
                                    sx={{
                                        // width: '100%',
                                        // height: '100%',
                                        position: 'absolute',
                                        display: [null, null, 'none !important'],
                                        top: '0',
                                        right: '0',
                                        flexDirection: 'column',
                                        transform: 
                                            [
                                                'rotate(-90deg) translateX(-2.6rem) translateY(3.2rem)',
                                                'rotate(-90deg) translateX(-2rem) translateY(3.2rem)',
                                            ],
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
                                        DON&apos;T BY SHY
                                    </Text>
                                </Flex>
                            </Fade>
                            <Text 
                                as={'h2'} 
                                sx={{
                                    fontSize: [null,  '4rem !important', null, '5.2rem !important'],
                                    lineHeight: [null, '4rem !important', null, '5.2rem'],
                                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                        fontSize: '6.9rem !important',
                                        lineHeight: '6.9rem !important'
                                    },
                                    pr: ['4rem']
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
                            boxShadow: [null, null, null, `0 0 0 1px ${theme.colors.gray10}`],
                            rowGap: '0.1rem', columnGap: '0.1rem'
                        }}>
                            <Flex 
                                sx={{
                                    boxShadow: [null, null, null, `0 0 0 1px ${theme.colors.gray10}`], 
                                    minWidth: ['6.4rem'],
                                    position: 'relative',
                                    display: ['none !important', null, null, 'flex !important']
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
                                    DON&apos;T BY SHY
                                </Text>
                            </Flex>
                            <Flex flexDirection={'column'} flexGrow={1}>
                                <Flex as={'ul'} flexDirection={'column'} width={'100%'} sx={{
                                    rowGap: '0.1rem', columnGap: '0.1rem'
                                }}>
                                    {CommunityData.map((item : any, index : any) => (
                                        <Flex 
                                            as={'li'} 
                                            key={index}
                                            sx={{
                                                boxShadow: [null, null, `0 0 0 1px ${theme.colors.gray10}`], 
                                                height: ['auto', null, null, '25.6rem'], 
                                                width: '100%',
                                                fontWeight: 300,
                                                borderBottom: [`0.1rem solid ${theme.colors.gray10}`, null, 'none'],
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
                                                    p: ['2.4rem 3.3rem 2.4rem 6.4rem', null, null, '3.2rem']
                                                }
                                            }} 
                                        >
                                            <Image 
                                                src={item.img}
                                                sx={{
                                                    maxWidth: [
                                                        '5.4rem',
                                                        '8rem', null,
                                                        '10rem'
                                                    ],
                                                    width: ['100%', null, null, '12rem'],
                                                    height: ['5.4rem', null, '12.6rem'],
                                                    mr: ['4.6rem', '2rem', null, 'auto'],
                                                    [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                                        maxWidth: 'unset'
                                                    },
                                                }}
                                            />
                                            <Flex flexDirection={['column']} sx={{
                                                ml: ['auto', null, null, '2rem'],
                                                width: ['100%'],
                                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                                    ml: ['5rem', '0'],
                                                    maxWidth: '34.6rem'
                                                },
                                                alignItems: ['start', null, null, 'end'],
                                            }}>
                                                <Text
                                                    sx={{
                                                        fontSize: ['1.2rem', null, null, '1.6rem'],
                                                        lineHeight: ['1.8rem', null, null, '2.4rem'],
                                                        mb: ['1.6rem', '2.4rem'],
                                                        fontFamily: theme.fonts.monospace
                                                    }}
                                                >
                                                    {item.detail}
                                                </Text>
                                                <Box>
                                                    <Button 
                                                        buttonWrapperStyles={{
                                                            width:['auto', null, null, '20rem'],
                                                            fontWeight: 400,
                                                            '&:hover': {
                                                                '.button': {
                                                                    backgroundColor: theme.colors.gray10
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        {item.buttonLabel}
                                                    </Button>
                                                </Box>
                                            </Flex>
                                        </Flex>
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
        </Flex>
    );
}

const CommunityData = [
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos_oylwyq.svg',
        detail: 'Join in on community discussion on the Carrot Discord.',
        buttonLabel: 'JOIN DISCORD',
        buttonLink: '#'
    },
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos-1_torz3r.svg',
        detail: 'Contribute to the Carrot repositories on Github.',
        buttonLabel: 'JOIN GITHUB',
        buttonLink: '#'
    },
    {
        img: 'https://res.cloudinary.com/guido-la-rosa/image/upload/v1657852804/carrot/community/SocialMedia_Logos-2_dp4zz3.svg',
        detail: 'Get the latest Carrot announcements on the Swapr Twitter.',
        buttonLabel: 'JOIN TWITTER',
        buttonLink: '#'
    },
];

export default JoinTheCommunity;