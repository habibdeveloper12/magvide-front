import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';

const ReviewSec = () => {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className=" absolute top-[45%] right-[-2px] lg:right-[33%] !inline-block z-50"
        style={{ ...style }}
        onClick={onClick}
      >
        <GrNext className="text-3xl" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className=" absolute top-[45%] left-[-30px] lg:left-[30.5%] !inline-block z-50"
        style={{ ...style }}
        onClick={onClick}
      >
        <GrPrevious className="text-3xl" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" py-10 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div className="w-[75%] md:w-[65%] mx-auto">
          <SubHeading
            className="text-center text-sm md:text-base lg:text-lg xl:text-xl yellow-gr font-pop font-bold"
            title="REVIEWS"
          />
          <Heading
            className=" text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
            title="Some Sweet Talks Of Our 
              Happy Clients"
          />
        </div>
        <div className="ml-10 lg:relative">
            <div className=" hidden lg:block w-[31%] h-[100%] z-40  bg-white/[.7] left-0 absolute"></div>
            <div className=" hidden lg:block w-[33%] h-[100%] z-40  bg-white/[.7] absolute right-0"></div>
          <Slider {...settings}>
            <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
              <div className="flex items-center gap-5">
                <div className="w-[75.5px] h-[75.5px] relative ">
                  <Image
                    fill
                    src="/assets/review-image1.png"
                    alt="review-image"
                  />
                </div>
                <div>
                  <Heading
                    title="Danial potter"
                    className="text-lg font-bold"
                  />
                  <SubHeading title="Product designer" className="text-lg" />
                </div>
              </div>
              <Para
                className=" text-md text-para font-inter py-7 leading-8"
                title="I Believe in Lifelong learning and this is
                a great place to learn from experts. I have
                learned a lot and recommended it to all my
                friends."
              />
              <div className="w-[167.20px] h-[21.40px] relative">
                <Image
                  fill
                  src="/assets/review-star-image.png"
                  alt="review-start-image"
                />
              </div>
            </div>
            <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
              <div className="flex items-center gap-5">
                <div className="w-[75.5px] h-[75.5px] relative">
                  <Image
                    fill
                    src="/assets/review-image2.png"
                    alt="review-image"
                  />
                </div>
                <div>
                  <Heading title="Alison Dawn" className="text-lg font-bold" />
                  <SubHeading title="Developer" className="text-lg" />
                </div>
              </div>
              <Para
                className=" text-md text-para font-inter py-7 leading-8"
                title="I Believe in Lifelong learning and this is
                a great place to learn from experts. I have
                learned a lot and recommended it to all my
                friends."
              />
              <div className="w-[167.20px] h-[21.40px] relative">
                <Image
                  fill
                  src="/assets/review-star-image.png"
                  alt="review-start-image"
                />
              </div>
            </div>
            <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
              <div className="flex items-center gap-5">
                <div className="w-[75.5px] h-[75.5px] relative">
                  <Image
                    fill
                    src="/assets/review-image3.png"
                    alt="review-image"
                  />
                </div>
                <div>
                  <Heading title="Albert Cole" className="text-lg font-bold" />
                  <SubHeading title="Designer" className="text-lg" />
                </div>
              </div>
              <Para
                className=" text-md text-para font-inter py-7 leading-8"
                title="I Believe in Lifelong learning and this is
                a great place to learn from experts. I have
                learned a lot and recommended it to all my
                friends."
              />
              <div className="w-[167.20px] h-[21.40px] relative">
                <Image
                  fill
                  src="/assets/review-star-image.png"
                  alt="review-star-image"
                />
              </div>
            </div>
            <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
              <div className="flex items-center gap-5">
                <div className="w-[75.5px] h-[75.5px] relative">
                  <Image
                    fill
                    src="/assets/review-image2.png"
                    alt="review-image"
                  />
                </div>
                <div>
                  <Heading title="Alison Dawn" className="text-lg font-bold" />
                  <SubHeading title="Developer" className="text-lg" />
                </div>
              </div>
              <Para
                className=" text-md text-para font-inter py-7 leading-8"
                title="I Believe in Lifelong learning and this is
                a great place to learn from experts. I have
                learned a lot and recommended it to all my
                friends."
              />
              <div className="w-[167.20px] h-[21.40px] relative">
                <Image
                  fill
                  src="/assets/review-star-image.png"
                  alt="review-star-image"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="mt-4 sm:mt-8 md:mt-12 lg:mt-16 text-center">
          <ButtonP title="View All..." />
        </div>
      </Container>
    </div>
  );
};

export default ReviewSec;
