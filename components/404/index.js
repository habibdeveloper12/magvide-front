import React from "react";
import Layout from "../layout/Layout";
import Link from "next/link";

const Component404 = () => {
  return (
    <Layout>
      <div className="h-100vh">
        <Link href="/">
          <img src="Group.png" width={"80%"} />
        </Link>
      </div>
    </Layout>
  );
};

export default Component404;
