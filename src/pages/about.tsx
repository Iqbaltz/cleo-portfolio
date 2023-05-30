import { Layout } from "@/components/common/layout";
import { SocialMedia } from "@/components/common/social";
import { Hero } from "@/components/pages/about";
import Head from "next/head";
import React from "react";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Cleopatra</title>
        <meta
          name="description"
          content="I am a business development specialist and growth advisor with over 10 years’ experience in driving growth strategies for corporate and individual clients. I have worked with some of the world’s largest consulting and advisory firms across wealth management, market research and social impact."
        />
      </Head>
      <Hero />
      <SocialMedia className="!bg-[url(/images/about-social.png)]" />
    </Layout>
  );
}
