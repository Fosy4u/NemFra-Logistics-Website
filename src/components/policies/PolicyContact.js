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

const PolicyContact = () => {
  return (
    <div>
      <Text>
        <p>
          If you have questions or comments about this Privacy Policy, please
          email us at info@nemfra.com
        </p>
      </Text>
    </div>
  );
};

export default PolicyContact;
