import { Flex, Box, Text } from 'rebass';
import { useTheme } from 'styled-components';

import Fade from '../common/Fade';
import GridBackground from '../common/GridBackground';

const CustomerReview = () => {
  const theme : any = useTheme();
  return (
    <Flex
      sx={{
        zIndex: 1,
        position: "relative",
        bg: theme.colors.customerCommentBackground,
        borderRadius: ['1.6rem', null, '5rem'],
        pb: ["6.4rem", "6.4rem", "14.4rem"],
        pt: ["8.7rem"],
        mb: ["4.8rem"],
        boxShadow: `0 0 5rem 2rem ${theme.colors.black}`
      }}
    >
      <Box
        sx={{
          ...theme.boxSizes.expandedBox,
          position: "absolute",
          height: "100%",
          top: "6.4rem",
        }}
      >
        <GridBackground trimRows={3} color={theme.colors.customerCommentGrid} />
      </Box>
      <Fade
        sx={{
          ...theme.boxSizes.defaultBox,
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Text
          fontSize={["2.8rem", "3.3em", "6.9rem"]}
          mb={["3.8rem", "3.8rem", "12rem"]}
          fontWeight={700}
          lineHeight={["3.8rem", "3.36rem", "6.969rem"]}
          color={theme.colors.customerCommentText}
        >
          “Carrot was the best project on xDAI that allowed us to deploy KPI
          options in the Agave incentives program. This allows us to optimize
          our rewards towards specific goals rather than just throw them away.”
        </Text>
        <Text
          fontSize={["1.4rem", "1.4rem", "2.8rem"]}
          color={theme.colors.customerCommentText}
        >
          — Luigi Lemon, Agave Core Contributor
        </Text>
      </Fade>
    </Flex>
  );
};

export default CustomerReview;
