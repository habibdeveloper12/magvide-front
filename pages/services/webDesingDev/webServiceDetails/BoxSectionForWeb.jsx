import React from 'react';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import BlogHeading from '@/components/layout/BlogHeading';
import Heading from '@/components/layout/Heading';
import BlogSubHeading from '@/components/layout/BlogSubHeading';
import BlogPara from '@/components/layout/BlogPara';
import Para from '@/components/layout/Para';

const BoxSectionForWeb = () => {
  return (
    <>
      <div className="px-3 md:px-5 xl:px-0">
        <Container>
          <BlogHeading title="Here's why our team works like a well-oiled machine:" />

          <div className="flex flex-wrap justify-between gap-y-4 ">
          <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <BlogSubHeading title="Supercharged Creativity:" />
              <BlogPara title="Our designers don't just think outside the box; they obliterate the box. They have a knack for turning wild ideas into stunning visual realities. Whether it's a website that looks like a tropical paradise or a digital masterpiece that resembles a futuristic art installation, our team will bring your wildest visions to life." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <BlogSubHeading title="Supercharged Creativity:" />
              <BlogPara title="Our web design wizards have mastered the art of code like Yoda mastered the Force. They have years of experience and keep their fingers firmly on the pulse of the ever-evolving web design world. From HTML and CSS to JavaScript and beyond, they know the secret languages of the internet like the back of their pixelated hands. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Collaborative Sorcery:" />
              <BlogPara title="Collaboration is the magic spell that makes our team shine. We believe in the power of synergy, combining each team member's unique talents and perspectives. When you work with us, you're not just getting one designer but a collective hive mind of creativity, innovation, and problem-solving skills." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="User-Obsessed Mindset:" />
              <BlogPara title="We put your users at the heart of everything we do. Our team takes the time to understand your target audience, their preferences, and their needs. We'll create a website that looks fantastic and delivers an unforgettable user experience. We want your visitors to feel like they've stumbled upon an online paradise, not a digital labyrinth." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Pixel-Perfect Attention to Detail:" />
              <BlogPara title="We have a love affair with pixels. Our designers obsess over every single detail, ensuring that your website is a pixel-perfect masterpiece. From the alignment of elements to the color palette and typography, no pixel is left unpolished. We take pride in our craftsmanship, ensuring your website stands out from the digital crowd." />
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
            title="Why is Good Looking Website?"
          />
            <Heading
              className="yellow-gr text-xl md:text-2xl lg:text-5xl font-bold"
              title=" So Necessary"
            />
        </div>

        <Container>
          <div className="flex flex-wrap px-5 xl:px-0 gap-y-7 lg:gap-y-10 justify-between">
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="First Impressions Matter:"
              />
              <BlogPara title="Your website is often the first point of contact between your business and potential customers. A visually stunning website instantly captures attention and creates a positive first impression. It signals professionalism, credibility, and attention to detail, which can instill trust and confidence in your brand." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Reflects Your Brand Identity:"
              />
              <BlogPara title="A well-designed website showcases your brand's personality and unique identity. It allows you to convey your brand message, values, and story effectively. When your website aligns with your brand image, it helps build a strong brand identity and enhances brand recognition among your target audience." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Engages and Captivates Visitors:
                "
              />
              <BlogPara title="A visually appealing website captivates visitors, enticing them to explore and spend more time on your site. Engaging visuals, compelling graphics, and intuitive design elements can create an immersive experience that keeps visitors hooked. The longer visitors stay on your site, the more opportunities you have to communicate your message and convert them into customers.
              " />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Differentiating from Competitors:
                "
              />
              <BlogPara title="In today's crowded digital landscape, standing out is crucial. A beautifully designed website helps you differentiate your business from others in your industry. It allows you to showcase your unique selling points, highlight your competitive advantages, and position yourself as a leader in your field." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Enhances User Experience:"
              />
              <BlogPara title="A well-designed website focuses on providing a seamless and enjoyable user experience. Intuitive navigation, clear calls to action, and visually organized content make it easy for visitors to find what they want and take the desired actions. A positive user experience increases engagement, lower bounce rates, and higher conversion rates." />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoxSectionForWeb;
