import { useEffect, useState } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';
import StyleSwitch from './StyleSwitch';
import MobileNavbar from './MobileNavbar';
import NavigationLinks from './NavigationLinks';

const Navbar = (props : any) => {
    
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const theme : any = useTheme();

    useEffect(() => {
        let body = document.querySelector('html');
        if (body !== null) {
            body.style.overflow = 
                isMobileNavbarOpen ? 'hidden' : 'auto';
        };
    }, [isMobileNavbarOpen])

    return (
        <StyledNavbar 
            sx={{
                width: '100%', 
                pt: ['2.4rem', '2.4rem', null, '6.2rem'], 
                pb: ['3.2rem', '2.4rem', null, '3.3rem']
            }}
        >
            <Flex 
                sx={theme.boxSizes.navbarBox} 
                alignItems={'center'} 
                justifyContent={'space-between'}
            >
                <Logo 
                    color={theme.colors.logoColor} sx={{
                        height: ['2.7rem', '3rem', '4rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            height: '4.8rem',
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            height: "7.79rem",
                        },
                    }}/>
                <Box sx={{
                    display: ['none', 'flex'],
                    alignItems: 'center',
                }}>
                    <NavigationLinks />
                    <StyleSwitch sx={{
                        ml:['2.4rem', '1.2rem', null, '3.2rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            ml: "4.8rem",
                        },
                    }}/>
                    <Button buttonWrapperStyles={{
                        ml: ['2.4rem', '1.2rem', '2.4rem', '3.2rem'],
                        height: [null, '4.6rem'],
                        minWidth: 'unset',
                        'button': {
                            fontSize: [null, null, null, '1.2rem'],
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            height: '6.4rem',
                            minWidth: '14.4rem',
                            'button': {
                                fontSize: '1.6rem',
                            },
                        },
                    }}>
                        CARROT DAPP
                    </Button>
                </Box>
                <Flex 
                    className="mobile-controls" 
                    sx={{
                        display: ['inline-block', 'none'],
                        ml: 'auto', 
                    }}
                >
                    <HamburgerIcon onClick={() => {
                        setIsMobileNavbarOpen(!isMobileNavbarOpen);
                    }} />
                </Flex>
            </Flex>
            <MobileNavbar isOpen={isMobileNavbarOpen} />
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;