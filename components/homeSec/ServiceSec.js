import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import SubHeading from '../layout/SubHeading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';

const ServiceSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-10 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div>
          <SubHeading
            className="text-center text-sm md:text-base lg:text-lg xl:text-xl text-yellow font-pop font-bold"
            title="SERVICES"
          />
          <Heading
            className="text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="What We Have Here"
          />
          <div className="flex flex-wrap justify-between pt-4 gap-y-4 sm:gap-y-6 md:gap-y-5   px-3 sm:px-5">
            <div className="w-[48%] md:w-[31.5%] lg:w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[100px] sm:h-[191px] md:h-[150px] lg:h-[160px] xl:h-[191px] relative">
                <Image
                  fill
                  src="/assets/digita_marketing_image.png"
                  alt="digital_marketing_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4 md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-xl xl:text-2xl
                  pb-2"
                  title="Digital Marketing"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="All kinds of services are available here. "
                />
                <button className=" text-sm md:text-base font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[48%] md:w-[31.5%] lg:w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[100px] sm:h-[191px] md:h-[150px] lg:h-[160px] xl:h-[191px] relative">
                <Image
                  fill
                  src="/assets/web_design_image.png"
                  alt="web_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4 md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-xl xl:text-2xl
                     pb-2"
                  title="Website Design"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="All kinds of services are available here. "
                />
                <button className=" text-sm md:text-base font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[48%] md:w-[31.5%] lg:w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[100px] sm:h-[191px] md:h-[150px] lg:h-[160px] xl:h-[191px] relative">
                <Image
                  fill
                  src="/assets/web_app_image.png"
                  alt="app_development_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4 md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-xl xl:text-2xl
                       pb-2"
                  title="App Development"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="All kinds of services are available here. "
                />
                <button className=" text-sm md:text-base font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
            <div className="w-[48%] md:w-[31.5%] lg:w-[22.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[100px] sm:h-[191px] md:h-[150px] lg:h-[160px] xl:h-[191px] relative">
                <Image
                  fill
                  src="/assets/creative_design_image.png"
                  alt="creative_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4 md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-xl xl:text-2xl
                      pb-2"
                  title="Creative Services"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="All kinds of services are available here. "
                />
                <button className=" text-sm md:text-base font-extrabold text-primary">
                  Learn More...
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <ButtonP title="Explore More Services" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSec;
