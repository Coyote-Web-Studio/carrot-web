import { Flex, Box, Image, Text } from 'rebass';
import { useTheme } from 'styled-components';

import GridBackground from './../common/GridBackground';

import Breakdown from './Breakdown';
import HowItWorks from './HowItWorks';
import SuccesfulCampaigns from './SuccesfulCampaigns';
import CarrotInNumbers from './CarrotInNumbers';
import TrustingProtocols from './TrustingProtocols';
import Testimonials from './Testimonials';

const MainContent = (props : any) => {

  const theme : any = useTheme();

  return (
    <Flex 
      flexDirection={"column"} sx={{ position: "relative" }} mt={["2.4rem", null, null, "6.4rem"]}>
      <Box sx={{
        ...theme.boxSizes.expandedBox, 
        position: 'absolute',
        height: '100%',
        width: '100vw !important',
        left: '0 !important'
      }}>
        <GridBackground sx={{backgroundPosition: 'top center'}}/>
      </Box>
      <Breakdown />
      <HowItWorks />
      <SuccesfulCampaigns />
      <CarrotInNumbers />
      <TrustingProtocols />
      <Testimonials />
    </Flex>
  );
};

export default MainContent;
