import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className=" fixed backdrop-blur-sm z-10  top-0 w-full transition-all ease-in-out  duration-[0.5s] "
      style={
        show || window.scrollY === 0
          ? {
              transform: "translateY(-0%)",
              boxShadow: "0px 5px 15px #00df9a",
            }
          : {
              transform: "translateY(-100% )",
              boxShadow: "0px 0px 20px #000300",
            }
      }
    >
      <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white  ">
        <div
          className=" transition-all ease-in-out  duration-[0.5s]"
          style={
            show || window.scrollY === 0
              ? {
                  transform: "translate(-0%)",
                }
              : {
                  transform: "translate(-500px )",
                }
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">RC.</h1>
        </div>
        <div
          className="transition-all ease-in-out  duration-[0.5s]"
          style={
            show || window.scrollY === 0
              ? {
                  transform: "translate(0%)",
                }
              : {
                  transform: "translate(1000px)",
                }
          }
        >
          <ul className="hidden md:flex">
            <a href="#skills" className="p-4 font-bold hover:text-[#00df9a]">
              Skills
            </a>
            <a href="#proj" className="p-4 font-bold hover:text-[#00df9a]">
              Projects
            </a>
            <a href="#aboutme" className="p-4 font-bold hover:text-[#00df9a]">
              About
            </a>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
          style={
            show || window.scrollY === 0
              ? {
                  transform: "translate(-0%)",
                }
              : {
                  transform: "translate(-500px )",
                }
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">RC.</h1>
          <ul className=" flex  flex-col p-4 uppercase">
            <a
              onClick={() => {
                setNav(false);
              }}
              href="#skills"
              className=" p-4 border-b border-gray-600 font-bold"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setNav(false);
              }}
              href="#proj"
              className=" p-4 border-b border-gray-600 font-bold"
            >
              Projects
            </a>
            <a
              onClick={() => {
                setNav(false);
              }}
              href="#aboutme"
              className="p-4 font-bold hover:text-[#00df9a]"
            >
              About
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
