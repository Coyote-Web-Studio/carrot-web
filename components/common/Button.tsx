import { Button as RBButton, Box, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { darken, lighten, saturate } from 'polished';

const Button = (props : any) => {
    const theme : any = useTheme();
    return (
        <Box onClick={props.onClick} sx={{
            width: 'fit-content',
            height: ['4.8rem', '4.8rem', '6.4rem'],
            borderRadius: '1rem',
            position: 'relative',
            cursor: 'pointer',
            minWidth: '14.4rem',
            '&:hover .button, &:hover .button-border': {
                transitionTimingFunction: 'cubic-bezier(0,1.19,.62,1.44)',
            },
            '&:hover .button': {
                backgroundColor: saturate('1', theme.colors.buttonBackground),
            },
            '&:hover .button-border': {
                borderWidth: '0.2rem'
            },
            '&:active .button, &:active .button-border': {
                transitionDuration: '0s'
            },
            ...props.buttonWrapperStyles
        }}>
            <Box className={'button-border'} sx={{
                width: '100%',
                height: '100%',
                border: `0.1rem solid ${theme.colors.buttonBorder}`,
                position: 'absolute',
                top: 0,
                left: 0,
                bg: 'transparent',
                transition: '0.15s ease-in-out border',
                zIndex: 1,
                borderRadius: 'inherit',
                pointerEvents: 'none',
                minWidth: 'inherit',
            }}/>
            <StyledButton className={'button'} sx={{
                background: theme.colors.buttonBackground,
                height: '100%',
                px: ['1.8rem'],
                lineHeight: ['1.8rem'],
                fontSize: ['1.2rem', '1.2rem', '1.6rem'],
                fontWeight: 400,
                width: 'inherit',
                fontFamily: 'IBM Plex Mono',
                letterSpacing: '0.05rem',
                borderRadius: 'inherit',
                boxShadow: `0rem 0rem 0 0 ${theme.colors.shadow}`,
                position: 'relative',
                top: '0rem',
                left: '0rem',
                transition: '0.15s ease-in-out background-color',
                cursor: 'pointer',
                m: 0,
                minWidth: 'inherit',
                ...props.sx,
            }}>
                <Text as={'span'} sx={{color: theme.colors.gray10, textShadow: '0 0 transparent', transition: '0.1s ease-in-out all'}}>
                    {props.children}
                </Text>
            </StyledButton>
        </Box>
    )
}

const StyledButton = styled(RBButton)``;

export default Button;