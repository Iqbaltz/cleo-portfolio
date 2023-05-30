import React, { useState } from "react";
import { Button } from "../button";
import { useRouter } from "next/router";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const { push } = useRouter();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      console.log("Invalid email");
      return;
    }

    const subscriptionLink = `https://magic.beehiiv.com/v1/dea44d89-a34e-4e20-83ab-133fc5819707?email=${email}`;
    push(subscriptionLink);
  };

  return (
    <section className="bg-black py-8">
      <div className="flex flex-col px-4 lg:px-0 lg:flex-row justify-around mx-auto max-w-[1440px]">
        <div className="text-white mb-4 lg:mb-0">
          <h1 className="idealist text-3xl lg:text-4xl mb-1">
            Subscribe to my newsletter
          </h1>
          <p>Stay updated with the latest news and exclusive content</p>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="email"
            className="lg:text-xl py-3 px-4 outline-none min-w-[160px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
