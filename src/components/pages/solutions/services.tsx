import { Button } from "@/components/common/button";
import React from "react";

const services = [
  {
    text: "Book a 15-min",
    url: "#",
    textBold: "Discovery Call",
  },
  {
    text: "Enroll in the",
    url: "#",
    textBold: "Personal Branding Course",
  },
  {
    text: "Download the",
    url: "#",
    textBold: "Professional Bio Template",
  },
  {
    text: "Download the",
    url: "#",
    textBold: "Niche Validation Workbook",
  },
  {
    text: "Download the",
    url: "#",
    textBold: "LinkedIn Optimization Guide",
  },
  {
    text: "Book me for",
    url: "#",
    textBold: "Virtual Corporate Workshop",
  },
  {
    text: "Book me as a",
    url: "#",
    textBold: "Speaker",
  },
  {
    text: "Attend a",
    url: "#",
    textBold: "Pre-recorded Webinar",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-16 lg:py-40">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-3xl selection:lg:text-4xl idealist">
          Take the first steps to achieving growth
        </h1>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-[300px] md:mx-4 bg-white shadow-md mt-6 lg:mt-12"
            >
              <div className="bg-secondary w-full h-32"></div>
              <div className="p-4 flex flex-col justify-between grow">
                <p className="text-lg font-medium mb-4">
                  {service.text} <strong>{service.textBold}</strong>
                </p>
                <a href={service.url}>
                  <Button className="py-2">Start now</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
