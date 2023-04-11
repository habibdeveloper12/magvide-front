import Container from "./Container";
import Para from "./Para";
import SubHeading from "./SubHeading";
import {GiCheckMark} from 'react-icons/gi'
import {FcManager} from 'react-icons/fc'
import {AiFillWechat} from 'react-icons/ai'

const BannerBottom = () => {
  return (
    <div className="mt-[-70px]">

    <Container>
      <div className="flex shadow-cshadow py-8 rounded-2xl bg-white">
        <div className="w-2/6 flex items-center gap-x-3 justify-center">
          <GiCheckMark className="text-4xl text-green-600" />
          <div>
            <SubHeading
              className="text-primary font-medium font-pop text-4xl mb-1"
              title="Success Stories"
            />
            <Para className="text-lg text-para font-inter" title="100% Success" />
          </div>
        </div>
        <div className="w-2/6 flex items-center gap-x-3 justify-center">
          <FcManager className="text-4xl" />
          <div>
            <SubHeading
              className="text-primary font-medium font-pop text-4xl mb-1"
              title="Expert Employee"
            />
            <Para
              className="text-para font-inter"
              title="All Employees Are Expert"
            />
          </div>
        </div>
        <div className="w-2/6 flex items-center gap-x-3 justify-center">
          <AiFillWechat className="text-4xl text-[#0084FF]" />
          <div>
            <SubHeading
              className="text-primary font-medium font-pop text-4xl mb-1"
              title="Collaboration"
            />
            <Para className="text-para font-inter" title="Good Collaboration" />
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default BannerBottom;
