import Layout from "@/components/layout/Layout"
import MarketingBanner from "@/components/marketingSec/MarketingBanner"
import MarketingCategory from "@/components/marketingSec/MarketingCategory"
import MarketingServiceSec from "@/components/marketingSec/MarketingServiceSec"
import CreativeSec from "@/components/servicesSec/CreativeSec"

const digitalMarketing = () => {
  return (
    <Layout>
        <MarketingBanner />  
        <MarketingServiceSec />
        <MarketingCategory />
        <CreativeSec />
    </Layout>
  )
}

export default digitalMarketing