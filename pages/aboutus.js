import AboutBannerSec from "@/components/AboutBannerSec"
import AboutChosseSec from "@/components/AboutChosseSec"
import AboutExpertSec from "@/components/AboutExpertSec"
import AboutMsgSec from "@/components/AboutMsgSec"
import AboutPartnerSec from "@/components/AboutPartnerSec"
import AboutSkillSec from "@/components/AboutSkillSec"
import Layout from "@/components/Layout"


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
  )
}

export default aboutus