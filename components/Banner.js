import Image from 'next/image';
import Container from './Container';
import Heading from './Heading';
import Para from './Para';
import SubHeading from './SubHeading';
import ButtonP from './ButtonP';
import ButtonS from './ButtonS';

const Banner = () => {
  return (
    <div className="bg-primaryBg w-4/4 h-[100vh]">
      <Container>
        <div className="flex">
          <div className="w-2/4 h-[90vh] flex flex-col justify-center ">
            <SubHeading
              className=" uppercase  text-xl text-yellow font-pop font-bold"
              title="Services Offered by IT Service Companies"
            />
            <Heading
              className=" text-primary py-5 leading-[64px] text-5xl font-bold font-pop"
              title="IT Service Company 
              Quality Assurance & 
              Compliance"
            />
            <Para
              className=" text-lg text-para font-inter pb-8"
              title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries"
            />
            <div className="flex gap-4">
              <ButtonP title="Get Started" />
              <ButtonS title="See More" />
            </div>
          </div>
          <div className="w-2/4 h-[80vh] flex justify-center">
            <div className="relative w-[461px] h-[461px] mx-auto my-auto">
              <Image fill src="/assets/banner-img.png" alt="banner-image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
