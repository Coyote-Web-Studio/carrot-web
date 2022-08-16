import { Button as RBButton, Box, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { invert } from 'polished';
import Theme from '../../types/Theme';

const Button3D = (props : any) => {
    const theme : any = useTheme();
    return (
        <Box onClick={props.onClick} sx={{
            width: 'fit-content',
            height: ['4.6rem', null, null, '6.2rem'],
            borderRadius: '1rem',
            position: 'relative',
            cursor: 'pointer',
            minWidth: [null, null, null, '14.4rem'],
            boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`,
            bg: theme.colors.background,
            transition: '0.15s ease-in-out all',
            '&:hover': {
                '.button': {
                    backgroundColor: 
                    props.inverted ?
                    invert(theme.colors.background) :
                    theme.colors.background,
                    boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBackground}`,
                    'span': {
                        color: theme.colors.buttonBackground,
                    },
                    transform: 'translate(1rem, -1rem)'
                },
                '.line.left': {
                    transform: 'scaleX(1, 0)',
                },
            },
            ...props.buttonWrapperStyles
        }}>
            <Box className={'line left'} sx={{
                // background: theme.colors.background, 
                width: '0rem',
                height: '0.1rem',
                left: '0.3rem',
                position: 'absolute',
                top: '-0.3rem',
                transform: 'rotate(-45deg)',
                bg: theme.colors.orange6,
                transition: '0.15s ease-in-out all'
                
            }}/>
            <Box className={'side left'} sx={{
                // background: theme.colors.background, 
                width: '0.88rem',
                height: '4.2rem',
                left: '0rem',
                transition: '0.15s ease-in-out all',
                position: 'absolute',
                top: '0.5rem',
                transform: 'skew(0, -45deg)',
                boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`
            }}/>
            <Box className={'side left'} sx={{
                // background: theme.colors.background, 
                width: 'calc(100% - 2.2rem)',
                transition: '0.15s ease-in-out all',
                height: '1rem',
                left: '1.6rem',
                position: 'absolute',
                bottom: '0rem',
                transform: 'skew(-45deg, 0)',
                boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`
            }}/>
            <StyledButton className={'button'} sx={{
                background: theme.colors.buttonBackground,
                height: '100%',
                px: ['1.8rem'],
                lineHeight: ['1.8rem'],
                fontSize: ['1.2rem', null, null, '1.6rem'],
                fontWeight: 300,
                width: 'inherit',
                fontFamily: 'IBM Plex Mono',
                letterSpacing: '0.05rem',
                borderRadius: 'inherit',
                zIndex: 1,
                whiteSpace: 'nowrap',
                position: 'relative',
                top: '0rem',
                left: '0rem',
                transition: '0.15s ease-in-out all',
                cursor: 'pointer',
                m: 0,
                minWidth: 'inherit',
                boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBorder}`,
                ...props.sx,
            }}>
                <Box className="lines" sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Box className="line" />
                    <Box className="line" />
                    <Box className="line" />
                </Box>
                <Text as={'span'} sx={{color: theme.colors.gray10, textShadow: '0 0 transparent', transition: '0.1s ease-in-out all'}}>
                    {props.children}
                </Text>
            </StyledButton>
        </Box>
    )
}

const StyledButton = styled(RBButton)``;

export default Button3D;