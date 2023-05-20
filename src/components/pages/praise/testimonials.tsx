import React from "react";

const testimonials = [
  {
    name: "Tola Gbenle – Managing Partner, Bespoke Adventours UAE",
    quote:
      "“My engagement with Cleo has been remarkable. Her experience and professionalism, which she brought to the table, has been outstanding. She was always available at every request. Overall, I'm way more than pleased with her service. And more so, I look forward to working with her moving forward”",
  },
  {
    name: "Maxwell Asare – Managing Director, Auto Trader Ghana",
    quote:
      "“Great work! Cleo carried out extensive research on all information needed to complete the work we asked for. My company for sure would work with Cleo again for her professionalism, relentless willingness to ensure she delivered the job on time. Thank you again.”",
  },
  {
    name: "Phindile Nxumalo – Communications Director, R.E.S.T.O.R.E Worldwide Inc.",
    quote:
      "“The service that I received from Cleopatra was astonishing, what a pleasure it was working with her! She is an excellent writer and a fantastic communicator that uses logic, her command of the English language is exceptional! She understood the brief and her delivery was very professional. She surpassed all my expectations and I look forward to working with her again in the very near future!”",
  },
  {
    name: "Amath T. Ba – Principal, AMA Architects New York",
    quote:
      "“This was my second assignment with Cleo, and there will be more for sure. She's diligent and thoughtful, understands client's needs first then deliver tailored content you can show off anywhere.”",
  },
  {
    name: "Josephine – Licensed Massage Therapist, Austin Ashiatsu",
    quote:
      "“My experience working with Cleopatra was excellent! She knows her chosen craft!!! Her customer service and communication with me were top notch. I definitely will be using her writing services again in the very near future.”",
  },
  {
    name: "Angelo Asnake – Ph.D Candiate, Graduate School of Engineering at Osaka University",
    quote:
      "“She edited my professional bio. Her communication was fast and smooth. I got extra professional output (additional versions of bio) than expected before the deadline.”",
  },
  {
    name: "Segun Ajayi – Business Development Manager, West Africa, TetraPak",
    quote:
      "“After my first cold interaction with Cleopatra, I felt very comfortable, had a clear understanding of what the offering was and the ensuing process to finalize the deal. Quite the consummate and energetic professional. She spent time understanding my needs and made the necessary recommendations.”",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-[800px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-8">
            <p className="text-primary font-semibold mb-1">
              {testimonial.name}
            </p>
            <p>{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
