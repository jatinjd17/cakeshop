import React from "react";
import { useRouter } from "next/router";

const Orderpage = () => {
  const router = useRouter();
  const { id, extraData, image, price, name } = router.query;

  // Fetch data based on the id, or use the data passed from the previous page

  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="self-center font-extrabold text-6xl">CONGRATULATIONS</div>
      <div className="self-center font-extrabold text-3xl">
        Your Order has been placed
      </div>
      <div className="self-center font-medium text-lg mt-8">
        Order Product: {name}
      </div>
      <div className="self-center font-medium text-lg">QTY: 1</div>
      <div className="self-center font-medium text-lg">
        Total Amount: {price}
      </div>
      <img
        className=" object-cover self-center rounded-lg mt-8"
        src={image}
        alt="My Image"
        height={400}
        width={400}
      />
      {/* <h1 className=" self-center">Details Page</h1> */}
      {/* <p className="self-center">ID: {id}</p> */}
      {/* <div className="self-center  font-bold rounded-lg p-4 mt-6">QTY: 1</div> */}
      {/* <div className="self-center bg-purple-400 text-white font-bold rounded-lg p-4 mt-6">
        BUY NOW
      </div> */}
      {/* <p className="self-center mt-6 font-medium mx-8 text-xl "> {extraData}</p> */}
      {/* Display other details based on the fetched data */}
    </div>
  );
};

export default Orderpage;
