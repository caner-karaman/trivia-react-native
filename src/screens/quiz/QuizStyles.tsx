import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const CategoryView = styled(View)`
  margin: 20px 0;
  align-items: center;
`

const Section = styled(View)`
  padding: 0 20px;
`

const CategoryText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #3c3c3c;
`

const QuestionView = styled(View)`
  margin-bottom: 35px;
`

const Question = styled(Text)`
  font-size: 18px;
  color: #3c3c3c;
  text-align: center;
  line-height: 25px;
  letter-spacing: 0.4px;
`

const AnswerView = styled(View)``

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

const Answer = styled(Text)`
  font-size: 16px;
`

export {
  CategoryView,
  Section,
  CategoryText,
  QuestionView,
  Question,
  AnswerView,
  AnswerBox,
  Circle,
  Answer
};
