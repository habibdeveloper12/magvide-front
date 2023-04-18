import React from 'react';
import Container from './Container';
import SubHeading from './SubHeading';
import Heading from './Heading';
import Para from './Para';
import Image from 'next/image';
import ButtonP from './ButtonP';

const OfferSec = () => {
  return (
    <div className="py-14">
      <Container>
        <div className="w-[65%] mx-auto">
          <SubHeading
            className="text-center text-xl text-yellow font-pop font-bold"
            title="WHAT WE OFFER"
          />
          <Heading
            className="text-center text-primary py-5  text-5xl font-bold font-pop"
            title="Our Services Category"
          />
          <div className="w-[90%] mx-auto">
            <Para
              className="text-center text-lg text-para font-inter pb-8"
              title="In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-2/4 pr-24 border-r-2 border-primary border-dashed">
            <div className="w-[80%] ml-auto shadow-cshadow p-7 rounded-md relative mt-52">
            <div className="w-20 h-20 bg-[#17BD8D] flex rounded-[50%] absolute  top-[33%] right-[-137px]">
                <Para
                  className="text-white font-bold text-2xl mx-auto my-auto"
                  title="02"
                />
              </div>
              <div className="w-[49.30px] h-[50px] relative">
                <Image fill src="/assets/service_icon_image.png" alt="service_icon_image" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Creative Services"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
            </div>
            <div className="w-[80%] ml-auto shadow-cshadow p-7 rounded-md relative mt-40">
            <div className="w-20 h-20 bg-[#F54D77] flex rounded-[50%] absolute  top-[33%] right-[-137px]">
                <Para
                  className="text-white font-bold text-2xl mx-auto my-auto"
                  title="04"
                />
              </div>
              <div className="w-[39px] h-[50px] relative">
                <Image fill src="/assets/app_icon_image.png" alt="app_icon_image" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Software & App Development"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
            </div>
          </div>
          <div className="w-2/4 pl-24">
            <div className="w-[80%] shadow-cshadow p-7 rounded-md relative mb-40">
              <div className="w-20 h-20 bg-[#219FFF] flex rounded-[50%] absolute  top-[33%] left-[-137px]">
                <Para
                  className="text-white font-bold text-2xl mx-auto my-auto"
                  title="01"
                />
              </div>

              <div className="w-[66px] h-[50px] relative">
                <Image fill src="/assets/marketing_icon_image.png" alt="marketing_icon_image" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Digital Marketing"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries. "
              />
            </div>
            <div className="w-[80%] shadow-cshadow p-7 rounded-md relative mb-40">
              <div className="w-20 h-20 bg-[#FBAE3D] flex rounded-[50%] absolute  top-[33%] left-[-137px]">
                <Para
                  className="text-white font-bold text-2xl mx-auto my-auto"
                  title="03"
                />
              </div>
              <div className="w-[58px] h-[50px] relative">
                <Image fill src="/assets/web_icon_image.png" alt="web_icon_image" />
              </div>
              <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="WEB DESIGN & DEVELOPMENT" 
              />
              <Para
                className=" text-lg text-para font-inter"
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
