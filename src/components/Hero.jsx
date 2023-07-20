import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className=" max-w-[1240px] pt-[-96px] w-full h-screen mx-auto text-center flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex w-[50%] items-center justify-center flex-col">
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
          <div className="flex justify-center items-center">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:text-5xl sm:text-4xl text-xl font-bold py-4"
            >
              AKA
            </motion.p>
            <motion.div
              initial={{ x: -50, opacity: 1.25 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
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
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileHover={{ scale: "1", opacity: "5" }}
            className="bg-[#00df9a] w-[150px] rounded-md font-bold my-6 mx-auto py-3 text-black text-[15px] uppercase "
          >
            Contact Me
          </motion.button>
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.75 }}
          className=" flex w-[50%] items-center justify-center"
        >
          <img className="" src="/gradient.png" />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
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
  );
};

export default Hero;
