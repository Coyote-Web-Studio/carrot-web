import { Button as RBButton, Box, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { invert } from 'polished';

const Button = (props : any) => {
    const theme : any = useTheme();
    return (
        <Box onClick={props.onClick} sx={{
            width: 'fit-content',
            height: ['4.8rem', null, null, '6.4rem'],
            borderRadius: '1rem',
            position: 'relative',
            cursor: 'pointer',
            minWidth: [null, null, null, '14.4rem'],
            '&:hover .button': {
                backgroundColor: 
                    props.inverted ?
                        invert(theme.colors.background) :
                        theme.colors.background,
                boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBackground}`,
                'span': {
                    color: theme.colors.buttonBackground,
                }
            },
            '&:active .button, &:active .button-border': {
                transitionDuration: '0s'
            },
            ...props.buttonWrapperStyles
        }}>
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
                transition: '0.15s ease-in-out background-color',
                cursor: 'pointer',
                m: 0,
                minWidth: 'inherit',
                boxShadow: `0 0 0 0.1rem ${theme.colors.buttonBorder}`,
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