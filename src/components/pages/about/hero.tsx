import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex">
      <div className="flex justify-center items-center w-1/2">
        <Image
          width={520}
          height={780}
          quality={100}
          src="/images/about-hero.png"
          alt="about"
        />
        <div className="w-[520px] h-[780px] top-0 left-0 bg-primary absolute -z-10"></div>
      </div>
      <div className="flex justify-start items-center w-1/2">
        <div className="max-w-[600px]">
          <h1 className="text-4xl mb-8 font-semibold text-primary">
            Hi, I’m Cleopatra
          </h1>
          <p className="mt-4">
            My name is Cleopatra Ogharadukun, I am a business development
            specialist and growth advisor with over 10 years’ experience in
            driving growth strategies for corporate and individual clients. I
            have worked with some of the world’s largest consulting and advisory
            firms across wealth management, market research and social impact.
          </p>
          <p className="mt-4">
            Now, I work with corporate executive and small business owners to
            develop the right mindset, effectively communicate their value, and
            help them achieve sustainable business and professional growth.
          </p>
          <p className="mt-4">My keywords are Mindset | Growth | Impact</p>
          <p className="mt-4">
            The right mindset equips you with the tools to grow and expand your
            horizon, and that growth translate into impact on the world around
            you through the value you deliver, the opportunities you create, or
            the motivational ripple effect.
          </p>
          <p className="mt-4">
            My years of experience has placed me in many multicultural rooms
            with people from all works of life. For me, sales and growth are a
            game of the mind, and only the strongest and most affirmative can
            survive and thrive.
          </p>
          <p className="mt-4">
            One might ask what sales has got to do with mindset and growth. We
            are all selling something, be it yourself, your business, your idea,
            your service, or your product.
          </p>
          <p className="mt-4">It is a connected ecosystem of change.</p>
        </div>
      </div>
    </section>
  );
}
