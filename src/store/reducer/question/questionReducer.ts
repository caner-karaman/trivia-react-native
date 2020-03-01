import { questionTypes } from "../../action/question/questionAction";

interface IQuestionReducer {
  questionIndex: number;
  score: number;
}

const initialState: IQuestionReducer = {
  questionIndex: 0,
  score: 0
};

const questionReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case questionTypes.GET_QUESTIONS:
      return {
        ...state,
        ...action.payload
      };
    case questionTypes.SET_QUESTION_INDEX:
      const questionIndex = state.questionIndex + 1;
      return {
        ...state,
        questionIndex  
      };
    case questionTypes.SET_SCORE:
      const score = state.score + action.payload
      return {
        ...state,
        score
      };
    default: 
      return state;
  }
}

export default questionReducer;