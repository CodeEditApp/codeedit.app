/**
 * Beta Warning Ribbon (Enhanced visibility)
 * Updated to be more eye-catching with a subtle flash and bolder text
 * so users clearly notice the beta status (Issue #90).
 */

import React from "react";
import styled, { keyframes } from "styled-components";

const ribbonDrop = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

/* Slight flashing effect (brightness pulse) */
const flash = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(1.25); }
  100% { filter: brightness(1); }
`;

const RibbonWrap = styled.div`
  overflow: hidden;
  ${({ onClick }) => (onClick ? "cursor: pointer;" : "")}
`;

const RibbonDrop = styled.div`
  animation: ${ribbonDrop} 0.7s ease forwards;
`;

const RibbonContentWrapper = styled.div`
  background: linear-gradient(
    90deg,
    #0a84ff 0%,
    #1d4ed8 50%,
    #2563eb 100%
  );
  padding: 1rem 0;
  text-align: center;

  /* soft blue glow */
  box-shadow: 0 4px 18px rgba(30, 100, 255, 0.35);
  backdrop-filter: blur(6px);

  /* FLASH effect added here */
  animation: ${flash} 2s ease-in-out infinite;
`;

const RibbonContent = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 900;         /* MUCH bolder */
  letter-spacing: 0.02em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

  text-shadow: 0 1px 4px rgba(0,0,0,0.4); /* clearer visibility */
`;

function Ribbon({ children, onClick, ...props }) {
  return (
    <RibbonWrap onClick={onClick} {...props}>
      <RibbonDrop>
        <RibbonContentWrapper>
          <RibbonContent>{children}</RibbonContent>
        </RibbonContentWrapper>
      </RibbonDrop>
    </RibbonWrap>
  );
}

export default Ribbon;
