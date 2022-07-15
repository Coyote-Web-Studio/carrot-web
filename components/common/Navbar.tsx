import { useEffect, useState } from 'react';
import { Flex, Box, Text, Link, Image } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/theme'
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';
import StyleSwitch from './StyleSwitch';

const Navbar = (props : any) => {
    
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const theme : any = useTheme();

    const NavLinks = [
        {
            label: '↳ ABOUT',
            href: '#'
        },
        {
            label: '↳ PARTNER',
            href: '#'
        },
        {
            label: '↳ CAMPAIGNS',
            href: '#'
        },
        {
            label: '↳ COMMUNITY',
            href: '#'
        },
    ];

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
                pt: ['2.4rem', '2.4rem', '6.2rem'], 
                pb: ['3.2rem', '2.4rem', '3.3rem']
            }}
        >
            <Flex sx={theme.boxSizes.defaultBox} alignItems={'center'} justifyContent={'space-between'}>
                <Logo color={theme.colors.logoColor} height={['2.7rem', '2.7rem', '4.8rem']}/>
                <Box sx={{
                    display: ['none', 'none', 'none', 'flex'],
                    alignItems: 'center'
                }}>
                    <Flex as="nav">
                        <Flex as="ul" alignItems={'center'}>
                            {NavLinks.map((link, index) => (
                                <Link 
                                    fontFamily={'IBM Plex Mono'} 
                                    fontSize={['1rem', '1rem', '1.6rem']} 
                                    href={'#'}
                                    key={index}
                                    sx={{
                                        ml:['1.6rem', '1.6rem', '3.2rem', '6.4rem'],
                                        whiteSpace: 'nowrap',
                                        transition: '0.1s ease-in-out all',
                                        '&:first-of-type': {
                                            ml: 0
                                        },
                                        '&:hover': {
                                        },
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                    <StyleSwitch ml={['2rem', '2rem', '4rem']} />
                    <Button buttonWrapperStyles={{
                        ml: ['2.4rem', '2.4rem', '4.8rem']
                    }}>
                        CARROT DAPP
                    </Button>
                </Box>
                <StyleSwitch 
                    sx={{
                        display: ['inline-block', 'inline-block', 'inline-block', 'none'], 
                        ml: 'auto', 
                        mr: '2rem',
                        position: 'relative'
                    }}
                />
                <HamburgerIcon sx={{
                    display: ['inline-block', 'inline-block', 'inline-block', 'none']
                }} onClick={() => {
                    setIsMobileNavbarOpen(!isMobileNavbarOpen);
                }} />
            </Flex>
            <Flex sx={{
                position: 'absolute',
                pointerEvents: isMobileNavbarOpen ? 'auto' : 'none',
                opacity: isMobileNavbarOpen ? 1 : 0,
                top: [
                    isMobileNavbarOpen ? '8rem' : '20rem',
                    isMobileNavbarOpen ? '14rem' : '20rem',
                ],
                left: 0,
                width: '100vw',
                height: 'calc(100vh - 8rem)',
                background: theme.colors.background,
                zIndex: 4,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '100%',
                transition: '0.25s ease-in-out all',
            }}>
                <Flex as="nav" sx={{mb: '4rem'}}>
                    <Flex as="ul" alignItems={'center'} flexDirection={'column'}>
                        {NavLinks.map((link, index) => (
                            <Link 
                                fontFamily={'IBM Plex Mono'} 
                                fontSize={['3rem']} 
                                key={index}
                                sx={{
                                    whiteSpace: 'nowrap',
                                    mb: '2rem',
                                    '&:last-child': {
                                        mb: 0
                                    },
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Flex>
                </Flex>
                <Button buttonWrapperStyles={{
                    ml: ['2.4rem', '2.4rem', '4.8rem']
                }}>
                    CARROT DAPP
                </Button>
            </Flex>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;