import Image from 'next/image';
import Container from './Container';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Para from './Para';
import ButtonP from './ButtonP';

const ServiceSec = () => {
  return (
    <div className="bg-[#F0FBFF]  py-24">
      <Container>
        <div>
          <SubHeading
            className="text-center text-xl text-yellow font-pop font-bold"
            title="SERVICES"
          />
          <Heading
            className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
            title="What We Have Here"
          />
          <div className="flex justify-between pt-4">
            <div className="w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[191px] relative">
                <Image
                  fill
                  src="/assets/digita_marketing_image.png"
                  alt="digital_marketing_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 pb-8 mt-[-26px]">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Digital Marketing"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="All kinds of services are available here. "
                />
                <button className=" font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[191px] relative">
                <Image
                  fill
                  src="/assets/web_design_image.png"
                  alt="web_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 pb-8 mt-[-26px]">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Website Design"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="All kinds of services are available here. "
                />
                <button className=" font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[191px] relative">
                <Image
                  fill
                  src="/assets/web_app_image.png"
                  alt="app_development_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 pb-8 mt-[-26px]">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="App Development"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="All kinds of services are available here. "
                />
                <button className=" font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[191px] relative">
                <Image
                  fill
                  src="/assets/creative_design_image.png"
                  alt="creative_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 pb-8 mt-[-26px]">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Creative Services"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="All kinds of services are available here. "
                />
                <button className=" font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <ButtonP title="Explore More Services" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSec;
