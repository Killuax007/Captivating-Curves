import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Category() {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${categoryName}`
      );
      const data = await response.data;
      setData(data.products);
    }
    fetchdata();
  }, [categoryName]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Category: {categoryName}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {data.map((item) => (
          <li key={item.id} className="p-4 border rounded">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
