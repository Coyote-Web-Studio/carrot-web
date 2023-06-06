import { cva } from "class-variance-authority";
import { ReactNode, useEffect, useRef, useState } from "react";

const styles = cva(["opacity-0"], {
    variants: {
        visible: {
            true: ["animate-fade-up"],
        },
    },
});

interface FadeProps {
    className?: string;
    children: ReactNode;
}

const Fade = ({ className, children }: FadeProps) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (e) => {
                setVisible(e[0].isIntersecting);
            },
            {
                root: document,
                threshold: 1.0,
            }
        );
        if (ref.current) observer.observe(ref.current);
    }, [ref]);

    return (
        <div ref={ref} className={styles({ visible, className })}>
            {children}
        </div>
    );
};

export default Fade;
