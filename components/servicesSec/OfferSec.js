import Container from "../layout/Container";
import SubHeading from "../layout/SubHeading";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import Image from "next/image";
import ButtonP from "../layout/ButtonP";

const OfferSec = () => {
  return (
    <div className="py-14">
      <Container>
        <div className="w-[95%] sm:w-[85%] lg:w-[65%] mx-auto">
          <SubHeading
            className=" text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
            title="WHAT WE OFFER"
          />
          <Heading
            className=" text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="Our Services Category"
          />
          <div className="w-[90%] mx-auto">
            <Para
              className=" text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-10"
              title="In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-2/4 pr-4 sm:pr-16 md:pr-24 border-r-2 border-primary border-dashed">
            <div className="w-[90%] ml-auto shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mt-48 sm:mt-48 lg:mt-52">
              <div className="w-10 h-10  sm:w-16 sm:h-16 md:w-20 md:h-20  bg-[#17BD8D] flex rounded-[50%] absolute top-[16%] sm:top-[33%] right-[-122px] sm:right-[-97px] md:right-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="02"
                />
              </div>
              <div className="w-[35px] h-[35px] sm:w-[49.30px] sm:h-[50px] relative">
                <Image
                  fill
                  src="/assets/service_icon_image.png"
                  alt="service_icon_image"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Creative Services"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
            </div>
            <div className="w-[90%] ml-auto shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mt-32 lg:mt-40">
              <div className="w-10 h-10   sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#F54D77] flex rounded-[50%] absolute top-[45%] sm:top-[33%] right-[-122px] sm:right-[-97px] md:right-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="04"
                />
              </div>
              <div className="w-[25px] h-[32px] sm:w-[39px] sm:h-[50px] relative">
                <Image
                  fill
                  src="/assets/app_icon_image.png"
                  alt="app_icon_image"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Software & App Development"
              />
              <Para
                className=" text-xs sm:text-base lg:text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
            </div>
          </div>
          <div className="w-2/4 pl-4 sm:pl-16 md:pl-24">
            <div className="w-[90%] shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative mb-28 lg:mb-40">
              <div className=" w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20  bg-[#219FFF] flex rounded-[50%] absolute  top-[33%] left-[-122px] sm:left-[-98px] md:left-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="01"
                />
              </div>

              <div className="w-[46px] h-[35px] sm:w-[66px] sm:h-[50px] relative">
                <Image
                  fill
                  src="/assets/marketing_icon_image.png"
                  alt="marketing_icon_image"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Digital Marketing"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries. "
              />
            </div>
            <div className="w-[90%] shadow-cshadow p-3 sm:p-5 md:p-7 rounded-md relative">
              <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FBAE3D] flex rounded-[50%] absolute top-[55%]  sm:top-[33%] left-[-122px]  sm:left-[-98px] md:left-[-137px]">
                <Para
                  className="text-white font-bold text-base sm:text-xl md:text-2xl mx-auto my-auto"
                  title="03"
                />
              </div>
              <div className="w-[40px] h-[34px] sm:w-[58px] sm:h-[50px] relative">
                <Image
                  fill
                  src="/assets/web_icon_image.png"
                  alt="web_icon_image"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                  pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Web Design & Development"
              />
              <Para
                className="  text-xs sm:text-base lg:text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <ButtonP title="Get Started Now" />
        </div>
      </Container>
    </div>
  );
};

export default OfferSec;
