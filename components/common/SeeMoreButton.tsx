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
              width: ["4rem", '4rem', '8rem'],
              height: ["4rem", '4rem', '8rem'],
              minWidth: ['4rem', '4rem', '8rem'],
              position: "relative",
              ml: ["1.6rem", "1.6rem", "2.4rem"],
              '.button': {
                boxShadow: `0 0 0 0.1rem ${theme.colors.textColor}`
              },
              '&:hover': {
                '.button': {
                  background: [`${theme.colors.orange6}`, `${theme.colors.orange6}`, `transparent`],
                  boxShadow: `0 0 0 0.1rem ${theme.colors.textColor}`
                },
                '.plus-line': {
                  boxShadow: `0 0 0 0.05rem ${theme.colors.textColor}`
                }
              },
              '.plus-line:nth-of-type(2)': {
                transform: props.isOpen ? 'rotate(180deg)' : 'rotate(90deg)'
              },
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
              sx={{
                position: "absolute",
                left: ["calc(50% - 0.7rem)", "calc(50% - 0.7rem)", "calc(50% - 2.6rem)"],
                width: ["1.4rem", "1.4rem", '5.2rem'],
                height: "0.1rem",
                background: theme.colors.cardLine,
                borderRadius: '100px'
              }}
            />
            <Box
              className="plus-line"
              sx={{
                position: "absolute",
                left: ["calc(50% - 0.7rem)", "calc(50% - 0.7rem)", "calc(50% - 2.6rem)"],
                width: ["1.4rem", "1.4rem", '5.2rem'],
                height: "0.1rem",
                background: theme.colors.cardLine,
                transform: "rotate(90deg)",
                transition: '0.15s ease-in-out transform',
                borderRadius: '100px'
              }}
            />
          </Button>
    )
}

export default SeeMoreButton;