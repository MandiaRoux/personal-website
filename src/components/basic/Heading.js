import React from 'react';
import styled from "styled-components";

const Header = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    ${props => props.letterSpaced && "letter-spacing: 1.7rem;"};
    
    @media (max-width:425px){
      margin-bottom: 2rem;
    }
`


const Heading = ({children, letterSpaced}) => {
    return (
        <Header letterSpaced={letterSpaced}>
            {children}
        </Header>
    )
}

export default Heading