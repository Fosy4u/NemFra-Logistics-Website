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

const ThirdParties = () => {
  return (
    <div>
      <Text>
        <span>
          <h3>Links to Third-Party Sites</h3>
          <p>
            Our Services may link to third-party websites and services that are
            outside our control. We are not responsible for the security or
            privacy of any information collected by other websites or other
            services. You should exercise caution when accessing such websites
            and review the privacy statements applicable to the third-party
            websites and services you use.
          </p>
        </span>
        <span>
          <h3>Advertising and Analytics Services Provided by Others</h3>
          <p>
            We and third parties that provide content or functionality on the
            Services or provide us analytics and advertising services may
            collect or receive information about your use of the Services and
            other websites or mobile applications, including through the use of
            cookies, web beacons, and similar technologies. This information may
            include, for example, your IP address, browser, device information,
            pages viewed, time spent on pages, links clicked and conversion
            information. This information may be combined with information
            collected across different websites, online services, and linked or
            associated devices to, among other things, analyze and track data,
            determine the popularity of certain content, deliver advertising and
            content targeted to your interests, and better understand your
            online activity. For more information about Internet-based ads, or
            to opt out of receiving targeted advertising from participating
            companies, please visit www.aboutads.info/choices.
          </p>
        </span>
      </Text>
    </div>
  );
};

export default ThirdParties;
