import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className=" max-w-[1000px] pt-[-96px] w-full h-screen mx-auto text-center flex flex-row justify-center">
        <div className="flex w-[50%] items-center justify-center flex-col">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="text-[#00df9a] font-bold p-2"
          >
            A Computer Science Student at Cavite State University - Main
          </motion.p>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-6 "
          >
            Rod Cotines
          </motion.h1>
          <div className="flex justify-center items-center">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.75 }}
              className="md:text-5xl sm:text-4xl text-xl font-bold py-4"
            >
              AKA
            </motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "POGI",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Gwapo",
                  1000,
                  "Sobrang Pogi",
                  1000,
                  "Sobrang Gwapo",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className=" md:text-5xl sm:text-4xl text-xl font-bold ml-4"
                repeat={Infinity}
              />
            </motion.div>
          </div>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            whileHover={{ scale: "1", opacity: "5" }}
            className="bg-[#00df9a] w-[150px] rounded-md font-bold my-6 mx-auto py-3 text-black text-[15px] uppercase "
          >
            Contact Me
          </motion.button>
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=" flex w-[50%] items-center justify-center"
        >
          <img className="" src="/arlene.png" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
