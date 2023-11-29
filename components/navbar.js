import React from "react";
import Link from "next/link";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

function Navbar() {
  const scrollToElement = (element) => {
    scroll.scrollTo(element, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className=" flex flex-row gap-6 w-full lg:gap-40 lg:p-5 items-center justify-center bg-slate-200 rounded-lg lg:font-extrabold ">
      <div className="flex flex-row gap-2">
        <img
          className="-mt-1"
          src="/cakelogo.png"
          alt="My Image"
          height={30}
          width={30}
        />
        <div>CakeShop</div>
      </div>
      <div>
        <ScrollLink
          to="scrollToSection"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset based on your layout
          duration={500}
        >
          Products
        </ScrollLink>
      </div>
      <Link
        className=""
        href={{
          pathname: `/aboutpage`,
        }}
      >
        <div>About</div>
      </Link>
      <Link
        className=""
        href={{
          pathname: `/contactuspage`,
        }}
      >
        <div>Contact Us</div>
      </Link>
    </div>
  );
}

export default Navbar;
