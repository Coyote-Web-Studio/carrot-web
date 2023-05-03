import { Flex } from "rebass";

const Fade = (props: any) => {
    return (
        <Flex
            as={"div"}
            data-aos={"fade-up"}
            flexDirection={"column"}
            {...props}
        >
            {props.children}
        </Flex>
    );
};

export default Fade;
