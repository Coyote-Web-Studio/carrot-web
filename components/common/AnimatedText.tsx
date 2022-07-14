import { Text } from 'rebass';
import { keyframes } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

const AnimatedText = (props : any) => {
    let letterCounter = 0;
    const [isVisible, setIsVisible] = useState(false);

    const ioCallback = (e : any) => {
       setIsVisible(e[0].isIntersecting)
    };

    const animationRef = useRef(null);

    
    useEffect(() => {

        let options = {
            rootMargin: '0px',
            threshold: 1.0,
        };
    
        let observer = new IntersectionObserver(ioCallback, options);

        if (animationRef.current) {
            observer.observe(animationRef.current)
        }
    }, [animationRef.current])


    const initialTextState = {
        opacity: 0,
        // transform: 'scale(2)'
        // opacity: 0,
        // display: 'none'
    };
    
    const endTextState = {
        // transform: 'scale(1)',
        opacity: 1,
        // display: 'block'
    };

    const textAnimation = keyframes({
        ['0%']: {
            ...initialTextState
        },
        ['20%']: {
            ...initialTextState
        },
        ['60%']: {
            ...endTextState
        },
        ['100%']: {
            ...endTextState
        },
    })

    return (
        props.children.split(' ').map((word : any, i : any) => (
            <>
                <Text as={'span'} sx={{display: 'inline-block'}} key={i} ref={animationRef}>
                    {
                        word.split('').map((character : any, j : any) => (
                            <Text as={'span'} sx={{
                                ...initialTextState,
                                animation: isVisible ? `${textAnimation} 0.50s ease-out forwards` : 'none',
                                animationDelay: `${((++letterCounter) * props.speed) + props.initialDelay}ms`,
                                display: 'inline-block',
                                ...initialTextState
                            }} key={j}>
                                {character}
                            </Text>
                        ))
                    }
                </Text>
                <Text as={'span'}>{' '}</Text>
            </>
        ))
    )
};

AnimatedText.defaultProps = {
    speed: 40,
    initialDelay: 0
}

export default AnimatedText;