import React from "react";

const Play = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen mt-32 bg-black  text-white  flex flex-col items-center justify-center relative py-20">
      <div className="video ">
        <video
          autoPlay
          muted
          loop
          className="w-96 aspect-video absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>

      <div className="w-full h-full flex items-center justify-between flex-col">
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
          <p>Work in motion</p>
        </div>

        <h1 className="play-heading flex items-center justify-center sm:gap-72  text-8xl absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold font-serif z-40">
          <div className="">Play</div>
          <div className="">Reel</div>
        </h1>
        <div className="para">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </div>
      </div>
    </div>
  );
};

export default Play;
