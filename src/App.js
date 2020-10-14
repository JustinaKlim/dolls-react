import React, { Component } from 'react';
import './App.scss';
import styled, {css} from 'styled-components';
import { Img, CardImg } from "./components/Img";
import { StyledSection, StyledDollCard, StyledP, StyledH3, StSpan } from "./components/SectionDoll";
import StyledHeader from "./components/Header";
import { NavDiv, StyledLink, StSearch, StSpanSearch } from "./components/Navbar";
import { Dolls } from './shared/dolls';
import { List } from './shared/list';

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