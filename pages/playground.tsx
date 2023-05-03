import type { NextPage } from "next";
import { Flex } from "rebass";
import Head from "next/head";
import { useTheme } from "styled-components";
import Button3D from "../components/common/Button3D";

const Playground: NextPage = () => {
    const theme: any = useTheme();

    return (
        <>
            <Head>
                <title>
                    Carrot | Increase your TVL, volume, price, engagement and
                    more. Yes, on any campaign. Carrot does it all.
                </title>
            </Head>
            <Flex
                flexDirection={"column"}
                bg={theme.colors.background}
                height={"100vh"}
                p={"10rem"}
            ></Flex>
            <Button3D label={"Hello"} />
        </>
    );
};

export default Playground;
