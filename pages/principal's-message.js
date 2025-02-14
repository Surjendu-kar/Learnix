import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import React from "react";

function PrincipalMessage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Principal Message">
      {/* Princiapls Message Component*/}
      <About1 />
    </Layout>
  );
}

export default PrincipalMessage;
