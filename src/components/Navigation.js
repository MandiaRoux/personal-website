import React from 'react';
import styled from "styled-components";
import {Colors} from "../theme/theme"

const StickyContainer = styled.div`
 top: 5rem;
    position: sticky;

`

const Nav = styled.nav`
    position: absolute;
    right: 3rem;
    top: 0;
    
    display: flex;
    flex-direction: column;
    
    width: 80px;
    
    background-color: ${Colors.primaryDarker};
    border: 2px solid ${Colors.primary};
    color: ${Colors.primary};
    text-align: center;
    padding: 1rem;
`
const Item = styled.div`
    display: block;
    height: 40px;
    font-size: 1.6rem;
    &:not(:last-child){
    margin-bottom: 1rem;
    }
`

const Icon = styled.i`
  font-size: 4rem;
  color:${Colors.primary};
`
const Link = styled.a`
`


const Navigation = ({}) => {

    return (

<StickyContainer>

        <Nav>

            <Item>
                <Link>
                    <Icon className="icon-rocket-ship"/>
                </Link>

            </Item>
            <Item>
                <Link>
                    About

                </Link>
            </Item>
            <Item>
                <Link>
                    Skills

                </Link>
            </Item>
            <Item>
                <Link>
                    Contact

                </Link>
            </Item>

        </Nav>

</StickyContainer>
    )
}

export default Navigation