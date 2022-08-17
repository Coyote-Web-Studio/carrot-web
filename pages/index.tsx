import type { NextPage } from 'next'
import { Flex, Text, Box, Image, Button } from 'rebass'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import { useTheme } from 'styled-components';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/homepage/Hero';
import Marquees from './../components/homepage/Marquees';
import MainContent from '../components/homepage/MainContent';
import JoinTheCommunity from '../components/homepage/JoinTheCommunity';

import WindowWidthIndicator from '../components/common/WindowWidthIndicator';

const Home: NextPage = (props : any) => {
  const theme : any = useTheme();

  return (
    <>
      <Head>
        <title>
          Carrot | Increase your TVL, volume, price, engagement and more. Yes, on any campaign. Carrot does it all.
        </title>
      </Head>
      <Flex className="root" sx={{
        position: 'relative',
      }}>
        <Flex flexDirection={'column'} className="body-background" sx={{
          bg: theme.colors.background,
          position: 'relative',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center',
          height: ['calc(100% + 1px)', 'calc(100% + 0.5px)', null, 'calc(100% + 2px)'],
          backgroundImage: theme.misc.patternImage,
          backgroundSize: ['2.4rem', null, null, '6.4rem'],
          zIndex: 3,
          mb: ['57rem', '68rem', null, '66rem'],
          // backgroundImage: theme.misc.patternImage,
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            mb: '105rem'
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            mb: '105rem'
          },
        }}></Flex>
        <Flex flexDirection={'column'} className="page-content" sx={{
          bg: theme.colors.background,
          position: 'relative',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center',
          height: ['calc(100% + 1px)', 'calc(100% + 0.5px)', null, 'calc(100% + 2px)'],
          backgroundImage: theme.misc.patternImage,
          backgroundSize: ['2.4rem', null, null, '6.4rem'],
          zIndex: 3,
          mb: ['57rem', '68rem', null, '66rem'],
          // backgroundImage: theme.misc.patternImage,
          [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
            mb: '105rem'
          },
          [`@media screen and (min-width: ${theme.breakpoints[4]})`]: {
            mb: '105rem'
          },
        }}>
          <Flex sx={{
            flexDirection: 'column',
            zIndex: 1,
          }}>
            <WindowWidthIndicator />
            <Navbar />
            <Hero />
            <Marquees />
            <MainContent />
            <Marquees />
            <JoinTheCommunity />
          </Flex>
        </Flex>
        <Flex sx={{direction: 'column', position: 'relative', zIndex: 1}}>
          <Footer />
        </Flex>
      </Flex>
    </>
  )
}

export default Home;