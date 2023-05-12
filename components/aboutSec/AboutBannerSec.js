import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';

const AboutBannerSec = () => {
  return (
    <div className="bg-primaryBg  relative py-8 sm:py-10 md:py-8 lg:py-10 px-3 sm:px-0">
      <div className="absolute left-0 top-6 md:top-8 lg:top-12 xl:top-0">
        <div className="hidden sm:block w-[70px] h-[248px] sm:w-[90px] sm:h-[305px] md:w-[85px] md:h-[300px] lg:w-[110px] lg:h-[490px] xl:w-[140px] xl:h-[550px] relative">
          <Image
            fill
            src="/assets/banner_left.png"
            alt="banner_left_angle_image"
          />
        </div>
      </div>
      <Container>
        <div className="flex">
          <div className=" w-4/4 sm:w-2/4 flex flex-col justify-center sm:pl-32 ">
            <SubHeading
              className="text-sm sm:text-base md:text-base lg:text-xl text-yellow font-pop font-bold"
              title="Services Offered by IT Service Companies"
            />
            <Heading
              className="text-primary py-2 sm:py-3 md:py-4 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
              title="Our Commitment to Quality"
            />
            <Para
              className=" text-sm sm:text-base sm:hidden md:hidden lg:block pb-4 sm:pb-0 lg:pb-4 lg:text-lg text-para font-inter"
              title="In our daily life, people usually look for different IT services 
              for that. But from now on, no more worries"
            />
            <div>
              <ButtonP title="Get Started" />
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute right-0 top-0">
        <div className="hidden sm:block w-[380px] h-[244px] lg:w-[540px] lg:h-[404px] xl:w-[634px] xl:h-[413px] relative">
          <Image
            fill
            src="/assets/about_banner_right_image.png"
            alt="about_banner_right_image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBannerSec;
