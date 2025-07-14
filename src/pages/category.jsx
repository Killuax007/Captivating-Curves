import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiLoader, BiLoaderAlt, BiLoaderCircle } from "react-icons/bi";

export default function Category() {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function toCamelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/category/${categoryName}`
      );
      const data = await response.data;
      console.log(data);
      setData(data.products);
      setLoading(false);
    }
    fetchdata();
  }, [categoryName]);
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-[60vh]">
        <BiLoaderAlt className=" size-10 animate-spin" />;
      </div>
    );
  }
  return (
    <section className="w-full max-w-7xl mx-auto my-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold fone-serif text-neutral-800 mb-5">
          {" "}
          {toCamelCase(categoryName)}
        </h1>

        <div className="flex justify-between border-b-1 border-gray-700 p-3">
          <h2>Filter : </h2>
          <div className="flex gap-4">
            <h2>Sort By</h2>
            <h2>Best Selling </h2>
            <h2>20 Products </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-10 gap-5 ">
        {data &&
          data.map((product, idx) => (
            <Link to={`/products/${product.id}`} key={idx}>
              <div className=" h-[18rem] rounded-xl p-4 shadow-lg cursor-pointer w-[14rem]">
                <img
                  src={loading ? <BiLoaderCircle /> : product.thumbnail}
                  className="  object-contain"
                  alt="img"
                />
                <h2 className=" text-neutral-600 text-sm">{product.title}</h2>
                <h2 className=" font-semibold">Rs {product.price} /-</h2>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
