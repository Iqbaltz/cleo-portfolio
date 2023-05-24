import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black flex flex-col justify-center items-center p-8 text-white relative">
      <img
        src="/svg/logo-footer.svg"
        className="w-40 lg:w-48"
        alt="logo-footer"
      />
      <p className="text-light mt-2 text-sm text-center">
        © 2023 Cleopatra Ogharadukun. All rights reserved.
      </p>
      <div
        className="cursor-pointer animate-pulse hidden lg:block"
        onClick={scrollToTop}
      >
        <img
          src="/svg/arrow-up.svg"
          alt="arrow"
          className="absolute right-20 top-1/2 -translate-y-1/2"
        />
      </div>
    </footer>
  );
}
