import React from 'react';
import styled, {keyframes} from 'styled-components'
import {IconMoon} from "../assets/icons/complexIcons";
import Picture from "../assets/img/Me.jpeg";
import {Colors} from "../theme/theme";
import {spinRight} from "./animations/keyframes"

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  
`

const Content = styled.div`
    text-align: left;
    margin: 0 auto;
    
    p {
      max-width: 850px;
      margin-top:1rem;
    }
    
    @media (max-width: 425px){
      width: 100%;
      text-align: center;
    }
`

const Image = styled.img`
  height: 22rem;
  width: 22rem;
  border-radius: 50%;
  border: solid 3px ${Colors.primary};
  float: left;
  shape-outside: circle(50%); 
  margin:0 4rem;
  
  @media (max-width: 425px){
    float: none;
    margin: 2rem 4rem 3rem 4rem;
  }

`

const Profile = ({}) => {
    return (
        <Container>
            <Content>
                <Image
                    src={Picture}/>
                <p>I'm a full-time Frontend Engineer based in Cape Town, South Africa. <br/>
                    I enjoy turning complex problems into simple, beautiful and intuitive
                    designs. I have experience working in a dynamic startup, as well as in an agency where
                    deadlines were critical.
                    When I'm not coding, closing tickets or pushing pixels, you'll find me jamming
                    video games,
                    gardening or playing Magic: the Gathering.
                </p>
            </Content>

        </Container>

    )
}

export default Profile