import Image from 'next/image';
import Heading from '../layout/Heading';
import Container from '../layout/Container';

const PaymentSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-20">
      <Container>
        <Heading
          className="text-center text-primary py-7 leading-[64px] text-5xl font-bold font-pop"
          title="Our Payment Gateway"
        />
        <div className="flex justify-center items-center gap-20">
          <div className="w-[215.15px] h-[55px] relative">
            <Image fill src="/assets/paypal-image.png" alt="paypal-image" />
          </div>
          <div className="w-[144.85px] h-[60px] relative">
            <Image fill src="/assets/skrill-image.png" alt="skrill-image" />
          </div>
          <div className="w-[108.85px] h-[60px] relative">
            <Image fill src="/assets/payoner-image.png" alt="payoner-image" />
          </div>
          <div className="w-[163.30px] h-[32.50px] relative">
            <Image fill src="/assets/visa-image.png" alt="visa-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSec;
