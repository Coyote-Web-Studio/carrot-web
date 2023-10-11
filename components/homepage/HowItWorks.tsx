import HowItWorksBlock from "./HowItWorksBlock";
import { HOW_IT_WORKS_CONTENT } from "../../constants";
import { Typography } from "@carrot-kpi/ui";

const HowItWorks = () => {
    return (
        <div
            id="how-it-works"
            className="px-4 md:px-10 lg:px-14 xl:px-40 pt-36 flex flex-col items-center"
        >
            <div className="max-w-screen-2xl flex flex-col gap-12">
                <Typography
                    variant="h4"
                    className={{
                        root: "text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]",
                    }}
                    data-aos="fade-up"
                >
                    How it works
                </Typography>
                <div className="flex flex-col">
                    {HOW_IT_WORKS_CONTENT.map((contentBlock, index) => (
                        <div key={index}>
                            <HowItWorksBlock index={index} {...contentBlock} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
