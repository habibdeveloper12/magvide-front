import React from 'react';
import Container from '../../../../components/layout/Container';
import Heading from '../../../../components/layout/Heading';
import Image from 'next/image';
import SubHeading from '../../../../components/layout/SubHeading';
import Para from '../../../../components/layout/Para';
import ButtonM from '../../../../components/layout/ButtonM';

const SoftDevCateSec = () => {
  return (
    <Container>
      <div className=" pb-4 sm:pb-12">
        <Heading
          className="text-center text-primary py-12 md:py-14 lg:py-16 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
          title="SOFTWARE & APP DEVELOPMENT"
        />
        <div className="flex flex-wrap justify-between px-3 sm:px-5 xl:px-0 gap-y-4 lg:gap-y-6">
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/app-development 1.png"
                alt="app-development"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
                    pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="CUSTOM APP DEVELOPMENT"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
                  services for that. But from now on,"
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[48%] sm:w-[32%] shadow-cshadow py-5 lg:py-9 rounded-2xl text-center px-3">
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/app-development 2.png"
                alt="app-development"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
                     pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="CUSTOM SOFTWARE DEVELOPMENT"
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
                src="/assets/app-development 3.png"
                alt="app-development"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-sm sm:text-base lg:text-xl
                      pt-4 pb-2 lg:pt-6 lg:pb-4"
              title="BUBBLE.IO DEVELOPMENT"
            />
            <Para
              className=" text-sm  lg:text-lg text-para font-inter pb-3 sm:pb-5"
              title="In our daily life, people usually look for different IT 
                  services for that. But from now on, "
            />
            <ButtonM title="Read More" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoftDevCateSec;
