import React from "react";

const Our_strory = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-5 min-h-[90vh] bg-[#070707] p-[8rem] ">
      <div className="flex items-center justify-between">
        <div className="headings">
          <h1 className="text-9xl  font-[TWK-Lausanne-300] font-normal text-white">
            OUR
          </h1>
          <h1 className="text-9xl  font-[TWK-Lausanne-300] font-normal text-white">
            STORY
          </h1>
          <p className="text-white text-2xl tracking-tighter w-[80%] opacity-60">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
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

      <footer className=" w-full h-[11rem] flex pb-10 pt-28 items-center justify-between">
        <div className="link1 gap-2 opacity-60  flex flex-col items-start justify-center text-white">
          <a
            className="pb-[1px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Willem II Singel 8
          </a>
          <a
            className="pb-[1px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            6041 HS, Roermond
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            The Netherlands
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            hello@exoape.com
          </a>
        </div>
        <div className="link1 gap-2 opacity-60 flex flex-col items-start justify-center text-white">
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="##"
          >
            Work
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Studio
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            News
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="link1 gap-2 opacity-60 flex flex-col items-start justify-center text-white">
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="##"
          >
            Behance
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Dribble
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Twitter
          </a>
          <a
            className="pb-[2px] hover:transition-all  hover:border-b-[1px]"
            href="#"
          >
            Instgram
          </a>
        </div>
        <div className="w-[7rem] h-full flex items-end">
          <a
            className="border-b-[1px] text-white pb-[2px] hover:transition-all  hover:border-b-[1px] border-white font-semibold"
            href="#"
          >
            Our Story
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Our_strory;
