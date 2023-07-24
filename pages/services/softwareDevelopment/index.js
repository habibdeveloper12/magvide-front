import Layout from '@/components/layout/Layout'
import CreativeSec from '@/components/servicesSec/CreativeSec'
import SoftDevSerSec from '@/components/softwareDevSec/SoftDecSerSec'
import SoftDevCateSec from '@/components/softwareDevSec/SoftDevCateSec'
import SoftwareDevBanner from '@/components/softwareDevSec/SoftwareDevBanner'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <SoftwareDevBanner />
      <SoftDevSerSec />
      <SoftDevCateSec />
      <CreativeSec />
    </Layout>
  )
}

export default index