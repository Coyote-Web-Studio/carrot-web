import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/common/Navbar";
import Hero from "../components/homepage/Hero";
import Marquees from "./../components/homepage/Marquees";
import JoinTheCommunity from "../components/homepage/JoinTheCommunity";
import Breakdown from "../components/homepage/Breakdown";
import HowItWorks from "../components/homepage/HowItWorks";
import { Footer } from "../components/common/footer";
import { FOOTER_LINKS } from "../constants";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Carrot | Increase your TVL, volume, price, engagement and
                    more. Yes, on any campaign. Carrot does it all.
                </title>
            </Head>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col bg-grid-light bg-white dark:bg-grid-dark dark:bg-black z-10">
                    <Navbar />
                    <Hero />
                    <Marquees />
                    <Breakdown />
                    <HowItWorks />
                    {/* <SuccesfulCampaigns /> */}
                    {/* <CarrotInNumbers /> */}
                    {/* <TrustingProtocols /> */}
                    {/* <Testimonials /> */}
                    <Marquees />
                    <JoinTheCommunity />
                </div>
                <div className="z-0">
                    <Footer footerLinks={FOOTER_LINKS} />
                </div>
            </div>
        </>
    );
};

export default Home;
