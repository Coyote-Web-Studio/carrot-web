import { useState, useEffect } from 'react';
import { Flex, Box, Image } from 'rebass';
import { Switch } from '@rebass/forms';
import { useThemeContext } from '../../context/theme';

import darkTheme from '../../themes/dark';
import lightTheme from '../../themes/light';

const StyleSwitch = (props : any) => {
    const [darkThemeActive, setDarkThemeActive] = useState(false);
    const [theme, setTheme] : any = useThemeContext();

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkThemeActive(true);
        };
    }, [])

    return (
        <Flex {...props} alignItems={'center'} sx={{position: 'relative', ...props.sx}} >
            <Switch 
                checked={darkThemeActive} 
                color={theme.colors.textColor} 
                onClick={() => {
                    setDarkThemeActive(!darkThemeActive);
                    setTheme(
                        darkThemeActive ? lightTheme : darkTheme
                    );
                }} 
                sx={{
                    height: ['1.32rem', null, null, '2.2rem'], 
                    width: ['2.6rem', null, null, '4.4rem'],
                    cursor: 'pointer',
                    bg: theme.colors.textColor,
                    position: 'inherit',
                    '&[aria-checked=true] div': {
                        transform: [
                            null, 
                            null, 
                            `translateX(13px) translateY(0px) !important`, 
                            `translateX(23px) translateY(0.5px) !important`]
                    },
                    '&:focus': {
                        boxShadow: 'none',
                    },
                    'div': {
                        boxShadow: 'none',
                        width: ['1.32rem', null, null, '2rem'],
                        height: ['1.32rem', null, null, '2rem'],
                        bg: theme.colors.background,
                        top: '0.1rem',
                        zIndex: '100',
                        transform: [null, null, null, `translateX(1px) translateY(0.5px) !important`]
                    }
                }}
            />
            <Flex className={'icons'} width={'100%'} height={'100%'} sx={{position: 'absolute', pointerEvents: 'none', zIndex: 1, top: 0}}>
                <Image sx={{
                    position: 'absolute',
                    top: ['0.35rem', '0.25rem', null, '0.5rem'],
                    left: ['0.5rem', '0.3rem', null, '0.5rem'],
                    zIndex: '4',
                    width: [ '0.8rem', null, null, '1.2rem'],
                    height: [ '0.8rem', null, null, '1.2rem'],
                    opacity: darkThemeActive ? 1 : 0
                }} src={'/icons/light-icon.svg'} />
                <Image sx={{
                    position: 'absolute',
                    top: ['0.35rem', '0.25rem', null, '0.5rem'],
                    right: ['0.3rem', null, '0.5rem'],
                    zIndex: '4',
                    width: [ '0.8rem', null, null, '1.2rem'],
                    height: [ '0.8rem', null, null, '1.2rem'],
                    opacity: darkThemeActive ? 0 : 1
                }} src={'/icons/dark-icon.svg'} />
            </Flex>
        </Flex>
    )
};

export default StyleSwitch;