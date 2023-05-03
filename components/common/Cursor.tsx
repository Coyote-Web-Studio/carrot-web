import { useTheme } from "styled-components";
import { Box } from "rebass";
import { useEffect, useRef } from "react";

const Cursor = (props: any) => {
    const theme: any = useTheme();
    const secondaryCursor: any = useRef(null);
    const mainCursor: any = useRef(null);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    useEffect(() => {
        document.addEventListener("mousemove", (event: any) => {
            const { pageX, pageY } = event;

            let isClickable = event.target.classList.contains("int-cursor");

            const mouseX = pageX;
            const mouseY = pageY;

            // console.log(clickableHover)

            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;

            mainCursor.current.style.transform = `translate3d(${
                mouseX - mainCursor.current.clientWidth / 2
            }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;

            mainCursor.current.getElementsByClassName(
                "plus-sign"
            )[0].style.opacity = isClickable ? 1 : 0;

            mainCursor.current.style.mixBlendMode = isClickable
                ? "exclusion"
                : "normal";

            mainCursor.current.style.width = isClickable ? "5rem" : "1.5rem";
            mainCursor.current.style.height = isClickable ? "5rem" : "1.5rem";
        });

        return () => {};
    }, []);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);

            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = mouseX - destinationX * 0.1;
                positionRef.current.distanceY = mouseY - destinationY * 0.1;

                if (
                    Math.abs(positionRef.current.distanceX) +
                        Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px), 0`;
        };

        followMouse();
    }, []);

    return (
        <>
            <Box
                ref={mainCursor}
                sx={{
                    display: ["none", "inline-block"],
                    position: "absolute",
                    background: theme.colors.textColor,
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "10rem",
                    zIndex: 1000,
                    pointerEvents: "none",
                    cursor: "none",
                    transition: `
                    width 0.15s ease-out, 
                    height 0.15s ease-in-out
                `,
                }}
            >
                <Box
                    className={"plus-sign"}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        transition: `0.15s ease-in-out opacity`,
                    }}
                >
                    <Box
                        sx={{
                            width: "60%",
                            height: "0.1rem",
                            background: theme.colors.background,
                            position: "absolute",
                            left: "20%",
                            top: "calc(50% - 0.05rem)",
                        }}
                    />
                    <Box
                        sx={{
                            width: "60%",
                            height: "0.1rem",
                            background: theme.colors.background,
                            position: "absolute",
                            transform: "rotate(90deg)",
                            top: "calc(50% - 0.05rem)",
                            left: "20%",
                        }}
                    />
                </Box>
            </Box>
            <Box
                ref={secondaryCursor}
                sx={{
                    position: "absolute",
                    background: theme.colors.textColor,
                    border: `0.1rem solid ${theme.colors.background}`,
                    // width: '1.5rem',
                    // height: '1.5rem',
                    borderRadius: "10rem",
                    zIndex: 1000,
                    pointerEvents: "none",
                    // transition: '0.1s ease-in-out all'
                }}
            />
        </>
    );
};

export default Cursor;
