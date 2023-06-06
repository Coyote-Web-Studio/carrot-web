import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";

const styles = cva(["opacity-0"], {
    variants: {
        visible: {
            true: ["animate-fade-up"],
        },
    },
});

const Fade = (props: any) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (e) => {
                if (e[0].isIntersecting) setVisible(e[0].isIntersecting);
            },
            {
                rootMargin: "100px 0px",
                threshold: 1.0,
            }
        );
        console.log({ ref });
        if (ref.current) observer.observe(ref.current);
    }, [ref]);

    return (
        <div ref={ref} className={styles({ visible })}>
            {props.children}
        </div>
    );
};

export default Fade;
