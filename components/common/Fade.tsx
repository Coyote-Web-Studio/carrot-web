const Fade = (props: any) => {
    return (
        <div className="flex flex-col" data-aos="fade-up" {...props}>
            {props.children}
        </div>
    );
};

export default Fade;
