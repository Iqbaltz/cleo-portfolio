import React from "react";
import { Button } from "../button";

export default function Newsletter() {
  return (
    <section className="bg-black py-8">
      <div className="flex justify-around mx-auto max-w-[1440px]">
        <div className="text-white">
          <h1 className="idealist text-4xl mb-1">Subscribe to my newsletter</h1>
          <p>Stay updated with the latest news and exclusive content</p>
        </div>
        <a
          href="https://candidlycleo.beehiiv.com/subscribe"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          <Button>Subscribe</Button>
        </a>
      </div>
    </section>
  );
}
