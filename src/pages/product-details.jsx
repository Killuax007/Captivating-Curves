import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiCart, BiHeart, BiLoaderAlt } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.data;
      console.log(data);
      setProduct(data);
      setLoading(false);
    }
    fetchdata();
  }, [productId]);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-[60vh]">
        <BiLoaderAlt className=" size-10 animate-spin" />;
      </div>
    );
  }
  return (
    <section className=" w-full max-w-7xl mx-auto my-10 ">
      {product && (
        <div>
          <div className="flex justify-center items-center gap-10 ">
            <ProductImageGallery images={product.images} />
            <div className="flex flex-col ">
              <h2 className="text-3xl font-bold">{product.title}</h2>
              <div className="flex  items-center gap-1 text-sm font-semibold">
                {Array.from({ length: product.rating }).map(() => (
                  <MdStarRate />
                ))}{" "}
                221 reviews
              </div>
              <div className="text-3xl font-semibold">
                Rs . ${product.price}
                <span className="text-base ml-2 text-blue-600">
                  {product.availabilityStatus}
                </span>
              </div>
              <div className="text-base font-semibold">
                Available Colours
                <ul className=" flex gap-3 ">
                  {Array.from([
                    "bg-rose-500",
                    "bg-green-500",
                    "bg-purple-500",
                    "bg-neutral-500",
                  ]).map((code) => (
                    <li className={`${code} h-7 w-7 rounded-full `}></li>
                  ))}
                </ul>
              </div>
              <div className="text-sm font-semibold">
                Available Size
                <ul className=" flex  gap-3 ">
                  {Array.from(["XL", "M", "L", "2XL", "3XL", "4xl"]).map(
                    (size) => (
                      <li className="  rounded-md border-1 border-gray-500 px-3 py-1 text-center ">
                        {size}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                Quantity :{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  className=" border-gray-500 border-1 rounded-md m-1"
                />
              </div>
              <div className="flex justify-around">
                <span className=" flex items-center justify-center p-1 border-gray-500 border-1 rounded-md gap-2">
                  Wishlist <BiHeart />
                </span>
                <span className=" flex items-center justify-center p-1 border-gray-500 border-1 rounded-md gap-2 bg-purple-500 text-white">
                  Add To Cart <BiCart />
                </span>
              </div>
              <div className=" w-full max-w-md">
                <h2>Product Description : </h2>
                <p>{product.description}</p>
                <h2>Features:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  repellat sint nihil dolorum, officiis tempora molestiae
                  voluptate sed reprehenderit quae quod repudiandae! Nemo
                  aperiam, minus accusantium sunt officia quaerat animi!
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col my-10">
            <h2>Customer Reviews</h2>
            {product.reviews.map((review, idx) => (
              <div key={idx} className="flex ">
                <div>
                  <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className=" w-16 rounded-full"
                  />
                  <h2>{review.reviewerName}</h2>
                </div>
                <div>
                  <span className=" flex">
                    {Array.from({ length: review.rating }).map(() => (
                      <svg
                        className=" size-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#FFD43B"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        />
                      </svg>
                    ))}
                  </span>
                  <h2>{review.comment}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function ProductImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col  gap-4">
      <div className="flex-1">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-[400px] object-contain  rounded-xl shadow-lg"
        />
      </div>

      <div className="flex  gap-2 ">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setSelectedImage(img)}
            className={` h-18 object-contain cursor-pointer border-b-2 hover:scale-110  rounded-lg transition-all ${
              selectedImage === img
                ? "border-blue-600 scale-105"
                : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
