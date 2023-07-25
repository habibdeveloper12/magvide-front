import Image from 'next/image';
import React from 'react';
import Container from '../../../../components/layout/Container';
import Heading from '../../../../components/layout/Heading';

const SoftwareDevBanner = () => {
  return (
    <div className="bg-primaryBg py-20 sm:py-24 md:py-32 lg:py-40 relative">
      <div className="absolute left-0 top-[20px] sm:top-[20px] md:top-[30px] lg:top-[40px] xl:top-20">
        <div className="w-[70px] h-[248px] sm:w-[90px] sm:h-[319px] md:w-[120px] md:h-[426px] lg:w-[155px] lg:h-[550px] relative">
          <Image
            fill
            src="/assets/banner_left.png"
            alt="banner_left_angle_image"
          />
        </div>
      </div>
      <Container>
        <div className="text-center gap-3 md:gap-4">
          <Heading
            className="text-primary text-xl sm:text-4xl inline  lg:text-6xl xl:text-7xl font-bold"
            title="SOFTWARE &"
          />
          <Heading
            className="yellow-gr text-xl inline sm:text-4xl lg:text-6xl xl:text-7xl font-bold"
            title=" APP"
          />
          <Heading
            className="yellow-gr text-xl block mt-1 sm:mt-4 lg:mt-6 sm:text-4xl lg:text-6xl xl:text-7xl font-bold"
            title=" DEVELOPMENT"
          />
        </div>
      </Container>
      <div className="absolute right-0 top-[50px] sm:top-[81px] md:top-[70px] lg:top-[61px] xl:top-[84px]">
        <div className="w-[90px] h-[210px] sm:w-[110px] sm:h-[257px] md:w-[150px] md:h-[350px] lg:w-[215px] lg:h-[502px] relative">
          <Image
            fill
            src="/assets/banner_right.png"
            alt="banner_right_angle_image"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevBanner;
