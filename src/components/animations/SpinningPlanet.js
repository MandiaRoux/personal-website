import styled, {css, keyframes} from "styled-components";
import venus from "../../assets/svg/venus.svg";
import earth from "../../assets/svg/earth.svg";
import saturn from "../../assets/svg/saturn.svg";
import jupiter from "../../assets/svg/jupiter.svg";
import mars from "../../assets/svg/mars.svg";
import mercury from "../../assets/svg/mercury.svg";
import neptune from "../../assets/svg/neptune.svg";
import uranus from "../../assets/svg/uranus.svg";
import React from "react";

const spinRight = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const Planet = styled.div`
  height: 40px;
  width: 40px;
  margin:0 auto;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-animation: ${spinRight} 15s linear infinite;
  animation: ${spinRight} 15s linear infinite;
  
  ${({variant}) => {
    switch (variant) {
        case "earth":
            return css`
              background-image:url(${earth});
            `;
        case "jupiter":
            return css`
              background-image:url(${jupiter});
            `;
        case "mars":
            return css`
              background-image:url(${mars});
            `;
        case "mercury":
            return css`
              background-image:url(${mercury});
            `;
        case "neptune":
            return css`
              background-image:url(${neptune});
            `;
        case "saturn":
            return css`
              background-image:url(${saturn});
            `;
        case "uranus":
            return css`
              background-image:url(${uranus});
            `;
        case "venus":
            return css`
              background-image:url(${venus});
            `;
        default:
            return css`
              background-image:url(${venus});
            `;
    }
}};
    `


const SpinningPlanet = ({variant, size = "md"}) => {
    return (
        <Planet variant={variant} size={size}/>
    )
}
export default SpinningPlanet