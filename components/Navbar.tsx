import { Flex, Box, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';

const Navbar = (props : any) => {
    const theme : any = useTheme();

    return (
        <StyledNavbar sx={{width: '100%', py: '2.4rem'}}>
            <Flex sx={theme.boxSizes.defaultBox} alignItems={'center'} justifyContent={'space-between'}>
                <Logo color={theme.colors.gray10} height={'2.7rem'}/>
                <HamburgerIcon/>
            </Flex>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;