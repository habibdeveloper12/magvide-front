import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from '@chakra-ui/react';

import React from 'react';
import BoxText from './BoxText';
import BoxText2 from './BoxText2';
import BoxText3 from './BoxText3';
import BoxText4 from './BoxText4';
import BoxText5 from './BoxText5';
import BoxText6 from './BoxText6';
import BoxText7 from './BoxText7';
import BoxText8 from './BoxText8';
import BoxText9 from './BoxText9';
import BoxText10 from './BoxText10';
import BoxText11 from './BoxText11';
import BoxText12 from './BoxText12';
import BoxText13 from './BoxText13';
import BoxText14 from './BoxText14';
import BoxText15 from './BoxText15';
import BoxText16 from './BoxText16';
import BoxText17 from './BoxText17';
import BoxText18 from './BoxText18';
import BoxText19 from './BoxText19';
import BoxText20 from './BoxText20';
import BoxText21 from './BoxText21';

const ServiceDes = () => {
  const tabList = [
    'SEARCH ENGINE OPTIMAIZATION (SEO)',
    'LOCAL SEO',
    'TECHNICAL SEO',
    'E-COMMERCE SEO',
    'SOCIAL MEDIA MARKETING',
    'SOCIAL MEDIA MANAGEMENT',
    'LINK BUILDING SERVICE(OFF PAGE SEO)',
    'SEARCH ENGINE MARKETING(SEM)',
    'GOOGLE ANALYTICS SERVICES',
    'CONTENT WRITING',
  ];

  return (
    <div className="my-9">
      <Tabs>
        <Flex flexWrap={{ lg: 'nowrap', base: 'wrap' }} position="relative">
          {/* <Image
            src="https://cdn.enochdev.com/pluto-fund/chain-shape.png"
            alt="shape"
            position="absolute"
            top="10%"
            left="0"
            right="0"
            margin="auto"
            zIndex="0"
            maxW="100%"
          /> */}
          <Box
            bg="#FFFFF"
            minW={{ lg: '500px', base: '100%' }}
            p="32px"
            h="230px"
            mb="30px"
            position="relative"
            zIndex="1"
          >
            <TabList
              display="flex"
              minW={{ lg: '100px', base: '100%' }}
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              border="none"
              shadow={'0px 4px 20px 0px #0000001F'}
              py={'60px'}
              px={'18px'}
            >
              {tabList.map((tab, index) => (
                <Tab
                  key={index} 
                  w="100%"
                  textAlign="center"
                  display="flex"
                  justifyContent="flex-center"
                  pl={'15px'}
                  borderTop={'1px dashed #FFD600'}
                  color="#2B2B2B"
                  fontFamily="Roboto"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="23px"
                  textTransform="uppercase"
                  h="54px"
                  _selected={{
                    color: '#2B2B2B',
                    borderRadius:'10px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    background:
                      'linear-gradient(139.27deg, #FEDA00 0%, #FF9900 93.57%)',
                  }}
                >
                  {tab}
                  <Image ml={'auto'} src="arrow.png"></Image>
                </Tab>
              ))}
            </TabList>
          </Box>
          <Box
            w={{ lg: '83.333333%', base: '100%' }}
            pl={{ lg: '32px', base: '0px' }}
            position="relative"
            zIndex="1"
            mt={'40px'}
          >
            <TabPanels>
              <TabPanel p="0px">
                <BoxText />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText2 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText3 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText4 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText5 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText6 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText7 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText8 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText9 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText10 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText11 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText12 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText13 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText14 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText15 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText16 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText17 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText18 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText19 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText20 />
              </TabPanel>
              <TabPanel p="0px">
                <BoxText21 />
              </TabPanel>
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </div>
  );
};

export default ServiceDes;
