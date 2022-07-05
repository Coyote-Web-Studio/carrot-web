import { useState } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';

export const HamburgerIcon = (props : any) => {
  const [isActive, setIsActive] = useState(false);
  const theme : any = useTheme();
  const lineStyle = {
    width: '2.4rem',
    height: '1px',
    background: props.backgroundColor == 'dark' ? theme.colors.gray10 : theme.colors.gray10,
    position: 'absolute',
    left: 0,
    transition: '0.15s ease-in-out all',
  };

  const onClick = () => {
    props.onClick && props.onClick();
    setIsActive(!isActive);
  }

  return (
    <StyledHamburgerIcon className={isActive ? 'active' : 'inactive'} {...props} sx={{
      position: 'relative',
      flexDirection: 'column',
      width: '1.75rem',
      height: '1.6rem',
      ...props.sx
    }}
      onClick={onClick}>
      <Box sx={{
        top: '0',
        opacity: isActive ? 0 : 1,
        ...lineStyle
      }}/>
      <Box sx={{
        top: '0.8rem',
        transform: isActive ? 'rotate(45deg)' : 'none',
        ...lineStyle
      }}/>
      <Box sx={{
        top: '0.8rem',
        transform: isActive ? 'rotate(-45deg)' : 'none',
        ...lineStyle
      }}/>
      <Box sx={{
        top: '1.6rem',
        opacity: isActive ? 0 : 1,
        ...lineStyle
      }}/>
    </StyledHamburgerIcon>
  )
};

const StyledHamburgerIcon = styled(Flex)``;

export default HamburgerIcon;
