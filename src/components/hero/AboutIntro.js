import React from "react";
import tw from "twin.macro";

const Paragraph = tw.h2`font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl`;
const AboutIntro = () => {
  return (
    <div className="mt-5">
      <span className="text-center curve mt-5 ">
        <Paragraph className="innerCurve mt-5 rotateInDownLeft">
          What Makes Us{" "}
          <strong className="brandPrimary">
            Nem<span className="brandSecondary">Fra</span>
          </strong>
        </Paragraph>
      </span>
      <span style={{ position: "absolute", bottom: "0", right: "0" }} className='bg-white' tw='rounded-lg'>
        <blockquote style={{ padding: "20px" }}>
          <svg
            viewBox="0 0 512 512"
            width="80"
            height="25"
            title="quote-left"
            className="quote-icon"
            fill="#4D148c"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
          </svg>
          <p className="quote fs-6">
            Our clients and partners are family to us. Hence we render our
            services passionately with that Motherly care and transparency.
          </p>
          <p className="author">
            —{" "}
            <strong className="brandPrimary">
              Nem<span className="brandSecondary">Fra</span>
            </strong>
          </p>

          <hr style={{ marginTop: "50px" }} />
        </blockquote>
      </span>
    </div>
  );
};

export default AboutIntro;
