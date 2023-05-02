import AboutBannerSec from "@/components/aboutSec/AboutBannerSec";
import AboutChosseSec from "@/components/aboutSec/AboutChosseSec";
import AboutExpertSec from "@/components/aboutSec/AboutExpertSec";
import AboutMsgSec from "@/components/aboutSec/AboutMsgSec";
import AboutPartnerSec from "@/components/aboutSec/AboutPartnerSec";
import AboutSkillSec from "@/components/aboutSec/AboutSkillSec";
import Layout from "@/components/layout/Layout";


const aboutus = () => {
  return (
    <Layout>
      <AboutBannerSec />
      <AboutPartnerSec />
      <AboutChosseSec />
      <AboutSkillSec />
      <AboutExpertSec />
      <AboutMsgSec />
    </Layout>
  );
};

export default aboutus;
