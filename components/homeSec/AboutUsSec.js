import Image from "next/image";
import Container from "../layout/Container";
import SubHeading from "../layout/SubHeading";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import ButtonP from "../layout/ButtonP";
import Link from "next/link";

const AboutUsSec = () => {
  return (
    <Container>
      <div className="sm:flex justify-between items-center px-3 sm:px-5 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className=" w-[100%] sm:w-[45%] lg:w-2/4">
          <div className="mx-auto w-[100%] h-[340px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] relative">
            <Image fill src="/assets/home_about_sec_image.gif" alt="aboutus_image" />
          </div>
        </div>
        <div className="sm:w-[45%] lg:w-2/4 sm:pl-5 mt-9 sm:mt-0">
          <SubHeading
            className="text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
            title="ABOUT US"
          />
          <Heading
            className=" text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="We Are A One-Stop Shop For All IT Solutions "
          />
          <Para
            className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-4 md:pb-6 lg:pb-10"
            title="Welcome to Magivde, a leading digital marketing agency that specializes in providing comprehensive solutions to enhance your online presence. With a wide range of services spanning digital marketing, search engine optimization, social media marketing, and web design and development.
            "
          />
          <Link href="/aboutus" >
          <ButtonP title="Learn More" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSec;
