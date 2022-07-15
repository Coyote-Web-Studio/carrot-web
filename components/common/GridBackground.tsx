import { useState, useEffect, useRef } from 'react';
import { Flex, Box } from 'rebass';
import styled, { useTheme, css } from 'styled-components';
import { keyframes } from '@emotion/react'
import { debounce } from './../../utils/utils'

const GridBackground = (props : any) => {
    const [ gridWidth, setGridWidth ] = useState(0);
    const [ gridHeight, setGridHeight ] = useState(0);

    const [ gridRows, setGridRows ] = useState(0);
    const [ gridColumns, setGridColumns ] = useState(0);

    const theme : any = useTheme();
    const gridRef : any = useRef(null);

    const updateDimensions = debounce(() => {
        // console.log('Updated');
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
        // console.log('Height: ' + gridHeight);
        // console.log('Width: ' + gridWidth);

        const availableTabletRows = Math.round(gridHeight / 24);
        const availableTabletColumns = Math.round(gridWidth / 24);

        const availableDesktopRows = Math.round(gridHeight / 64);
        const availableDesktopColumns = Math.round(gridWidth / 64);

        // console.log(availableDesktopRows)
        // console.log(availableDesktopColumns);

        if (window.innerWidth > 1023) {
            setGridRows(availableDesktopRows)
            setGridColumns(availableDesktopColumns)
        } else {
            setGridRows(availableTabletRows)
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
                [...Array(gridRows - (props.trimRows ? props.trimRows : 0))].map((elem : any, index : number) => 
                    <Flex sx={{ width: '100%', gap: '1px'}} key={index}>
                        {[...Array(gridColumns)].map((elem : any, index : number) => 
                            <Box key={index} sx={{
                                animation: props.useAnimation && `${scale} 1s forwards`,
                                transformOrigin: 'center',
                                transition: '0.15s ease-in-out boxShadow',
                                animationDelay:  props.useAnimation && `${++boxCounter * 5}ms`,
                                transform: props.useAnimation ? 'rotate3d(0,1,0, 90deg)' : 'none',
                                boxShadow: `0 0 0 1px ${props.color || theme.colors.gridColor}`,
                                width: '2.4rem',
                                height: '2.4rem',
                                [`@media screen and (min-width: ${theme.breakpoints[2]})`]: {
                                    width: '6.4rem',
                                    height: '6.4rem',
                                }
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
        transform: 'rotate(180deg) scale(-2)'
    },
    ['100%']: {
        opacity: 1,
        transform: 'rotate(0) scale(1)'
    },
})

export default GridBackground;