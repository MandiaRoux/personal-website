import React from "react";
import styled from "styled-components";
import {loadingRing} from "../../components/animations/keyframes";
import {Colors} from "../../theme/theme";

const Moon = styled.span`
font-size: 4rem;
`

const IconMoon = () => {
	return (
		<Moon className="icon-moon">
			<span className="path1"></span>
			<span className="path2"></span>
			<span
				className="path3"></span>
			<span className="path4"></span>
			<span className="path5"></span>
			<span
				className="path6"></span>
			<span className="path7"></span>
			<span className="path8"></span>
			<span
				className="path9"></span>
			<span className="path10"></span>
			<span className="path11"></span>
			<span
				className="path12"></span>
			<span className="path13"></span>
			<span className="path14"></span><span
			className="path15"></span>
			<span className="path16"></span>
		</Moon>
	
	)
}

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: scale(0.8);
div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${Colors.primary};
  animation: ${loadingRing} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
`

const LoadingSpinner = () => {
	return (
		<Loader className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
		</Loader>)
}

export {IconMoon, LoadingSpinner}