import React from "react";
import Title from "./Title";
import NavBar from "components/hero/NavBar";
import Video2 from "../../images/pexels-michael-gault-5266052.mp4";
import tw from "twin.macro";

const StyledDiv = tw.div` p-8`;
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

        <video
          src={Video2}
          autoPlay
          loop
          playsinline
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          type="video/mp4"
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            backgroundColor: "rgba(245, 40, 145, 0.09)",
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
        >
          <StyledDiv>{<Title />}</StyledDiv>
        </div>
      </div>
      <StyledDiv>{children}</StyledDiv>
    </div>
  );
};

export default VideoBackground;
