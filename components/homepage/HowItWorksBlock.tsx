import { useCallback, useState } from "react";
import SeeMoreButton from "../common/SeeMoreButton";
import { Typography } from "@carrot-kpi/ui";
import { HowItWorks } from "../../constants";
import { cva } from "class-variance-authority";

const headingStyles = cva(
    "bg-white flex flex-1 h-24 lg:h-48 items-center shadow-border text-[1.75rem] lg:text-[3rem] px-8 transition-height duration-400",
    {
        variants: {
            open: {
                true: ["lg:h-80"],
            },
        },
    }
);

const contentStyles = cva("px-8 lg:px-14 transition-max-height duration-400", {
    variants: {
        open: {
            true: ["max-h-[100rem]"],
            false: ["max-h-0"],
        },
    },
});

interface HowItWorksBlockProps extends HowItWorks {
    index: number;
}

const HowItWorksBlock = ({
    index,
    heading,
    content,
    triggerLabel,
}: HowItWorksBlockProps) => {
    const [open, setOpen] = useState(false);

    const handleExpand = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <div className="flex flex-col lg:flex-row w-full" data-aos="fade-up">
            <div className="flex lg:w-[60%]">
                <Typography
                    variant="h2"
                    className={{
                        root: "bg-white shadow-border w-24 h-24 lg:w-48 lg:h-48 text-[3rem] lg:text-[7.4rem] flex justify-center items-center",
                    }}
                >
                    {index + 1}.
                </Typography>
                <Typography
                    variant="h2"
                    className={{
                        root: headingStyles({ open }),
                    }}
                >
                    {heading}
                </Typography>
            </div>
            <div className="bg-white flex flex-col items-center flex-1 shadow-border overflow-hidden">
                <div className="lg:h-48 w-full flex py-7 px-8 lg:px-12 justify-between items-center gap-20">
                    <Typography className={{ root: "text-base lg:text-xl" }}>
                        {triggerLabel}
                    </Typography>
                    <SeeMoreButton open={open} onClick={handleExpand} />
                </div>
                <div className={contentStyles({ open })}>
                    <div className="pb-10">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksBlock;
