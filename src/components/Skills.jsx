import React from "react";
import Rendered from "/blender.png";
import Godot from "/Godottt.png";
import PR from "/PR.png";
import PS from "/PS.png";
import WEB from "/web.webp";
import Prog from "/Prog.webp";
import { motion } from "framer-motion";
import { skillsSet } from "../constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full py-[10rem] px-4 bg-[#121212]">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
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
        {skillsSet.map((skills, i) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            whileHover={{ scale: "1.05", opacity: "3", duration: 1 }}
            className="w-full h-64 shadow-md shadow-[#00df9a] flex flex-col p-4 my-4 "
            key={i}
          >
            <img
              className="w-20 h-20 mx-auto mt-[-3rem] rounded-md "
              src={skills.image}
              alt="/"
            />

            <h2 className=" text-white text-2xl font-bold text-center py-8">
              {skills.text}
            </h2>
            <h2 className=" text-center text-white font-medium text-base">
              {skills.text1}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
