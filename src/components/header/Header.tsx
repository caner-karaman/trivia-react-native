import React from "react";
import { View, Text, ViewProps } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

interface StyledHeaderProps{
  categoryName: string;
}

const StyledHeader = styled(View)<StyledHeaderProps>`
  height: 40px;
  justify-content: center;
  align-items:center;

  ${(props) => {
    const headerStyle = {
      'background-color' : '',
    };

    if(props.categoryName.toLowerCase().includes('entertainment')){
      headerStyle['background-color'] = '#333';
    }
    else if(props.categoryName.toLowerCase().includes('general knowledge')) {
      headerStyle['background-color'] = '#412312';
    }
    else if(props.categoryName.toLowerCase().includes('history')) {
      headerStyle['background-color'] = '#afd153';
    }
    else if(props.categoryName.toLowerCase().includes('geography')) {
      headerStyle['background-color'] = '#dcc142';
    }
    else if(props.categoryName.toLowerCase().includes('science')) {
      headerStyle['background-color'] = '#41ab45';
    }
    else if(props.categoryName.toLowerCase().includes('sport')) {
      headerStyle['background-color'] = '#123456';
    }
    else {
      headerStyle['background-color'] = '#ccc';
    }

    return headerStyle;
  }}
`;

const StyledText = styled(Text)`
  font-size: 18px;
  color: #fff;
  padding-top: 7px;
`

interface HeaderProps {
  categoryName: string;
}

const Header = (props: HeaderProps) => {
  const {categoryName} = props;

  return (
    <StyledHeader categoryName={categoryName}>
      <StyledText>Trivia</StyledText>
    </StyledHeader>
  )
}


const mapStateToProps = (state: any) => ({ 
  categoryName: state.questionReducer && state.questionReducer.results && state.questionReducer.results[state.questionReducer.questionIndex] && state.questionReducer.results[state.questionReducer.questionIndex].category ? state.questionReducer.results[state.questionReducer.questionIndex].category : '',
 })

export default connect(mapStateToProps)(Header);
