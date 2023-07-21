import Image from "next/image";
import ButtonP from "../layout/ButtonP";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Para from "../layout/Para";
import SubHeading from "../layout/SubHeading";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-primaryBg">
      <Container>
        <div className="sm:flex justify-between pt-1 pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5">
          <div className="w-[95%] sm:w-2/4 mt-10 mb-6 sm:mb-28 md:mt-16 md:mb-36 lg:mt-20 lg:mb-40">
            <SubHeading
              className="text-sm sm:text-base md:text-lg lg:text-xl yellow-gr font-pop font-bold"
              title="Services Offered by IT Service Companies"
            />
            <Slider {...settings}>
              <div>
                <Heading
                  className="text-primary py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-pop"
                  title="Unleashing Digital Success with the Power of Marketing, Design, and Development."
                />
              </div>
              <div>
                <Heading
                  className="text-primary py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-pop"
                  title="Hungry For Challenges
                  Impact and More!"
                />
              </div>
            </Slider>

            <Para
              className=" text-sm sm:text-base lg:text-lg text-para font-inter pb-4 md:pb-6 lg:pb-10"
              title="Harness the power of our expertise, and we'll magnify your returns twofold. No empty promises, just dedicated work that speaks volumes through your account manager. Unlock your business's potential and become the town's talk with Magvide by your side. Let's create digital marketing magic together."
            />
            <div className="flex gap-4">
              <ButtonP title="Get Started" />
            </div>
          </div>
          <div className="w-[90%] sm:w-2/4 md:mt-16 lg:mt-20">
            <div className="relative  w-[100%] h-[320px] lg:w-[461px] lg:h-[461px] mx-auto my-auto">
              <Image fill src="/home-1.gif" alt="banner-image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
