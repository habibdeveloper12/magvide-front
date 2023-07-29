import React from 'react';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import BlogHeading from '@/components/layout/BlogHeading';
import Heading from '@/components/layout/Heading';
import BlogSubHeading from '@/components/layout/BlogSubHeading';
import BlogPara from '@/components/layout/BlogPara';
import Para from '@/components/layout/Para';

const BoxSectionForSoftware = () => {
  return (
    <>
      <div className="px-3 md:px-5 xl:px-0">
        <Container>
          <BlogHeading title="How Does Magvide’s Search Engine Marketing Do Their Work?" />

          <div className="flex flex-wrap justify-between gap-y-4 ">
          <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <BlogSubHeading title="Understanding Your Vision:" />
              <BlogPara title="Our dedicated team of skilled developers and designers takes the time to understand your vision, brand identity, and target audience. We collaborate closely with you to analyze your business needs, user expectations, and industry trends, ensuring that our developed app perfectly encapsulates your vision and resonates with your target market." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">
              <BlogSubHeading title="Tailored Solutions for Enhanced Performance:" />
              <BlogPara title="We believe that one size does not fit all in app development. That's why we follow a personalized approach, tailoring every aspect of the app to align with your unique business needs. From the user interface (UI) and user experience (UX), design to the backend functionality, we ensure that every element is meticulously crafted to deliver a seamless and intuitive app experience. " />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Cutting-Edge Technology:" />
              <BlogPara title="Our team stays updated with industry trends and cutting-edge technologies to provide forward-thinking solutions. Whether you need an app for iOS, Android, or cross-platform compatibility, we have the expertise to leverage the most suitable frameworks, programming languages, and development tools to bring your app to life." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Agile Development Methodology:" />
              <BlogPara title="We follow an agile development methodology, breaking down the development process into iterative sprints. This allows for flexibility, collaboration, and continuous feedback, ensuring that your app evolves throughout the development cycle and meets your evolving business needs." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Quality Assurance and Testing:" />
              <BlogPara title="To guarantee a flawless user experience, we conduct rigorous quality assurance testing at every stage of development. Our team performs comprehensive testing across multiple devices, screen resolutions, and operating systems to ensure optimal performance, security, and stability of your app." />
            </div>
            <div className=" w-100% sm:w-[47%] md:w-[30%]  ">

              <BlogSubHeading title="Seamless Deployment and Ongoing Support:" />
              <BlogPara title="Once your app is developed and rigorously tested, we assist with seamless deployment to your chosen app stores or distribution platforms. We provide ongoing support and maintenance, ensuring your app stays up-to-date, secure, and optimized for an ever-evolving digital landscape." />
            </div>

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
          <BlogPara
            title="So, there you have it—Magvide's SEM marketing process, served with a side of humor! We believe that a little laughter goes a long way in making the world of digital marketing a more enjoyable and engaging experience. And remember, with Magvide by your side, your SEM journey will be a delightful adventure filled with keywords, ad space battles, and the sweet sound of revenue triumphing over PPC costs. Let's embark on this laughter-filled quest together. "
          />
        </Container>
      </div>

      <div className="bg-[#F0FBFF] pb-16 mt-10">
        <div className="flex justify-center gap-x-1 md:gap-x-4 py-10 sm:py-16">
          <Heading
            className="text-primary  text-xl md:text-2xl lg:text-4xl font-bold"
            title="Why Does Your Business Need "
          />
            <Heading
              className="yellow-gr text-xl md:text-2xl lg:text-4xl font-bold"
              title="Custom App Development?"
            />
        </div>

        <Container>
          <div className="flex flex-wrap px-5 xl:px-0 gap-y-7 lg:gap-y-10 justify-between">
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Tailored to Your Business Needs:"
              />
              <BlogPara title="Off-the-shelf apps may not fully meet your business's unique requirements and objectives. Custom app development allows you to create a tailored solution for your specific challenges, workflows, and goals. It provides a personalized experience for your customers and streamlines internal processes, enhancing efficiency and productivity." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Competitive Advantage:"
              />
              <BlogPara title="A custom app sets your business apart from competitors by offering unique features and functionalities designed specifically for your target audience. It allows you to differentiate yourself in the market, attract more users, and build brand loyalty. Customization allows you to adapt to changing market demands and stay ahead of the competition." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Enhanced User Experience:
                "
              />
              <BlogPara title="User experience plays a vital role in the success of any app. Custom app development enables you to create a seamless and intuitive user interface, ensuring a positive user experience. By understanding your target audience and their preferences, you can design an app that provides a delightful and engaging experience, increasing customer satisfaction and retention.
              " />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Scalability and Flexibility:
                "
              />
              <BlogPara title="As your business grows, so do your requirements. Custom apps can be designed to scale your business, accommodating increased user demand and expanding functionalities. You can add new features, integrate with other systems, and adapt to changing business needs, ensuring your app remains relevant and effective in the long run." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Data Security and Privacy:"
              />
              <BlogPara title="Custom app development allows you to prioritize data security and privacy based on your specific industry regulations and compliance requirements. You can implement robust security measures and data encryption techniques to safeguard sensitive information, giving your customers peace of mind and establishing trust in your brand." />
            </div>
            <div className="w-[100%] sm:w-[48%] py-10 px-7 lg:px-10 bg-white shadow-cshadow rounded-md">
              <Heading
                className=" text-center text-primary py-2 sm:py-3 md:py-1 lg:py-1 xl:py-1 lg:leading-[44px] xl:leading-[64px]    text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-pop"
                title="Integration Capabilities:"
              />
              <BlogPara title="Custom apps can be seamlessly integrated with existing systems and software used within your organization. Whether integrating with customer relationship management (CRM) tools, inventory management systems, or payment gateways, custom app development enables smooth data flow. It eliminates manual data entry, saving time and reducing errors." />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BoxSectionForSoftware;
