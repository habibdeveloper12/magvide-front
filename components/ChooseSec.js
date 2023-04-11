import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import Para from "./Para";
import SubHeading from "./SubHeading";


const ChooseSec = () => {
  return (
    <div className="mt-24 mb-[450px]">
      <Container>
        <div>
          <div className="w-[65%] mx-auto">
            <SubHeading
              className="text-center text-xl text-yellow font-pop font-bold"
              title="WHY CHOOSE US"
            />
            <Heading
              className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
              title="We Help You To Increase Your 
            Sale Through Solution"
            />
            <div className="w-[70%] mx-auto">
              <Para
                className="text-center text-lg text-para font-inter pb-8"
                title="In our daily life, people usually look for different IT services 
            for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div className="flex justify-between pt-6">
          <div className="w-[23%] shadow-cshadow p-7 rounded-md">
              <div className="w-[80px] h-[84px] relative">

              <Image fill src="/assets/brand-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Branding Stategy"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="w-[23%] shadow-cshadow p-7 rounded-md">
            <div className="w-[80px] h-[84px] relative">

              <Image fill src="/assets/social-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Professional Marketing"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="w-[23%] shadow-cshadow p-7 rounded-md">
            <div className="w-[80px] h-[84px] relative">

              <Image fill src="/assets/design-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Unique Design"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
            <div className="w-[23%] shadow-cshadow p-7 rounded-md">
            <div className="w-[80px] h-[84px] relative">

              <Image fill src="/assets/grow-icon.png" alt="brand-icon-img" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Growing Sales"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="We will help you with all your needs. In fact, you will get all kinds of services "
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseSec;
