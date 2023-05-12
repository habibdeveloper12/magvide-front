import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';

const WorkSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-10 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div>
          <div className="w-[75%] md:w-[65%] mx-auto">
            <SubHeading
              className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-yellow font-pop font-bold"
              title="OUR WORKS"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
              title="Our Latest Incredible Client’s 
              Projects"
            />
            <div className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto">
              <Para
                className="text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-8"
                title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div></div>
          <div className="flex flex-wrap justify-between pt-4 gap-y-4 sm:gap-y-6 md:gap-y-5   px-3 sm:px-5">
            <div className="w-[48%] md:w-[31.5%] lg:w-[25.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[110px] sm:h-[191px] md:h-[140px] lg:h-[191px] relative">
                <Image
                  fill
                  src="/assets/creative_design_image.png"
                  alt="creative_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4  md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-2xl"
                  title="Design Service"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="Get Response provides the best
                  automation and landing pages, "
                />
                <div className="text-right mt-2">
                  <button className=" text-sm md:text-base font-extrabold text-primary">
                    View More...
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[48%] md:w-[31.5%] lg:w-[25.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[110px] sm:h-[191px] md:h-[140px] lg:h-[191px] relative">
                <Image
                  fill
                  src="/assets/web_design_image.png"
                  alt="web_design_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 sm:pb-4  md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-2xl"
                  title="Creative Service"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="Get Response provides the best
                  automation and landing pages, "
                />
                <div className="text-right mt-2">
                  <button className=" text-sm md:text-base font-extrabold text-primary">
                    View More...
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[48%] mx-auto md:mx-0 md:w-[31.5%] lg:w-[25.5%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[110px] sm:h-[191px] md:h-[140px] lg:h-[191px] relative">
                <Image
                  fill
                  src="/assets/marketing_image.png"
                  alt="marketing_image"
                />
              </div>
              <div className=" rounded-b-3xl  pt-12 sm:pb-4  md:pb-6 lg:pb-8 mt-[-26px]">
                <SubHeading
                  className=" font-pop font-bold text-base sm:text-lg lg:text-2xl"
                  title="Marketing Service"
                />
                <Para
                  className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                  title="Get Response provides the best
                  automation and landing pages,"
                />
                <div className="text-right mt-2">
                  <button className=" text-sm md:text-base font-extrabold text-primary">
                    View More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkSec;
