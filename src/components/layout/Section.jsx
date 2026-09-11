import React from 'react';
import styled from "styled-components";
import {Colors} from "../../theme/theme";

const StyledSection = styled.section`
    margin: 0 auto;
    max-width: 80%;
    padding: 3rem 3rem 6rem 3rem;
    border-radius: 5px;
    position: relative;
    background-color: rgba(${Colors.primaryRGB}, .2);
    
    &:not(:last-child){
      margin-bottom: 4rem;
    }
    
    @media (max-width: 425px){
      width: 100%;
      max-width: 100%;
      margin:0;
    }
`

const Section = ({children}) => {
    return (
        <StyledSection>{children}</StyledSection>
    )
}

export default Section