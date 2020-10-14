import styled from 'styled-components';

const StyledLink = styled.a`
    font-family: 'Noto Sans JP',Arial,sans-serif;
    font-size: 19px;
    font-weight: 400;
    text-decoration: none!important;
    padding: 15px 10px;
    vertical-align: bottom;
    float: left;
    color: #fff;
    letter-spacing: -2px;
    text-transform: uppercase;
    cursor: pointer;
    &:nth-last-of-type(2) {
      color: #ff9000;
    }
    &:nth-last-of-type(1) {
      color: #ff0000;
    }
`

const NavDiv = styled.div`
    display: inline-block;
    padding-left: 12px;
    height: 55px;
`

export { StyledLink, NavDiv };


