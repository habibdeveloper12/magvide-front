import Image from "next/image"
import SubHeading from "./SubHeading"
import Heading from "./Heading"
import Para from "./Para"
import Container from "./Container"
import ButtonP from "./ButtonP"


const AboutPartnerSec = () => {
  return (
    <Container>
    <div className="flex justify-between pt-24">
      <div className="w-2/4">
        <div className="w-[550px] h-[272px] relative">
          <Image fill src="/assets/partner_image.png" alt="partner_image" />
        </div>
      </div>
      <div className="w-2/4 pl-6">
        <SubHeading
          className="text-xl text-yellow font-pop font-bold"
          title="WHO WE ARE"
        />
        <Heading
          className="text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
          title="Your Trusted Partner For 
          All IT Solution "
        />
        <Para
          className="text-lg text-para font-inter pb-8"
          title="In our daily life, people usually look for different IT 
          services for that. But from now on, no more worries, 
          our service has the solution for everything."
        />
      </div>
    </div>
    <div className=" flex justify-between pt-4 pb-11">
        <div className="text-center p-7 w-[31%] shadow-cshadow rounded-lg">
        <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Our Mission"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
        </div>
        <div className="text-center p-7 w-[31%] shadow-cshadow rounded-lg">
        <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Our Values"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
        </div>
        <div className="text-center p-7 w-[31%] shadow-cshadow rounded-lg">
        <SubHeading
                className="text-primary font-pop font-bold text-xl pt-6 pb-4"
                title="Our Vision"
              />
              <Para
                className=" text-lg text-para font-inter"
                title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
              />
        </div>
    </div>
    <div className="text-center pb-24">
        <ButtonP title="Learn More" />
    </div>
  </Container>
  )
}

export default AboutPartnerSec