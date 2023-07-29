import React from 'react';
import Heading from '../layout/Heading';
import Container from '../layout/Container';
import BlogPara from '../layout/BlogPara';
import BlogSubHeading from '../layout/BlogSubHeading';
import BlogHeading from '../layout/BlogHeading';
import Image from 'next/image';
import Para from '../layout/Para';

const BoxSection = () => {
  return (
    <>
      <div className="px-3 md:px-5 xl:px-0">
        <Container>
          <BlogHeading title="Here's a whimsical breakdown of our SEM marketing process:" />

          <div className="flex flex-wrap justify-between gap-y-4 ">
          <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr pt-3 text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="STEP 1"
              />
              <BlogSubHeading title="Keyword Quest" />
              <BlogPara title="Our intrepid SEM marketers embark on a daring quest to find keywords with search volumes that are larger than life. Armed with their trusty keyword research tools, they dig deep into the vast realms of the internet, unearthing hidden gems that will attract potential customers. It's like panning for gold, only with keyboards instead of pickaxes. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr sm:pt-3 text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="STEP 2"
              />
              <BlogSubHeading title="Ad Space Acquisition" />
              <BlogPara title="Once the precious keywords have been discovered, our SEM marketers don their negotiation hats and enter the mysterious realm of ad space acquisition. They haggle with search engine providers, battling evil budget constraints to secure prime real estate on the SERPs. It's like a high-stakes game of Monopoly, with keywords as the currency and ad space as the Boardwalk." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="STEP 3"
              />
              <BlogSubHeading title="PPC Battle Royale" />
              <BlogPara title="With the ad space secured, it's time for the epic PPC Battle Royale. Our SEM marketers bravely enter the arena, armed with finely crafted ad copies. Every click counts, as each is accompanied by a tiny cash register sound in the search engine provider's office. It's like a digital arcade game where our marketer's rack points for every customer enticed by their captivating ads. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="STEP 4"
              />
              <BlogSubHeading title="Revenue vs. PPC Duel" />
              <BlogPara title="In the ultimate showdown, it's Revenue vs. PPC in a duel of epic proportions! Our SEM marketers keep a watchful eye on the scales, ensuring that the revenue generated from customers buying products through the SEM ads outweighs the cost of PPC. It's like a fierce tug-of-war between the Money Monster and the PPC Beast; our marketers are the fearless rope holders." />
            </div>{' '}
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr  text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="STEP 5"
              />
              <BlogSubHeading title="Keyword Quest" />
              <BlogPara title="At the top of the SERPs, where organic results fear to tread, our SEM ads work their magic. With headlines that sing, meta descriptions that tease calls to action that charm, and clickable URLs that lead to digital wonders, our ads entice customers like a siren's song. It's like a digital theater production, where the SEM ads take center stage and captivate the audience (aka potential customers)." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]">

            <div className=" w-[100%] md:hidden">
          <div className="bg-white mx-auto mb-10 md:mb-0 w-[70%] lg:w-[80%] max-h-[320px] shadow-cshadow p-3 sm:p-5 lg:p-5 xl:p-7 rounded-md">
            <Heading
              className=" text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]  text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
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
                title="+880 17910 22880"
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
            </div>
          </div>
          <BlogPara
            title="So, there you have it—Magvide's SEM marketing process, served with a side of humor! We believe that a little laughter goes a long way in making the world of digital marketing a more enjoyable and engaging experience. And remember, with Magvide by your side, your SEM journey will be a delightful adventure filled with keywords, ad space battles, and the sweet sound of revenue triumphing over PPC costs. Let's embark on this laughter-filled quest together. "
          />
        </Container>
      </div>

      <div className="bg-[#F0FBFF] pb-16">
        <div className="flex justify-center gap-x-1 md:gap-x-4 py-10 sm:py-16">
          <Heading
            className="text-primary  text-xl md:text-2xl lg:text-5xl font-bold"
            title="Our SEM Service "
          />
          <Heading
            className="yellow-gr text-xl md:text-2xl lg:text-5xl font-bold"
            title=" Offerings"
          />
        </div>

        <Container>
          <div className="flex flex-wrap px-5 xl:px-0 gap-y-7 lg:gap-y-10 justify-between">
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Keyword Kung Fu"
              />
              <BlogPara title="We conduct extensive keyword research to find the perfect mix of high-impact keywords to make your website soar in search engine rankings. We'll ensure you're targeting the right audience and driving qualified traffic to your virtual doorstep. " />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Ad-venturous Copywriting"
              />
              <BlogPara title="Our team of witty wordsmiths will create eye-catching and persuasive ad copy that grabs attention, sparks curiosity, and leaves your competitors feeling green with envy." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Budget-Friendly PPC (Pay-Per-Click)"
              />
              <BlogPara title="We know how to stretch your advertising dollars like a yoga master stretches their limbs. Our PPC campaigns are designed to deliver maximum results with a minimal budget, so you can focus on growing your business while we handle the rest." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Conversion Sorcery"
              />
              <BlogPara title="Getting traffic to your website is only half the battle. We'll sprinkle our magic dust on your landing pages, optimizing them to convert visitors into loyal customers. Say hello to increased leads, sales, and happy dances." />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoxSection;
