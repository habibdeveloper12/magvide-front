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
        <div className="flex justify-center items-center gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-20">
          <div className="w-[28px] h-[30px] sm:w-[37px] sm:h-[40px] lg:w-[56px] lg:h-[61px] relative">
            <Image fill src="/bank.png" alt="bank-image" />
          </div>
          <div className="w-[80px] h-[16px] sm:w-[120px] sm:h-[24px] lg:w-[164px] lg:h-[33px] relative">
            <Image fill src="/visa.png" alt="visa-image" />
          </div>

          <div className="w-[45px] h-[27px] sm:w-[60px] sm:h-[36px] lg:w-[107px] lg:h-[65px] relative">
            <Image fill src="/mastercard.png" alt="mastercard-image" />
          </div>
          <div className="w-[60px] h-[33px] sm:w-[85px] sm:h-[47px] lg:w-[109px] lg:h-[60px] relative">
            <Image fill src="/assets/payoner-image.png" alt="payoner-image" />
          </div>
          <div className="w-[61px] h-[30px] sm:w-[95px] sm:h-[47px] lg:w-[130px] lg:h-[64px] relative">
            <Image fill src="/taptap.png" alt="taptap-image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSec;
