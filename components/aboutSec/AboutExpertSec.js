import Image from 'next/image'
import Container from '../layout/Container'
import Heading from '../layout/Heading'
import SubHeading from '../layout/SubHeading'
import Para from '../layout/Para'



const AboutExpertSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-20">
      <Container>
        <div>
          <div className="w-[65%] mx-auto">
            <SubHeading
              className="text-center text-xl text-yellow font-pop font-bold"
              title="EXPERTS"
            />
            <Heading
              className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
              title="Meet With Our Experts"
            />
            <div className="w-[70%] mx-auto">
              <Para
                className="text-center text-lg text-para font-inter pb-8"
                title="In our daily life, people usually look for different IT services 
                for that. But from now on, no more worries,"
              />
            </div>
          </div>
          <div></div>
          <div className="flex justify-between pt-4">
            <div className="w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_1.png"
                  alt="expert_image_1"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Devon Lane"
                />
                <Para
                  className="text-md font-medium text-primary font-inter py-2"
                  title="Graphic Designer"
                />
               
              </div>
          
           
            </div>
            <div className="w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_2.png"
                  alt="expert_image_2"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="Jane Cooper"
                />
                <Para
                  className="text-md font-medium text-primary font-inter py-2"
                  title="Developer"
                />
               
              </div>
          
           
            </div>
            <div className="w-[30%] p-3 shadow-cshadow bg-white overflow-hidden rounded-lg">
              <div className="w-[100%] h-[340px] relative">
                <Image
                  fill
                  src="/assets/expert_image_3.png"
                  alt="expert_image_3"
                />
              </div>
              <div className=" rounded-b-3xl pt-12 mt-[-26px] text-center">
                <SubHeading
                  className="font-pop font-semibold text-2xl"
                  title="John Henry"
                />
                <Para
                  className="text-md font-medium text-primary font-inter py-2"
                  title="Digital Marketer SEO Specialist"
                />
               
              </div>
          
           
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutExpertSec