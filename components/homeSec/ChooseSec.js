import Image from "next/image";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import SubHeading from "../layout/SubHeading";

const ChooseSec = () => {
  return (
    <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-24">
      <Container>
        <div>
          <div className="w-[75%] md:w-[65%] mx-auto">
            <SubHeading
              className="text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
              title="WHY CHOOSE US"
            />
            <Heading
              className="text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
              title="We Help You To Increase Your 
            Sale Through Solution"
            />
            <div className="w-[95%] sm:w-[90%] md:w-[100%] lg:w-[70%] mx-auto">
              <Para
                className="text-center text-sm sm:text-base lg:text-lg text-para font-inter pb-8"
                title="In our daily life, people usually look for different IT services 
            for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/brand-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Branding Strategy"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title="
                Branding Strategy
                Experience the power of our services in transforming your brand into a success story.
              "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/social-icon.png"
                  alt="brand-icon-img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-2"
                title="Professional Marketing"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title="
                From Leads to Sales: Unlock Your Business's Full Potential with Professional Marketing
                "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image
                  fill
                  src="/assets/design-icon.png"
                  alt="brand-icon-img"
                />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Unique Design"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title=" 
                Stand out from the crowd with our unique designs that captivate your audience.
                "
              />
            </div>
            <div className="bg-white w-[48%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
              <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
                <Image fill src="/assets/grow-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-base sm:text-lg lg:text-xl
                 pt-4 pb-2 lg:pt-6 lg:pb-4"
                title="Growing Sales"
              />
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title="
                From sales slump to sales superstar – let us fuel your success "
              />
            </div>
          </div>
        </div>
        <div className=" my-7 sm:my-10 md:my-24 lg:my-32 xl:my-40 px-3 sm:px-5 xl:px-0">
          <div className=" w-[360px] h-[226px]   sm:w-[600px] sm:h-[377px] md:w-[100%] md:h-[458px] lg:w-[100%] xl:w-[1000px] lg:h-[629px] mx-auto relative border-[8px] md:border-[15px] border-[#F0FBFF] rounded-3xl md:rounded-[50px] shadow-cshadow">
            <Image fill src="/assets/video-img.png" alt="temporary-video-img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseSec;
