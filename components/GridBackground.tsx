import { useState, useEffect } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';

const GridBackground = (props : any) => {
    const [ windowWidth, setWindowWidth ] = useState(0);
    const theme : any = useTheme();
    
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', (e) => {
            setWindowWidth(window.innerWidth);
        })
    }, []);

    return (
        <StyledGridBackground sx={{
            ...theme.boxSizes.expandedBox,
            position: 'absolute',
            top: props.top || 0,
            zIndex: 0,
            left: '1rem',
            flexWrap:'wrap',
            }}>
                {[...Array(props.rows)].map((item, index, array) => (
                    <Flex flexWrap={'nowrap'} width={'100%'} key={index} sx={{
                        '.square': {
                            borderBottom: index == array.length - 1 ? `1px solid ${props.color || theme.colors.gray1}` : 'none'
                        }
                    }}>
                        {[...Array(Math.round(windowWidth / 25))].map((item, index) => (
                            <Box 
                                key={index}
                                className={'square'}
                                sx={{
                                    width: '2.4rem',
                                    height: '2.4rem',
                                    border: `1px solid ${props.color || theme.colors.gray1}`,
                                    borderRight: '0',
                                    borderBottom: '0',
                                    '&:last-child': {
                                        borderRight: `1px solid ${props.color || theme.colors.gray1}`,
                                    }
                                }} 
                            />
                        ))}
                    </Flex>
                ))}
        </StyledGridBackground>
    )
}

const StyledGridBackground = styled(Flex)``;

export default GridBackground;