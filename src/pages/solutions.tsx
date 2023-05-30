import { Layout } from "@/components/common/layout";
import { SocialMedia } from "@/components/common/social";
import { Offer, Services } from "@/components/pages/solutions";
import Head from "next/head";
import React from "react";

export default function SolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>Solutions</title>
      </Head>
      <Offer />
      <Services />
      <SocialMedia
        className="!bg-[url(/images/solutions-social.png)]"
        position="end"
      />
    </Layout>
  );
}
