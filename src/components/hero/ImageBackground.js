import React from "react";
import Title from "./Title";
import NavBar from "components/hero/NavBar";
import Video2 from "../../images/pexels-michael-gault-5266052.mp4";
import AboutIntro from "./AboutIntro";

const ImageBackground = ({ children, showWhite }) => {
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
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) ), url(${"/NemfraTruck-resized.jpg"})   no-repeat  fixed `,
            webkitBackgroundSize: "cover",
            mozBackgroundSize: "cover",
            oBackgroundSize: "cover",
            backgroundSize: "cover",
            minHeight: "100%",
            height: "100vh",
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
          {<AboutIntro />}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ImageBackground;
