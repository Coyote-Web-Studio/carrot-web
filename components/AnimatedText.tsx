import { cva } from "class-variance-authority";
import { Fragment, useEffect, useRef, useState } from "react";

const letterStyles = cva(["inline-block", "opacity-0"], {
    variants: {
        visible: {
            true: ["animate-fade-in"],
        },
    },
});

interface AnimatedTextProps {
    text: string;
    speed?: number;
    initialDelay?: number;
}

const AnimatedText = ({
    text,
    speed = 40,
    initialDelay = 0,
}: AnimatedTextProps) => {
    let letterCount = 0;
    const targetRef = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                if (!entries[0]?.isIntersecting) return;
                setVisible(entries[0].isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );
        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, []);

    return (
        <>
            {text.split(" ").map((word, i) => {
                return (
                    <>
                        <span className="inline-block" key={i}>
                            {word.split("").map((letter, i) => {
                                return (
                                    <span
                                        ref={targetRef}
                                        key={i}
                                        className={letterStyles({ visible })}
                                        style={{
                                            animationDelay: `${
                                                letterCount++ * speed +
                                                initialDelay
                                            }ms`,
                                        }}
                                    >
                                        {letter}
                                    </span>
                                );
                            })}
                        </span>
                        <span> </span>
                    </>
                );
            })}
        </>
    );
};

export default AnimatedText;
