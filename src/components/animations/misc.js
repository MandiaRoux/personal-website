import React from 'react';
import styled, {keyframes} from "styled-components";
import {IconMoon} from "../../assets/icons/complexIcons";

const animationFrames = keyframes`
    0% {
        transform: translate(-5vw,0px)  rotate(0deg);
        opacity: 1;
}
    100% {
        transform:  translate(100vw,-200px)  rotate(180deg) ;
        opacity: 1;
}
`
const PlanetContainer = styled.div`
 position: relative;
    top: 25px;
    left: 25px;
    height: 300px;
    width: 300px;
`
const Planet = styled(IconMoon)`
    position: absolute;
    top: 62px;
    left: -6px;
    height: 120px;
    width: 120px;
    border-radius: 100%;
    
    
`
const Rotation = styled.div`
     position: absolute;
    top: -50px;
    left: 0;
    width: 300px;
    height: 300px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: ${spinRight} 15s linear infinite;
    animation: ${spinRight} 15s linear infinite;
    .icon-moon {    font-size: 4rem;
    position: absolute;
    left: 45px;
    }
    
    
`
const spinRight = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const PlanetContainer = styled.div`
 position: absolute;
 z-index: 100;
    top: 25px;
    left: 25px;
    height: 300px;
    width: 300px;
`
const Planet = styled.div`
    opacity: 0;
    background-color: orange;
    border-radius: 50%;
    z-index: 90;
    position: absolute;
    top: 600px;
    left: 0;
    height: 50px;
    width: 50px;
    animation: ${animationFrames} linear 10s infinite;
    animation-delay: 1s;
    transform-origin: 50% 50%;
    // -webkit-animation: ${animationFrames} linear 4s;
    // -webkit-animation-iteration-count: infinite;
    // -webkit-transform-origin: 50% 50%;
    // -moz-animation: ${animationFrames} linear 4s;
    // -moz-animation-iteration-count: infinite;
    // -moz-transform-origin: 50% 50%;
    // -o-animation: ${animationFrames} linear 4s;
    // -o-animation-iteration-count: infinite;
    // -o-transform-origin: 50% 50%;
    // -ms-animation: ${animationFrames} linear 4s;
    // -ms-animation-iteration-count: infinite;
    // -ms-transform-origin: 50% 50%;
`

const Rotation = styled.div`
     position: absolute;
    top: -50px;
    left: 0;
    width: 130vh;
    height: 130vh;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: ${spinRight} 15s linear infinite;
    animation: ${spinRight} 15s linear infinite;
    .icon-moon {    font-size: 4rem;
    position: absolute;
    left: 45px;
    }
    
    
`
const Misc = ({}) => {
    return (

        // // <PlanetContainer>
        //     {/*<Rotation>*/}
                <Planet/>
         //   {/*</Rotation>*/}
        // </PlanetContainer>

    )
}

export default Misc