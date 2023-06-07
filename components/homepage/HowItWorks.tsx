import HowItWorksBlock from "./HowItWorksBlock";
import { HOW_IT_WORKS_CONTENT } from "../../constants";
import { Typography } from "@carrot-kpi/ui";

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="px-40 py-36 flex flex-col gap-20">
            <div>
                <Typography variant="h2" className={{ root: "text-[7.4rem]" }}>
                    How it works
                </Typography>
            </div>
            <div className="flex flex-col">
                {HOW_IT_WORKS_CONTENT.map((contentBlock, index) => (
                    <div key={index}>
                        <HowItWorksBlock index={index} {...contentBlock} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
