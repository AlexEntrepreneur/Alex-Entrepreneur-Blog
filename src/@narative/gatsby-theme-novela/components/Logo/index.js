import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

export default function Logo({ fill = "white" }) {
  return (
    <LogoContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="34"
        viewBox="0 0 38 34"
      >
        <path
          fill={fill}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          d="M9.785 0h7.545v14.232h3.34V0h7.545c5.35 0 9.697 4.344 9.784 9.734l.001.164v9.87H26.099v8.696h2.13c2.323 0 4.226-1.85 4.337-4.177l.003-.07.002-.072v-1.786H38v1.743c0 5.412-4.293 9.81-9.623 9.897l-.162.001H20.67V19.768h-3.34V34H9.785c-5.35 0-9.697-4.344-9.784-9.734L0 24.102v-9.87h11.9V5.536H9.773c-2.324 0-4.227 1.85-4.338 4.177l-.003.07-.002.072v1.971H0V9.898C0 4.486 4.293.088 9.623.001L9.785 0zm2.116 19.768H5.428v4.3c0 2.378 1.865 4.317 4.198 4.393l.071.002h2.204v-8.695zM26.099 5.536v8.696h6.472v-4.3c0-2.378-1.864-4.317-4.197-4.393l-.071-.002h-2.205z"
          transform="translate(-163 -591) translate(163 591)"
        ></path>
      </svg>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
.Logo__Mobile {
  display: none;
}

${mediaqueries.tablet`
  .Logo__Desktop {
    display: none;
  }
  
  .Logo__Mobile{
    display: block;
  }
`}
`;