import WebBanner from "@/components/WebSec/WebBanner"
import WebCategory from "@/components/WebSec/WebCategory"
import WebServiceSec from "@/components/WebSec/WebServiceSec"
import Layout from "@/components/layout/Layout"
import CreativeSec from "@/components/servicesSec/CreativeSec"


function webDesingDev() {
  return (
    <Layout>
      <WebBanner />
      <WebServiceSec />
      <WebCategory />
      <CreativeSec />
    </Layout>
  )
}

export default webDesingDev