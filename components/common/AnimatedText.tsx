import { Fragment, useEffect, useRef, useState } from "react";
import { cva } from "class-variance-authority";

const letterStyles = cva(["opacity-0"], {
    variants: {
        visible: {
            true: ["animate-text-fade-in"],
        },
    },
});

const AnimatedText = (props: any) => {
    let letterCounter = 0;
    const animationRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (e: any) => {
                if (e[0].isIntersecting) {
                    setIsVisible(e[0].isIntersecting);
                }
            },
            {
                rootMargin: "100px 0px",
                threshold: 1.0,
            }
        );

        if (animationRef.current) observer.observe(animationRef.current);
    }, []);

    return props.children.split(" ").map((word: any, i: any) => {
        return (
            <Fragment key={i}>
                <span
                    className="word inline-block whitespace-nowrap"
                    ref={animationRef}
                >
                    {word.split("").map((character: any, j: any) => (
                        <span
                            className={letterStyles({ visible: isVisible })}
                            style={{
                                color: props.color,
                                animationDelay: `${
                                    ++letterCounter * props.speed +
                                    props.initialDelay
                                }ms`,
                            }}
                            key={j}
                        >
                            {character}
                        </span>
                    ))}
                </span>
                <span> </span>
            </Fragment>
        );
    });
};

AnimatedText.defaultProps = {
    speed: 40,
    initialDelay: 0,
    color: "inherit",
};

export default AnimatedText;
