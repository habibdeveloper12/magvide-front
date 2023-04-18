import Image from "next/image"
import Container from "./Container"
import SubHeading from "./SubHeading"
import Heading from "./Heading"
import Para from "./Para"


const AboutSkillSec = () => {
  return (
    <Container>
    <div className="flex justify-between py-24">
      <div className="w-2/4">
        <div className="w-[550px] h-[665px] relative">
          <Image fill src="/assets/skill_test_image.png" alt="skill_test_image" />
        </div>
      </div>
      <div className="w-2/4 pl-6">
        <SubHeading
          className="text-xl text-yellow font-pop font-bold"
          title="SKILL SET"
        />
        <Heading
          className="text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
          title="We Have A Set Of Skill With 
          High Quality"
        />
        <div className="mt-20 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading title='Digital Marketing' className="text-primary text-lg font-bold" />
            <Para title='85%' className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[85%] border-[#2FA5FF] absolute left-0 bottom-[-4px] rounded-2xl" ></div>
        </div>
        <div className=" mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading title='Creative Services' className="text-primary text-lg font-bold" />
            <Para title='85%' className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[98%] border-[#17BD8D] absolute left-0 bottom-[-4px] rounded-2xl" ></div>
        </div>
        <div className=" mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading title='WEB DESIGN & DEVELOPMENT' className="text-primary text-lg font-bold" />
            <Para title='85%' className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[96%] border-[#FBAE3D] absolute left-0 bottom-[-4px] rounded-2xl" ></div>
        </div>
        <div className=" mt-16 border-b-[3px] w-full border-[#bebbbb] pb-2 flex justify-between relative">
            <SubHeading title='Software & App Development' className="text-primary text-lg font-bold" />
            <Para title='85%' className="text-primary text-lg font-medium" />
            <div className="border-b-[6px] w-[92%] border-[#F54D77] absolute left-0 bottom-[-4px] rounded-2xl" ></div>
        </div>
      </div>
    </div>
   
  
  </Container>
  )
}

export default AboutSkillSec