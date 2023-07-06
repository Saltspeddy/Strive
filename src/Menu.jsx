import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  let isOpen = false;
  function SideMenu() {
    if (isOpen == false) {
      document.querySelector("#menu").style.transform = "translateX(0px)";
      document.querySelector("button").style.color = "white";
    }

    if (isOpen == true) {
      document.querySelector("#menu").style.transform = "translateX(-400px)";
      document.querySelector("button").style.color = "black";
    }
    isOpen = !isOpen;
  }

  return (
    <>
      <button
        onClick={SideMenu}
        className="fixed z-50 top-3 left-5 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
      <div className="z-50">
        <div
          id="menu"
          className="fixed md:w-[400px] w-[300px] h-screen bg-[#232C33] text-white md:-translate-x-[400px] -translate-x-[300px] z-30 duration-300"
        >
          <div className="pt-14">
            <h1 className="md:text-8xl text-5xl font-caprasimo mx-6">Strive</h1>
            <ul className="m-6 mt-10 flex flex-col gap-1 text-2xl font-bold">
              <Link to="/">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white "
                >
                  Home
                </motion.li>
              </Link>
              <Link to="/Tshirts">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white"
                >
                  T-shirts
                </motion.li>
              </Link>
              <Link to="/Shirts">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white"
                >
                  Shirts
                </motion.li>
              </Link>
              <Link to="/Hoodies">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white"
                >
                  Hoodies
                </motion.li>
              </Link>
              <Link to="/Pants">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white"
                >
                  Pants
                </motion.li>
              </Link>
              <Link to="/Shorts">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 w-[100%] rounded-xl text-gray-500 hover:text-white"
                >
                  Shorts
                </motion.li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
