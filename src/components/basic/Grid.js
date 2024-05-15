import React from 'react';
import styled from "styled-components";

const GRID_WIDTH = "114rem";
const GUTTER_VERTICAL = "8rem";
const GUTTER_HORIZONTAL = "6rem";

function getWidthString(span) {
    if (!span) return

    let width = span / 12 * 100
    return `width: ${width}%;`
}

const Row = styled.div`
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

const Column = styled.div`
  float: left;
 
  &:not(:last-child) {
    margin-right: ${GUTTER_HORIZONTAL};
  }
  
  ${({xs}) => xs ? getWidthString(xs) : "width: 100%;"};

  @media only screen and (max-width: 768px) {
    ${({xs}) => xs === '0' ? 'display: none' : null}
  }

  @media only screen and (min-width: 768.1px) {
    ${({sm}) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 992px) {
    ${({md}) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 1200px) {
    ${({lg}) => lg && getWidthString(lg)}
  }
`


export {Row, Column}