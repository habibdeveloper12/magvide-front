import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';

const MarketingServiceSec = () => {
  return (
    <Container>
      <div className="sm:flex justify-between px-3 sm:px-5 xl:px-0 py-8 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="w-full sm:w-2/4">
          <div className="mx-auto mb-10 sm:mb-0 sm:mx-0 w-[95%] h-[300px]  md:h-[320px] lg:w-[95%] lg:h-[400px] xl:w-[90%] xl:h-[430px] relative block">
            <Image
              fill
              src="/assets/marketingService_image.png"
              alt="aboutus_image"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/4 sm:pl-6">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl text-yellow font-pop font-bold"
            title="Our Services Category"
          />
          <Heading
            className="text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="DIGITAL MARKETING "
          />
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-6 lg:pb-10"
            title="In our daily life, people usually look for different IT In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have been providing honest service for years. services for that. But from now on, no more worries, our service has the solution for everything. We havebeen providing honest service for years."
          />
          <ButtonP title="Read More" />
        </div>
      </div>
    </Container>
  );
};

export default MarketingServiceSec;
