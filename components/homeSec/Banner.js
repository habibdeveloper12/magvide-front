import Image from 'next/image';
import ButtonP from '../layout/ButtonP';
import ButtonS from '../layout/ButtonS';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import SubHeading from '../layout/SubHeading';

const Banner = () => {
  return (
    <div className="bg-primaryBg">
      <Container>
        <div className="sm:flex justify-between pt-1 pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5">
          <div className="w-[95%] sm:w-2/4 mt-10 mb-6 sm:mb-28 md:mt-16 md:mb-36 lg:mt-20 lg:mb-40">
            <SubHeading
              className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow font-pop font-bold"
              title="Services Offered by IT Service Companies"
            />
            <Heading
              className="text-primary py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-pop"
              title="IT Service Company 
              Quality Assurance & 
              Compliance"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-4 md:pb-6 lg:pb-10"
              title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries"
            />
            <div className="flex gap-4">
              <ButtonP title="Get Started" />
              <ButtonS title="See More" />
            </div>
          </div>
          <div className="w-[90%] sm:w-2/4 md:mt-16 lg:mt-20">
            <div className="relative  w-[100%] h-[320px] lg:w-[461px] lg:h-[461px] mx-auto my-auto">
              <Image fill src="/assets/banner-img.png" alt="banner-image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
