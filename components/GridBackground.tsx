import { useState, useEffect, useRef } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';

const GridBackground = (props : any) => {
    const [ windowWidth, setWindowWidth ] = useState(0);
    const [ gridHeight, setGridHeight ] = useState(0);
    const theme : any = useTheme();
    const gridRef : any = useRef(null);
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (gridRef.current) {
            setGridHeight(gridRef.current.getBoundingClientRect().height);
        }

        window.addEventListener('resize', (e) => {
            setWindowWidth(window.innerWidth);
        })
    }, []);

    const getRows = (props : any) => {
        if (props.rows) {
            return props.rows;
        } else if (Math.round(gridHeight / 25) - (props.trimRows || 0) + (props.addRows || 0 )> 0) {
            return Math.round(gridHeight / 25) - (props.trimRows || 0) + (props.addRows || 0);
        }
    }

    return (
        <StyledGridBackground ref={gridRef} sx={{
            ...theme.boxSizes.expandedBox,
            position: 'absolute',
            top: props.top || 0,
            zIndex: 0,
            left: ['1rem', '2.4rem'],
            flexWrap: 'wrap',
            // background: 'blue',
            height: props.rows ? 'unset' : '100%',
            flexDirection: 'column',
        }}>
            {getRows(props) > 0 && (
                [...Array(getRows(props))].map((item, index, array) => (
                    <Flex flexWrap={'nowrap'} width={'100%'} key={index} sx={{
                        height: '2.4rem',
                        '.square': {
                            borderBottom: index == array.length - 1 ? `1px solid ${props.color || theme.colors.gridColor}` : 'none'
                        }
                    }}>
                        {[...Array(Math.round(windowWidth / 25))].map((item, index) => (
                            <Box 
                                key={index}
                                className={'square'}
                                sx={{
                                    width: '2.4rem',
                                    height: '2.4rem',
                                    border: `1px solid ${props.color || theme.colors.gridColor}`,
                                    borderRight: '0',
                                    borderBottom: '0',
                                    '&:last-child': {
                                        borderRight: `1px solid ${props.color || theme.colors.gridColor}`,
                                    }
                                }} 
                            />
                        ))}
                    </Flex>
                ))
            )}
        </StyledGridBackground>
    )
}

const StyledGridBackground = styled(Flex)``;

export default GridBackground;