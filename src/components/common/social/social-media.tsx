import React from "react";

interface ISocialMedia {
  position?: "start" | "end";
  className?: string;
}

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cleopatra-o-163b4799/",
    icon: "/svg/linkedin.svg",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCfnpywrI1mewVK3UsHKt7Jg",
    icon: "/svg/youtube.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/CandidlyCleo",
    icon: "/svg/twitter.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/candidcleo/",
    icon: "/svg/instagram.svg",
  },
];

export default function SocialMedia({
  position = "start",
  className,
}: ISocialMedia) {
  return (
    <div
      className={`bg-[url(/images/social-home.png)] bg-cover p-8 py-32 min-h-[480px] -mb-1 ${className}`}
    >
      <div className={`flex justify-${position} max-w-[1400px] mx-auto`}>
        <div className="idealist text-white">
          <h2 className="text-3xl lg:text-4xl">Stay connected with me</h2>
          <p className="text-xl">Follow me on Social Media</p>
          <div className="flex mt-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-primary mr-4"
              >
                <img className="w-8" src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
