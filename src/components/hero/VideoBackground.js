import React from "react";
import Title from "./Title";
import NavBar from "components/hero/NavBar";
import Video2 from "../../images/pexels-michael-gault-5266052.mp4";

const VideoBackground = ({ children, showWhite }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar showWhite={showWhite} />
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${Video2}" type="video/mp4" />
        </video>
        `,
          }}
          className="vid"
        />
        {/* <video
          src={Video2}
          autoPlay
          loop
          playsinline
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: 'block'
          }}
          type="video/mp4"
        /> */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            display: "flex",
            flexDirection: "column",
          }}
          className="mt-2"
        >
          {<Title />}
        </div>
      </div>
      {children}
    </div>
  );
};

export default VideoBackground;
