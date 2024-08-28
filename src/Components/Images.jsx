import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        scrub: 1,
        
      },
    });
    tl.to(
        first.current,
      {
        x: "-110%",
      },
      "a"
    ).to(
        second.current,
      {
        x: "110%",
      },
      "a"
    )
    .to(
        third.current,
      {
        x: "-110%",
      },
      "a"
    ).to(
        fourth.current,
      {
        x: "110%",
      },
      "a"
    );
  });
  return (
    <div
    ref={parent} 
      className="w-full h-[70vh] sm:min-h-[100vh] overflow-hidden"
    >
      <div className="w-full h-full relative flex items-center justify-center ">
        <div
         ref={first}
          className="w-[15rem] sm:w-[25rem]  absolute h-[10rem] sm:h-[20rem] left-0 sm:left-32 sm:z-40  top-[35%] sm:top-[15%] "
        >
          <video
           
            autoPlay
            muted
            loop
            className="w-full h-full "
            src="
                https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div ref={second}
          className="w-[8rem] sm:w-[12rem]  absolute h-[13rem] sm:h-[17rem] left-[75%] top-[15%]"
        >
          <img
          

            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={third} className="w-[10rem] sm:w-[20rem]  absolute h-[10rem] sm:h-[15rem] left-0 sm:left-20 top-[66%]">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={fourth} className="w-[15rem] sm:w-[25rem] absolute h-[10rem] sm:h-[15rem]  left-[70%] top-[66%]">
          <video
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <div className="h-[25rem] sm:h-[35rem] w-[15rem] sm:w-[25rem] absolute ">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
