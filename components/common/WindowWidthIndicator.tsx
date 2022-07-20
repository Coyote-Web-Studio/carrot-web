import { useState, useEffect } from 'react'
import { Box, Text } from 'rebass'
import { debounce } from './../../utils/utils'

const WindowWidthIndicator = (props : any) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('undefined');
    const [isVisible, setIsVisible] = useState(props.enabled)

    const BREAKPOINTS = [
        {
            name: 'phone',
            value: 640
        },
        {
            name: 'tablet',
            value: 831
        },
        {
            name: 'tablet-xl',
            value: 1023
        },
        {
            name: 'desktop',
            value: 1440
        },
        {
            name: 'desktop-xl',
            value: Number.POSITIVE_INFINITY
        }
    ]; 

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            // console.log(e.keyCode);
            if (e.keyCode == 192) {
                setIsVisible(!isVisible)
            }
        })
    })
    
    const updateWidth = debounce(() => {
        setWindowWidth(window.innerWidth);
    }, 200);

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
    }, [])
    
    useEffect(() => {
        if (windowWidth <= BREAKPOINTS[0].value) {
            setCurrentBreakpoint(BREAKPOINTS[0].name);
        } else if (
            windowWidth > BREAKPOINTS[0].value && 
            windowWidth <= BREAKPOINTS[1].value 
        ) {
            setCurrentBreakpoint(BREAKPOINTS[1].name);
        } else if (
            windowWidth > BREAKPOINTS[1].value && 
            windowWidth <= BREAKPOINTS[2].value
        ) {
            setCurrentBreakpoint(BREAKPOINTS[2].name);
        } else if (windowWidth > BREAKPOINTS[2].value && 
            windowWidth <= BREAKPOINTS[3].value) {
            setCurrentBreakpoint(BREAKPOINTS[3].name);
        } else if (
            windowWidth > BREAKPOINTS[3].value && 
            windowWidth <= BREAKPOINTS[4].value
        ) {
            setCurrentBreakpoint(BREAKPOINTS[4].name);
        }
    }, [windowWidth]);

    return (
        <Box sx={{
            position: 'fixed',
            top: '0rem',
            right: '0rem',
            fontSize: '1.2rem',
            background: 'rgba(0,0,0,0.5)',
            padding: '1rem',
            zIndex: 1000,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            borderRadius: '0 0 0 1rem',
            transition: '0.15s ease-in-out all',
            textAlign: 'right',
            '&:hover': {
                opacity: 0.1
            }
        }}>
            <Text as="p" fontSize={'1rem'} color={'white'} lineHeight={'1.2rem'}>
                {currentBreakpoint}
            </Text>
            <Text as="p" fontSize={'1rem'} color={'white'} lineHeight={'1.2rem'}>
                {windowWidth}px
            </Text>
            <Text as="p" fontSize={'1rem'} color={'white'} lineHeight={'1.2rem'} mt={'1rem'}>
                {props.version}
            </Text>
        </Box>
    )
};

export default WindowWidthIndicator;