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
import Para from '@/components/layout/Para';
import Heading from '@/components/layout/Heading';
import Container from '@/components/layout/Container';

const ServiceDes = () => {
  const tabList = [
    'CUSTOM APP DEVELOPMENT',
    'CUSTOM SOFTWARE DEVELOPMENT',
  ];

  return (
    <Container>
      <div className="my-9 px-3 md:px-5 xl:px-0">
        <Tabs>
          <Flex
            flexDir={{ base: 'row' }}
            flexWrap={{ base: 'wrap', lg: 'nowrap', md: 'wrap' }}
            position="relative"
          >
            <Box
              bg="#fff"
              w={{ base: '100%', sm: '100%', md: '50%', lg: '35%' }}
              pr="32px"
              mb="30px"
              zIndex="1"
            >
              <TabList
                w={{ base: '410px', sm: '730px', md: '100%' }}
                display="flex"
                justifyContent="flex-start"
                flexWrap={{ base: 'wrap' }}
                flexDirection={{ base: 'row', md: 'column' }}
                border="none"
                shadow={'0px 4px 20px 0px #0000001F'}
                py={'20px'}
                px={'18px'}
              >
                {tabList.map((tab, index) => (
                  <Tab
                    key={index}
                    display="flex"
                    m={{ base: '5px', md: '0' }}
                    p={{ base: '5px', md: '0' }}
                    px={{ md: '10px' }}
                    justifyContent="space-between"
                    borderRadius="10px"
                    flexWrap={{ base: 'nowrap' }}
                    boxShadow={{
                      base: '2px 2px 5px 2px rgba(0,0,0,0.1)',
                      md: 'none',
                    }}
                    borderTop={{ md: '1px dashed #FFD600' }}
                    color="#2B2B2B"
                    fontFamily="Roboto"
                    fontStyle="normal"
                    fontWeight="500"
                    fontSize={{ base: '11px', sm: '12px', xl: '14px' }}
                    textTransform="uppercase"
                    w={{ base: '105px', sm: '120px', md: '100%' }}
                    h={{ base: '70px', sm: '80px', md: '40px', lg: '50px' }}
                    _selected={{
                      color: '#2B2B2B',
                      borderRadius: '10px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: { sm: '12px', md: '12px', xl: '14px' },
                      textTransform: 'uppercase',
                      background:
                        'linear-gradient(139.27deg, #FEDA00 0%, #FF9900 93.57%)',
                    }}
                  >
                    {tab}
                    <div></div>
                    <Box>
                      <Image
                        width={{ base: '0px', sm: '0px', md: '16px' }}
                        ml={'auto'}
                        src="/arrow.png"
                      ></Image>
                    </Box>
                  </Tab>
                ))}
              </TabList>
              <div className="hidden md:block w-[100%] mt-[150px]">
                <div className="bg-white mx-auto mb-10 md:mb-0 w-[70%] lg:w-[80%] max-h-[320px] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
                  <Heading
                    className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]  text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                    title="Need Help?"
                  />

                  <Para
                    className=" text-sm mb-6 sm:text-base lg:text-lg text-para font-inter"
                    title="We appreciate every client
            and ready to help with all
            the issues that they have. "
                  />
                  <div className="flex flex-nowrap items-center gap-2">
                    <div className="relative  w-[15px] h-[15px]">
                      <Image fill src="/phone.png" alt="phone-image" />
                    </div>
                    <Para
                      className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                      title="+880 17910 22880"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="relative  w-[16px] h-[12px]">
                      <Image fill src="/message.png" alt="message-image" />
                    </div>
                    <Para
                      className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                      title="yourmail@gmail.com"
                    /> 
                  </div>
                </div>
              </div>
            </Box>

            <Box w={{ sm: '100%', md: '50%', lg: '65%' }} zIndex="9">
              <TabPanels>
                <TabPanel p="0px">
                  <BoxText />
                </TabPanel>
                <TabPanel p="0px">
                  <BoxText2 />
                </TabPanel>
            
              </TabPanels>
            </Box>
          </Flex>
        </Tabs>
      </div>
    </Container>
  );
};

export default ServiceDes;
