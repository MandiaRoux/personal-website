import React from 'react';
import styled from "styled-components";
import {Colors} from "../theme/theme";

const Label = styled.span`
margin-right: 10px;
width: 30%;
font-size: 1.6rem;
//     &::before,
//     &::after {
//         display: inline-block;
//         content: "";
//         border-top: .3rem solid ${Colors.primary};
//         width: 4rem;
//         margin: 0 1rem;
//         transform: translateY(-1rem);
//     }
 
`
const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`
const ProgressFill = styled.span`
    //border-top: 2px solid ${Colors.primary};
    background-color: ${Colors.primary};
    width: ${props => props.width};
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Skill = styled.div`
display: flex;
`
const Timeline = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid ${Colors.secondary};
    font-size: 1.6rem;
    margin: 1rem 0;
`

const skillList = [
    {label: "HTML & CSS", level: "100%"},
    {label: "JavaScript", level: "100%"},
    {label: "Groovy", level: "60%"},
    {label: "React", level: "35%"},
    {label: "Python", level: "30%"},
]

const Skills = ({}) => {
    return (
        <React.Fragment>
            <Timeline>
                <div>1 Year</div>
                <div></div>
                <div>1.5 Year</div>
                <div></div>
                <div>2 Years</div>
                <div></div>
                <div>2.5 Years</div>
            </Timeline>
            {skillList.map(skill => {
                return (
                    <Skill>

                        <ProgressBar>
                            <ProgressFill width={skill.level}>
                                <Label>{skill.label}</Label>
                            </ProgressFill>
                        </ProgressBar>
                    </Skill>)
            })}

        </React.Fragment>


    )
}

export default Skills