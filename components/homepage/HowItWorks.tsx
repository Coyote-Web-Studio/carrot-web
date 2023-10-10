import HowItWorksBlock from "./HowItWorksBlock";
import { HOW_IT_WORKS_CONTENT } from "../../constants";
import { Typography } from "@carrot-kpi/ui";

const HowItWorks = () => {
    return (
        <div
            id="how-it-works"
            className="px-4 md:px-10 lg:px-14 xl:px-40 py-36 flex flex-col items-center"
        >
            <div className="max-w-screen-2xl flex flex-col gap-20">
                <Typography
                    variant="h2"
                    className={{
                        root: "text-[5rem] md:text-[6rem] lg:text-[7.4rem]",
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
