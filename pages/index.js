import AboutUsSec from '@/components/AboutUsSec';
import Banner from '@/components/Banner';
import BannerBottom from '@/components/BannerBottom';
import Layout from '@/components/Layout';
import ServiceSec from '@/components/ServiceSec';

export default function Home() {
  return (
    <>
      <Layout navbg="bg-primaryBg">
        <Banner />
        <BannerBottom />
        <AboutUsSec />
        <ServiceSec />
      </Layout>
    </>
  );
}
