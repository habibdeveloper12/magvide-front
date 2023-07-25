import Container from "../layout/Container";
import SubHeading from "../layout/SubHeading";
import Para from "../layout/Para";
import { Image } from "@chakra-ui/react";

const BannerBottom = () => {
  return (
    <div className="mt-[-70px]">
      <Container>
        <div className="flex  px-3 w-[95%] sm:w-[90%] mx-auto shadow-cshadow py-5 md:py-8 rounded-2xl bg-white">
          <div className="w-2/6 flex items-center gap-x-1  justify-center">
         
              <div className="relative  sm:gap-x-1 w-[52px] h-[56px] lg:w-[72px] lg:h-[64px] mx-auto my-auto">
              <Image fill src="/after-banner (2).png" alt="banner-image" />
          </div>
            <div>
              <SubHeading
                className="text-primary font-pop font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                title="Success Stories"
              />
              <Para
                className=" text-xs sm:text-sm md:text-base lg:text-lg text-para font-inter"
                title="100% Success"
              />
            </div>
          </div>

          <div className="w-2/6 flex gap-x-1 items-center justify-center">
                 
            <div className="relative   w-[52px] h-[50px] lg:w-[71px] lg:h-[64px] mx-auto my-auto">
              <Image fill src="/after-banner (3).png" alt="banner-image" />
          </div>
            <div>
              <SubHeading
                className="text-primary font-pop font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                title="Expert Employee"
              />
              <Para
                className=" text-xs sm:text-sm md:text-base lg:text-lg text-para font-inter"
                title="All Employees Are Expert"
              />
            </div>
          </div>
          <div className="w-2/6 flex items-center gap-x-1 justify-center">
       
               <div className="relative w-[49px] h-[47px] mx-auto my-auto">
              <Image fill src="/after-banner (1).png" alt="banner-image" />
          </div> 
            <div>
              <SubHeading
                className="text-primary font-pop font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                title="Collaboration"
              />
              <Para
                className=" text-xs sm:text-sm md:text-base lg:text-lg text-para font-inter"
                title="Good Collaboration"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerBottom;
