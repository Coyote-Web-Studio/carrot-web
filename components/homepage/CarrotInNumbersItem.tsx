import { useEffect, useRef, useState } from 'react';
import { Flex, Box, Text} from 'rebass';
import { useTheme } from 'styled-components';
import AnimatedText from '../common/AnimatedText';
const { animate } = require("framer-motion");

function Counter({ from , to, type } : any) {
    const nodeRef = useRef();
  
    useEffect(() => {
      const node : any = nodeRef.current;
  
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value : any) {
          node.textContent = 
            type == 'currency' ? 
                value.toFixed(1) :
                value.toFixed(0)
        }
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <Text as={'h3'} sx={{whiteSpace: 'nowrap', display: 'inline-block'}} ref={nodeRef} />;
}

const CarrotInNumbersItem = (props : any) => {
    const { data } = props;
    const theme : any = useTheme();
    
    const [isVisible, setIsVisible] = useState(false);

    const ioCallback = (e : any) => {
        if (e[0].isIntersecting) {
            console.log('is visible')
            setIsVisible(e[0].isIntersecting)
        }
    };

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setFrom(to);
          setTo(Math.floor(Math.random() * 100));
        }, 2000);
    
        return () => {
          clearInterval(intervalId);
        };
    }, [to]);
    
    const animationRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: '0px 0px',
            threshold: 1.0,
        };
    
        let observer = new IntersectionObserver(ioCallback, options);

        if (animationRef.current) {
            observer.observe(animationRef.current)
        }
    }, [animationRef.current])

    return (
        <Flex 
            ref={animationRef}
            as={'li'} 
            flexDirection={'column'}
            sx={{
                width: ['100%', 'calc(50% - 2.4rem)', 'calc(50% - 6.4rem)'],
                mx: ['0', '2.4rem', '6.4rem'],
                position: 'relative',
                '&::after, &::before': {
                    content: "''",
                    height: '0.1rem',
                    transition: '0.25s ease-in-out width',
                    width: isVisible ? '100%' : '0',
                    position: 'absolute',
                },
                '&:after': {
                    background: theme.colors.gray10
                },
                '&:before': {
                    bottom: 0
                },
                '&:last-child, &:nth-of-type(3)': {
                    '&:before': {
                        background: theme.colors.gray10
                    },
                },
                '&:nth-of-type(3)': {
                    '&:before': {
                        background: ['transparent', theme.colors.gray10]
                    },
                }
            }}
        >
            <Flex flexDirection={'column'} sx={{
                py: '1.2rem',
                justifyContent: 'center',
                height: [
                    'calc(2.4rem * 4)', 
                    null, 
                    null, 
                    'calc(6.4rem * 2)'],
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: 'calc(6.4rem * 3 - 1px)'
                },
                [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    height: 'calc(6.4rem * 3)'
                },
            }}>
            <Text as={'h3'} fontSize={['4rem', '4rem', null, '7.2rem']} fontWeight={700} sx={{
                    'h3': {
                        color: theme.colors.gray10, 
                        mb: ['1rem', '0rem', null, '1.2rem'],
                        whiteSpace: 'nowrap',
                        [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
                            fontSize: '9.9rem !important'
                        }
                    }
                }}
            >
                {isVisible && (
                    <Text as={'span'} sx={{whiteSpace: 'nowrap', display: 'inline-block'}}>
                        <Text as={'h3'} sx={{whiteSpace: 'nowrap', display: 'inline-block'}}>
                            {data.type == 'currency' && '$'}
                        </Text>
                        <Counter from={0} to={
                            data.type == 'currency' ? 
                                data.value / 1000000 :
                                data.value
                            }
                            type={data.type}
                        />
                         <Text as={'h3'} sx={{whiteSpace: 'nowrap', display: 'inline-block'}}>
                            {data.type == 'currency' && 'M'}
                        </Text>
                    </Text>

                )}
            </Text>
            <Text sx={{color: theme.colors.gray10, whiteSpace: 'nowrap'}} as={'p'}>
                <AnimatedText color={theme.colors.gray10}>
                    {data.label}
                </AnimatedText>
            </Text>
            </Flex>
        </Flex>
    )
};

export default CarrotInNumbersItem;