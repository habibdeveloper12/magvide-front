import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';

const AboutSkillSec = () => {
  return (
    <Container>
      <div className="sm:flex justify-between px-3 sm:px-5 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full sm:w-2/4">
          <div className="mx-auto sm:mx-0 w-[95%] h-[400px] md:h-[450px] lg:h-[566px] xl:h-[665px] relative">
            <Image
              fill
              src="/assets/skill_test_image.png"
              alt="skill_test_image"
            />
          </div>
        </div>
        <div className="w-full pt-12 sm:pt-0 sm:w-2/4 sm:pl-6">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl text-yellow font-pop font-bold"
            title="SKILL SET"
          />
          <Heading
            className="text-primary py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[54px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="We Have A Set Of Skill With 
          High Quality"
          />
          <div className="mt-6 sm:mt-10 md:mt-4 xl:mt-20 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading
              title="Digital Marketing"
              className="text-primary text-base lg:text-lg font-bold"
            />
            <Para title="85%" className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[85%] border-[#2FA5FF] absolute left-0 bottom-[-4px] rounded-2xl"></div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading
              title="Creative Services"
              className="text-primary text-base lg:text-lg font-bold"
            />
            <Para title="85%" className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[98%] border-[#17BD8D] absolute left-0 bottom-[-4px] rounded-2xl"></div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading
              title="Web Design & Development"
              className="text-primary text-base lg:text-lg font-bold"
            />
            <Para title="85%" className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[96%] border-[#FBAE3D] absolute left-0 bottom-[-4px] rounded-2xl"></div>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading
              title="Software & App Development"
              className="text-primary text-base lg:text-lg font-bold"
            />
            <Para title="85%" className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[92%] border-[#F54D77] absolute left-0 bottom-[-4px] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSkillSec;
