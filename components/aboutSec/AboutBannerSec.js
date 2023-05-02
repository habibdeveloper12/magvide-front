import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';



const AboutBannerSec = () => {
  return (
    <div className="bg-primaryBg  relative py-10">
      <div className="absolute left-0 top-0">
        <div className="w-[155px] h-[550px] relative">
          <Image
            fill
            src="/assets/banner_left.png"
            alt="banner_left_angle_image"
          />
        </div>
      </div>
      <Container>
        <div className="flex">
          <div className="w-2/4 flex flex-col justify-center pl-32 ">
            <SubHeading
              className=" uppercase  text-xl text-yellow font-pop font-bold"
              title="Services Offered by IT Service Companies"
            />
            <Heading
              className=" text-primary py-5 leading-[64px] text-5xl font-bold font-pop"
              title="Our Commitment to Quality"
            />
            <Para
              className=" text-lg text-para font-inter pb-8"
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
        <div className="w-[634px] h-[413px] relative">
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
