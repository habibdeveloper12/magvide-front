import React from "react";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import { Img } from "@chakra-ui/react";

const BoxText = () => {
  return (
    <div className="w-[80%]">
      <Heading
        className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
        title="Search Engine Marketing (SEM)"
      />
      <Para
        className="text-center text-sm sm:text-base lg:text-sm text-[#2B2B2B] font-inter pb-8"
        title="Welcome to Magvide: Where We Make Your Website Go Boom!
                Are you tired of your website playing hide-and-seek with potential customers? Do you want to catapult your online presence to new heights? Look no further! At Magvide, we're not just another digital marketing service. We're the masters of Search Engine Marketing (SEM) and bring the BOOM to your website."
      />
      <Img src="blog1.png" />
      <Para
        className="text-center mt-4 text-sm sm:text-base lg:text-sm text-[#2B2B2B] font-inter pb-8"
        title="Our SEM Service: Setting Your Website on Fire (Not Literally)
                At Magvide, we specialize in igniting your website's visibility on search engines like a fireworks display on the Fourth of July. Our SEM service is designed to make your website shine brighter than a disco ball at a 70s dance party. We combine the perfect blend of strategy, creativity, and a touch of magic to get your website the attention it deserves."
      />
      <Para
        className="text-center text-sm sm:text-base lg:text-sm text-[#2B2B2B] font-inter pb-8"
        title="How Does Magvide’s Search Engine Marketing Do Their Work?

        At Magvide, we take SEM marketing seriously, but that doesn't mean we can't have some fun along the way. Our Search Engine Marketers are like modern-day treasure hunters, seeking the perfect keywords to lead customers straight to your digital doorstep."
      />
    </div>
  );
};

export default BoxText;
