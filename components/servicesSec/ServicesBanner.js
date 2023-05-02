import Image from 'next/image';
import Container from '../layout/Container';
import Heading from '../layout/Heading';


const ServicesBanner = () => {
  return (
    <div className="bg-primaryBg py-40 relative">
      <div className="absolute left-0 top-0">
        <div className="w-[155px] h-[550px] relative">
          <Image
            fill
            src="/assets/banner_left.png"
            alt="banner_left_angle_image"
          />
        </div>
      </div>
      <Container>
        <div className="flex justify-center gap-4">
          <Heading className="text-primary text-7xl font-bold" title="OUR" />
          <Heading
            className="text-yellow text-7xl font-bold"
            title=" SERVICES"
          />
        </div>
      </Container>
      <div className="absolute right-0 top-[-12px]">
        <div className="w-[215px] h-[502px] relative">
          <Image
            fill
            src="/assets/banner_right.png"
            alt="banner_right_angle_image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
