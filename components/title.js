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
      <div className="flex flex-row items-center justify-center gap-5 lg:gap-28 mt-10">
        <div>
          <div className=" font-extrabold lg:text-5xl lg:w-28 text-center">
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
            <div className="mt-3 p-1 lg:mt-10 bg-yellow-500 text-center rounded-lg lg:p-3 text-white font-bold">
              Show All
            </div>
          </ScrollLink>
        </div>
        <div className=" w-44 lg:w-3/6">
          <img
            src="/background.jpg"
            alt="Background Image"
            // layout="fill"
            // objectFit="cover"
            // quality={100}
          />
          {/* <img
            className="w-36 lg:w-96 "
            // src="/main.jpg"
            src="https://lirp.cdn-website.com/7459c1f6/dms3rep/multi/opt/PxdmrgPp-1920w.jpeg"
            alt="My Image"
            height={400}
            width={400}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Title;
