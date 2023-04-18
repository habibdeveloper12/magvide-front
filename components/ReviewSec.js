import Container from "./Container"
import Heading from "./Heading"
import SubHeading from "./SubHeading"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import {GrNext, GrPrevious} from 'react-icons/gr'
import Image from "next/image";
import Para from "./Para";
import ButtonP from "./ButtonP";




const ReviewSec = () => {
    function SampleNextArrow(props) {
        const {  style, onClick } = props;
        return (
          <div
          className=" absolute top-[45%] right-[-10px] !inline-block z-10"
            style={{ ...style,}}
            onClick={onClick}
          ><GrNext className="text-4xl" /></div>
        );
      }
      function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            className=" absolute top-[45%] left-[-40px] !inline-block z-10"
            style={{ ...style }}
            onClick={onClick}
          ><GrPrevious className="text-4xl" /></div>
        );
      }

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className="py-20">

    <Container>
          <div className="w-[65%] mx-auto">
            <SubHeading
              className="text-center text-xl text-yellow font-pop font-bold"
              title="REVIEWS"
            />
            <Heading
              className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
              title="Some Sweet Talks Of Our 
              Happy Clients"
            />
           
          </div>
          <div className="ml-10">
            
          <Slider {...settings}>
       
            
          <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
            <div className="flex items-center gap-5">
              <div className="w-[75.5px] h-[75.5px] relative">
                <Image fill src='/assets/review-image1.png' alt='review-image' />
              </div>
              <div>
                <Heading title='Danial potter' className='text-lg font-bold' />
                <SubHeading title='Product designer' className='text-lg' />
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
                <Image fill src='/assets/review-star-image.png' alt='review-start-image' />
              </div>

          </div>
          <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
            <div className="flex items-center gap-5">
              <div className="w-[75.5px] h-[75.5px] relative">
                <Image fill src='/assets/review-image2.png' alt='review-image' />
              </div>
              <div>
                <Heading title='Alison Dawn' className='text-lg font-bold' />
                <SubHeading title='Developer' className='text-lg' />
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
                <Image fill src='/assets/review-star-image.png' alt='review-start-image' />
              </div>

          </div>
          <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
            <div className="flex items-center gap-5">
              <div className="w-[75.5px] h-[75.5px] relative">
                <Image fill src='/assets/review-image3.png' alt='review-image' />
              </div>
              <div>
                <Heading title='Albert Cole' className='text-lg font-bold' />
                <SubHeading title='Designer' className='text-lg' />
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
                <Image fill src='/assets/review-star-image.png' alt='review-start-image' />
              </div>

          </div>
          <div className="max-w-[90%] rounded-xl p-6 shadow-cshadow my-7 mx-1">
            <div className="flex items-center gap-5">
              <div className="w-[75.5px] h-[75.5px] relative">
                <Image fill src='/assets/review-image2.png' alt='review-image' />
              </div>
              <div>
                <Heading title='Alison Dawn' className='text-lg font-bold' />
                <SubHeading title='Developer' className='text-lg' />
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
                <Image fill src='/assets/review-star-image.png' alt='review-start-image' />
              </div>

          </div>
       
            </Slider>
          </div>
          <div className="mt-16 text-center">
            <ButtonP title="View All..." />
          </div>
    </Container>
    </div>
  )
}

export default ReviewSec