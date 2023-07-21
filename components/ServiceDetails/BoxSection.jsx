import React from "react";

import Para from "../layout/Para";
import Heading from "../layout/Heading";
import { Image } from "@chakra-ui/react";

const BoxSection = () => {
  return (
    <div>
      <div className="flex flex-wrap px-3 w-[90%] mx-auto sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
        <div className="bg-white h-70 w-[40%] md:w-[31%] lg:w-[23%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
          {/* <div className="w-[40px] h-[42px] sm:w-[60px] sm:h-[63px] lg:w-[70px]  lg:h-[74px] xl:w-[80px] xl:h-[84px] relative">
            <Image fill src="/assets/brand-icon.png" alt="brand-icon-img" />
          </div> */}
          <Heading
            className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
            title="Need Help?"
          />

          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-inter"
            title="We appreciate every client
            and ready to help with all
            the issues that they have. "
          />
          <div className="flex flex-wrap justify-center items-center gap-2">
            {" "}
            <Image
              src="phone.png"
              width={"4"}
              height={"4"}
              alt="brand-icon-img"
            />{" "}
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="+880 1658 7854"
            />{" "}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {" "}
            <Image
              src="message.png"
              width={"4"}
              height={"4"}
              alt="brand-icon-img"
            />{" "}
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="yourmail@gmail.com"
            />{" "}
          </div>
        </div>

        <div className="flex flex-wrap flex-col gap-5 bg-white   justify-center w-[70%] md:w-[70%] lg:w-[70%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
          <div className="">
            {" "}
            <Heading
              className="yellow-gr text-center text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 1"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Keyword Quest"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. "
            />
          </div>
          <div className="">
            <Heading
              className="yellow-gr text-center text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 2"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Ad Space Acquisition"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="Once the precious keywords have been discovered, our SEM marketers don their negotiation hats and enter the mysterious realm of ad space acquisition. They haggle with search engine providers, battling evil budget constraints to secure prime real estate on the SERPs. It's like a high-stakes game of Monopoly, with keywords as the currency and ad space as the Boardwalk. "
            />
          </div>
        </div>
        <div className="flex flex-wrap px-3 sm:px-5 justify-between md:pt-3 lg:pt-6 gap-y-4 sm:gap-y-6 md:px-">
          <div className="bg-white w-[48%] md:w-[41%] lg:w-[30%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <Heading
              className="yellow-gr text-center text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 4"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="PPC Battle Royale"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="With the ad space secured, it's time for the epic PPC Battle Royale. Our SEM marketers bravely enter the arena, armed with finely crafted ad copies. Every click counts, as each is accompanied by a tiny cash register sound in the search engine provider's office. It's like a digital arcade game where our marketer's rack points for every customer enticed by their captivating ads. "
            />
          </div>
          <div className="bg-white w-[48%] md:w-[41%] lg:w-[30%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <Heading
              className="yellow-gr text-center text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 5"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="Revenue vs. PPC Duel"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="In the ultimate showdown, it's Revenue vs. PPC in a duel of epic proportions! Our SEM marketers keep a watchful eye on the scales, ensuring that the revenue generated from customers buying products through the SEM ads outweighs the cost of PPC. It's like a fierce tug-of-war between the Money Monster and the PPC Beast; our marketers are the fearless rope holders. "
            />
          </div>
          <div className="bg-white w-[48%] md:w-[41%] lg:w-[30%] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <Heading
              className="yellow-gr text-center text-xl sm:text-xl md:text-xl lg:text-xl font-bold"
              title="STEP 6"
            />
            <Heading
              className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
              title="SEM Ad Magic"
            />
            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter"
              title="At the top of the SERPs, where organic results fear to tread, our SEM ads work their magic. With headlines that sing, meta descriptions that tease calls to action that charm, and clickable URLs that lead to digital wonders, our ads entice customers like a siren's song. It's like a digital theater production, where the SEM ads take center stage and captivate the audience (aka potential customers). "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
