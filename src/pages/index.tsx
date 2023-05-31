import { Layout } from "@/components/common/layout";
import { Newsletter } from "@/components/common/newsletter";
import { SocialMedia } from "@/components/common/social";
import { Hero, About, Features, Testimonials } from "@/components/pages/home";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cleopatra Ogharadukun</title>
        <meta
          name="description"
          content="I am a business development specialist and growth advisor with over 10 years’ experience in driving growth strategies for corporate and individual clients. I have worked with some of the world’s largest consulting and advisory firms across wealth management, market research and social impact."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Hero />
      <Newsletter />
      <About />
      <Features />
      <Testimonials />
      <SocialMedia />
    </Layout>
  );
}
