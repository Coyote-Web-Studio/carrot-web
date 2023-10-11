import { CARROT_DOMAIN } from "../../constants";
import { Typography, Button, Modal } from "@carrot-kpi/ui";
import AnimatedText from "../AnimatedText";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import PlayVideo from "../../icons/play-video";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = useCallback(() => {
        setShowVideo(true);
        if (!videoRef || !videoRef.current) return;
        videoRef.current.play();
    }, []);

    const handleDismiss = useCallback(() => {
        setShowVideo(false);
        if (!videoRef || !videoRef.current) return;
        videoRef.current.pause();
    }, []);

    return (
        <div className="px-4 md:px-10 lg:px-14 xl:px-40 pb-6 w-full flex justify-center">
            <div className="w-full max-w-screen-2xl flex flex-col items-center lg:flex-row lg:justify-center gap-20 md:gap-36 pb-16 pt-7 md:pt-24 md:pb-32">
                <div className="flex flex-col gap-10 flex-1 w-full max-w-xl lg:max-w-none">
                    <Typography
                        variant="h1"
                        className={{
                            root: "text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]",
                        }}
                    >
                        <AnimatedText text="Unlock the power of incentivization" />
                    </Typography>
                    <div className="flex flex-col gap-14">
                        <Typography variant="lg" data-aos="fade-up">
                            <AnimatedText
                                text="Reimagine the potential of your community with Carrot. Turn goals into actions and celebrate every milestone with tailored rewards."
                                speed={10}
                            />
                        </Typography>
                        <a
                            href={`https://app.${CARROT_DOMAIN}`}
                            target="_blank"
                            rel="noopener noreferred"
                            className="dark"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <Button>CREATE YOUR CAMPAIGN</Button>
                        </a>
                    </div>
                </div>
                <div
                    className="flex-1 flex justify-center max-w-xl w-full md:max-w-lg lg:w-60 aspect-9/12 relative"
                    data-aos="fade-up"
                >
                    <Image
                        className="border border-black rounded-xl"
                        src="/video-poster.png"
                        fill
                        alt="poster"
                    />
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <Button
                            onClick={handleClick}
                            className={{
                                contentWrapper:
                                    "flex gap-3 items-center whitespace-nowrap",
                            }}
                            size="small"
                        >
                            <PlayVideo />
                            How it works
                        </Button>
                    </div>
                </div>
                <Modal open={showVideo} onDismiss={handleDismiss}>
                    <div className="w-full md:w-1/2 aspect-video rounded-xl bg-gray-500">
                        <video
                            ref={videoRef}
                            controls
                            className="aspect-video w-full border border-black rounded-xl bg-gray-500 overflow-hidden"
                        >
                            <source
                                src={`https://static.${CARROT_DOMAIN}/hero-video.webm`}
                                type="video/webm"
                            />
                            <source
                                src={`https://static.${CARROT_DOMAIN}/hero-video.mp4`}
                                type="video/mp4"
                            />
                            Not supported
                        </video>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Hero;
