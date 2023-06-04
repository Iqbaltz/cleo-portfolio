import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About me",
    link: "/about",
  },
  {
    name: "Blog",
    link: "https://medium.com/@cleopatraogharadukun",
  },
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Press & Awards",
    link: "/press-awards",
  },
  {
    name: "Praise",
    link: "/praise",
  },
  {
    name: "Resources",
    link: "/resources",
  },
];

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

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    if (!openMenu) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [openMenu]);

  const { pathname } = useRouter();

  const isWhiteLogo = pathname === "/about";
  return (
    <>
      <header className="flex justify-between items-center absolute top-0 z-30 0 w-full py-8 px-4 lg:px-12 lg:py-8">
        <Link href="/">
          <img
            src={`${isWhiteLogo ? "/svg/logo-white.svg" : "/svg/logo.svg"}`}
            alt="logo"
          />
        </Link>
        <div
          className="ham flex flex-col items-end group cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="w-12 h-1 bg-primary mb-1.5 group-hover:w-20 transition-[width] duration-300 ease-in-out"></div>
          <div className="w-7 h-1 bg-primary mb-1.5 group-hover:w-12 transition-[width] duration-300 ease-in-out"></div>
          <div className="w-7 h-1 bg-primary group-hover:w-12 transition-[width] duration-300 ease-in-out delay-75"></div>
        </div>
      </header>
      <div
        className={`bg-secondary flex flex-col justify-between transition-transform duration-500 ${
          openMenu ? "" : "-translate-x-full"
        } fixed top-0 right-0 w-full h-full z-20`}
      >
        <nav className="mt-40 mx-4 lg:mx-12">
          <ul className="flex flex-col h-full">
            {menus.map((menu, index) => (
              <li
                key={index}
                className="mb-6 lg:mb-5 2xl:mb-8 text-3xl 2xl:text-5xl font-semibold text-primary cursor-pointer"
              >
                <Link href={menu.link} className="hover:underline">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end px-8 py-12 items-center border-t-2 border-primary">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 2xl:w-10 2xl:h-10 bg-primary mr-4"
            >
              <img
                className="w-6 2xl:w-8"
                src={social.icon}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
