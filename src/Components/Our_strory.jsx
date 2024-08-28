import { motion } from "framer-motion";
import React from "react";

const footerLinks = [
  {
    category: [
      "Willem II Singel 8",
      "6041 HS, Roermond",
      "The Netherlands",
      "hello@exoape.com",
    ],
  },
  {
    category: ["Work", "Studio", "News", "Contact"],
  },
  {
    category: ["Behance", "Dribble", "Twitter", "Instagram"],
  },
];

const Our_strory = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-5 min-h-[90vh] bg-[#070707] p-[8rem] ">
      <div className="flex items-center justify-between ">
        <div className="headings">
          {
            ["OUR","STORY"].map((elem,i)=>{
            return  <h1 className="text-9xl  overflow-hidden font-[TWK-Lausanne-300] font-normal text-white">
              <motion.span
                key={i}
                  className="inline-block origin-left"
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                  }}
                >
                  {elem}
                </motion.span>  
            </h1>
            })
          }
        
          <p className="text-white text-2xl tracking-tighter w-[80%] opacity-60 overflow-hidden">

          <motion.span
                  className="inline-block origin-left"
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                  }}
                >
                    The story behind Exo Ape is one of exploration, creativity, and
                    curiosity.
                </motion.span>  
          
          </p>
        </div>
        <div className="video w-[50rem] aspect-video">
          <video
            autoPlay
            muted
            loop
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
      </div>
      <div className="w-full bg-white h-[1px] mt-12 opac-60"></div>

      <footer className="w-full h-[11rem] flex pb-10 pt-28 items-center justify-between">
        {footerLinks.map((linkGroup, index) => (
          <div
            key={index}
            className="link1 gap-2 opacity-60 flex flex-col items-start justify-center text-white"
          >
            {linkGroup.category.map((link, i) => (
              <a
                key={i}
                className="pb-[2px] border-b-[1px] border-transparent hover:transition-all hover:border-white"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="w-[7rem] h-full overflow-hidden flex items-end">
          <a
            className="border-b-[1px] text-white pb-[2px] border-transparent hover:transition-all hover:border-white font-semibold"
            href="#"
          >
             <motion.span
                  className="inline-block origin-left"
                  initial={{ rotate: 90, y: "40%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                  }}
                >
                  Our Story
                </motion.span>  
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Our_strory;
