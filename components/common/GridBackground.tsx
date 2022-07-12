import { useState, useEffect, useRef } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme, css } from 'styled-components';
import { keyframes } from '@emotion/react'


const GridBackground = (props : any) => {
    const [ gridWidth, setGridWidth ] = useState(0);
    const [ gridHeight, setGridHeight ] = useState(0);

    const [ gridRows, setGridRows ] = useState(0);
    const [ gridColumns, setGridColumns ] = useState(0);

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


    const updateDimensions = debounce(() => {
        console.log('Updated');
        if (gridRef.current) {
            setGridHeight(gridRef.current.getBoundingClientRect().height);
            setGridWidth(gridRef.current.getBoundingClientRect().width);
        }
    }, 200);
    
    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        console.log('Height: ' + gridHeight);
        console.log('Width: ' + gridWidth);

        const availableTabletRows = Math.round(gridHeight / 24);
        const availableTabletColumns = Math.round(gridWidth / 24);

        const availableDesktopRows = Math.round(gridHeight / 64);
        const availableDesktopColumns = Math.round(gridWidth / 64);

        console.log(availableDesktopRows)
        console.log(availableDesktopColumns);

        if (window.innerWidth > 1104) {
            setGridRows(availableDesktopRows - (props.trimRows ? props.trimRows : 0))
            setGridColumns(availableDesktopColumns)
        } else {
            setGridRows(availableTabletRows - (props.trimRows ? props.trimRows : 0))
            setGridColumns(availableTabletColumns)
        }
    }, [gridHeight, gridWidth, props.trimRows]);

    let boxCounter = 0;

    return (
        <StyledGridBackground ref={gridRef} sx={{
            position: 'absolute',
            top: props.top || 0,
            zIndex: 0,
            width: '100%',
            // background: 'blue',
            height: props.rows ? 'unset' : '100%',
            gridTemplateColumns: ['repeat(42, 1fr)',null, 'repeat(21, 1fr)'],
            // backgroundColor: theme.colors.background,
            opacity: 1,
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '1px',
            backgroundSize: [`2.4rem 2.4rem`,`2.4rem 2.4rem`,`6.4rem 6.4rem`],
        }}>
            {gridRows > 0 && (
                [...Array(gridRows)].map((elem : any, index : number) => 
                    <Flex sx={{ width: '100%', gap: '1px'}} key={index}>
                        {[...Array(gridColumns)].map((elem : any, index : number) => 
                            <Box key={index} sx={{
                                animation: props.useAnimation && `${scale} 1s forwards`,
                                transformOrigin: 'center',
                                animationDelay:  props.useAnimation && `${++boxCounter * 5}ms`,
                                transform: props.useAnimation ? 'rotate3d(0,1,0, 90deg)' : 'none',
                                boxShadow: `0 0 0 1px ${props.color || theme.colors.gridColor}`,
                                width: [`2.4rem`,`2.4rem`,`6.4rem`],
                                height: [`2.4rem`,`2.4rem`,`6.4rem`],
                            }} />
                        )}
                    </Flex>
                )
            )}
        </StyledGridBackground>
    )
}

const StyledGridBackground = styled(Flex)``;

const boxFade = keyframes({
   ['0%']: {
        // opacity: 0,
        transform: 'rotate3d(0,1,0, 90deg)'
    },
    ['33%']: {
        // opacity: 1,
        transform: 'rotate3d(0,1,0, 0deg)'
    },
    ['66%']: {
        // opacity: 1,
        transform: 'rotate3d(0,1,0, 0deg)'
    },
    ['100%']: {
        // opacity: 1,
        transform: 'rotate3d(0,0,1, 180deg)'
    },
})

const scale = keyframes({
   ['0%']: {
        opacity: 0,
        transform: 'scale(0)'
    },
    ['100%']: {
        opacity: 1,
        transform: 'scale(1)'
    },
})

export default GridBackground;