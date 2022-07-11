import { useState } from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { Switch } from '@rebass/forms'
import { useThemeContext } from './../context/theme'
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';
import darkTheme from './../themes/dark';
import lightTheme from './../themes/light';

const Navbar = (props : any) => {
    const [theme, setTheme] : any = useThemeContext();
    const [themeSwitchActive, setThemeSwitchActive] = useState(false);

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

    return (
        <StyledNavbar sx={{width: '100%', pt: ['2.4rem', '2.4rem', '6.2rem'], pb: ['3.2rem', '2.4rem', '4.5rem']}}>
            <Flex sx={theme.boxSizes.defaultBox} alignItems={'center'} justifyContent={'space-between'}>
                <Logo color={theme.colors.logoColor} height={['2.7rem', '4rem']}/>
                <Box ml={'auto'} mr={'2rem'}>
                    <Switch checked={themeSwitchActive} color={theme.colors.textColor} onClick={() => {
                        setThemeSwitchActive(!themeSwitchActive);
                        setTheme(
                            themeSwitchActive ? lightTheme : darkTheme
                        )
                    }} sx={{
                        height: '1.32rem', 
                        width: '2.6rem',
                        cursor: 'pointer',
                        '&:focus': {
                            boxShadow: 'none',
                        },
                        'div': {
                            boxShadow: 'none',
                            width: '1.32rem',
                            height: '1.32rem',
                        }
                    }}/>
                </Box>
                <HamburgerIcon sx={{
                    display: ['auto', 'none']
                }}/>
                <Box sx={{
                    display: ['none', 'flex', 'flex', 'flex'],
                    alignItems: 'center'
                }}>
                    <Flex as="nav">
                        <Flex as="ul" alignItems={'center'}>
                            {NavLinks.map((link, index) => (
                                <Link 
                                    fontFamily={'IBM Plex Mono'} 
                                    fontSize={['1rem', '1rem', '1.6rem']} 
                                    key={index}
                                    sx={{
                                        ml:['1.6rem', '1.6rem', '3.2rem'],
                                        whiteSpace: 'nowrap',
                                        '&:first-child': {
                                            ml: 0
                                        }
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
                </Box>
            </Flex>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;