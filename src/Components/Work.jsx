import React from "react";

const Work = () => {
  return (
    <div className="w-full h-[200vh] pt-32 pl-40 ">
      <div className="h-full max-w-screen-xl  mx-auto relative ">
        <h1 className="text-[15vw] font-semibold ">Work</h1>
        <div className="images absolute mt-72 w-full h-full flex left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center gap-10 ">
          <div className="left-video-with-img w-1/2 h-full ">
            <img
              className="w-96 absolute  object-cover"
              src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
              alt="sjhbsj"
            />
            <video
              autoPlay
              muted
              loop
              className="w-96 absolute scale-[1.2]"
              src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
            ></video>
          </div>
          <div className="right  flex flex-col gap-40 justify-between h-full  w-1/2 ">
            <div className="flex flex-col  gap-2 items-start">
              <div className="prt-top flex gap-2">
                <span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4"
                    data-v-669b4a84=""
                  >
                    <path
                      d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                      fill="currentColor"
                      data-v-669b4a84=""
                    ></path>
                  </svg>
                </span>
                <p className="text-xs">Featured Projects</p>
              </div>
              <p className="w-[60%]">
                Highlights of cases that we passionately built with
                forward-thinking clients and friends over the years.
              </p>
            </div>
            <div className="right-video-with-img w-1/2 h-full ">
              <img
                className="w-72 absolute object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt="sjhbsj"
              />
              <video
                autoPlay
                muted
                loop
                className="w-72 absolute scale-[1.2]"
                src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
