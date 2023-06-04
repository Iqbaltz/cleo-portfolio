import { Button } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function hero() {
  return (
    <section
      className="flex flex-col pt-32 lg:pt-0 lg:flex-row justify-between relative"
      id="hero"
    >
      <div className="flex items-center relative justify-center w-full lg:w-1/2 px-4 lg:px-24 lg:min-h-screen">
        <Image
          src="/images/hero.png"
          className="xl:w-[400px] 2xl:w-[540px]"
          quality={100}
          priority={true}
          height={693}
          width={540}
          alt="hero"
        />
        <div className="absolute h-[693px] w-full xl:h-[520px] 2xl:h-[693px] xl:w-[400px] 2xl:w-[540px] bg-secondary bottom-0 left-0 -z-10"></div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-between pb-8 2xl:pb-16 px-4 md:px-8 lg:py-40 lg:pl-16 lg:pr-20">
        <div className="mt-8 lg:mt-0 2xl:mt-8">
          <h1 className="idealist text-4xl xl:text-5xl 2xl:text-6xl text-primary mb-4 lg:mb-8">
            Cleopatra Ogharadukun
          </h1>
          <p className="font-medium lg:text-xl lg:max-w-[560px] mb-6 lg:mb-12">
            Hi! I am Cleopatra. I work with corporate executives and small
            business owners to Develop the Right Mindset, Communicate their
            Value, and Achieve Sustainable Professional and Business Growth.
          </p>
          <Link href="/solutions">
            <Button>Work with me</Button>
          </Link>
        </div>
        <div className="flex justify-between items-end mt-8 lg:mt-4 2xl:mt-0 lg:mb-8">
          <a
            href="#"
            className="text-primary font-semibold italic lg:text-2xl max-w-[560px]"
          >
            Learn how the right packaging can help you attract the best value{" "}
            <img
              src="/svg/external-link.svg"
              alt="external-link"
              className="inline-block ml-1"
            />
          </a>
        </div>
      </div>
      <img
        src="/svg/arrow-down.svg"
        className="absolute bottom-16 right-20 hidden sm:inline-block"
        alt="arrow"
      />
    </section>
  );
}
