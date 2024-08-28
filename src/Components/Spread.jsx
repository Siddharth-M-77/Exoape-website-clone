import { motion } from "framer-motion";
import React from "react";

const Spread = () => {
  return (
    <div className="w-full h-[70vh] mt-20">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center flex-col  gap-42">
        <div className="title flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <p>In the media</p>
        </div>

        <div className="text  flex items-center justify-center flex-col  text-center">
          {["Spred", "The News"].map((elem, i) => {
            return (
              <h1 className="text-9xl  text-black font-[TWK-Lausanne-300] font-normal text-center overflow-hidden tracking-tight leading-2">
                <motion.span
                  key={i}
                  className="inline-block origin-left"
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                    delay: i * 0.3,
                  }}
                >
                  {elem}
                </motion.span>
              </h1>
            );
          })}
          <p className="text-2xl text-center pt-10 w-2/3 ">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            className="border-b-[1px] mt-4 font-semibold pb-2 border-black"
            href="#"
          >
            Browse All News
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
