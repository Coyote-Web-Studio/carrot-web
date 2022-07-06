import { useState } from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { Switch } from '@rebass/forms'
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Button from './Button';

const Navbar = (props : any) => {
    const theme : any = useTheme();
    const [darkTheme, setDarkTheme] = useState(false);
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
        <StyledNavbar sx={{width: '100%', py: '2.4rem'}}>
            <Flex sx={theme.boxSizes.defaultBox} alignItems={'center'} justifyContent={'space-between'}>
                <Logo color={theme.colors.logoColor} height={['2.7rem', '4rem']}/>
                <HamburgerIcon sx={{
                    display: ['auto', 'none']
                }}/>
                <Box sx={{
                    display: ['none', 'flex', 'flex', 'flex'],
                    alignItems: 'center'
                }}>
                    <Switch checked={themeSwitchActive} color={theme.colors.textColor} onClick={() => {
                        setThemeSwitchActive(!themeSwitchActive)
                    }} sx={{
                        height: '1.32rem', 
                        width: '2.6rem',
                        'div': {
                            width: '1.32rem',
                            height: '1.32rem'
                        }
                        }}></Switch>
                    <Flex as="nav">
                        <Flex as="ul" alignItems={'center'}>
                            {NavLinks.map((link, index) => (
                                <Link fontFamily={'IBM Plex Mono'} ml={'1.6rem'}>
                                    {link.label}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                    <Button ml={'2.4rem'}>CARROT DAPP</Button>
                </Box>
            </Flex>
        </StyledNavbar>
    )
}

const StyledNavbar = styled(Flex)`
    
`;

export default Navbar;