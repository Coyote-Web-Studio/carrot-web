import { Text } from 'rebass';
import { keyframes } from '@emotion/react';

const AnimatedText = (props : any) => {
    let letterCounter = 0;

    let options = {
        rootMargin: '0px',
        threshold: 1.0,
    }

    const initialTextState = {
        // visibility: 'hidden',
        opacity: 0,
        // display: 'none'
    };
    
    const endTextState = {
        // visibility: 'show',
        opacity: 1,
        // display: 'block'
    };

    const textAnimation = keyframes({
        ['0%']: {
            ...initialTextState
        },
        ['49%']: {
            ...initialTextState
        },
        ['50%']: {
            ...endTextState
        },
        ['100%']: {
            ...endTextState
        },
    })

    return (
        props.children.split(' ').map((word : any, i : any) => (
            <>
                <Text as={'span'} sx={{display: 'inline-block'}} key={i}>
                    {
                        word.split('').map((character : any, j : any) => (
                            <Text as={'span'} sx={{
                                animation: `${textAnimation} 0.25s ease-out forwards`,
                                animationDelay: `${((++letterCounter) * 50) + 150}ms`,
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
}

export default AnimatedText;