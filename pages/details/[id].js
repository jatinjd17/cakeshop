import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const DetailsPage = () => {
  const router = useRouter();
  const { id, extraData, image, price, name } = router.query;

  // Fetch data based on the id, or use the data passed from the previous page

  return (
    <div className="flex flex-col justify-center w-screen">
      <img
        className=" object-cover self-center rounded-lg mt-8"
        src={image}
        alt="My Image"
        height={400}
        width={400}
      />
      {/* <h1 className=" self-center">Details Page</h1> */}
      {/* <p className="self-center">ID: {id}</p> */}
      <p className="self-center mt-6 font-extrabold mx-8 text-3xl "> {name}</p>
      <p className="self-center mt-6 font-bold mx-8 text-3xl ">
        Price: {`\u20B9`} {price}
      </p>

      <Link
        className="self-center bg-yellow-400 text-white font-bold rounded-lg p-4 mt-6"
        href={{
          pathname: `/addtocart/${id}`,
          query: {
            extraData: extraData,
            image: image,
            price: price,
            name: name,
          },
        }}
      >
        <div>Add To Cart</div>
      </Link>

      <p className="self-center mt-6 font-medium mx-8 text-xl "> {extraData}</p>
      {/* Display other details based on the fetched data */}
    </div>
  );
};

export default DetailsPage;
