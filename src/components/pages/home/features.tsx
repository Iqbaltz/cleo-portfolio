import { Button } from "@/components/common/button";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Mindset Mastery for Leaders",
    description:
      "Unlock your full potential as a corporate executive or business owner with our mindset management program designed to cultivate a can-do and positive outlook.",
    icon: "/svg/mindset.svg",
  },
  {
    title: "Communicate your Value",
    description:
      "Learn how to present yourself and your business with the right mix of written and visual communication; to accelerate your brand growth and create authority in your niche.",
    icon: "/svg/megaphone.svg",
  },
  {
    title: "Accelerate Your Growth",
    description:
      "Achieve sustainable professional and business  growth with our practical strategies and measurable results program that covers marketing, sales, operations, and finance.",
    icon: "/svg/growth.svg",
  },
];

export default function Features() {
  return (
    <section className="bg-secondary px-4 lg:px-0 py-12 lg:py-20">
      <h1 className="idealist text-primary text-3xl lg:text-4xl text-center">
        Achieve Professional and Business Growth
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center py-8 lg:py-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[320px] mb-6 lg:mb-0 lg:mx-4 p-8 bg-white shadow-md"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-20 mx-auto"
            />
            <h2 className="text-primary font-medium mb-1 mt-6">
              {feature.title}
            </h2>
            <p className="text-light">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/solutions">
          <Button>Learn more</Button>
        </Link>
      </div>
    </section>
  );
}
