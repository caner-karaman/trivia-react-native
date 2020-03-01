import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const AnswerBox = styled(TouchableOpacity)`
  min-height: 57px;
  width: 100%;
  margin: 10px 0;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;

  shadow-color: #3c3c3c;
  shadow-opacity: 0.25;
  shadow-radius: 2.62px;
  
  elevation: 4;
  border: 0;
`

const Circle = styled(View)`
  height: 20px;
  width: 20px;
  background-color: #c3c3c3;
  border-radius: 10px;
  margin-right: 15px;
`

const AnswerText = styled(Text)`
  font-size: 16px;
`

interface AnswerProps {
  answers: Array<string | number>;
  respond(answer: string| number): void;
}

const Answer = (props: AnswerProps) => {
  return (
    <>
      {
        props.answers.map((answer, index) => {
          return(
            <AnswerBox key={index} onPress={() => props.respond(answer)}>
              <Circle></Circle>
              <AnswerText>{answer}</AnswerText>
            </AnswerBox>
          )
        })
      }
    </>
  )
};

export default Answer;
