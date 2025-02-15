import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import PrincipalsMessageContent from "@/components/sections/PrincipalsMessageContent";
import React from "react";

function PrincipalMessage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Principal Message">
      {/* Princiapls Message Component*/}
      <About1 />
      <PrincipalsMessageContent />
    </Layout>
  );
}

export default PrincipalMessage;
