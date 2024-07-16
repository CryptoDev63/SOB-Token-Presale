import { Fragment } from "react";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Header from "@sections/Header/Header";

import LeftBackground from "@assets/images/left-background.png";
import RightBackground from "@assets/images/right-backgroud.png";

import Introduction from "src/sections/BodyContent/Introduction";
import Contribute from "src/sections/BodyContent/Contribute";

export default function ContributePage() {
  return (
    <Fragment>
      <SEO title="$SOB" />
      <Layout>
        <div className="h-screen">
          <div className="fixed flex">
            <img className="w-1/2 border-r border-solid border-[#FF56F6]" src={LeftBackground.src} alt="LeftBackground" />
            <img className="w-1/2" src={RightBackground.src} alt="RightBackground" />
          </div>
          <Header />
          <div className="flex w-screen h-screen pt-24">
            <Introduction />
            <Contribute />
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
