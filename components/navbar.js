import React from "react";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const scrollToElement = (element) => {
    scroll.scrollTo(element, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className=" flex flex-row gap-6 w-full lg:gap-40 lg:p-5 items-center justify-center bg-slate-200 rounded-lg lg:font-extrabold ">
      <div className="">CakeShop</div>
      <div>
        <Link
          to="scrollToSection"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset based on your layout
          duration={500}
        >
          Products
        </Link>
      </div>

      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

export default Navbar;
