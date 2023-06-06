import { useCallback, useState } from "react";
import SeeMoreButton from "../common/SeeMoreButton";
import { Typography } from "@carrot-kpi/ui";
import { HowItWorks } from "../../constants";
import { cva } from "class-variance-authority";

const headingStyles = cva(
    "bg-white flex w-[40%] h-48 flex items-center shadow-border text-[3rem] px-8 transition-all",
    {
        variants: {
            open: {
                true: ["md:h-80"],
            },
        },
    }
);

const contentStyles = cva(
    "h-48 bg-white flex flex-col items-center flex-1 shadow-border transition-all overflow-hidden",
    {
        variants: {
            open: {
                true: ["h-[50rem]"],
            },
        },
    }
);

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
        <div className="flex">
            <div className="bg-white w-48 h-48 flex justify-center items-center shadow-border">
                <Typography
                    variant="h2"
                    className={{
                        root: "text-[7.4rem]",
                    }}
                >
                    {index + 1}.
                </Typography>
            </div>
            <div className="flex flex-1">
                <Typography
                    variant="h2"
                    weight="medium"
                    className={{
                        root: headingStyles({ open }),
                    }}
                >
                    {heading}
                </Typography>
                <div className={contentStyles({ open })}>
                    <div className="flex w-full min-h-[12rem] px-12 justify-between items-center gap-20">
                        <Typography variant="xl">{triggerLabel}</Typography>
                        <SeeMoreButton open={open} onClick={handleExpand} />
                    </div>
                    <div className="px-14">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksBlock;
