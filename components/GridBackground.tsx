import { useState, useEffect, useRef } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme } from 'styled-components';

const GridBackground = (props : any) => {
    const [ windowWidth, setWindowWidth ] = useState(0);
    const [ gridHeight, setGridHeight ] = useState(0);
    const [ gridSquareDivider, setGridSquareDivider ] = useState(25);
    const theme : any = useTheme();
    const gridRef : any = useRef(null);

    const debounce = (func : any, wait : any) => {
        let timeout : any;
      
        return function executedFunction(...args : any) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
      
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
    };


    const updateSquares = debounce(() => {
        setWindowWidth(window.innerWidth);

        if (window.innerWidth >= 1440) {
            setGridSquareDivider(70);
        } 

        if (gridRef.current) {
            setGridHeight(gridRef.current.getBoundingClientRect().height);
        }
    }, 200)
    
    useEffect(() => {
        updateSquares();
        window.addEventListener('resize', updateSquares);

    }, []);

    const getRows = (props : any) => {
        if (props.rows) {
            return props.rows;
        } else if (Math.round(gridHeight / gridSquareDivider) - (props.trimRows || 0) + (props.addRows || 0 )> 0) {
            return Math.round(gridHeight / gridSquareDivider) - (props.trimRows || 0) + (props.addRows || 0);
        }
    }

    return (
        <StyledGridBackground ref={gridRef} sx={{
            ...theme.boxSizes.expandedBox,
            position: 'absolute',
            top: props.top || 0,
            zIndex: 0,
            left: ['1rem', '2.4rem', 'calc(50% - (134.4rem / 2))'],
            flexWrap: 'wrap',
            // background: 'blue',
            height: props.rows ? 'unset' : '100%',
            flexDirection: 'column',
        }}>
            {getRows(props) > 0 && (
                [...Array(getRows(props))].map((item, index, array) => (
                    <Flex flexWrap={'nowrap'} width={'100%'} key={index} sx={{
                        height: ['2.4rem', '2.4rem', '6.4rem'],
                        '.square': {
                            borderBottom: index == array.length - 1 ? `1px solid ${props.color || theme.colors.gridColor}` : 'none'
                        }
                    }}>
                        {[...Array(Math.round(windowWidth / gridSquareDivider))].map((item, index) => (
                            <Box 
                                key={index}
                                className={'square'}
                                sx={{
                                    width: ['2.4rem', '2.4rem', '6.4rem'],
                                    height: ['2.4rem', '2.4rem', '6.4rem'],
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