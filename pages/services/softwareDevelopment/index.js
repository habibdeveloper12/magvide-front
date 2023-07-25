import Layout from '@/components/layout/Layout';
import CreativeSec from '@/components/servicesSec/CreativeSec';
import SoftDevSerSec from '@/pages/services/softwareDevelopment/softwareDevSec/SoftDecSerSec';
import SoftDevCateSec from '@/pages/services/softwareDevelopment/softwareDevSec/SoftDevCateSec';
import SoftwareDevBanner from '@/pages/services/softwareDevelopment/softwareDevSec/SoftwareDevBanner';
import React from 'react';

const index = () => {
  return (
    <Layout>
      <SoftwareDevBanner />
      <SoftDevSerSec />
      <SoftDevCateSec />
      <CreativeSec />
    </Layout>
  );
};

export default index;
