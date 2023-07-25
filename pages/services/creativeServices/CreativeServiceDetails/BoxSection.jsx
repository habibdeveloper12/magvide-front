import React from 'react';

import Para from '../../../../components/layout/Para';
import Heading from '../../../../components/layout/Heading';
import { Image } from '@chakra-ui/react';
import Container from '../../../../components/layout/Container';

const BoxSection = () => {
  return (
    <>
      <div className="flex flex-wrap px-3 w-[90%] mx-auto">
        <div className="w-[33%]">
          <div className="bg-white mx-auto md:mx-0 mb-10 md:mb-0 w-[70%] md:w-[31%] lg:w-[80%] max-h-[320px] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Need Help?"
            />

            <Para
              className=" text-sm mb-6 sm:text-base lg:text-lg text-para font-inter"
              title="We appreciate every client
            and ready to help with all
            the issues that they have. "
            />
            <div className="flex flex-nowrap items-center gap-2">
              <div className="relative  w-[15px] h-[15px]">
                <Image fill src="/phone.png" alt="phone-image" />
              </div>
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title="+880 1658 7854"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative  w-[16px] h-[12px]">
                <Image fill src="/message.png" alt="message-image" />
              </div>
              <Para
                className=" text-sm sm:text-base lg:text-lg text-para font-inter"
                title="yourmail@gmail.com"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  w-[66%] justify-between gap-y-4 ">
          <Heading
            className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[40px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
            title="Here's a whimsical breakdown of our SEM marketing process:"
          />

          <div className="w-[45%]  ">
            <Heading
              className="yellow-gr pt-3 text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 1"
            />
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-base text-para font-inter py-10"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
            />
          </div>
          <div className="w-[45%]  ">
            <Heading
              className="yellow-gr pt-3 text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 2"
            />
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-base text-para font-inter py-10"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
            />
          </div>
        </div>
        <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
          <div className="w-[25%]  ">
            <Heading
              className="yellow-gr pt-3 text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 3"
            />
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-base text-para font-inter py-10"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, "
            />
          </div>{' '}
          <div className="w-[30%]  ">
            <Heading
              className="yellow-gr pt-3 text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 4"
            />
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-base text-para font-inter py-10"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
            />
          </div>{' '}
          <div className="w-[30%]  ">
            <Heading
              className="yellow-gr pt-3 text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 5"
            />
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-base text-para font-inter py-10"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
            />
          </div>
        </div>
        <Para
          className=" text-sm sm:text-base px-3 lg:text-base text-para font-inter pb-16"
          title="So, there you have it—Magvide's SEM marketing process, served with a side of humor! We believe that a little laughter goes a long way in making the world of digital marketing a more enjoyable and engaging experience. And remember, with Magvide by your side, your SEM journey will be a delightful adventure filled with keywords, ad space battles, and the sweet sound of revenue triumphing over PPC costs. Let's embark on this laughter-filled quest together. "
        />
      </div>
      <div className="bg-[#F0FBFF] pb-16">
        <div className="flex justify-center gap-3 md:gap-4 py-16">
          <Heading
            className="text-primary text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold"
            title="Our SEM Service "
          />
          <Heading
            className="yellow-gr text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold"
            title=" Offerings"
          />
        </div>

        <Container>
          <div className="flex flex-wrap gap-y-10 justify-between">
            <div className="w-[48%] py-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Keyword Quest"
              />
              <Para
                className="  text-center text-sm sm:text-base lg:text-base text-para font-inter py-5 px-14"
                title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
              />
            </div>
            <div className="w-[48%] py-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Keyword Quest"
              />
              <Para
                className="  text-center text-sm sm:text-base lg:text-base text-para font-inter py-5 px-14"
                title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
              />
            </div>
            <div className="w-[48%] py-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Keyword Quest"
              />
              <Para
                className="  text-center text-sm sm:text-base lg:text-base text-para font-inter py-5 px-14"
                title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
              />
            </div>
            <div className="w-[48%] py-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Keyword Quest"
              />
              <Para
                className="  text-center text-sm sm:text-base lg:text-base text-para font-inter py-5 px-14"
                title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoxSection;
