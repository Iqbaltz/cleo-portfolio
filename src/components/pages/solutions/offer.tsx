import React from "react";

type Props = {};

const offers = [
  {
    text: "Help you work on my mindset",
    icon: "/svg/mindset.svg",
    for: "corporate executives & business owners",
  },
  {
    text: "Help you communicate my value",
    icon: "/svg/talk.svg",
    for: "personal & SME brands",
  },
  {
    text: "Help you achieve professional & business growth",
    icon: "/svg/growth.svg",
    for: "personal & SME brands",
  },
];
export default function Offer({}: Props) {
  return (
    <section className="px-4 lg:px-0 pb-16 pt-40 lg:py-40 bg-secondary">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-3xl lg:text-4xl idealist">What I can offer you</h1>
        <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col text-center justify-center items-center lg:w-[340px] mb-4 lg:mb-0 lg:mx-8 p-8 bg-white shadow-md"
            >
              <img src={offer.icon} alt={offer.text} className="w-20 mx-auto" />
              <p className="text-primary font-medium mb-1 mt-6">{offer.text}</p>
              <p>(for {offer.for})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
