import { Layout } from "@/components/common/layout";
import { SocialMedia } from "@/components/common/social";
import { Offer, Services } from "@/components/pages/solutions";
import React from "react";

export default function SolutionsPage() {
  return (
    <Layout>
      <Offer />
      <Services />
      <SocialMedia
        className="!bg-[url(/images/solutions-social.png)]"
        position="end"
      />
    </Layout>
  );
}
