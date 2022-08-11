import { Button, Box, Flex } from 'rebass';
import { useTheme } from 'styled-components';

const Button3D = (props : any) => {
    const theme : any = useTheme();
    const distance = 30;
    return (
        <Button sx={{
            color: 'white',
            background: 'transparent',
            height: '6rem',
            border: '2px solid black',
            fontSize: '3rem',
            position: 'relative',
            borderRadius: '1rem',
            p: '0 2rem',
            bg: theme.colors.orange6,
            zIndex: 0,
            minWidth: 'unset',
            width: '20rem',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            '&:hover .elevated': {
                transform: `perspective(250px) translate3d(0px, 0, ${distance}px)`,
            },
            '&:hover .border-left': {
                transform: 'perspective(250px) rotate3d(0, 1, 0, 250deg) scaleX(1)'
            },
            '&:hover .border-right': {
                transform: 'perspective(250px) rotate3d(0, 1, 0, 110deg) scaleX(1)'
            },
            '&:hover .border-top': {
                transform: 'perspective(250px) rotate3d(1, 0, 0, 97deg) scaleY(1)'
            },
            '&:hover .border-bottom': {
                transform: 'perspective(250px) rotate3d(1, 0, 0, -97deg) scaleY(1)'
            }
        }}>
            <Box>
                {props.children}
            </Box>
            <Box className={'elevated'} color={'black'} sx={{
                transition: '0.15s ease-in-out all',
                zIndex: 1,
                borderRadius: 'inherit',
                border: '2px solid black',
                width: 'calc(100% + 4px)',
                height: 'calc(100% + 4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                background: 'transparent'
            }}>
            </Box>
            <Box className={'border-left'} sx={{
                width: `${distance + (distance * 0.4)}px`,
                height: 'calc(100% - 1rem)',
                position: 'absolute',
                border: '2px solid black',
                top: '0.5rem',
                left: 0,
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center left',
                transform: 'perspective(250px) rotate3d(0, 1, 0, 250deg) scaleX(0)'
            }}></Box>
            <Box className={'border-right'} sx={{
                
                width: `${distance + (distance * 0.4)}px`,
                height: 'calc(100% - 1rem)',
                position: 'absolute',
                border: '2px solid black',
                top: '0.5rem',
                right: 0,
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center right',
                transform: 'perspective(250px) rotate3d(0, 1, 0, 111deg) scaleX(0)'
            }}></Box>
            <Box className={'border-top'} sx={{
                width: 'calc(100% - 2rem)',
                height: `${distance}px`,
                position: 'absolute',
                border: '2px solid black',
                top: '0rem',
                right: '1rem',
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center top',
                transform: 'perspective(250px) rotate3d(1, 0, 0, 100deg) scaleY(0)'
            }}></Box>
            <Box className={'border-bottom'} sx={{
                width: 'calc(100% - 2rem)',
                height: `${distance}px`,
                position: 'absolute',
                border: '2px solid black',
                bottom: '0rem',
                right: '1rem',
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center bottom',
                transform: 'perspective(250px) rotate3d(1, 0, 0, -98deg) scaleY(0)'
            }}></Box>
        </Button>
    )
}

export default Button3D;