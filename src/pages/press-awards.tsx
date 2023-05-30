import { Layout } from "@/components/common/layout";
import { Awards, Header } from "@/components/pages/press-awards";
import Head from "next/head";
import React from "react";

export default function PressAndAwards() {
  return (
    <Layout>
      <Head>
        <title>Press and Awards</title>
      </Head>
      <Header />
      <Awards />
    </Layout>
  );
}
