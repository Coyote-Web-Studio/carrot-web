import { Button as RBButton } from 'rebass';
import styled, { useTheme } from 'styled-components';

const Button = (props : any) => {
    const theme : any = useTheme();
    return (
        <StyledButton {...props} sx={{
            background: theme.colors.orange6,
            border: `0.1rem solid ${theme.colors.gray10}`,
            height: ['4.8rem'],
            px: ['1.8rem'],
            lineHeight: ['1.8rem'],
            fontSize: ['1.2rem'],
            color: theme.colors.gray10,
            width: 'fit-content',
            fontFamily: 'IBM Plex Mono',
            letterSpacing: '0.05rem',
            borderRadius: '1rem',
            minWidth: '14.4rem',
            ...props.sx
        }}/>
    )
}

const StyledButton = styled(RBButton)``;

export default Button;