import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AddtoCartPage = () => {
  const router = useRouter();
  const { id, extraData, image, price, name } = router.query;

  // Fetch data based on the id, or use the data passed from the previous page

  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="self-center font-extrabold text-3xl">CART PAGE</div>
      <img
        className=" object-cover self-center rounded-lg mt-8 w-24"
        src={image}
        alt="My Image"
        height={400}
        width={400}
      />
      <div className="self-center  font-bold rounded-lg mt-2 lg:mt-3">
        {name}
      </div>
      {/* <h1 className=" self-center">Details Page</h1> */}
      {/* <p className="self-center">ID: {id}</p> */}
      <div className="self-center  font-bold rounded-lg mt-2 lg:mt-3">
        QTY: 1
      </div>
      <div className="self-center  font-bold rounded-lg mt-2 lg:mt-3">
        Price: {price}
      </div>

      <div className="self-center bg-purple-400 text-white font-bold rounded-lg p-4 mt-6">
        <Link
          className=""
          href={{
            pathname: `/orderpage/${id}`,
            query: {
              extraData: extraData,
              image: image,
              price: price,
              name: name,
            },
          }}
        >
          BUY NOW
        </Link>
      </div>
      {/* <p className="self-center mt-6 font-medium mx-8 text-xl "> {extraData}</p> */}
      {/* Display other details based on the fetched data */}
    </div>
  );
};

export default AddtoCartPage;
