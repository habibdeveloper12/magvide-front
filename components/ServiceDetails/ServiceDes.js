import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from "@chakra-ui/react";

import React from "react";

const ServiceDes = () => {
  return (
    <div>
      <Tabs>
        <Flex flexWrap={{ lg: "nowrap", base: "wrap" }} position="relative">
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
            minW={{ lg: "500px", base: "100%" }}
            p="32px"
            h="230px"
            mb="30px"
            position="relative"
            zIndex="1"
          >
            <TabList
              display="flex"
              minW={{ lg: "100px", base: "100%" }}
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              border="none"
            >
              <Tab
                w="100%"
                textAlign="center"
                display="flex"
                justifyContent="flex-center"
                p="0px"
                pl={"5px"}
                borderRadius={"10px"}
                color="#2B2B2B"
                py="16px"
                fontFamily="Roboto"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="23px"
                textTransform="uppercase"
                h="58px"
                _selected={{
                  color: "#2B2B2B",

                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "23px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(139.27deg, #FEDA00 0%, #FF9900 93.57%)",
                }}
              >
                Terms & Conditions
                <Image ml={"71px"} src="arrow.png"></Image>
              </Tab>
              <Tab
                w="100%"
                textAlign="center"
                display="flex"
                justifyContent="flex-center"
                p="0px"
                pl={"5px"}
                borderRadius={"10px"}
                color="#2B2B2B"
                py="16px"
                fontFamily="Roboto"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="23px"
                textTransform="uppercase"
                h="58px"
                _selected={{
                  color: "#2B2B2B",

                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "23px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(139.27deg, #FEDA00 0%, #FF9900 93.57%)",
                }}
              >
                Terms & Conditions
                <Image ml={"71px"} src="arrow.png"></Image>
              </Tab>
              <Tab
                w="100%"
                textAlign="center"
                display="flex"
                justifyContent="flex-center"
                p="0px"
                pl={"5px"}
                borderRadius={"10px"}
                color="#2B2B2B"
                py="16px"
                fontFamily="Roboto"
                fontStyle="normal"
                fontWeight="700"
                fontSize="20px"
                lineHeight="23px"
                textTransform="uppercase"
                h="58px"
                _selected={{
                  color: "#2B2B2B",

                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "23px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(139.27deg, #FEDA00 0%, #FF9900 93.57%)",
                }}
              >
                Terms & Conditions
                <Image ml={"71px"} src="arrow.png"></Image>
              </Tab>
            </TabList>
          </Box>
          <Box
            w={{ lg: "83.333333%", base: "100%" }}
            pl={{ lg: "32px", base: "0px" }}
            position="relative"
            zIndex="1"
            mt={"40px"}
          >
            <TabPanels>
              <TabPanel p="0px">{/* <TermsAndConditions /> */}sdfdfdf</TabPanel>
              <TabPanel p="0px">{/* <PrivacyPolicy /> */}sdfdsf</TabPanel>
              <TabPanel p="0px">{/* <CookiePolicy /> */}sdfsdf</TabPanel>
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </div>
  );
};

export default ServiceDes;
