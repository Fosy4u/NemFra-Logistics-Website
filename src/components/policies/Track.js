import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }

  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const Track = () => {
  return (
    <div>
      <Text>
        <p>
          Some web browsers may transmit “do-not-track” signals to the websites
          and other online services with which the browser communicates. There
          is no standard that governs what, if anything, websites and online
          services should do when they receive these signals. We currently do
          not take action in response to these signals. If and when a standard
          for responding is established, we may revisit our policy on responding
          to these signals.
        </p>
      </Text>
    </div>
  );
};

export default Track;
