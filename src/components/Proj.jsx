import React, { useEffect } from "react";
import Rendered from "/blender.png";
import Animate from "/Animate.png";
import PR from "/PR.png";
import PS from "/PS.png";
import WEB from "/web.webp";
import Prog from "/Prog.webp";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Proj = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div id="skills" ref={ref} className="w-full py-[10rem] px-4 bg-[#121212]">
      {isInView && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8"
        >
          <div className="w-[100%]">
            <h1 className=" flex flex-row max-w-[1240px] mx-auto text-white text-5xl font-bold py-0">
              <h1 className="flex text-[#00df9a] ">──</h1> &nbsp;&nbsp;Skills
            </h1>
            <h1 className=" text-[#00df9a] max-w-[1240px] mx-auto text-1xl font-bold py-8 uppercase">
              My services for clients
            </h1>
          </div>
          <div className="w-[100%] "> </div>
          <div className="w-[100%] "> </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={Rendered}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Blender
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              3d Modeling | Isometric Design | Animation
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={PS}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Adobe Photoshop
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              Photo Editing | Image Creation | Graphic Layout Design
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.9 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={Animate}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.9 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Adobe Animate
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              Simple to Medium Animation with Sound Effects
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={PR}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.2 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Adobe Premiere Pro
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              Video Editing
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={WEB}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Web Development
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              HTML | CSS | JavaScript | MySQL | WordPress | React | Tailwind
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.8 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={Prog}
              alt="/"
            />
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.8 }}
              className=" text-white text-2xl font-bold text-center py-8"
            >
              Programming
            </motion.h2>
            <h2 className=" text-center text-white font-medium text-base">
              Java | Python | JavaScript
            </h2>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Proj;
