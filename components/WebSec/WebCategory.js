import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import SubHeading from '../layout/SubHeading';
import Para from '../layout/Para';
import ButtonM from '../layout/ButtonM';

const WebCategory = () => {
  return (
    <Container>
      <div className=" py-12">
        <Heading
          className="text-primary pb-14 text-5xl font-bold font-pop text-center"
          title="WEB DESIGN & DEVELOPMENT  "
        />
        <div className="flex flex-wrap justify-between gap-y-6">
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image1.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="CUSTOM WEBSITE DESIGN"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image2.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="E-COMMERCE WEBSITE DESIGN"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image3.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="WORDPRESS WEBSITE DESIGN"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image4.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="CUSTOM WEBSITE DEVELOPMENT"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image5.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="E-COMMERCE WEBSITE DEVELOPMENT"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
          <div className=" w-[32%] shadow-cshadow py-9 rounded-2xl text-center">
            <div className="w-[150px] h-[150px] relative block mx-auto">
              <Image
                fill
                src="/assets/web_icon_image6.png"
                alt="web_icon_image"
              />
            </div>
            <SubHeading
              className="text-primary font-pop font-bold text-lg pb-6 pt-8"
              title="WORDPRESS WEBSITE DEVELOPMENT"
            />
            <Para
              className=" text-lg text-para font-inter pb-7"
              title="In our daily life, people usually look for different IT 
              services for that. But from now on, no more worries, 
              our service has the solution for everything. "
            />
            <ButtonM title="Read More" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WebCategory;
