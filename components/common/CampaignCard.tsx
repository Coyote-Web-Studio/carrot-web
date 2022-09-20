import { Flex, Button as RBButton, Text, Box} from 'rebass';
import styled, {useTheme} from 'styled-components';
import { transparentize } from 'polished';

const CampaignCard = (props : any) => {
    const { campaign } = props;

    const theme : any = useTheme()
    return (
      <Box 
        sx={{
          position: 'relative'
        }} 
        {...props}
      >
        <StyledCampaignCard flexDirection={['column']} 
          bg={transparentize('0.1', theme.colors.cardBackground)} sx={{
            backdropFilter: 'blur(10px)',
            border: `0.1rem solid ${theme.colors.cardLine}`,
            borderRadius: '1.6rem',
            overflow: 'hidden',
            height: ['38.4rem', '38.4rem', null, '38.4rem'],
            transition: '0.15s ease-in-out transform',
            ['&:hover']: {
              transform: 'scale(0.9)'
            },
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              height: '44.8rem'
            },
          }}>
            {/* HEADER */}
            <Flex className={'campaign-header'} 
              sx={{
                borderBottom: `0.1rem solid ${theme.colors.cardLine}`,
                height: '6.4rem'
              }}
            >
              <Flex sx={{justifyContent: 'center', alignItems: 'center', borderRight: `0.1rem solid ${theme.colors.textColor}`, width: '7rem'}}>
                <Box sx={{bg: theme.colors.blue6, width: '2.4rem', height: '2.4rem', borderRadius: '2.4rem'}}
                />
              </Flex>
              <Flex alignItems='center' pl='2rem'>
                <Text as={'p'} fontSize={['1.6rem', null, null, '1.6rem']} fontWeight={400}>
                  {campaign.heading}
                </Text>
              </Flex>
            </Flex>
            {/* BODY */}
            <Flex className={'campaign-body'} p={'2.4rem'} flexDirection={'column'} flexGrow={1}>
              <Text 
                as={'p'} 
                mb={'2.4rem'} 
                fontSize={['1.6rem', '1.6rem']} 
                lineHeight={['2.4rem', '2.4rem']}
                sx={{
                  [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    fontSize: '1.9rem !important',
                    lineHeight: '2.85rem !important'
                  },
                }}
              >
                {campaign.content}
              </Text>
              <Flex flexDirection={'column'} mt={'auto'} sx={{
                'p': {
                  fontSize: '1.2rem',
                  lineHeight: '2.4rem',
                  [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
                    fontSize: '1.6rem',
                    lineHeight: '2.85rem',
                  },
                }
              }}>
              <Flex justifyContent={'space-between'}>
                <Text as={'p'}>
                  REWARDS
                </Text>
                <Text as={'p'}>
                  {campaign.rewards}
                </Text>
              </Flex>
              <Flex justifyContent={'space-between'}>
                <Text as={'p'}>
                    TIME LEFT
                </Text>
                <Text as={'p'}>
                  {campaign.timeLeft}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* LINK */}
          <RBButton className={'int-cursor'} sx={{
            height: '6.4rem', 
            borderTop: `0.1rem solid ${theme.colors.cardLine}`, 
            bg: 'transparent', 
            borderRadius: 0, 
            cursor: 'pointer',
            fontSize: ['1.4rem'], 
            color: theme.colors.cardText,
            textTransform: 'uppercase',
            '&:hover': {
              background: theme.colors.cardButtonHover
            },
            [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
              fontSize: '1.6rem'
            },
          }}
          >
            ↳ see campaign
          </RBButton>
        </StyledCampaignCard>
      </Box>
    )
};

const StyledCampaignCard = styled(Flex)``;

export default CampaignCard;