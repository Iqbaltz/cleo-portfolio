import React from "react";

type Props = {};

export default function Awards({}: Props) {
  return (
    <section className="flex justify-center px-4 py-8 lg:p-24">
      <div className="shadow-md w-full lg:w-[400px]">
        <img src="/images/awards.png" alt="awards" />
        <div className="bg-primary text-white text-center p-4">
          <p>
            Solar Quarter Grand Masters Award 2022 – Excellence in Sales Thought
            Leadership
          </p>
        </div>
      </div>
    </section>
  );
}
