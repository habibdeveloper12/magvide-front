import OfferSec from "@/components/servicesSec/OfferSec";
import Layout from "@/components/layout/Layout";
import CreativeSec from "@/components/servicesSec/CreativeSec";
import ServicesBanner from "@/components/servicesSec/ServicesBanner";


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
