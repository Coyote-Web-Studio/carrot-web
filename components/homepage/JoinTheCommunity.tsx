import { Box, Flex, Text, Image } from 'rebass';
import Button from '../common/Button';
import { useTheme } from 'styled-components';
import Fade from '../common/Fade';

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
                    '2.4rem 0', 
                    '2.4rem 4.8rem', 
                    null, 
                    '12.6rem 6.4rem 12.6rem 9.6rem'],
                width: [
                    "calc(100vw - 4rem)", 
                    '50%',
                ],
                mx: "auto",
            }}>
                <Fade width={'100%'}>
                    <Flex flexDirection={'column'} sx={{rowGap: '0.1rem', columnGap: '0.1rem'}}>
                        <Box 
                            sx={{
                                boxShadow: [null, null,  `0 0 0 1px ${theme.colors.gray10}`],
                                borderBottom: [`0.1rem solid ${theme.colors.gray10}`, null, 'none', 'none'],
                                p: ['0 0 2.4rem', null, '3.2rem'],
                                width: [null, null, null, '51.5rem'],
                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                    width: '64rem',
                                },
                                maxWidth: '100%'
                            }}
                        >
                            <Text 
                                as={'h2'} 
                                sx={{
                                    fontSize: [null, null, null, '6.9rem'],
                                    lineHeight: [null, null, null, '6.9rem']
                                }}
                            >
                                Join the Community!
                            </Text>
                        </Box>
                        <Flex sx={{
                            boxShadow: [null, null, `0 0 0 1px ${theme.colors.gray10}`],
                            rowGap: '0.1rem', columnGap: '0.1rem'
                        }}>
                            <Flex 
                                sx={{
                                    boxShadow: [null, null, `0 0 0 1px ${theme.colors.gray10}`], 
                                    minWidth: ['6.4rem'],
                                    position: 'relative',
                                    display: ['none !important', null, 'flex !important']
                                }}
                            >
                                <Text 
                                    sx={{
                                        position: 'absolute', 
                                        top: '2rem', 
                                        left: ['2.2rem'],
                                        writingMode: 'vertical-rl',
                                        transform: `rotate(180deg)`,
                                        fontSize: '1.6rem',
                                        fontFamily: theme.fonts.monospace
                                    }}
                                >
                                    • GET UPDATES
                                </Text>
                                <Text 
                                    sx={{
                                        position: 'absolute', 
                                        bottom: '2rem', 
                                        left: ['2.2rem'],
                                        writingMode: 'vertical-rl',
                                        transform: `rotate(180deg)`,
                                        fontSize: '1.6rem',
                                        fontFamily: theme.fonts.monospace
                                    }}
                                >
                                    • DON&apos;T BY SHY
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
                                                height: ['auto', null, '25.6rem'], 
                                                width: '100%',
                                                borderBottom: [`0.1rem solid ${theme.colors.gray10}`, null, 'none'],
                                                p: [
                                                    '2.6rem 1rem', 
                                                    null, 
                                                    '2.4rem',
                                                    '2.4rem 3.3rem 2.4rem 6.4rem'
                                                ],
                                                alignItems: 'center',
                                                '&:last-of-type': {
                                                    border: 'none'
                                                }
                                            }} 
                                        >
                                            <Image 
                                                src={item.img}
                                                sx={{
                                                    maxWidth: [
                                                        '5.4rem', 
                                                        null, 
                                                        null,
                                                        'unset'
                                                    ],
                                                    height: ['5.4rem', null, '12.6rem'],
                                                    mr: ['4.6rem', '0', 'auto']
                                                }}
                                            />
                                            <Flex flexDirection={'column'} sx={{
                                                ml: ['auto', null, null, '5rem'],
                                                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                                    ml: ['auto'],
                                                    maxWidth: '26rem'
                                                }
                                            }}>
                                                <Text
                                                    sx={{
                                                        fontSize: ['1.2rem', null, '1.6rem'],
                                                        lineHeight: ['1.8rem', null, '2.4rem'],
                                                        mb: ['1.6rem', null, '2.4rem'],
                                                        fontFamily: theme.fonts.monospace
                                                    }}
                                                >
                                                    {item.detail}
                                                </Text>
                                                <Box sx={{
                                                        ml: [null, null, 'auto']
                                                    }}>
                                                    <Button>
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
                    bg: 'blue',
                    backgroundImage: `url(https://res.cloudinary.com/guido-la-rosa/image/upload/v1657822465/carrot/antonitudisco_272455743_5068059243228334_3680368816274666884_n_4_vzorvz.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
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