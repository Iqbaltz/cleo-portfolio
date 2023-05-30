import { Layout } from "@/components/common/layout";
import { Header, Testimonials } from "@/components/pages/praise";
import Head from "next/head";
import React from "react";

export default function PraisePage() {
  return (
    <Layout>
      <Head>
        <title>Praise</title>
      </Head>
      <Header />
      <Testimonials />
    </Layout>
  );
}
