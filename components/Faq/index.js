import React from "react";
import Layout from "../layout/Layout";
import FaqBanner from "./FaqBanner";
import FaqSection from "./FaqSection";

const FaqComponent = () => {
  return (
    <div>
      {" "}
      <Layout>
        <FaqBanner />
        <div className="w-[80%] mx-auto">
          {" "}
          <FaqSection />
        </div>
      </Layout>
    </div>
  );
};

export default FaqComponent;
