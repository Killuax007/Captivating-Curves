import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
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
      <div className="flex justify-center items-center   ">
        <div className="  p-4 rounded-lg w-full max-w-md">
          <h2 className="text-3xl font-serif font-medium text-center my-4">
            Register
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                  placeholder="Enter your First Name "
                  value={formdata.firstname}
                  onChange={handleOnChange}
                />
              </div>
              <div className="">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                  placeholder="Enter your Last Name "
                  value={formdata.lastname}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
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
            <div className="">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                placeholder="Enter your Phone "
                value={formdata.phone}
                onChange={handleOnChange}
              />
            </div>
            <div className="">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                placeholder="Enter your Address "
                value={formdata.address}
                onChange={handleOnChange}
              />
            </div>
            <div className="">
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
            <div className="">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="confirmpassword"
                name="confirmpassword"
                className="border font-medium dark:focus:ring-gray-700 dark:focus:border-gray-800 text-gray-900  rounded-md text-sm  block w-full py-3 px-4   "
                placeholder="Enter your Confirm Password "
                value={formdata.confirmpassword}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex justify-end mx-auto">
              <button
                type="submit"
                className=" block text-base font-medium bg-purple-500/80 hover:bg-purple-500   py-3 px-4  rounded-md w-30 transition-all hover:scale-101 duration-200 cursor-pointer "
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm font-semibold text-center my-2">
            Already have an Account ?{" "}
            <Link
              className="hover:text-blue-700 text-blue-700/80 font-semibold"
              to={"/login"}
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
