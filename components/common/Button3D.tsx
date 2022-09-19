import { Button as RBButton, Box, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { invert } from 'polished';

const Button3D = (props : any) => {
    const theme : any = useTheme();
    return (
        <Box onClick={props.onClick} className={`${props.className ? props.className : ''} int-cursor`} sx={{
            width: 'fit-content',
            height: ['4.6rem', null, null, '6.2rem'],
            borderRadius: '1rem',
            position: 'relative',
            cursor: 'pointer',
            minWidth: [null, null, null, '14.4rem'],
            boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`,
            bg: theme.colors.background,
            transition: '0.15s ease-in-out all',
            '&:hover, &.hovered': {
                '.button': {
                    backgroundColor: 
                    props.inverted ?
                    invert(theme.colors.background) :
                    theme.colors.background,
                    boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBackground}`,
                    transform: 'translate(1rem, -1rem)',
                    'span': {
                        color: theme.colors.buttonBackground,
                    },
                },
                '.line': {
                    transform: 'rotate(-45deg) scaleX(1)',
                },
            },
            ...props.buttonWrapperStyles
        }}>
            <Box className={'line left'} sx={{
                // background: theme.colors.background, 
                width: '1.2rem',
                height: '0.1rem',
                position: 'absolute',
                left: '0.3rem',
                top: '0.15rem',
                transform: 'rotate(-45deg) scaleX(0)',
                bg: theme.colors.orange6,
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center left',
                pointerEvents: 'none'
                
            }}/>
            <Box className={'line left'} sx={{
                // background: theme.colors.background, 
                width: '1.4rem',
                height: '0.1rem',
                right: '-1.1rem',
                position: 'absolute',
                bottom: '0.15rem',
                transform: 'rotate(-45deg) scaleX(0)',
                bg: theme.colors.orange6,
                transition: '0.15s ease-in-out all',
                transformOrigin: 'center left',
                pointerEvents: 'none'
                
            }}/>
            <Box className={'side left'} sx={{
                width: '0.88rem',
                height: ['2.6rem', null, null, '4.2rem'],
                left: '0rem',
                transition: '0.15s ease-in-out all',
                position: 'absolute',
                top: '0.5rem',
                transform: 'skew(0, -45deg)',
                boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`,
                pointerEvents: 'none'
            }}/>
            <Box className={'side bottom'} sx={{
                width: ['calc(100% - 2.2rem)'],
                transition: '0.15s ease-in-out all',
                height: '1rem',
                left: '1.6rem',
                position: 'absolute',
                bottom: '0rem',
                transform: 'skew(-45deg, 0)',
                boxShadow: `0 0 0 0.1rem ${theme.colors.orange6}`,
                pointerEvents: 'none'
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
                pointerEvents: 'none',
                boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBorder}`,
                ...props.sx,
            }}>
                <Box className="lines" sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                    <Box className="line" />
                    <Box className="line" />
                    <Box className="line" />
                </Box>
                <Text as={'span'} sx={{color: theme.colors.gray10, textShadow: '0 0 transparent', transition: '0.1s ease-in-out all', pointerEvents: 'none'}}>
                    {props.children}
                </Text>
            </StyledButton>
        </Box>
    )
}

const StyledButton = styled(RBButton)``;

export default Button3D;