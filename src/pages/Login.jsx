import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [formdata, setFormdata] = React.useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
  }
  return (
    <div className="w-full max-w-xl mx-auto   ">
      <div className="flex justify-center items-center h-[80vh]  ">
        <div className="  p-4 rounded-lg w-full max-w-md">
          <h2 className="text-3xl font-serif font-medium text-center my-4">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                placeholder="Enter your Email "
                value={formdata.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                placeholder="Enter your Password "
                value={formdata.password}
                onChange={handleOnChange}
              />
            </div>

            <div className="w-full max-w-[27rem] mx-auto">
              <button
                type="submit"
                className=" text-base font-medium bg-purple-500/80 hover:bg-purple-500   py-3 px-4  rounded-md w-full transition-all hover:scale-101 duration-200 cursor-pointer "
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm font-semibold text-center my-2">
            Not have an Account ?{" "}
            <Link
              className="hover:text-blue-700 text-blue-700/80 font-semibold"
              to={"/register"}
            >
              Register Now
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
