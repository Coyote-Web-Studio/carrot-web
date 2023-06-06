import { cva } from "class-variance-authority";

interface SeeMoreButtonProps {
    open: boolean;
    onClick: () => void;
}

const minusLineStyles = cva(
    "w-px h-10 bg-black flex transform transition-transform absolute",
    {
        variants: {
            open: {
                true: "rotate-90",
                false: "rotate-0",
            },
        },
    }
);

const SeeMoreButton = ({ open, onClick }: SeeMoreButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="relative hover:bg-orange transition-colors border border-black rounded-full min-w-[5rem] h-[5rem] flex justify-center items-center"
        >
            <div className={minusLineStyles({ open })} />
            <div className="h-px w-10 bg-black" />
        </button>
    );
};

export default SeeMoreButton;
