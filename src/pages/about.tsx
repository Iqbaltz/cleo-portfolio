import { Layout } from "@/components/common/layout";
import { SocialMedia } from "@/components/common/social";
import { Hero } from "@/components/pages/about";
import React from "react";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <SocialMedia className="!bg-[url(/images/about-social.png)]" />
    </Layout>
  );
}
