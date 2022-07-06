import Marquee from "react-fast-marquee";
import { Box, Flex, Image } from "rebass";
import styled, { useTheme } from 'styled-components';

const Marquees = (props : any) => {
    const theme : any = useTheme();

    return (
        <StyledMarquees flexDirection={'column'} sx={{
            '.marquee': {
                height: ['4.8rem', '4.8rem'],
                'img': {
                    mx: ['1.6rem', '1rem'],
                    height: ['3rem', '2.7rem']
                }
            }
        }}>
            <Box sx={{
                '.marquee': {
                    bg: theme.colors.green5
                }
            }}>
                <Marquee gradient={false} direction={'right'}>
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                </Marquee>
            </Box>
            <Box sx={{
                '.marquee': {
                    bg: theme.colors.yellow6
                }
            }}>
                <Marquee gradient={false} direction={'left'}>
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-6_bvjs0o.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-7_cgznoy.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045811/carrot/banner-images/Community_Icon-4_cg0jzm.svg" />
                    <Image src="https://res.cloudinary.com/guido-la-rosa/image/upload/v1657045812/carrot/banner-images/Community_Icon-1_evemou.svg" />
                </Marquee>
            </Box>
        </StyledMarquees>
    )
}

const StyledMarquees = styled(Flex)``;

export default Marquees;