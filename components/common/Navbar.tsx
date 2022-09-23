import { useEffect, useState } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';
import Button3D from './Button3D';
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
                pb: ['3.2rem', '2.4rem', null, '3.3rem'],
                [`@media screen and (min-width: 2800px)`]: {
                    transform: 'scale(1.5)',
                    transformOrigin: 'top center',
                }
            }}
        >
            <Flex 
                sx={theme.boxSizes.navbarBox} 
                alignItems={'center'} 
                justifyContent={'space-between'}
            >
                <Logo 
                    color={theme.colors.logoColor} sx={{
                        height: ['3.271rem', '4.4rem', null, '4.67rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            height: '5.6rem',
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            height: "9.3rem",
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
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            ml: "6.4rem",
                        },
                    }}/>
                </Box>
                <Button3D buttonWrapperStyles={{
                    ml: ['2.4rem', '1.2rem', '2.4rem', '3.2rem'],
                    display: ['none', 'flex'],
                }}>
                    CARROT DAPP
                </Button3D>
                <Flex 
                    className="mobile-controls" 
                    sx={{
                        display: ['inline-block', 'none'],
                        ml: 'auto', 
                    }}
                >
                    <HamburgerIcon 
                        isOpen={isMobileNavbarOpen}
                        onClick={() => {
                            setIsMobileNavbarOpen(!isMobileNavbarOpen);
                        }} 
                    />
                </Flex>
            </Flex>
            <MobileNavbar isOpen={isMobileNavbarOpen} setIsOpen={setIsMobileNavbarOpen} />
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;