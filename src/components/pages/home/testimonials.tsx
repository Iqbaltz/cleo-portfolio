import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Tola Gbenle",
    title: "Managing Partner, Bespoke Adventours UAE",
    description: `My engagement with Cleo has been remarkable. Her experience and professionalism, which she 
      brought to the table, has been outstanding. She was always available at every request. Overall, 
      I'm way more than pleased with her service. And more so, I look forward to working with her 
      moving forward`,
  },
  {
    name: "Maxwell Asare",
    title: "Managing Director, Auto Trader Ghana",
    description: `Great work! Cleo carried out extensive research on all information needed to complete the work 
    we asked for. My company for sure would work with Cleo again for her professionalism, 
    relentless willingness to ensure she delivered the job on time. Thank you again.`,
  },
  {
    name: "Phindile Nxumalo",
    title: "Communications Director, R.E.S.T.O.R.E Worldwide Inc",
    description: `The service that I received from Cleopatra was astonishing, what a pleasure it was working with 
    her! She is an excellent writer and a fantastic communicator that uses logic, her command of the 
    English language is exceptional! She understood the brief and her delivery was very professional. 
    She surpassed all my expectations and I look forward to working with her again in the very near 
    future!`,
  },
];

export default function Tetimonials() {
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    setShowArrows(window.innerWidth > 768);
    const handleResize = () => {
      setShowArrows(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
  };

  return (
    <section className="py-16 text-center">
      <h1 className="idealist text-4xl mb-8 text-center text-primary">
        What my clients say
      </h1>
      <img src="/svg/quote.svg" alt="quote" className="mx-auto" />
      <Slider {...settings} className="lg:w-[720px] mx-auto my-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-8 mb-4 mt-2">
            <p>{testimonial.description}</p>
            <h1 className="font-semibold mt-4">{testimonial.name}</h1>
            <p className="text-xs text-light">{testimonial.title}</p>
          </div>
        ))}
      </Slider>
      <Link href="/praise" className="inline-block mt-8 text-primary underline">
        See more
      </Link>
    </section>
  );
}
