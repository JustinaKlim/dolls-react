import React, { Component } from 'react';
import './App.scss';
import styled, {css} from 'styled-components';
import { Img, CardImg } from "./components/Img";
import { StyledSection, StyledDollCard, StyledP, StyledH3, StSpan } from "./components/SectionDoll";
import StyledHeader from "./components/Header";
import { NavDiv, StyledLink } from "./components/Navbar";
import { Dolls } from './shared/dolls';
import { List } from './shared/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FaSearch } from 'react-icons/fa'
import { MdCode } from 'react-icons/md'


const element = <FontAwesomeIcon icon={faCoffee} />

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

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      dollsItem : Dolls,
      listItem : List
    }
  }

  render() {
    const dollsCard = this.state.dollsItem.map((doll) => {
      return (
        <StyledDollCard className="lg-5-24">
          <CardImg key={doll.id} src={doll.image} alt="nuotrauka"/>
      <StyledH3>{doll.tag}</StyledH3>
      <StyledP>{doll.desc}</StyledP>
      <StSpan>{doll.price}</StSpan>
        </StyledDollCard>
      );
    });
    const listMenu = this.state.listItem.map((item)=>{
      return (
        <StyledLink key={item.id}>{item.name}</StyledLink>
      )
    })

    return (
      <div>
        <StyledHeader>
          <Img src="assets/images/dollskill_logo.png" alt="nuotrauka"></Img>
          <NavDiv> {listMenu}
          </NavDiv>
          <div style={{display: 'inline-block', marginLeft: '10px', height: '55px'}}>
            <StSearch />
            <StSpanSearch>Search...</StSpanSearch>
          </div>
        </StyledHeader>
        <StyledSection className="grid-container lg-24-24">
          {dollsCard}
        </StyledSection>   
        
      </div>
      )
    };
};

export default App;