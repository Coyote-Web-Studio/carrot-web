import { Text } from 'rebass';
import { keyframes } from '@emotion/react';

const AnimatedText = (props : any) => {
    let letterCounter = 0;

    const initialTextState = {
        transform: 'rotate3d(0,1,0, 90deg)',
        opacity: 0
    };
    
    const endTextState = {
        transform: 'rotate3d(0,1,0, 0deg)',
        opacity: 1
    };

    const textAnimation = keyframes({
        from: {
            ...initialTextState
        },
        to: {
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
                                animationDelay: `${(++letterCounter) * 30}ms`,
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