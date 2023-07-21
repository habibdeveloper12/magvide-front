import Image from "next/image";
import Heading from "../layout/Heading";
import Container from "../layout/Container";

const PaymentSec = () => {
  return (
    <div className="bg-[#F0FBFF] py-10 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <Heading
          className="text-center text-primary py-2 sm:py-3 md:py-4 lg:py-5 xl:py-7 lg:leading-[44px] xl:leading-[64px] text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-pop"
          title="Our Payment Gateway"
        />
        <div className="flex justify-center items-center gap-x-2 md:gap-x-10 lg:gap-x-20">
          <div className="w-[50px] h-[26px] sm:w-[50px] sm:h-[41px] lg:w-[50px] lg:h-[55px] relative">
            <Image fill src="/bank.png" alt="bank-image" />
          </div>
          <div className="w-[70px] h-[29px] sm:w-[104px] sm:h-[43px] lg:w-[144.85px] lg:h-[60px] relative">
            <Image fill src="/visa.png" alt="skrill-image" />
          </div>

          <div className="w-[50px] h-[16px] sm:w-[50px] sm:h-[24px] lg:w-[90px] lg:h-[32.50px] relative">
            <Image fill src="/mastercard.png" alt="visa-image" />
          </div>
          <div className="w-[60px] h-[33px] sm:w-[85px] sm:h-[47px] lg:w-[108.85px] lg:h-[60px] relative">
            <Image fill src="/assets/payoner-image.png" alt="payoner-image" />
          </div>
          <div className="w-[60px] h-[33px] sm:w-[85px] sm:h-[47px] lg:w-[108.85px] lg:h-[60px] relative">
            <Image fill src="/taptap.png" alt="taptap-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSec;
