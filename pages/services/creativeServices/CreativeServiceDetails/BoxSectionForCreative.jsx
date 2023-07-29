import React from 'react';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import BlogHeading from '@/components/layout/BlogHeading';
import Heading from '@/components/layout/Heading';
import BlogSubHeading from '@/components/layout/BlogSubHeading';
import BlogPara from '@/components/layout/BlogPara';
import Para from '@/components/layout/Para';

const BoxSectionForCreative = () => {
  return (
    <>
      <div className="px-3 md:px-5 xl:px-0">
        <Container>
          <BlogHeading title="Magvide Graphic Desgin Service Offers:" />

          <div className="flex flex-wrap justify-between gap-y-4 ">
          <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr pt-3 text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="Logo Design:"
              />
              <BlogSubHeading title="Unleashing the Symbolic Sorcery" />
              <BlogPara title="Your logo is the magical sigil that represents your brand's identity. Our design sorcerers will delve deep into the realms of creativity to conjure the perfect logo for you. We'll blend your brand's personality, aspirations, and target audience into a single enchanting symbol that captures hearts and minds at first glance. Brace yourself for a logo that stands out from the crowd and weaves a captivating story. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr sm:pt-3 text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="Illustrations:"
              />
              <BlogSubHeading title="Ad Space Acquisition" />
              <BlogPara title="Sometimes words alone cannot convey the enchantment of your brand's story. That's where our illustrative sorcery comes into play. Our artistic conjurers will wield their pens and brushes to bring your ideas to life. From whimsical characters to stunning scenes, we'll illustrate your brand's narrative in a way that sparks wonder and resonates with your audience. Get ready to leave them spellbound with illustrations that transcend the mundane." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="Branding Materials:"
              />
              <BlogSubHeading title="Enchanting Collateral at Your Fingertips" />
              <BlogPara title="A brand's identity extends beyond its logo. Our design sorcerers will ensure that every touchpoint reflects the essence of your brand, leaving a lasting impression. We'll sprinkle our magical design elements into your business cards, letterheads, brochures, and more. From color palettes to typography spells, we'll craft a cohesive visual language that enchants your customers and sets you apart from the ordinary. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="Packaging Design:"
              />
              <BlogSubHeading title="Unveiling the Magic within Your Products" />
              <BlogPara title="Your product deserves packaging that not only protects but also mesmerizes it. Our design sorcerers will weave enchantment into your packaging, creating an unboxing experience that leaves customers gasping with delight. We'll combine striking visuals, exquisite typography, and intuitive layouts to create packaging that becomes an extension of your brand's magic." />
            </div>{' '}
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <Heading
                className="yellow-gr  text-base sm:text-xl md:text-xl lg:text-xl font-bold"
                title="Social Media Graphics:"
              />
              <BlogSubHeading title="Casting Spells in the Digital Realm" />
              <BlogPara title="In the realm of social media, eye-catching graphics are the potions that capture attention and ignite engagement. Our design sorcerers specialize in creating thumb-stopping visuals that compel users to stop scrolling and take notice. From mesmerizing Instagram posts to enchanting Facebook covers, we'll concoct social media graphics that cast an irresistible spell on your followers." />
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
            title="How Magvide  Works?"
          />
            <Heading
              className="yellow-gr text-xl md:text-2xl lg:text-5xl font-bold"
              title=" Graphic Designers"
            />
          <Heading
            className="text-primary  text-xl md:text-2xl lg:text-5xl font-bold"
            title="Works?"
          />
        </div>

        <Container>
          <div className="flex flex-wrap px-5 xl:px-0 gap-y-7 lg:gap-y-10 justify-between">
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Discovery and Understanding"
              />
              <BlogPara title="To create captivating visuals, our designers embark on a journey of discovery. They take the time to understand your brand, its values, target audience, and desired outcomes. They delve deep into your brand's essence to uncover its unique story, which serves as the foundation for their creative spells. " />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Collaboration and Ideation"
              />
              <BlogPara title="Our designers believe that the best magic happens when minds merge. They collaborate closely with you, engaging in brainstorming sessions to explore ideas, gather inspiration, and align visions. They value your input and insights as it helps shape the direction of their creative enchantments." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Conceptualization and Sketching"
              />
              <BlogPara title="With a clear understanding of your brand's magic, our designers begin conjuring conceptual ideas. They sketch, doodle, and experiment with different visual elements, playing with composition, color schemes, typography, and imagery. These initial sketches serve as the building blocks for their design spells." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Digital Sorcery"
              />
              <BlogPara title="Once the initial concepts have been crafted on paper, our designers enter the digital realm. They utilize industry-standard design software and tools to translate their sketches into polished digital designs. With their expert command over software, they bring together the right blend of colors, shapes, textures, and visual effects to create captivating visuals." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Iteration and Refinement"
              />
              <BlogPara title="The path to perfection is paved with iterations. Our designers work closely with you, seeking feedback and refining their creations to ensure they align with your vision. They carefully consider your input and make necessary adjustments, tweaking every detail until the design is flawless and resonates with the desired enchantment." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Presentation and Collaboration"
              />
              <BlogPara title="When the designs have reached their full potential, our designers present their creations to you. They provide you with a visual feast, showcasing their work in a way that helps you envision the magic it will bring to your brand. They value your feedback and collaboration, making sure you're involved throughout the process." />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoxSectionForCreative;
