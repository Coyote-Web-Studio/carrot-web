import { Box, Flex, Text, Image } from 'rebass';
import Button from '../common/Button';
import { useTheme } from 'styled-components';

const JoinTheCommunity = () => {
    const theme : any = useTheme();
    return (
        <Flex sx={{bg: theme.colors.orange6, '*': {color: theme.colors.gray10}}} flexDirection={'row'}>
            <Flex width={[1, 1/2, 1/2]} sx={{
                p: ['12.6rem 9.7rem']
            }}>
                <Flex flexDirection={'column'} sx={{boxShadow: `0 0 0 1px ${theme.colors.gray10}`}}>
                    <Box sx={{boxShadow: `0 0 0 1px ${theme.colors.gray10}`}}>
                        <Text as={'h2'}>Join the Community</Text>
                    </Box>
                    <Flex sx={{boxShadow: `0 0 0 1px ${theme.colors.gray10}`}}>
                        <Flex 
                            sx={{
                                boxShadow: `0 0 0 1px ${theme.colors.gray10}`, 
                                width: ['6.4rem'],
                                position: 'relative'
                            }}
                        >
                            <Text sx={{position: 'absolute', top: 0}}>• GET UPDATES</Text>
                            <Text sx={{position: 'absolute', top: 0}}>• DON&apos;T BY SHY</Text>
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <Flex as={'ul'} flexDirection={'column'} width={'100%'}>
                                {CommunityData.map((item : any, index : any) => (
                                    <Flex as={'li'} sx={{boxShadow: `0 0 0 1px ${theme.colors.gray10}`, height: ['25.6rem'], width: '100%'}} key={index}>
                                        <Image src={item.img}/>
                                        <Flex flexDirection={'column'}>
                                            <Text>{item.detail}</Text>
                                            <Button>{item.buttonLabel}</Button>
                                        </Flex>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex width={[null, 1/2, 1/2]}></Flex>
        </Flex>
    );
}

const CommunityData = [
    {
        img: '#',
        detail: 'Join in on community discussion on the Carrot Discord.',
        buttonLabel: 'JOIN DISCORD',
        buttonLink: '#'
    },
    {
        img: '#',
        detail: 'Contribute to the Carrot repositories on Github.',
        buttonLabel: 'JOIN GITHUB',
        buttonLink: '#'
    },
    {
        img: '#',
        detail: 'Get the latest Carrot announcements on the Swapr Twitter.',
        buttonLabel: 'JOIN TWITTER',
        buttonLink: '#'
    },
];

export default JoinTheCommunity;