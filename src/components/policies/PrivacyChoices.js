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

const PrivacyChoices = () => {
  return (
    <div>
      <Text>
        <span>
          <h3>Manage Your Account</h3>
          <p>
            You may access or modify your Account information at any time by
            logging into your Account. If you would like to cancel your Account,
            please contact us at info@nemfra.com .
          </p>
        </span>
        <span>
          <h3>Promotional Communications</h3>
          <p>
            You may opt out of receiving promotional messages from us by
            following the instructions contained in those messages. If you opt
            out, we may still send you non-promotional communications, such as
            those related to your Account or use of our products and services.
          </p>
        </span>
        <span>
          <h3>Access, Correction, and Deletion Rights</h3>
          <p>
            You may have certain rights as a data subject under local law. For
            example, you may have the right to access, update, or correct
            inaccuracies in your personal information in our custody and
            control, subject to certain exceptions prescribed by law. If you
            would like to exercise your rights, please contact us as set out in
            the Contact Us section below.
          </p>
        </span>
      </Text>
    </div>
  );
};

export default PrivacyChoices;
