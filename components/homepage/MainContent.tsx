import { Flex, Box, Image, Text } from 'rebass';
import '@splidejs/react-splide/css'
import { useTheme } from 'styled-components';

import GridBackground from './../common/GridBackground';
import Fade from './../common/Fade';

import Breakdown from './Breakdown';
import HowItWorks from './HowItWorks';
import SuccesfulCampaigns from './SuccesfulCampaigns';
import CarrotInNumbers from './CarrotInNumbers';
import TrustingProtocols from './TrustingProtocols';
import CustomerReview from './CustomerReview';

const MainContent = (props : any) => {

  const theme : any = useTheme();

  return (
    <Flex flexDirection={"column"} sx={{ position: "relative" }} mt={["2.4rem", "2.4rem", "6.4rem"]}>
      <Box sx={{
        ...theme.boxSizes.expandedBox, 
        position: 'absolute',
        height: '100%'
      }}>
        <GridBackground />
      </Box>
      {/* BREAKDOWN */}
      <Breakdown />
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* SUCCESFUL CAMPAIGNS */}
      <SuccesfulCampaigns />
      {/* CARROT IN NUMBERS */}
      <CarrotInNumbers />
      {/* TRUSTING PROTOCOLS */}
      <TrustingProtocols />
      {/* CUSTOMER REVIEW */}
      <CustomerReview />
    </Flex>
  );
};

export default MainContent;
