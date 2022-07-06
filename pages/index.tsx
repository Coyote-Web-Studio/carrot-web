import type { NextPage } from 'next'
import { Flex, Text, Box, Image, Button } from 'rebass'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { useTheme } from 'styled-components';

import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Marquees from './../components/Marquees';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Home: NextPage = () => {

  const theme : any = useTheme();

  return (
    <>
      <Head>
        <title>
          Carrot | Increase your TVL, volume, price, engagement and more. Yes, on any campaign. Carrot does it all.
        </title>
      </Head>
      <Flex flexDirection={'column'} bg={theme.colors.background}>
        <Navbar />
        <Hero />
        <Marquees />
        <MainContent />
        <Marquees />
        <Footer />
      </Flex>
    </>
  )
}

export default Home;
