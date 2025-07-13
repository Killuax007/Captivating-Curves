import React from "react";

export default function Landing() {
  return (
    <>
      <section className="w-full  bg-linear-to-r from-gray-500 via-gray-300 to-gray-700">
        <div className="flex justify-center items-center h-[80vh]  font-serif">
          <img
            src="https://github.com/shadcn.png"
            alt=""
            srcset=""
            className=" rounded-lg w-70"
          />
          <div>
            <h2 className=" text-4xl font-bold">
              "Elegance Draped in Tradition"
            </h2>
            <p> "Discover the Finest Collection of Sarees for Every Occasion</p>
            <button className="px-2 py-1  text-white border-1 border-gray-400/40">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-center font-semibold">Best selling products</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className=" h-40 rounded-2xl bg-gray-700"></div>
          <div className=" h-40 rounded-2xl bg-gray-700"></div>
          <div className=" h-40 rounded-2xl bg-gray-700"></div>
          <div className=" h-40 rounded-2xl bg-gray-700"></div>
        </div>
      </section>
    </>
  );
}
