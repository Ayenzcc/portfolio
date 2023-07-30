import React from "react";

const Aboutme = () => {
  return (
    <section
      id="aboutme"
      className="w-full h-auto flex items-center justify-center relative overflow-hidden py-[8rem]"
    >
      <div className="h-full flex flex-col gap-y-[1rem] justify-center items-center w-[1240px] px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]">
        {/* SECTION TITLE */}
        <div className="flex gap-x-[1.5rem] w-full items-center">
          <h1 className="font-bold text-3xl lg:4xl whitespace-nowrap text-[#00df9a]">
            • About Me
          </h1>
        </div>

        {/* SECTION DETAILS */}
        <div className="flex flex-col lg:flex-row items-center gap-x-[4rem] gap-y-[3rem] h-full">
          <div className="flex flex-col gap-y-[1.5rem]">
            <p className="text-secondary text-[0.9rem] lg:text-[1rem] text-justify w-auto text-white">
              I am a Frontend Web Developer. Currently, I am a 3rd Year Computer
              Science Student at Cavite State University - Don Severino Delas
              Alas Campus. Right now I am focused on learning more about web
              development using
              <a href="https://react.dev/" target="blank">
                <span className="text-accent font-bold hover:underline pl-2 pr-2 text-[#00df9a]">
                  React JS
                </span>
              </a>
              and{" "}
              <a href="https://tailwindcss.com/" target="blank">
                <span className="text-accent font-bold hover:underline pr-2 text-[#00df9a]">
                  Tailwind CSS
                </span>
              </a>
              and on improving my skills.
            </p>
          </div>

          <hr className=" border-[#00df9a] lg:hidden border-l-[1px] border-secondary w-full " />
          <div className=" border-[#00df9a] hidden lg:block h-[13rem] border-l-[1px] border-secondary " />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
