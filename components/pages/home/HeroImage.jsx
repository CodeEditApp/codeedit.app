import styled, { css, keyframes } from "styled-components"
import Image from "next/image";
import { Parallax } from 'react-parallax';
import HardwareLockup from "./HardwareLockup";


const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const scaleBlurIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.75);
    filter: blur(32px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

const SceneWrap = styled.div`
  position: relative;
  animation: ${scaleBlurIn} 500ms 750ms cubic-bezier(0.0, 0.0, 0.2, 1);
  animation-fill-mode: both;
  transform-origin: bottom center;
  margin-top: 64px;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 988px;
  margin: 0 auto;
  z-index: 1;
`;
const BlurBackground = styled.div`
  backdrop-filter: blur(15px);
  position: absolute;
  top: 2.5%;
  right: 3%;
  bottom: 8%;
  left: 3%;
  border-radius: 1%;
`;

const colorFlairPiece = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(100px);
  background: #4F95FF;
  transform-origin: bottom center;
`;
const ColorFlair = styled.div`
  ${colorFlairPiece}
  animation: ${rotate} 5000ms linear infinite;
  &:before {
    content: "";
    display: block;
    ${colorFlairPiece};
    background: #B120BD;
    top: 50%;
    left: auto;
    right: 50%;
  }
  &:after {
    content: "";
    display: block;
    ${colorFlairPiece};
    background: #44CEE3;
    top: 50%;
    left: 50%;
  },
`;
const ColorFlair1 = styled(ColorFlair)`
  && {
    top: 0px;
    left: 100px;
    animationDuration: 4000ms;
  }
`;
const ColorFlair2 = styled(ColorFlair)`
  && {
    top: -100px;
    left: calc(50% - 100px);
    animation-duration: 6000ms;
    animation-direction: reverse;
  }
`;
const ColorFlair3 = styled(ColorFlair)`
  && {
    top: 0px;
    left: auto;
    right: 100px;
    animation-duration: 5000ms;
  }
`;

const HeroImage = ({ percentage }) => {
  const adjustedPercentage = (Math.min(Math.max(percentage, 1), 1.2) - 1) * 5;

  return (
    <SceneWrap>
      <ColorFlair1 />
      <ColorFlair2 />
      <ColorFlair3 />
      <ImageWrap style={{ transform: `translateY(${adjustedPercentage * 20}%) scale(${1 + (1 - adjustedPercentage) * .1})` }}>
        <BlurBackground />
        <Image
          width={987.275}
          height={580.75}
          src="/codeedit-window.png"
          alt="CodeEdit screenshot"
        /> 
      </ImageWrap>
      <HardwareLockup style={{ transform: `translateY(-${adjustedPercentage * 15}%)  scale(${1 + (1 - adjustedPercentage) * -.1})`, marginTop: '-33.33%' }} />
    </SceneWrap>
  )
}

export default HeroImage;