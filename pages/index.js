import Banner from '@/components/Banner';
import BannerBottom from '@/components/BannerBottom';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Layout navbg="bg-primaryBg">
        <Banner />
        <BannerBottom />
      </Layout>
    </>
  );
}
