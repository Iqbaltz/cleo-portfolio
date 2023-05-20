import { Button } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function hero() {
  return (
    <section className="flex justify-between relative" id="hero">
      <div className="flex items-center relative justify-center w-1/2 px-24 min-h-screen">
        <Image
          src="/images/hero.png"
          quality={100}
          priority={true}
          height={693}
          width={540}
          alt="hero"
        />
        <div className="absolute h-[693px] w-[540px] bg-secondary -bottom-40 left-0 -z-10"></div>
      </div>
      <div className="flex flex-col w-1/2 justify-between py-40 pl-16 pr-20">
        <div className="mt-8">
          <h1 className="idealist text-6xl text-primary mb-8">
            Cleopatra Ogharadukun
          </h1>
          <p className="font-medium text-xl max-w-[560px] mb-12">
            Hi! I am Cleopatra. I work with corporate executives and small
            business owners to Develop the Right Mindset, Communicate their
            Value, and Achieve Sustainable Professional and Business Growth.
          </p>
          <Link href="/solutions">
            <Button>Work with me</Button>
          </Link>
        </div>
        <div className="flex justify-between items-end mb-8">
          <a
            href="#"
            className="text-primary font-semibold italic text-2xl max-w-[560px]"
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
        className="absolute bottom-16 right-20"
        alt="arrow"
      />
    </section>
  );
}
