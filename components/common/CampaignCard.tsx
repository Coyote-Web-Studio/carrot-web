import { Flex, Button as RBButton, Text, Box} from 'rebass';
import styled, {useTheme} from 'styled-components';

const CampaignCard = (props : any) => {
    const {
        campaign
    } = props;

    const theme : any = useTheme()
    return (
        <StyledCampaignCard {...props} flexDirection={['column']} bg={theme.colors.cardBackground} sx={{
            border: `0.1rem solid ${theme.colors.cardLine}`,
            borderRadius: '1.6rem',
            overflow: 'hidden',
            height: ['38.4rem', '38.4rem', '44.8rem'],
            mb: ['2.4rem', '4.8rem']
          }}>
            {/* HEADER */}
            <Flex className={'campaign-header'} 
              sx={{
                borderBottom: `0.1rem solid ${theme.colors.cardLine}`,
                height: '6.4rem'
              }}
            >
              <Flex sx={{justifyContent: 'center', alignItems: 'center', borderRight: `0.1rem solid ${theme.colors.gray10}`, width: '7rem'}}>
                <Box sx={{bg: theme.colors.blue6, width: '2.4rem', height: '2.4rem', borderRadius: '2.4rem'}}
                />
              </Flex>
              <Flex alignItems='center' pl='2rem'>
                <Text as={'p'} fontSize={['1.6rem', '1.6rem', '1.9rem']}>
                  {campaign.heading}
                </Text>
              </Flex>
            </Flex>
            {/* BODY */}
            <Flex className={'campaign-body'} p={'2.4rem'} flexDirection={'column'} flexGrow={1}>
              <Text as={'p'} mb={'2.4rem'} fontSize={['1.6rem', '1.6rem', '1.9rem']} lineHeight={['2.4rem', '2.4rem', '2.85rem']}>
                {campaign.content}
              </Text>
              <Flex flexDirection={'column'} mt={'auto'} fontSize={['1.6rem', '1.2rem', '1.9rem']}>
                <Flex justifyContent={'space-between'} >
                  <Text as={'p'}  
                    lineHeight={['2.4rem', '2.4rem', '2.85rem']}>
                        REWARDS
                    </Text>
                    <Text as={'p'}
                    lineHeight={['2.4rem', '2.4rem', '2.85rem']}>
                        {campaign.rewards}
                    </Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text as={'p'} 
                    lineHeight={['2.4rem', '2.4rem', '2.85rem']}>
                        TIME LEFT
                    </Text>
                  <Text as={'p'} 
                    lineHeight={['2.4rem', '2.4rem', '2.85rem']}>
                    {campaign.timeLeft}
                </Text>
                </Flex>
              </Flex>
            </Flex>
            {/* LINK */}
            <RBButton sx={{
              height: '6.4rem', 
              borderTop: `0.1rem solid ${theme.colors.cardLine}`, 
              bg: theme.colors.cardBackground, 
              borderRadius: 0, 
              fontSize: ['1.6rem', '1.2rem', '1.9rem'], 
              color: theme.colors.cardText,
              '&:hover': {
                background: theme.colors.cardButtonHover
              }
            }}
            >
              ↳ see campaign
            </RBButton>
          </StyledCampaignCard>
    )
};

const StyledCampaignCard = styled(Flex)``;

export default CampaignCard;