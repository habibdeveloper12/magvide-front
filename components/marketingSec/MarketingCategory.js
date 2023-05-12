import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import SubHeading from '../layout/SubHeading';
import Para from '../layout/Para';
import ButtonM from '../layout/ButtonM';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const MarketingCategory = () => {
  return (
    <Container>
      <div className=" pb-12">
        <Heading
          className="text-center text-primary py-12 md:py-14 lg:py-16 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
          title="DIGITAL MARKETING "
        />
        <div className="flex flex-wrap justify-between px-3 sm:px-5 xl:px-0 gap-y-4 lg:gap-y-6">
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image1.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
            pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="SEARCH ENGINE OPTIMAIZATION (SEO)"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image2.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
              pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="LOCAL SEO"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image3.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
              pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="TECHNICAL SEO"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image4.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
              pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="E-COMMERCE SEO"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image5.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
              pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="SOCIAL MEDIA MARKETING"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image6.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="SOCIAL MEDIA MANAGEMENT"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image7.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
              pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="CONTENT WRITING"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image8.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="LINK BUILDING SERVICE (OFF PAGE SEO)"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image9.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="SEARCH ENGINE MARKETING(SEM)"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image10.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="PAY PER CLICK (PPC)"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/marketing_icon_image12.png"
                alt="marketing_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
               pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="GOOGLE ANALYTICS SERVICES"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className="w-[48%] sm:w-[32%] text-center my-auto">
            <div className="group/item relative inline-block">
              <button className="border-2 border-solid text-base md:text-lg font-medium font-pop rounded-lg border-primary transition duration-300 ease-in-out text-primary pl-4 sm:pl-6 pr-10 sm:pr-16 py-4 sm:py-5 lg:py-7 hover:font-medium group-hover/item:bg-primary group-hover/item:text-white">
                Explore More
              </button>
              <HiOutlineArrowNarrowRight className="group/edit absolute right-[8%] sm:right-[15%] bottom-[30%] sm:bottom-[34%] text-2xl transition duration-300 ease-in-out text-primary group-hover/item:text-white" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarketingCategory;
