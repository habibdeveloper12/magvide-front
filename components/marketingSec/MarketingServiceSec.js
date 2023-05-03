import Image from "next/image"
import Container from "../layout/Container"
import SubHeading from "../layout/SubHeading"
import Heading from "../layout/Heading"
import Para from "../layout/Para"
import ButtonP from "../layout/ButtonP"


const MarketingServiceSec = () => {
  return (
    <Container>
    <div className="flex justify-between py-24">
      <div className="w-2/4">
        <div className="w-[515px] h-[430px] relative block">
          <Image fill src="/assets/marketingService_image.png" alt="aboutus_image" />
        </div>
      </div>
      <div className="w-2/4 pl-6">
        <SubHeading
          className="text-xl text-yellow font-pop font-bold"
          title="Our Services Category"
        />
        <Heading
          className="text-primary py-6 text-5xl font-bold font-pop"
          title="DIGITAL MARKETING "
        />
        <Para
          className="text-lg text-para font-inter pb-8"
          title="In our daily life, people usually look for different IT In our daily life, people usually look for different IT services for that. But from now on, no more worries, our service has the solution for everything. We have been providing honest service for years. services for that. But from now on, no more worries, our service has the solution for everything. We havebeen providing honest service for years."
        />
        <ButtonP title="Read More" />
      </div>
    </div>
  </Container>
  )
}

export default MarketingServiceSec