import React from "react";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Image from "next/image";
import ServiceDes from "./ServiceDes";
import ChooseUs from "./ChooseUs";
import { Box } from "@chakra-ui/react";
import BoxSection from "./BoxSection";

const ServiceDetails = () => {
  return (
    <div>
      <div className="bg-primaryBg py-20 sm:py-24 md:py-32 lg:py-40 relative">
        <div className="absolute left-0 top-[17px] sm:top-[3px] md:top-0">
          <div className="w-[70px] h-[248px] sm:w-[90px] sm:h-[319px] md:w-[120px] md:h-[426px] lg:w-[155px] lg:h-[550px] relative">
            <Image
              fill
              src="/assets/banner_left.png"
              alt="banner_left_angle_image"
            />
          </div>
        </div>
        <Container>
          <div className="flex justify-center gap-3 md:gap-4">
            <Heading
              className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
              title="SERVICE "
            />
            <Heading
              className="text-yellow text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
              title="DETAILS"
            />
          </div>
        </Container>
        <div className="absolute right-0 top-[26px] sm:top-[24px] md:top-[23px] lg:top-[-12px]">
          <div className="w-[90px] h-[210px] sm:w-[110px] sm:h-[257px] md:w-[150px] md:h-[350px] lg:w-[215px] lg:h-[502px] relative">
            <Image
              fill
              src="/assets/banner_right.png"
              alt="banner_right_angle_image"
            />
          </div>
        </div>
      </div>
      <div>
        <Box pb={"550px"}>
          <ServiceDes />
        </Box>
        <div className="pt-49">
          <BoxSection />
        </div>

        <Box mt={"300px"}>
          <ChooseUs />
        </Box>
      </div>
    </div>
  );
};

export default ServiceDetails;
