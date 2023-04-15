import AboutUsSec from '@/components/AboutUsSec';
import Banner from '@/components/Banner';
import BannerBottom from '@/components/BannerBottom';
import ChooseSec from '@/components/ChooseSec';
import Layout from '@/components/Layout';
import PaymentSec from '@/components/PaymentSec';
import ReviewSec from '@/components/ReviewSec';
import ServiceSec from '@/components/ServiceSec';
import WorkSec from '@/components/WorkSec';

export default function Home() {
  return (
    <>
      <Layout navbg="bg-primaryBg">
        <Banner />
        <BannerBottom />
        <AboutUsSec />
        <ServiceSec />
        <ChooseSec />
        <WorkSec />
        <ReviewSec />
        <PaymentSec />
      </Layout>
    </>
  );
}
