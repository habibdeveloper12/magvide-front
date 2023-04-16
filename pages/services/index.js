import CreativeSec from '@/components/CreativeSec';
import Layout from '@/components/Layout';
import OfferSec from '@/components/OfferSec';
import ServicesBanner from '@/components/ServicesBanner';

const index = () => {
  return (
    <Layout>
      <ServicesBanner />
      <OfferSec />
      <CreativeSec />
    </Layout>
  );
};

export default index;
