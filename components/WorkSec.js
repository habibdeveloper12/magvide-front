import Image from 'next/image';
import Container from './Container';
import SubHeading from './SubHeading';
import Heading from './Heading';
import Para from './Para';

const WorkSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-20">
      <Container>
        <div>
          <div className="w-[65%] mx-auto">
            <SubHeading
              className="text-center text-xl text-yellow font-pop font-bold"
              title="OUR WORKS"
            />
            <Heading
              className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
              title="Our Latest Incredible Client’s 
              Projects"
            />
            <div className="w-[70%] mx-auto">
              <Para
                className="text-center text-lg text-para font-inter pb-8"
                title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div></div>
          <div className="flex justify-between pt-4">
            <div className="w-[26%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
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
                  title="Design Service"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="Get Response provides the best
                  automation and landing pages, which
                  helps me focus more on "
                />
                <div className="text-right">
                  <button className=" font-extrabold text-primary">
                    View More...
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[26%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
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
                  title="Creative Service"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="Get Response provides the best
                  automation and landing pages, which
                  helps me focus more on "
                />
                <div className="text-right">
                  <button className=" font-extrabold text-primary">
                    View More...
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[26%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[191px] relative">
                <Image
                  fill
                  src="/assets/marketing_image.png"
                  alt="marketing_image"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 pb-8 mt-[-26px]">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Marketing Service"
                />
                <Para
                  className="text-md font-light font-inter py-2"
                  title="Get Response provides the best
                  automation and landing pages, which
                  helps me focus more on"
                />
                <div className="text-right">
                  <button className=" font-extrabold text-primary">
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
