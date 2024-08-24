import React from "react";

const Landing = () => {
  return (
    <div className="w-full  h-[230vh] relative">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="absolute mx-auto top-0 max-w-screen-2xl px-5 sm:px-10 h-full ">
        <div className="para mt-40 sm:mt-60 lg:mt-96 font-semibold ml-5 sm:ml-10 lg:ml-20 tracking-tight font-serif">
          <p className="text-white text-base sm:text-xl">
            Global digital design studio partnering with{" "}
          </p>
          <p className="text-white font-semibold text-base sm:text-xl tracking-tight font-serif">
            brands and businesses that create exceptional{" "}
          </p>
          <p className="text-white font-semibold text-base sm:text-xl tracking-tight font-serif">
            experiences where people live, work, and unwind.{" "}
          </p>
        </div>
        <div className="headings pt-16 sm:pt-32 ml-5 sm:ml-10 lg:ml-20 text-white">
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-none tracking-tighter ">
            Digital
          </h1>

          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-none tracking-tighter">
            Design
          </h1>
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-none tracking-tighter">
            Experience
          </h1>
        </div>
        <div className="para2 mt-10 sm:mt-20 ml-5 sm:ml-10 lg:ml-20">
          <p className="w-[90%] sm:w-[70%] lg:w-[45%] text-white text-lg sm:text-2xl">
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
        </div>
        <div className="bottom flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 sm:mt-20">
          <a
            className="text-white ml-5 pb-1 border-b-[1px] border-zinc-100 decoration-none no-underline sm:ml-10 lg:ml-20 mt-10 sm:mt-0 inline-block"
            href=""
          >
            The Studio
          </a>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-12 mt-5 sm:mt-0 sm:mr-10 lg:mr-20">
            <div className="links text-sm font-semibold flex flex-col items-start sm:items-center justify-center gap-2">
              {["Work", "Studio", "News", "Contact"].map((elem, i) => {
                return (
                  <a key={i} className="text-white" href="">
                    {elem}
                  </a>
                );
              })}
            </div>
            <div className="contact text-sm text-white font-semibold mt-5 sm:mt-0">
              <p>hello@exoape.com</p>
              <p>+91 99394 81959</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
