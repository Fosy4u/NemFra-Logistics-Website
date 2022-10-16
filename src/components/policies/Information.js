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

const Information = () => {
  return (
    <div>
      <Text>
        <span>
          <h3>Protection of Information</h3>
          <p>
            We have put in place physical, technical, and administrative
            measures that are intended to help safeguard information in our
            possession against loss, theft and unauthorised use, disclosure, or
            modification. Please note, however, that no data transmission or
            storage can be guaranteed to be 100% secure. As a result, although
            we strive to protect the information we maintain, we cannot ensure
            or warrant the security of any information that you transmit to us..
          </p>
        </span>
        <span>
          <h3>Children’s Information</h3>
          <p>
            We do not knowingly collect any personal information from children
            without parental consent unless permitted by law. If we learn that a
            child has provided us with personal information, we will delete it
            in accordance with local laws.
          </p>
        </span>
      </Text>
    </div>
  );
};

export default Information;
