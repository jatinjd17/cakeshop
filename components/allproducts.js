// import React from "react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

function Allproducts() {
  const scrollToElement = (element) => {
    scroll.scrollTo(element, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cakes.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Element name="scrollToSection" className="element">
      <div className="container mx-auto p-4">
        <ScrollLink
          to="scrollToSection"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset based on your layout
          duration={500}
        >
          <h1 className="text-2xl font-bold mb-4">All Cakes</h1>
        </ScrollLink>
        <div className="grid grid-cols-3 gap-4">
          {jsonData.map((item) => (
            <div key={item.id} className="border p-4">
              <Link
                href={{
                  pathname: `/details/${item.id}`,
                  query: {
                    extraData: item.description,
                    image: item.image,
                    price: item.price,
                    name: item.name,
                  },
                }}
              >
                <img
                  className=" object-cover"
                  src={item.image}
                  alt="My Image"
                  height={400}
                  width={400}
                />
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-lg font-bold text-gray-500">{`Price: \u20B9 ${item.price}`}</p>

                {/* <div className="text-blue-500 hover:underline cursor-pointer">
                  Details
                </div> */}
              </Link>
              <div className="flex flex-row gap-6">
                <Link
                  className=""
                  href={{
                    pathname: `/addtocart/${item.id}`,
                    query: {
                      extraData: item.description,
                      image: item.image,
                      price: item.price,
                      name: item.name,
                    },
                  }}
                >
                  <div className="bg-yellow-400 text-white font-semibold text-lg p-2 rounded-lg">
                    Add To Cart
                  </div>
                </Link>
                <Link
                  className=""
                  href={{
                    pathname: `/orderpage/${item.id}`,
                    query: {
                      extraData: item.description,
                      image: item.image,
                      price: item.price,
                      name: item.name,
                    },
                  }}
                >
                  <div className="bg-purple-400 text-white font-semibold text-lg p-2 rounded-lg">
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Allproducts;
