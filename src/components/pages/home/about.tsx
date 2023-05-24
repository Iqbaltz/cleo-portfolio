import { Button } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="bg-primary flex justify-between">
      <div className="text-white w-full px-4 py-12 lg:px-0 lg:py-0 lg:w-2/3 flex justify-center items-center">
        <div className="max-w-[620px]">
          <h1 className="font-medium text-2xl mb-4">
            Cleopatra Ogharadukun is a highly accomplished business development
            specialist and growth advisor with more than 10 years of experience{" "}
          </h1>
          <p className="mb-8 text-lg">
            With a proven track record in driving growth strategies for both
            corporate and individual clients, Cleopatra has worked with some of
            the world&apos;s largest consulting and advisory firms across
            various industries, including wealth management, market research,
            and social impact. Work with Cleopatra to achieve your business
            goals and accelerate your growth.
          </p>
          <Link href="/about">
            <Button className="!bg-black">Learn more</Button>
          </Link>
        </div>
      </div>
      <div className="relative hidden lg:block ">
        <Image
          src={"/images/about.png"}
          quality={100}
          width={634.82}
          height={824.67}
          alt="about"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 z-10" />
      </div>
    </section>
  );
}
