import { Flex, Box, Text, Image } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Button from './Button';
import GridBackground from './GridBackground';

const Hero = (props : any) => {

    const theme : any = useTheme();
    return (
        <StyledHero className="hero" sx={{position: 'relative', pb: '5.2rem'}}>
            <GridBackground 
                rows={30}
            />
            <Flex flexDirection={'column'} sx={{
            ...theme.boxSizes.defaultBox,
            zIndex: 1
            }} pt={'5.2rem'}
            >
            <Flex flexDirection={'column'}>
                <Text as="h1" sx={{
                fontSize: '4.8rem', 
                lineHeight: '4.88rem',
                pb: '1.6rem'
                }}>
                Reach your goals with a Carrot
                </Text>
                <Text mb={'2.4rem'} sx={{
                fontSize: '1.4rem',
                lineHeight: '2.2rem',
                color: theme.colors.gray10,
                fontFamily: 'IBM Plex Mono'
                }}>
                Increase your TVL, volume, price, engagement and more. Yes, on any campaign. Carrot does it all.
                </Text>
                <Button sx={{mb: '2.4rem'}}>
                CREATE YOUR CAMPAIGN
                </Button>
            </Flex>
            <Box>
                <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657037016/carrot/hero_small_kyeynt.png" width={'100%'}/>
            </Box>
        </Flex>
      </StyledHero>
    )
}

const StyledHero = styled(Flex)``;

export default Hero;