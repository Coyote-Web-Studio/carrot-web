import { useState, useEffect, useRef } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme, css } from 'styled-components';
import { keyframes } from '@emotion/react'


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
        console.log('Updated')
        setWindowWidth(window.innerWidth);

        if (window.innerWidth >= 1440) {
            setGridSquareDivider(76);
        } 

        if (window.innerWidth <= 1440) {
            setGridSquareDivider(60);
        } 

        if (window.innerWidth <= 768) {
            setGridSquareDivider(25);
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
            left: [
                'calc(50% - (100vw / 2) + 1rem)', 
                '2.4rem', 
                'calc(50% - (100vw / 2) + 1rem)',
            ],
            flexWrap: 'wrap',
            // background: 'blue',
            height: props.rows ? 'unset' : '100%',
            flexDirection: 'column',
            '@media screen and (min-width: 1439px)': {
                left: "calc(50% - (134.4rem / 2))",
            },
        }}>
            {getRows(props) > 0 && (
                [...Array(getRows(props))].map((item, i, array) => (
                    <Flex flexWrap={'nowrap'} width={'100%'} key={i} sx={{
                        height: ['2.4rem', '2.4rem', '6.4rem'],
                        '.square': {
                            borderBottom: i == array.length - 1 ? `1px solid ${props.color || theme.colors.gridColor}` : 'none'
                        }
                    }}>
                        {[...Array(Math.round(windowWidth / gridSquareDivider))].map((item, j) => (
                            <Box 
                                key={j}
                                className={'square'}
                                sx={{
                                    width: ['2.4rem', '2.4rem', '6.4rem'],
                                    height: ['2.4rem', '2.4rem', '6.4rem'],
                                    border: `1px solid ${props.color || theme.colors.gridColor}`,
                                    borderRight: '0',
                                    borderBottom: '0',
                                    transformOrigin: 'center',
                                    transform: 'rotate3d(0,1,0, 90deg)',
                                    animation: props.useAnimation && `${boxFade} 0.25s forwards`,
                                    animationDelay: props.useAnimation && `${(i + j) * 50}ms`,
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

const boxFade = keyframes({
    from: {
        // opacity: 0,
        transform: 'rotate3d(0,1,0, 90deg)'
    },
    to: {
        // opacity: 1,
        transform: 'rotate3d(0,1,0, 0deg)'
    },
})

export default GridBackground;