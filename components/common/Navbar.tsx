import { useEffect, useState } from 'react';
import { Flex, Box, Text, Link, Image } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/theme'
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';
import StyleSwitch from './StyleSwitch';
import MobileNavbar from './MobileNavbar';

import NavLinks from './../../content/navigation';

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
            <Flex sx={theme.boxSizes.defaultBox} alignItems={'center'} justifyContent={'space-between'}>
                <Logo 
                    color={theme.colors.logoColor} sx={{
                        height: ['2.7rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            height: "4rem",
                        },
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            height: "7.7rem",
                        },
                    }}/>
                <Box sx={{
                    display: ['none', 'flex'],
                    alignItems: 'center'
                }}>
                    <Flex as="nav">
                        <Flex as="ul" alignItems={'center'}>
                            {NavLinks.map((link, index) => (
                                <Link 
                                    fontFamily={'IBM Plex Mono'} 
                                    href={'#'}
                                    key={index}
                                    sx={{
                                        ml:['1.2rem', '1.2rem', '1.2rem', '2.4rem'],
                                        fontWeight: 300,
                                        position: 'relative',
                                        whiteSpace: 'nowrap',
                                        transition: '0.1s ease-in-out all',
                                        fontSize: ['1rem', null, null, '1.2rem'],
                                        letterSpacing: '0.08em',
                                        '&:first-of-type': {
                                            ml: 0
                                        },
                                        '&:hover': {
                                            '.underline': {
                                                width: '100%'
                                            }
                                        },
                                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                                            ml: "3.2rem",
                                            fontSize: '1.6rem'
                                        },
                                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                                            ml: "6.4rem",
                                            fontSize: '1.6rem'
                                        },
                                    }}
                                >
                                    <Box
                                        className="underline"
                                        sx={{
                                            height: '0.1rem',
                                            width: '0',
                                            position: 'absolute',
                                            bottom: '-1rem',
                                            background: theme.colors.orange6,
                                            transition: '0.15s ease-in-out all'
                                        }}
                                    />
                                    {link.label}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                    <StyleSwitch sx={{
                        ml:['2.4rem', null, null, '3.2rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            ml: "4.8rem",
                        },
                    }}/>
                    <Button buttonWrapperStyles={{
                        ml: ['2.4rem', null, null, '3.2rem'],
                        [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                            ml: "4.8rem",
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