import Image from "next/image";
import React from "react";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

function Title() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-28 mt-10">
        <div>
          <div className=" font-extrabold text-5xl w-28 text-center">
            Delight in <p className="text-yellow-300">Every</p> Bite at Your
            Bakery
          </div>
          <ScrollLink
            to="scrollToSection"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
          >
            <div className="mt-10 bg-yellow-500 text-center rounded-lg p-3 text-white font-bold">
              Show All
            </div>
          </ScrollLink>
        </div>
        <img src="/main.jpg" alt="My Image" height={400} width={400} />
      </div>
    </div>
  );
}

export default Title;
