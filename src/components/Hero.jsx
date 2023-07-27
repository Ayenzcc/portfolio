import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className=" max-w-[1240px] pt-[-96px] w-full h-screen mx-auto text-center flex flex-col-reverse md:flex-row justify-center items-center ">
        <div className="flex w-[50%] text-left flex-col sm:pl-5">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-[#00df9a] font-bold p-2"
          >
            A Computer Science Student at Cavite State University - Main
          </motion.p>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.75 }}
            className="md:text-7xl sm:text-6xl text-6xl font-bold md: py-6 "
          >
            Rod Cotines
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="md:text-4xl sm:text-3xl text-xl font-bold py-4"
          >
            A
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "UI/UX Designer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className=" md:text-4xl sm:text-3xl text-xl font-bold pl-2"
              repeat={Infinity}
            />
          </motion.p>
          <a href="#aboutme">
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.25 }}
              className="text-white hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  text-sm px-5  text-center mr-2 mb-2 dark:border-[#00df9a] dark:text-[#00df9a] dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-[150px] rounded-md font-bold my-6 py-3  text-[15px] uppercase hover:"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className=" flex w-[50%] items-center justify-center"
        >
          <img className="" src="/gradient.png" />
        </motion.div>
        <motion.div
          initial={{ rotate: -540, scale: 0, opacity: 0 }}
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="absolute xs:bottom-8 bottom-4 w-full 
          flex justify-center items-center "
        >
          <a href="#skills">
            <div
              className="  w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-[#00df9a] 
            justify-center items-start p-2 hidden md:block"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
