import { Box } from 'rebass';
import { useTheme } from 'styled-components';
import Button from "./../common/Button";

const SeeMoreButton = (props : any) => {
    const theme : any = useTheme();

    return (
        <Button
            onClick={props.onClick}
            buttonWrapperStyles={{
              borderRadius: "10rem",
              width: ["4rem", '4rem', null, '5.6rem'],
              height: ["4rem", '4rem', null, '5.6rem'],
              minWidth: ['4rem', '4rem', null, '5.6rem'],
              position: "relative",
              ml: ["1.6rem", "1.6rem", "2.4rem"],
              '.button': {
                boxShadow: `0 0 0 0.1rem ${theme.colors.textColor}`
              },
              '&:hover': {
                '.button': {
                  background: [`${theme.colors.orange6}`],
                  boxShadow: `0 0 0 0.1rem ${theme.colors.textColor}`
                },
              },
              '.plus-line': {
                position: "absolute",
                left: ["calc(50% - 0.7rem)", "calc(50% - 0.7rem)", null, "calc(50% - 1.8rem)"],
                width: ["1.4rem", "1.4rem", null, '3.6rem'],
                height: "0.1rem",
                background: [theme.colors.textColor],
                borderRadius: '100px',
                transition: '0.15s ease-in-out transform',
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                  width: '5.2rem',
                  left: "calc(50% - 2.6rem)"
                }
              },
              '.plus-line:nth-of-type(2)': {
                transform: props.isOpen ? 'rotate(180deg)' : 'rotate(90deg)'
              },
              [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                width: '8rem',
                height: '8rem',
                minWidth: '8rem'
              }
            }}
            sx={{
              backgroundColor: [
                theme.colors.orange6, 
                theme.colors.orange6, 
                theme.colors.cardBackground
              ],
            }}
          >
            <Box
              className="plus-line"
            />
            <Box
              className="plus-line"
              sx={{
                transform: "rotate(90deg)",
              }}
            />
          </Button>
    )
}

export default SeeMoreButton;