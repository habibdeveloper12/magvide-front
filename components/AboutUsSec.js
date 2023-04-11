import Image from 'next/image';
import Container from './Container';
import SubHeading from './SubHeading';
import Heading from './Heading';
import Para from './Para';
import ButtonP from './ButtonP';

const AboutUsSec = () => {
  return (  
    <Container>
      <div className="flex justify-between py-24">
        <div className="w-2/4">
          <div className="w-[570px] h-[413px] relative">
            <Image fill src="/assets/aboutus-image.png" alt="aboutus_image" />
          </div>
        </div>
        <div className="w-2/4 pl-6">
          <SubHeading
            className="text-xl text-yellow font-pop font-bold"
            title="ABOUT US"
          />
          <Heading
            className="text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
            title="We Are A One-Stop Shop For All IT Solutions "
          />
          <Para
            className="text-lg text-para font-inter pb-8"
            title="In our daily life, people usually look for different IT services for that. But from now on, no more worries, 
            been providing honest service for years. Which is 
            accurate and acceptable. We provide all kinds of 
            services. Our service is very good. You can freely t
            our service has the solution for everything. We have
            ake our service. will get the correct result"
          />
          <ButtonP title="Learn More" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSec;
