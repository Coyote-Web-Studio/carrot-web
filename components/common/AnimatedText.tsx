import { useRef } from "react";

const AnimatedText = (props: any) => {
    const animationRef = useRef(null);

    return (
        <div className="max-w-xl" ref={animationRef}>
            {props.children.split("").map((character: string, i: number) => {
                return (
                    <span
                        key={i}
                        data-aos="fade-zoom-in"
                        data-aos-delay={i * props.speed + props.initialDelay}
                        data-aos-offset={0}
                    >
                        {character}
                    </span>
                );
            })}
        </div>
    );
};

AnimatedText.defaultProps = {
    speed: 40,
    initialDelay: 0,
    color: "inherit",
};

export default AnimatedText;
