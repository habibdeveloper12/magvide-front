import CreativeServicesSec from "@/components/creativeSec/CreativeServicesSec"
import CreativerBanner from "@/components/creativeSec/CreativerBanner"
import Layout from "@/components/layout/Layout"
import CreativeSec from "@/components/servicesSec/CreativeSec"


const creativeServices = () => {
  return (
    <Layout>
    <CreativerBanner />  
    <CreativeServicesSec />
    <CreativeSec />
</Layout>
  )
}

export default creativeServices