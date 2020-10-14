import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'

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

const StSearch = styled(FaSearch)`
  margin-bottom: -15px;
  color: #fff;
`

const StSpanSearch = styled.span`
    display: block;
    position: relative;
    margin-top: 10px;
    color: #878585;
    bottom: 19px;
    width: 120px;
    line-height: 18px;
    left: 26px;
    border-bottom: 1.5px solid #fff;
    font-size: 13px;
    &:hover {
      color: #784;
      cursor: pointer;
      transition: 0.5s;
    }
`

export { StyledLink, NavDiv, StSearch, StSpanSearch };


