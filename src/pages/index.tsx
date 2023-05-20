import { Layout } from "@/components/common/layout";
import { Newsletter } from "@/components/common/newsletter";
import { SocialMedia } from "@/components/common/social";
import { Hero, About, Features, Testimonials } from "@/components/pages/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Newsletter />
      <About />
      <Features />
      <Testimonials />
      <SocialMedia />
    </Layout>
  );
}
