import styled from 'styled-components';

const StyledSection = styled.section`
    padding: 20px 0;
    align-content: center;
    justify-content: center;
    text-align: center;
`

const StyledDollCard = styled.div`
    text-align: center;
    padding: 10px;
`

const StyledP = styled.p`
    font: 700 13px Helvetica,Arial,sans-serif;
    color: #000;
    margin: 0;
    text-transform: capitalize;
    overflow: hidden;
    box-sizing: border-box;
    text-align: left;
`

const StyledH3 = styled.h3`
    color: #8d8d8d;
    font: italic normal 13px Helvetica,Arial,sans-serif;
    text-align: left;
    margin: 0;
`

const StSpan = styled.span`
    color: #333;
    font-size: 13px;
    font-family: Arial,Helvetica,sans-serif;
    text-align: left;
    display: block;
`

export { StyledSection, StyledDollCard, StyledP, StyledH3, StSpan };