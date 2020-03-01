import React, { useEffect, useState } from "react";
import { 
  CategoryView,
  Section,
  CategoryText,
  QuestionView,
  Question,
  AnswerView,
 } from "./QuizStyles";
import { Answer } from "../../components";
import { getQuestions, setQuestionIndex, setScore } from "../../store/action/question/questionAction";
import { connect } from "react-redux";
import { Text } from "react-native";
import {shuffle} from "../../common/util/util";

interface QuizProps {
  getQuestions(): void;
  setQuestionIndex(): void;
  setScore(addingScore: number): void;
  questions: any;
  questionIndex: number;
  score: number;
}

const Quiz = (props: QuizProps) => {
  const {questions, questionIndex, score, getQuestions, setQuestionIndex, setScore} = props;
  useEffect(() => {
    getQuestions();
  }, []);
  
  const nextQuestion = () => {
    setQuestionIndex();
  }

  const handleCorrectAnswer = () => {
    setScore(10);
  }

  const handleRespond = (answer: string | number) => {
    const correctAnswer = questions[questionIndex].correct_answer;
    if(answer === correctAnswer){
      handleCorrectAnswer();
    }
    nextQuestion();
  }

  const renderQuiz = () => {
    return(
      <>
      <CategoryView>
        <CategoryText>
          {questions && questions.length > 0 ? questions[questionIndex].category.replace(/&quot;/g,'"') : ''}          
        </CategoryText>
      </CategoryView>    
      <QuestionView>
        <Question>
          {questions && questions.length > 0 ? questions[questionIndex].question.replace(/&quot;/g,'"') : ''}
        </Question>
      </QuestionView>
      <AnswerView>
        <Answer
          respond={handleRespond}
          answers={shuffle([...questions[questionIndex].incorrect_answers, questions[questionIndex].correct_answer])}
        ></Answer>
      </AnswerView>
    </>
    )
  }

  const renderScore = () => {
    
  return (
    <>
      {
        !!score && <Text>Your score is {score}</Text>        
      }
    </>
  )
  }
  return(
    <Section>
        {
          (questions && questions.length > 0 && questionIndex < questions.length) ? renderQuiz()
          :
           renderScore()
        }
    </Section>
  )
}

const mapStateToProps = (state: any) => ({ 
  questions: state.questionReducer.results,
  score: state.questionReducer.score,
  questionIndex: state.questionReducer.questionIndex
 })

const mapDispatchToProps = {
  getQuestions,
  setQuestionIndex,
  setScore  
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
