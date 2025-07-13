import React from "react";

import { FaCartPlus, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Categories", path: "/categories" },
    { title: "About us", path: "/about-us" },
    { title: "Customer Diaries", path: "/customer-diaries" },
    { title: "Contact us", path: "/contact-us" },
  ];
  //   const categoriesLink = [
  //     { title: "Sarees", path: "/sarees" },
  //     { title: " T-Shirts", path: "/ t-shirts" },
  //     { title: "Bottoms", path: "/bottoms" },
  //     { title: "Jackets", path: "/jackets" },
  //     { title: "Tops", path: "/tops" },
  //     { title: "Hats", path: "/hats" },
  //     { title: "Acessories", path: "/acessories" },
  //   ];
  const newLink = [
    { title: "beauty" },
    { title: "fragrances" },
    { title: "furniture" },
    { title: "groceries" },
    { title: "home-decoration" },
    { title: "kitchen-accessories" },
    { title: "laptops" },
    { title: "mens-shirts" },
    { title: "mens-shoes" },
    { title: "mens-watches" },
    { title: "mobile-accessories" },
    { title: "motorcycle" },
    { title: "skin-care" },
    { title: "smartphones" },
    { title: "sports-accessories" },
    { title: "sunglasses" },
    { title: "tablets" },
    { title: "tops" },
    { title: "vehicle" },
    { title: "womens-bags" },
    { title: "womens-dresses" },
    { title: "womens-jewellery" },
    { title: "womens-shoes" },
    { title: "womens-watches" },
  ];
  return (
    <nav className="bg-gray-100 h-13  shadow-md">
      <div className="flex items-center justify-around max-w-7xl w-full mx-auto">
        <div className="flex items-center justify-center gap-2 ">
          <img
            src="https://github.com/shadcn.png"
            className=" object-cover rounded-full size-10 my-1"
            alt="logo"
            srcset=""
          />
          <h2 className="text-2xl font-bold">Captivating-Curves</h2>
        </div>
        <div className="text-black">
          <ul className="flex gap-3">
            {navLinks.map((link, idx) => {
              if (link.title == "Categories") {
                return (
                  <li key={idx} className="relative group">
                    <span className="cursor-pointer">Categories</span>
                    <ul className="absolute hidden group-hover:block bg-neutral-200/45 text-black mt-2 rounded-lg shadow-lg  ">
                      {newLink.map((link) => (
                        <li>
                          <Link
                            className=" block  px-4 py-2 hover:bg-amber-50 w-full rounded-lg"
                            to={`category/${link.title}`}
                          >
                            {link.title.toLocaleUpperCase()}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={idx}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-between items-center ">
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              name="search"
              id=""
              className=" bg-gray-400/50 rounded-xl px-3 py-[1px] focus:outline-none text-base w-[10rem]"
              placeholder="Search.."
            />
            <FaSearch className=" absolute right-3 size-4" />
          </div>
          <div className=" flex justify-center items-center gap-2 mx-4">
            <IoCartOutline className=" size-7" />
            <button className=" bg-purple-500/80 px-4 py-1 rounded-2xl text-gray-100 font-semibold">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
