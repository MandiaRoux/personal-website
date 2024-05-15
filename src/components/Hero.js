import React from 'react';
import styled from "styled-components";
import Heading from "./basic/Heading";
import {Colors} from "../theme/theme";
import background from "../assets/img/MartiangreyNoPlanet.svg";
import RocketBackground from "../assets/img/RocketBGTrans.svg";

const Subtitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`
const TextBox = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

`
const StyledHero = styled.div`
  height: calc(100vh + 800px);
  display: flex;
  background-image: linear-gradient(
                  to right bottom,
                  rgba(${Colors.primaryDarkRGB}, 0.4),
                  rgba(${Colors.primaryDarkerRGB}, 0.4)),
  url(${background});
  background-attachment: fixed;
  background-position: center;
  position: relative;
  background-size: cover;
`

const RocketShip = styled.span`
    position: absolute;
    bottom:0;
    left: 0;
    right:0;
    height:100%;
    width: 100%;
    background-image:url(${RocketBackground}) ;
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 400;
    transform: translateY(40%);
`

const Hero = () => {
    return (
        <React.Fragment>
        <StyledHero>
            <TextBox>
                <Heading letterSpaced>Mandia Roux</Heading>
                <Subtitle>Frontend Developer</Subtitle>
            </TextBox>
            <RocketShip/>

        </StyledHero>

        </React.Fragment>
    )
}

export default Hero