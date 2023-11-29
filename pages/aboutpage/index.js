import React from "react";

function About() {
  return (
    <div className="flex flex-col mt-12">
      <div className=" self-center font-extrabold text-3xl lg:font-extrabold lg:text-3xl">
        About Us
      </div>
      <div className="font-normal text-md mx-4 mt-5 lg:font-bold lg:text-xl lg:mx-32 lg:mt-14">
        Welcome to The Cake Shop! We believe cakes should look beautiful and
        taste delicious. We love to design wedding and specialty cakes, as well
        as a daily selection of cookies and other treats ready for anyone
        looking for a little something sweet to eat.
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="font-bold text-xl mx-32 mt-14 lg:font-bold lg:text-xl lg:mx-32 lg:mt-14">
          Owner
        </div>
        {/* <div className="font-bold text-xl mx-32 mt-14 lg:font-bold lg:text-xl lg:mx-32 lg:mt-14">
          Co-Owner
        </div> */}
      </div>

      <div>
        <div>
          {/* <img
            className="font-bold text-xl mx-3 ml-16 lg:mx-32 mt-1 lg:ml-48 object-cover"
            src="/owner.jpg"
            alt="My Image"
            height={200}
            width={200}
          /> */}
        </div>
        <div className="flex flex-col">
          <div className=" font-normal text-md mx-4 mt-1 ml-24 lg:font-semibold lg:text-lg lg:mx-32 lg:mt-1 lg:ml-48">
            Kiran Jat
          </div>
          {/* <div className="font-normal text-md mx-4 mt-1 ml-24 lg:font-semibold lg:text-lg lg:mx-32 lg:mt-1 lg:ml-48">
            Owner, CakeShop
          </div> */}
          <div className=" font-normal text-md mx-4 mt-1 ml-24 lg:font-semibold lg:text-lg lg:mx-32 lg:mt-1 lg:ml-48">
            Kritika Paranchi
          </div>
          {/* <div className="font-normal text-md mx-4 mt-1 ml-24 lg:font-semibold lg:text-lg lg:mx-32 lg:mt-1 lg:ml-48">
            Owner, CakeShop
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
