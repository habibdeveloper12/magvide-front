import Image from 'next/image';
import Container from '../layout/Container';
import SubHeading from '../layout/SubHeading';
import Heading from '../layout/Heading';
import Para from '../layout/Para';
import ButtonP from '../layout/ButtonP';


const CreativeSec = () => {
  return (
    <div className="py-14">
      <Container>
        <div className="w-[70%] mx-auto">
          <SubHeading
            className="text-center text-xl text-yellow font-pop font-bold"
            title="CREATIVE SERVICES"
          />
          <Heading
            className="text-center leading-[64px] text-primary py-5  text-5xl font-bold font-pop "
            title="We Are A Full-Stack Digital Creative
          Consulting Agency"
          />
          <div className="mx-auto">
            <Para
              className="text-center text-lg text-para font-inter pb-8"
              title="In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have"
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-y-8 py-8">
          <div className="w-[31.5%] px-7 py-14 rounded-md text-center bg-primaryBg">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/graphics_icon_image.png"
                alt="graphics_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-xl pt-6 pb-4"
              title="GRAPHICS DESIGN"
            />
            <Para
              className="text-md  font-light text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[31.5%] px-6 py-14 rounded-md text-center  bg-primary">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/uxdesign_icon_image.png"
                alt="uxdesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-white font-pop font-bold text-xl pt-6 pb-4"
              title="UI&UX DESIGN"
            />
            <Para
              className=" text-md  font-light text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[31.5%] px-6 py-14 rounded-md text-center   bg-primaryBg">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/motiondesign_icon_image.png"
                alt="motiondesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-xl pt-6 pb-4"
              title="MOTION DESIGN"
            />
            <Para
              className=" text-md  font-light text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[31.5%] px-6 py-14 rounded-md text-center bg-primary">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/2D&3Ddesign_icon_image.png"
                alt="2D&3Ddesign_icon_image"
              />
            </div>
            <SubHeading
              className="text-white font-pop font-bold text-xl pt-6 pb-4"
              title="2D & 3D DESIGN"
            />
            <Para
              className=" text-md  font-light text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[31.5%] px-6 py-14 rounded-md text-center  bg-primaryBg">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/3Danimation_icon_image.png"
                alt="3Danimation_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-xl pt-6 pb-4"
              title="3D ANIMATION"
            />
            <Para
              className=" text-md  font-light text-para font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
          <div className="w-[31.5%] px-6 py-14 rounded-md text-center bg-primary">
            <div className="w-[150px] h-[150px] relative mx-auto">
              <Image
                fill
                src="/assets/3Dmodeling_icon_image.png"
                alt="3Dmodeling_icon_image"
              />
            </div>
            <SubHeading
              className="text-white font-pop font-bold text-xl pt-6 pb-4"
              title="3D MODELING"
            />
            <Para
              className=" text-md  font-light text-white font-inter"
              title="In our daily life, people usually look for different IT services for that. But from nowon, no more worries."
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <ButtonP title="Read More" />
        </div>
      </Container>
    </div>
  );
};

export default CreativeSec;
